import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation Services with Make.com | Muzammal Zaheer",
  description: "Automate repetitive business workflows and connect 1000+ apps using Make.com, webhooks, and intelligent API pipelines.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
