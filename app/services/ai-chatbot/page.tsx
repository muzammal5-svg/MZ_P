import { siteConfig } from "@/lib/site-config"
import { ServiceDetailView } from "@/components/service-detail-view"

export default function AIChatbotServicePage() {
  const service = siteConfig.serviceDetails["ai-chatbot"]
  return <ServiceDetailView service={service} />
}
