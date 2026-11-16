import { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/lib/projects-data'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl.replace(/\/+$/, '')
  const currentDate = new Date().toISOString().split('T')[0]

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/wordpress', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/shopify', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/frontend', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-chatbot', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ebay-templates', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    path: `/portfolio/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
