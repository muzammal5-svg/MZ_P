import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Chatbot Development",
  description: "Custom AI chatbots and automated support systems for websites and e-commerce stores to engage leads 24/7.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
