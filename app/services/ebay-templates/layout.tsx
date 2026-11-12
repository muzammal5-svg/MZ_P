import { Metadata } from "next"

export const metadata: Metadata = {
  title: "eBay Template Design",
  description: "Mobile-responsive, active-content compliant eBay listing templates and custom store designs that boost conversions.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
