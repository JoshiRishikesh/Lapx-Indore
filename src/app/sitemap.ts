import { MetadataRoute } from "next";
import { faqData } from "@/data/faqs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lapx.co.in";

  // This maps your data to the /faqs/[category] structure
  const faqEntries = faqData.map((category) => ({
    url: `${baseUrl}/faqs/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const, // High frequency for your daily FAQ updates
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Main Brand Service Pages
    {
      url: `${baseUrl}/asus-service-center`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/msi-service-center`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dell-service-center`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hp-service-center`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lenovo-service-center`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Spread the dynamic FAQ categories here
    ...faqEntries,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}