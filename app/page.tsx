import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsHero } from "@/components/rsweblabs-hero"
import { AboutBento } from "@/components/about-bento"
import { MZwebSolutionsServices } from "@/components/rsweblabs-services"
import { FeaturedPortfolio } from "@/components/featured-portfolio"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MZwebSolutionsNavigation />
      <MZwebSolutionsHero />
      <AboutBento />
      <MZwebSolutionsServices />
      <FeaturedPortfolio />
      <Testimonials />
      <Contact />
      <MZwebSolutionsFooter />
    </main>
  )
}
