import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://muzammalzaheer.vercel.app').replace(/\/+$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/reset-projects/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
