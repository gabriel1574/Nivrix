const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivrix.com";
const modifiedAt = "2026-05-14T19:15:00-03:00";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(modifiedAt),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "pt-BR": siteUrl,
        },
      },
    },
  ];
}
