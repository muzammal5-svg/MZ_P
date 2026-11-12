import { Metadata } from "next"

export const metadata: Metadata = {
  title: "WordPress Development",
  description: "Custom WordPress themes, plugins, WooCommerce stores, and speed optimization built with clean code and high security.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
