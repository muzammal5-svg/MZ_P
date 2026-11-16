import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function EbayTemplatesServicePage() {
  const service = siteConfig.serviceDetails["ebay-templates"]
  return <ServiceDetailView service={service} />
}
