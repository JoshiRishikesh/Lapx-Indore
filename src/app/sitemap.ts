import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lapx.co.in';

  // The exact routes you have folders for
  const routes = [
    '', // Main Homepage (page.tsx)
    '/acer-laptop-service-center-indore',
    '/asus-laptop-service-center-indore',
    '/dell-laptop-service-center-indore',
    '/hp-laptop-service-center-indore',
    '/lenovo-laptop-service-center-indore',
    '/msi-laptop-service-center-indore',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly', // Homepage changes more often
    priority: route === '' ? 1.0 : 0.8, // Homepage is top priority
  }));
}