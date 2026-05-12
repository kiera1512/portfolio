import {
  ProjectDetailPage,
  getProjectMetadata,
  getProjectStaticParams,
} from "@/components/pages/ProjectDetailPage";

export async function generateStaticParams() {
  return getProjectStaticParams("vi");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  return getProjectMetadata("vi", slug);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slug = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  return <ProjectDetailPage locale="vi" slug={slug} />;
}
