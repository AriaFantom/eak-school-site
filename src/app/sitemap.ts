import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/academics",
    "/admissions",
    "/facilities",
    "/events",
    "/contact",
  ].map((path) => ({
    url: `https://eakschool.example${path}`,
    lastModified: new Date("2026-10-12"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
