import { AboutPage, getAboutMetadata } from "@/components/pages/AboutPage";

export async function generateMetadata() {
  return getAboutMetadata("vi");
}

export default function Page() {
  return <AboutPage locale="vi" />;
}
