import { Metadata } from "next"

export const metadata: Metadata = {
  title: "eBay Listing Template Design Services | Muzammal Zaheer",
  description: "100% mobile-responsive, active-content compliant eBay listing templates that boost seller trust and conversions.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
