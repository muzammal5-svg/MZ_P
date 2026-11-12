import { Metadata } from "next"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Custom WordPress, Shopify, frontend React/Next.js, and AI automation services engineered for high conversions and speed.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MZwebSolutionsNavigation />
      <main className="min-h-screen">
        {children}
      </main>
      <MZwebSolutionsFooter />
    </>
  )
}