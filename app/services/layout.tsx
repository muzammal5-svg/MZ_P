import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"

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