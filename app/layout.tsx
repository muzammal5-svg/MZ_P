import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://muzammalzaheer.vercel.app').replace(/\/+$/, '')

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Muzammal | Full-Stack Web Developer",
    template: "%s | Muhammad Muzammal"
  },
  description:
    "Full-stack developer specializing in Next.js, React, WordPress, and Shopify. Delivering fast, accessible, and high-performance websites.",
  generator: "Next.js",
  applicationName: "Muhammad Muzammal Portfolio",
  authors: [{ name: "Muhammad Muzammal", url: SITE_URL }],
  creator: "Muhammad Muzammal",
  publisher: "Muhammad Muzammal",
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
    title: 'Muhammad Muzammal | Full-Stack Web Developer',
    description: 'Full-stack developer specializing in Next.js, React, WordPress, and Shopify with 100+ projects delivered.',
    siteName: 'Muhammad Muzammal - Full-Stack Developer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Muzammal - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Muzammal | Full-Stack Web Developer',
    description: 'Full-stack developer specializing in Next.js, React, WordPress, and Shopify. 100+ projects delivered.',
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
        "name": "Muhammad Muzammal",
        "url": SITE_URL,
        "image": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/professional-developer-portrait.png`,
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://github.com/muzammal5-svg",
          "https://www.linkedin.com/in/muz-the-coder/"
        ],
        "jobTitle": "Full-Stack Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "description": "Professional WordPress developer, Shopify expert, and React/Next.js specialist with 2+ years of experience",
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
        "@id": `${SITE_URL}/#service`,
        "name": "Muhammad Muzammal - Full-Stack Web Development Services",
        "url": SITE_URL,
        "logo": `${SITE_URL}/MZwebsolution.png`,
        "image": `${SITE_URL}/og-image.jpg`,
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
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Muhammad Muzammal - Full-Stack Developer",
        "description": "Professional WordPress, Shopify, and React developer portfolio",
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
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
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
