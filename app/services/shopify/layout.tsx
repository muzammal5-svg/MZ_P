import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopify Store Development Services | Muzammal Zaheer",
  description: "Custom Shopify Liquid themes, high-converting checkout UX, and e-commerce store setups by Muzammal Zaheer.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
