import { notFound } from "next/navigation";
import { stages } from "@/shared/content/process";
import { pageMetadata } from "@/shared/seo/page-metadata";
import { DetailPage } from "@/widgets/content/ui/ContentPages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return stages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = stages.find((item) => item.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.title, page.description, `/process/${page.slug}`);
}

export default async function ProcessStagePage({ params }: Props) {
  const { slug } = await params;
  const page = stages.find((item) => item.slug === slug);
  if (!page) notFound();
  return <DetailPage group="process" page={page} />;
}
