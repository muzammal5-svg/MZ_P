import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopify Store Development",
  description: "Custom Shopify themes, Liquid development, app integration, and e-commerce conversion optimization by Muhammad Muzammal.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
