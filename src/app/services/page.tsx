import { contentGroups } from "@/shared/content/catalog";
import { pageMetadata } from "@/shared/seo/page-metadata";
import { CatalogPage } from "@/widgets/content/ui/ContentPages";

export const metadata = pageMetadata(contentGroups.services.heading, contentGroups.services.description, "/services");

export default function ServicesPage() {
  return <CatalogPage group="services" />;
}
