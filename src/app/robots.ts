import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // Prevents crawling of backend routes
        '/_next/',     // Prevents crawling of internal Next.js files
        '/admin/',     // If you ever add a dashboard
      ],
    },
    sitemap: 'https://www.lapx.co.in/sitemap.xml',
  }
}