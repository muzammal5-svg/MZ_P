import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function AIAutomationServicePage() {
  const service = siteConfig.serviceDetails["ai-automation"]
  return <ServiceDetailView service={service} />
}
