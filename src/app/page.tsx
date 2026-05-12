import { HomePage, getHomeMetadata } from "@/components/pages/HomePage";

export async function generateMetadata() {
  return getHomeMetadata("vi");
}

export default function Page() {
  return <HomePage locale="vi" />;
}
