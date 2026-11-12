import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://muzammalzaheer.vercel.app').replace(/\/+$/, '')
  const currentDate = new Date().toISOString().split('T')[0]

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/wordpress', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/shopify', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/frontend', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-chatbot', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ebay-templates', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/ecommerce', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/speed-optimization', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/seo-optimization', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/webflow', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
