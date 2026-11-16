import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://muzammalzaheer.vercel.app').replace(/\/+$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // TODO: Re-add /blog/ to the allow list once real written MDX articles exist
        disallow: ['/admin/', '/api/', '/reset-projects/', '/blog/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
