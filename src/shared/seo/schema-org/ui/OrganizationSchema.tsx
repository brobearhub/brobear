import { COMPANY_LEGAL_NAME, COMPANY_OGRN, SITE_URL } from "@/shared/constants/site";

export function OrganizationSchema() {
  return (
    <script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Бурый Медведь",
              legalName: COMPANY_LEGAL_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/android-icon-192x192.png`,
              identifier: {
                "@type": "PropertyValue",
                propertyID: "ОГРН",
                value: COMPANY_OGRN,
              },
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Бурый Медведь",
              url: SITE_URL,
              inLanguage: "ru-RU",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      }}
    />
  );
}
