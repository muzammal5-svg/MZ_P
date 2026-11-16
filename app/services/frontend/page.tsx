import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function FrontendServicePage() {
  const service = siteConfig.serviceDetails.frontend
  return <ServiceDetailView service={service} />
}
