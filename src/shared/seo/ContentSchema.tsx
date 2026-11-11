import { SITE_URL } from "@/shared/constants/site";
import { CONTENT_UPDATED_AT } from "@/shared/content/types";

type Breadcrumb = { name: string; path: string };

export function ContentSchema({ title, description, path, breadcrumbs, service = false, collection = false }: {
  title: string;
  description: string;
  path: string;
  breadcrumbs: Breadcrumb[];
  service?: boolean;
  collection?: boolean;
}) {
  const url = `${SITE_URL}${path}`;
  const graph = [
    {
      "@type": collection ? "CollectionPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "ru-RU",
      dateModified: CONTENT_UPDATED_AT,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(service ? { mainEntity: { "@id": `${url}#service` } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
    ...(service ? [{
      "@type": "Service",
      "@id": `${url}#service`,
      name: title,
      description,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
    }] : []),
  ];

  return (
    <script
      id="content-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
