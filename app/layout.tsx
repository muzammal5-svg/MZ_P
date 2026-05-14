import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://muzammal.dev'),
  title: {
    default: "Muzammal - Expert WordPress, Shopify & React Developer | Full-Stack Web Development Services",
    template: "%s | Muzammal - Professional Web Developer"
  },
  description:
    "Professional WordPress developer, Shopify expert, and React/Next.js specialist with 5+ years experience. Custom theme development, WooCommerce, Shopify Plus, eBay listing templates, Laravel APIs, and high-performance web applications. 100+ projects delivered, 5.0 rating on Upwork.",
  generator: "Next.js",
  applicationName: "Muzammal Portfolio",
  keywords: [
    // WordPress - High-value keywords
    "WordPress developer",
    "custom WordPress development",
    "WordPress theme development",
    "WordPress plugin development",
    "WooCommerce developer",
    "WordPress speed optimization",
    "WordPress SEO expert",
    "headless WordPress developer",
    "WordPress REST API",
    "WordPress Gutenberg blocks",
    "hire WordPress developer",
    "WordPress consultant",
    
    // Shopify - High-value keywords
    "Shopify developer",
    "Shopify expert",
    "custom Shopify theme development",
    "Shopify store development",
    "Shopify app integration",
    "Shopify Plus developer",
    "Shopify migration services",
    "Shopify Liquid developer",
    "hire Shopify developer",
    "Shopify consultant",
    "Shopify theme customization",
    
    // React & Next.js - High-value keywords
    "React developer",
    "Next.js developer",
    "React web application development",
    "Next.js expert",
    "React TypeScript developer",
    "server-side rendering React",
    "static site generation Next.js",
    "React hooks expert",
    "hire React developer",
    "Next.js 14 developer",
    
    // eBay - Niche keywords
    "eBay listing templates",
    "eBay store design",
    "professional eBay templates",
    "custom eBay listings",
    "eBay HTML templates",
    "eBay template developer",
    "responsive eBay templates",
    
    // Laravel - Backend keywords
    "Laravel developer",
    "Laravel API development",
    "Laravel REST API",
    "PHP Laravel expert",
    "Laravel backend developer",
    
    // Tailwind CSS
    "Tailwind CSS developer",
    "Tailwind CSS expert",
    "custom Tailwind components",
    
    // General high-value keywords
    "full-stack developer",
    "full-stack web developer",
    "e-commerce developer",
    "web application development",
    "frontend developer",
    "backend developer",
    "API integration specialist",
    "responsive web design",
    "mobile-first development",
    "PageSpeed optimization expert",
    "Core Web Vitals optimization",
    "technical SEO specialist",
    "conversion rate optimization",
    "freelance web developer",
    "professional web developer",
    "custom web development",
    "web development services",
    "hire full-stack developer",
    "Upwork top rated developer",
    "Fiverr pro developer"
  ],
  authors: [{ name: "Muhammad Muzammal", url: "https://muzammal.dev" }],
  creator: "Muhammad Muzammal",
  publisher: "Muzammal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/profile-pic.jpg",
        sizes: "any",
      },
      {
        url: "/profile-pic.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/profile-pic.jpg",
        sizes: "16x16", 
        type: "image/jpeg",
      },
    ],
    apple: "/profile-pic.jpg",
    shortcut: "/profile-pic.jpg",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muzammal.dev',
    title: 'Muzammal - Expert WordPress, Shopify & React Developer | Full-Stack Development',
    description: 'Professional full-stack developer specializing in WordPress, Shopify, React, Next.js, Laravel, and e-commerce solutions. 100+ projects delivered with 5.0 rating on Upwork. Custom theme development, API integration, and performance optimization.',
    siteName: 'Muzammal - Full-Stack Developer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muzammal - Professional WordPress, Shopify & React Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzammal - Expert WordPress, Shopify & React Developer',
    description: 'Professional full-stack developer | WordPress | Shopify | React | Next.js | Laravel | 100+ projects | 5.0 rating',
    images: ['/og-image.jpg'],
    creator: '@muzammal',
  },
  alternates: {
    canonical: 'https://muzammal.dev',
  },
  verification: {
    google: 'cByFXCFwzGvwLLkpfQ25ijpIWHghANmKZM3owjJ5q_4',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://muzammal.dev/#person",
        "name": "Muhammad Muzammal",
        "url": "https://muzammal.dev",
        "image": {
          "@type": "ImageObject",
          "url": "https://muzammal.dev/professional-developer-portrait.png",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://www.upwork.com/freelancers/muzammal",
          "https://www.fiverr.com/muzammal",
          "https://github.com/muzammal",
          "https://linkedin.com/in/muzammal"
        ],
        "jobTitle": "Full-Stack Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "description": "Professional WordPress developer, Shopify expert, and React/Next.js specialist with 5+ years of experience",
        "knowsAbout": [
          "WordPress Development",
          "Shopify Development",
          "React.js",
          "Next.js",
          "Laravel",
          "Tailwind CSS",
          "WooCommerce",
          "eBay Templates",
          "E-commerce Development",
          "API Integration",
          "Performance Optimization",
          "SEO"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://muzammal.dev/#service",
        "name": "Muzammal - Full-Stack Web Development Services",
        "url": "https://muzammal.dev",
        "logo": "https://muzammal.dev/MZwebsolution.png",
        "image": "https://muzammal.dev/og-image.jpg",
        "description": "Professional WordPress, Shopify, and React development services. Custom theme development, e-commerce solutions, and high-performance web applications.",
        "priceRange": "$$",
        "telephone": "+92-341-735-9571",
        "email": "muzammalzaheer571@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "addressCountry": "Pakistan"
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "WordPress Development",
          "Shopify Development",
          "React Development",
          "Next.js Development",
          "E-commerce Development",
          "Custom Web Applications",
          "eBay Template Design",
          "API Integration",
          "Performance Optimization"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "100",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://muzammal.dev/#website",
        "url": "https://muzammal.dev",
        "name": "Muzammal - Full-Stack Developer",
        "description": "Professional WordPress, Shopify, and React developer portfolio",
        "publisher": {
          "@id": "https://muzammal.dev/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://muzammal.dev/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://muzammal.dev/#services",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "WordPress Development",
            "description": "Custom WordPress theme and plugin development, WooCommerce integration, performance optimization"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Shopify Development",
            "description": "Custom Shopify themes, Shopify Plus development, app integration, store migration"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "React & Next.js Development",
            "description": "Modern web applications with React, Next.js, TypeScript, and Tailwind CSS"
          },
          {
            "@type": "Service",
            "position": 4,
            "name": "eBay Listing Templates",
            "description": "Professional, mobile-responsive eBay listing templates and store design"
          },
          {
            "@type": "Service",
            "position": 5,
            "name": "Laravel API Development",
            "description": "RESTful API development, backend services, and database architecture"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat 
            phoneNumber="923417359571" 
            message="Hi! I'm interested in MZwebSolutions services. Let's discuss my project!" 
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
