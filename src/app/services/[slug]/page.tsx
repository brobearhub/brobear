import { notFound } from "next/navigation";
import { services } from "@/shared/content/services";
import { pageMetadata } from "@/shared/seo/page-metadata";
import { DetailPage } from "@/widgets/content/ui/ContentPages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = services.find((item) => item.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, page.description, `/services/${page.slug}`);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = services.find((item) => item.slug === slug);
  if (!page) notFound();
  return <DetailPage group="services" page={page} />;
}
