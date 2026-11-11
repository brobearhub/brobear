import type { MetadataRoute } from "next";
import { SITE_URL } from "@/shared/constants/site";
import { contentEntries, contentGroups } from "@/shared/content/catalog";
import { CONTENT_UPDATED_AT } from "@/shared/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED_AT,
    },
    ...Object.keys(contentGroups).map((group) => ({
      url: `${SITE_URL}/${group}`,
      lastModified: CONTENT_UPDATED_AT,
    })),
    ...contentEntries.map(({ href }) => ({
      url: `${SITE_URL}${href}`,
      lastModified: CONTENT_UPDATED_AT,
    })),
  ];
}
