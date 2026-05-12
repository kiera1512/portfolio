import { HomePage, getHomeMetadata } from "@/components/pages/HomePage";

export async function generateMetadata() {
  return getHomeMetadata("en");
}

export default function Page() {
  return <HomePage locale="en" />;
}
