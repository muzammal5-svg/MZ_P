import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfig.siteUrl.replace(/\/+$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow private, non-indexable, demo, and unlaunched draft sections
        disallow: ['/admin/', '/api/', '/reset-projects/', '/demo/', '/blog/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
