import { ProjectsPage, getProjectsMetadata } from "@/components/pages/ProjectsPage";

export async function generateMetadata() {
  return getProjectsMetadata("vi");
}

export default function Page() {
  return <ProjectsPage locale="vi" />;
}
