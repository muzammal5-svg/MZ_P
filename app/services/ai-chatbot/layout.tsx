import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Chatbot Integration Services | Muzammal Zaheer",
  description: "24/7 intelligent ChatGPT-powered chatbots for lead qualification, customer support, and automated messaging by Muzammal Zaheer.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
