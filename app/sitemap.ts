import type { MetadataRoute } from "next";

const baseUrl = "https://avocat-montagne.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/honoraires`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glossaire`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/expertises/droit-penal`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/expertises/droit-des-mineurs`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertises/droit-de-la-famille`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertises/droit-routier`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertises/droit-civil`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/expertises/prejudice-corporel`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/avocat-grande-synthe`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/avocat-calais`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/avocat-lille`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-saint-omer`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-boulogne-sur-mer`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-valenciennes`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-douai`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-arras`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-lens`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/avocat-hazebrouck`,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
