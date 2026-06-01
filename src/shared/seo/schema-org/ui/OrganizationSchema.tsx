import { SITE_URL } from "@/shared/constants/site";

export function OrganizationSchema() {
  return (
    <script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ООО «Бурый Медведь»",
          url: SITE_URL,
          logo: `${SITE_URL}/android-icon-192x192.png`,
        }),
      }}
    />
  );
}
