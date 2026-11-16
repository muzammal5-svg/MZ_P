import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WordPress Development Services | Muzammal Zaheer",
  description: "Custom WordPress themes, Elementor Pro architectures, WooCommerce stores, and Core Web Vitals speed optimization by Muzammal Zaheer.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
