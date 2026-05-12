import { baseURL, getLocalizedPath, locales } from "@/resources";
import { getProjectPosts } from "@/utils/utils";

export const dynamic = "force-static";

export default async function sitemap() {
  const staticPaths = ["/", "/about", "/projects"];

  const staticRoutes = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseURL}${getLocalizedPath(locale, path) === "/" ? "" : getLocalizedPath(locale, path)}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  const projectRoutes = locales.flatMap((locale) =>
    getProjectPosts(locale).map((post) => ({
      url: `${baseURL}${getLocalizedPath(locale, `/projects/${post.slug}`)}`,
      lastModified: post.metadata.publishedAt,
    })),
  );

  return [...staticRoutes, ...projectRoutes];
}
