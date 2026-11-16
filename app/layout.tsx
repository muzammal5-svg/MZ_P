import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const SITE_URL = siteConfig.siteUrl.replace(/\/+$/, '')

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    `${siteConfig.name} - ${siteConfig.title} specializing in WordPress, Shopify, Next.js, and AI automation. Delivering fast, high-converting websites with ${siteConfig.metrics.projectsCount} projects delivered.`,
  generator: "Next.js",
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    url: SITE_URL,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: `${siteConfig.name} - ${siteConfig.title} specializing in WordPress, Shopify, Next.js, and AI automation with ${siteConfig.metrics.projectsCount} projects delivered.`,
    siteName: `${siteConfig.name} - ${siteConfig.title}`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: `${siteConfig.name} - ${siteConfig.title} specializing in WordPress, Shopify, Next.js, and AI automation with ${siteConfig.metrics.projectsCount} projects delivered.`,
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: 'cByFXCFwzGvwLLkpfQ25ijpIWHghANmKZM3owjJ5q_4',
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
        "@id": `${SITE_URL}/#person`,
        "name": siteConfig.name,
        "url": SITE_URL,
        "image": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/professional-developer-portrait.png`,
          "width": 400,
          "height": 400
        },
        "sameAs": [
          siteConfig.githubUrl,
          siteConfig.linkedinUrl,
          siteConfig.upworkUrl,
          siteConfig.fiverrUrl,
        ].filter(Boolean),
        "jobTitle": siteConfig.title,
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "description": `${siteConfig.title} specializing in WordPress, Shopify, Next.js, and AI automation with ${siteConfig.metrics.yearsExperience} of experience and ${siteConfig.metrics.projectsCount} projects delivered.`,
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
          "AI Automation",
          "API Integration",
          "Performance Optimization",
          "SEO"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        "name": `${siteConfig.name} - ${siteConfig.title} Services`,
        "url": SITE_URL,
        "logo": `${SITE_URL}/MZwebsolution.png`,
        "image": `${SITE_URL}/og-image.jpg`,
        "description": `Professional WordPress, Shopify, and React development services by ${siteConfig.name}. Custom theme development, e-commerce solutions, and high-performance web applications.`,
        "priceRange": "$$",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
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
          "AI Automation",
          "API Integration",
          "Performance Optimization"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": `${siteConfig.name} - ${siteConfig.title}`,
        "description": `${siteConfig.name} - ${siteConfig.title} portfolio showcasing WordPress, Shopify, and Next.js projects.`,
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#services`,
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
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
          <ScrollToTop />
          <WhatsAppFloat 
            phoneNumber="923417359571" 
            message="Hi! I'm interested in your web development services. Let's discuss my project!" 
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
