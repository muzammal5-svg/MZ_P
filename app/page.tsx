import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsHero } from "@/components/rsweblabs-hero"
import { AboutBento } from "@/components/about-bento"
import { MZwebSolutionsServices } from "@/components/rsweblabs-services"
import { FeaturedPortfolio } from "@/components/featured-portfolio"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import dynamic from "next/dynamic"

// Lazy load non-critical sections for better initial load
const LazyTestimonials = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.Testimonials })), {
  ssr: true,
  loading: () => <div className="py-24 bg-white animate-pulse"><div className="container mx-auto px-4"><div className="h-96 bg-gray-100 rounded-xl"></div></div></div>
})

const LazyContact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  ssr: true,
  loading: () => <div className="py-24 bg-gray-50 animate-pulse"><div className="container mx-auto px-4"><div className="h-96 bg-gray-100 rounded-xl"></div></div></div>
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <MZwebSolutionsNavigation />
      <MZwebSolutionsHero />
      <AboutBento />
      <MZwebSolutionsServices />
      <FeaturedPortfolio />
      <LazyTestimonials />
      <LazyContact />
      <MZwebSolutionsFooter />
    </main>
  )
}
