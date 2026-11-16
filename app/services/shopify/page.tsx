import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function ShopifyServicePage() {
  const service = siteConfig.serviceDetails.shopify
  return <ServiceDetailView service={service} />
}
