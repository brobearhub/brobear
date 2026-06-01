type Props = {
  siteUrl: string;
};

export function OrganizationSchema({ siteUrl }: Props) {
  return (
    <script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ООО «Бурый Медведь»",
          url: siteUrl,
          logo: `${siteUrl}/android-icon-192x192.png`,
        }),
      }}
    />
  );
}
