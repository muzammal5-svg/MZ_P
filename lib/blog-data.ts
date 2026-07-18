export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readTime: string
  image: string
  featured: boolean
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

export const blogPosts: BlogPost[] = [
  // WordPress Blogs
  {
    id: "1",
    title: "10 Essential WordPress Performance Optimization Techniques for 2024",
    slug: "wordpress-performance-optimization-2024",
    excerpt: "Learn how to boost your WordPress site speed and achieve 100/100 PageSpeed scores with these proven optimization techniques.",
    category: "WordPress",
    tags: ["WordPress", "Performance", "SEO", "Speed Optimization", "Core Web Vitals"],
    author: "Muzammal",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: true,
    seoTitle: "WordPress Performance Optimization Guide 2024 | Speed Up Your Site",
    seoDescription: "Complete guide to WordPress performance optimization. Learn caching, image optimization, database cleanup, and more to achieve lightning-fast load times.",
    seoKeywords: ["wordpress performance", "wordpress speed optimization", "wordpress caching", "wordpress optimization", "improve wordpress speed", "wordpress core web vitals"],
    content: ``,
  },
  {
    id: "2",
    title: "WordPress Security Best Practices: Complete Guide to Protect Your Website",
    slug: "wordpress-security-best-practices",
    excerpt: "Protect your WordPress site from hackers with these essential security measures and best practices.",
    category: "WordPress",
    tags: ["WordPress", "Security", "Website Protection", "SSL", "Firewall"],
    author: "Muzammal",
    publishedAt: "2024-01-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "WordPress Security Guide 2024 | Protect Your Website from Hackers",
    seoDescription: "Learn essential WordPress security best practices including SSL, firewall setup, malware protection, and regular backups to keep your website safe.",
    seoKeywords: ["wordpress security", "wordpress protection", "secure wordpress site", "wordpress malware", "wordpress firewall", "wordpress ssl"],
    content: ``,
  },
  // Shopify Blogs
  {
    id: "3",
    title: "Shopify Store Optimization: 15 Ways to Increase Your Conversion Rate",
    slug: "shopify-conversion-rate-optimization",
    excerpt: "Boost your Shopify store sales with these proven conversion rate optimization strategies and techniques.",
    category: "Shopify",
    tags: ["Shopify", "E-commerce", "Conversion Rate", "Sales", "Optimization"],
    author: "Muzammal",
    publishedAt: "2024-01-12",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
    featured: true,
    seoTitle: "Shopify Conversion Rate Optimization | Increase Sales by 40%",
    seoDescription: "Proven strategies to optimize your Shopify store and increase conversion rates. Learn checkout optimization, product page design, and trust signals.",
    seoKeywords: ["shopify optimization", "shopify conversion rate", "increase shopify sales", "shopify checkout", "ecommerce conversion", "shopify store optimization"],
    content: ``,
  },
  {
    id: "4",
    title: "Shopify App Integration Guide: Must-Have Apps for Your Store in 2024",
    slug: "shopify-app-integration-guide",
    excerpt: "Discover the essential Shopify apps that will help you grow your e-commerce business and improve customer experience.",
    category: "Shopify",
    tags: ["Shopify", "Apps", "E-commerce", "Integration", "Tools"],
    author: "Muzammal",
    publishedAt: "2024-01-08",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "Best Shopify Apps 2024 | Essential Integrations for Your Store",
    seoDescription: "Complete guide to must-have Shopify apps including email marketing, inventory management, reviews, and customer support integrations.",
    seoKeywords: ["shopify apps", "best shopify apps", "shopify integrations", "shopify plugins", "shopify store apps", "ecommerce apps"],
    content: ``,
  },
  // React/Frontend Blogs
  {
    id: "5",
    title: "React Performance Optimization: Advanced Techniques for Faster Apps",
    slug: "react-performance-optimization",
    excerpt: "Master React performance optimization with code splitting, lazy loading, memoization, and other advanced techniques.",
    category: "Frontend",
    tags: ["React", "Performance", "JavaScript", "Optimization", "Web Development"],
    author: "Muzammal",
    publishedAt: "2024-01-14",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    featured: true,
    seoTitle: "React Performance Optimization Guide | Make Your App 3x Faster",
    seoDescription: "Learn advanced React performance optimization techniques including code splitting, lazy loading, React.memo, useMemo, and useCallback for faster apps.",
    seoKeywords: ["react performance", "react optimization", "react speed", "react lazy loading", "react code splitting", "react memoization"],
    content: ``,
  },
  {
    id: "6",
    title: "Next.js 14 Complete Guide: Server Components, App Router & Best Practices",
    slug: "nextjs-14-complete-guide",
    excerpt: "Everything you need to know about Next.js 14 including server components, app router, and modern best practices.",
    category: "Frontend",
    tags: ["Next.js", "React", "Web Development", "Server Components", "App Router"],
    author: "Muzammal",
    publishedAt: "2024-01-11",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "Next.js 14 Complete Guide | Server Components & App Router Tutorial",
    seoDescription: "Comprehensive Next.js 14 guide covering server components, app router, streaming, suspense, and performance optimization techniques.",
    seoKeywords: ["nextjs 14", "nextjs tutorial", "nextjs server components", "nextjs app router", "react server components", "nextjs guide"],
    content: ``,
  },
  // AI Automation Blogs
  {
    id: "7",
    title: "Business Automation with Make.com: Complete Beginner's Guide",
    slug: "business-automation-make-com-guide",
    excerpt: "Learn how to automate your business workflows with Make.com and save hours every day without coding.",
    category: "AI Automation",
    tags: ["Automation", "Make.com", "Workflow", "Business", "Productivity"],
    author: "Muzammal",
    publishedAt: "2024-01-13",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop",
    featured: true,
    seoTitle: "Make.com Automation Guide | Automate Business Workflows Without Code",
    seoDescription: "Complete beginner's guide to Make.com automation. Learn how to connect apps, automate workflows, and save time with visual automation builder.",
    seoKeywords: ["make.com", "business automation", "workflow automation", "zapier alternative", "no-code automation", "process automation"],
    content: ``,
  },
  {
    id: "8",
    title: "10 E-commerce Workflows You Should Automate Today",
    slug: "ecommerce-automation-workflows",
    excerpt: "Discover the most impactful e-commerce automation workflows that will save time and increase revenue.",
    category: "AI Automation",
    tags: ["E-commerce", "Automation", "Shopify", "Workflow", "Sales"],
    author: "Muzammal",
    publishedAt: "2024-01-09",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "E-commerce Automation Guide | 10 Workflows to Automate Your Store",
    seoDescription: "Learn which e-commerce workflows to automate including order processing, inventory management, customer emails, and shipping notifications.",
    seoKeywords: ["ecommerce automation", "shopify automation", "order automation", "inventory automation", "customer service automation", "email automation"],
    content: ``,
  },
  // AI Chatbot Blogs
  {
    id: "9",
    title: "AI Chatbots for Business: ROI, Benefits & Implementation Guide",
    slug: "ai-chatbots-business-guide",
    excerpt: "Learn how AI chatbots can transform your customer service and generate leads 24/7 with measurable ROI.",
    category: "AI Chatbot",
    tags: ["AI", "Chatbot", "Customer Service", "Lead Generation", "Automation"],
    author: "Muzammal",
    publishedAt: "2024-01-16",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
    featured: true,
    seoTitle: "AI Chatbot for Business | Complete Implementation & ROI Guide 2024",
    seoDescription: "Comprehensive guide to implementing AI chatbots for business. Learn about ROI, customer service automation, lead generation, and integration.",
    seoKeywords: ["ai chatbot", "business chatbot", "chatgpt business", "customer service automation", "ai customer support", "chatbot roi"],
    content: ``,
  },
  {
    id: "10",
    title: "ChatGPT Integration: How to Build Smart AI Chatbots for Your Website",
    slug: "chatgpt-integration-guide",
    excerpt: "Step-by-step guide to integrating ChatGPT into your website and building intelligent customer support chatbots.",
    category: "AI Chatbot",
    tags: ["ChatGPT", "AI", "Integration", "API", "Development"],
    author: "Muzammal",
    publishedAt: "2024-01-07",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "ChatGPT Integration Guide | Build AI Chatbots for Your Website",
    seoDescription: "Complete technical guide to ChatGPT integration. Learn API setup, prompt engineering, context management, and best practices for AI chatbots.",
    seoKeywords: ["chatgpt integration", "chatgpt api", "ai chatbot development", "chatgpt website", "openai integration", "chatbot development"],
    content: ``,
  },
  // eBay Templates Blogs
  {
    id: "11",
    title: "eBay Listing Optimization: How to Create High-Converting Product Listings",
    slug: "ebay-listing-optimization-guide",
    excerpt: "Master eBay listing optimization with proven strategies to increase visibility, clicks, and sales.",
    category: "eBay",
    tags: ["eBay", "Listing Optimization", "E-commerce", "Sales", "SEO"],
    author: "Muzammal",
    publishedAt: "2024-01-06",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "eBay Listing Optimization Guide | Increase Sales by 50%",
    seoDescription: "Complete eBay listing optimization guide including title optimization, photo tips, description writing, and pricing strategies to boost sales.",
    seoKeywords: ["ebay listing optimization", "ebay seo", "ebay listing tips", "increase ebay sales", "ebay product listing", "ebay templates"],
    content: ``,
  },
  {
    id: "12",
    title: "Professional eBay Store Design: Templates & Best Practices for 2024",
    slug: "ebay-store-design-templates",
    excerpt: "Create a professional eBay store with custom templates and design best practices that build trust and increase conversions.",
    category: "eBay",
    tags: ["eBay", "Store Design", "Templates", "Branding", "Conversion"],
    author: "Muzammal",
    publishedAt: "2024-01-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop",
    featured: false,
    seoTitle: "eBay Store Design Guide | Professional Templates & Best Practices",
    seoDescription: "Learn how to design a professional eBay store with custom templates, branding strategies, and mobile-responsive designs that convert.",
    seoKeywords: ["ebay store design", "ebay templates", "ebay store templates", "ebay branding", "ebay store setup", "professional ebay store"],
    content: ``,
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)))
}
