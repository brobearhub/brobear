import type { Metadata } from "next";
import { SITE_URL } from "@/shared/constants/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} — Бурый Медведь`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: "Бурый Медведь",
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      images: [{
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Бурый Медведь — разработка и автоматизация бизнеса",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
