import assert from "node:assert/strict";

const base = new URL(process.env.SEO_BASE_URL || "http://localhost:3000");
const canonicalOrigin = "https://brobear.ru";
const pages = new Map();

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
}

function meta(html, name, value) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)]
    .filter(([tag]) => attribute(tag, name) === value)
    .map(([tag]) => attribute(tag, "content"));
}

function anchors(html) {
  return [...html.matchAll(/<a\b[^>]*>/gi)]
    .map(([tag]) => attribute(tag, "href"))
    .filter(Boolean);
}

async function get(path) {
  const response = await fetch(new URL(path, base), { redirect: "manual", signal: AbortSignal.timeout(15000) });
  return { status: response.status, html: await response.text() };
}

const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.status, 200, "Sitemap must return 200");
const urls = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
assert.ok(urls.length > 1, "Sitemap must include content pages");
assert.equal(new Set(urls.map(String)).size, urls.length, "Sitemap URLs must be unique");
const titles = new Set();
const descriptions = new Set();

for (const url of urls) {
  assert.equal(url.origin, canonicalOrigin);
  assert.notEqual(url.pathname, "/themes");
  const { status, html } = await get(url.pathname);
  assert.equal(status, 200, `${url.pathname}: HTTP status`);
  pages.set(url.pathname, html);
  const pageTitles = [...html.matchAll(/<title[^>]*>([^<]+)<\/title>/gi)].map((match) => match[1]);
  assert.equal(pageTitles.length, 1, `${url.pathname}: one title`);
  assert.ok(!titles.has(pageTitles[0]), `${url.pathname}: duplicate title`);
  titles.add(pageTitles[0]);
  const description = meta(html, "name", "description");
  assert.equal(description.length, 1, `${url.pathname}: one description`);
  assert.ok(description[0]?.trim(), `${url.pathname}: nonempty description`);
  assert.ok(!descriptions.has(description[0]), `${url.pathname}: duplicate description`);
  descriptions.add(description[0]);
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)]
    .filter(([tag]) => attribute(tag, "rel") === "canonical")
    .map(([tag]) => attribute(tag, "href"));
  assert.equal(canonicals.length, 1, `${url.pathname}: one canonical`);
  assert.equal(new URL(canonicals[0]).href, url.href, `${url.pathname}: self canonical`);
  assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/gi)].length, 1, `${url.pathname}: one server-rendered H1`);
  assert.ok(meta(html, "property", "og:title")[0], `${url.pathname}: OpenGraph title`);
  assert.equal(new URL(meta(html, "property", "og:url")[0]).href, url.href, `${url.pathname}: OpenGraph URL`);
  assert.ok(!meta(html, "name", "robots").some((value) => /noindex/i.test(value)), `${url.pathname}: indexable`);
  const schemas = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, attributes]) => attribute(attributes, "type") === "application/ld+json")
    .map(([, , data]) => JSON.parse(data));
  assert.ok(schemas.length > 0, `${url.pathname}: structured data`);
  const entities = schemas.flatMap((schema) => schema["@graph"] || [schema]);
  assert.ok(entities.some((entity) => entity["@type"] === "Organization"), `${url.pathname}: organization`);
  if (url.pathname !== "/") {
    const breadcrumb = entities.find((entity) => entity["@type"] === "BreadcrumbList");
    assert.ok(breadcrumb, `${url.pathname}: breadcrumb schema`);
    assert.equal(breadcrumb.itemListElement.at(-1).item, url.href);
  }
  if (url.pathname.startsWith("/services/")) {
    assert.ok(entities.some((entity) => entity["@type"] === "Service"), `${url.pathname}: service schema`);
  }
}

const homeLinks = new Set(anchors(pages.get("/")).map((href) => new URL(href, canonicalOrigin).pathname));
for (const path of pages.keys()) {
  assert.ok(homeLinks.has(path), `${path}: must be reachable from a home-page link`);
}
for (const [path, html] of pages) {
  for (const href of anchors(html)) {
    const url = new URL(href, `${canonicalOrigin}${path}`);
    if (url.origin !== canonicalOrigin) continue;
    assert.ok(pages.has(url.pathname), `${path}: unlisted internal link ${url.pathname}`);
    if (url.hash) {
      const target = decodeURIComponent(url.hash.slice(1));
      assert.ok(pages.get(url.pathname).includes(`id="${target}"`), `${path}: broken fragment ${href}`);
    }
  }
}
for (const path of ["/services/not-a-service", "/process/not-a-stage"]) {
  assert.equal((await get(path)).status, 404, `${path}: must return 404`);
}
const themes = await get("/themes");
assert.ok(meta(themes.html, "name", "robots").some((value) => /noindex/i.test(value)), "Themes must stay noindex");
const robots = await get("/robots.txt");
assert.equal(robots.status, 200);
assert.ok(!/Disallow:\s*\/_next\//i.test(robots.html), "Rendering assets must be crawlable");
assert.ok(robots.html.includes(`${canonicalOrigin}/sitemap.xml`));
const llms = await get("/llms.txt");
assert.equal(llms.status, 200);
for (const url of urls) assert.ok(llms.html.includes(url.href), `${url.pathname}: missing from llms.txt`);

console.log(`SEO checks passed for ${pages.size} pages: HTTP, metadata, H1, structured data, links, sitemap, robots, llms.txt and 404s.`);
