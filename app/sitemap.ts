import type { MetadataRoute } from "next";

const SITE_URL = "https://komunitas.tera.or.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/tentang", "/kontak"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
