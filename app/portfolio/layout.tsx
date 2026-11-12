import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: "Explore 100+ web development projects across WordPress, Shopify, React, and Next.js delivered with 5.0 ratings.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
