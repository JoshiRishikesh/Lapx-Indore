import { MetadataRoute } from "next";
import { faqData } from "@/data/faqs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lapx.co.in";

  // 1. Dynamic FAQ Mapping
  const faqEntries: MetadataRoute.Sitemap = faqData.map((category) => ({
    url: `${baseUrl}/faqs/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const, 
    priority: 0.8,
  }));

  // 2. Static Pages Mapping
  // We use an array and map it to ensure all fields have 'as const' applied correctly
  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/asus-service-center", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/msi-service-center", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/dell-service-center", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/hp-service-center", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/lenovo-service-center", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticPages, ...faqEntries];
}