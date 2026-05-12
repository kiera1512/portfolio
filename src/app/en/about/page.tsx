import { AboutPage, getAboutMetadata } from "@/components/pages/AboutPage";

export async function generateMetadata() {
  return getAboutMetadata("en");
}

export default function Page() {
  return <AboutPage locale="en" />;
}
