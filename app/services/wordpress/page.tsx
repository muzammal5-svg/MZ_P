import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function WordPressServicePage() {
  const service = siteConfig.serviceDetails.wordpress
  return <ServiceDetailView service={service} />
}
