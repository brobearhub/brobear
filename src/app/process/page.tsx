import { contentGroups } from "@/shared/content/catalog";
import { pageMetadata } from "@/shared/seo/page-metadata";
import { CatalogPage } from "@/widgets/content/ui/ContentPages";

export const metadata = pageMetadata(contentGroups.process.heading, contentGroups.process.description, "/process");

export default function ProcessPage() {
  return <CatalogPage group="process" />;
}
