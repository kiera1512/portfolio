import { ProjectsPage, getProjectsMetadata } from "@/components/pages/ProjectsPage";

export async function generateMetadata() {
  return getProjectsMetadata("en");
}

export default function Page() {
  return <ProjectsPage locale="en" />;
}
