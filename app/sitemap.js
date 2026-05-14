import { pagePaths } from "./content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivrix.com";
const modifiedAt = "2026-05-14T19:15:00-03:00";

export default function sitemap() {
  return pagePaths.map((path) => {
    const url = `${siteUrl}${path === "/" ? "" : path}`;

    return {
      url,
      lastModified: new Date(modifiedAt),
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "pt-BR": url,
        },
      },
    };
  });
}
