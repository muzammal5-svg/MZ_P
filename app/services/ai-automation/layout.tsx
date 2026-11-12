import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Automation Services",
  description: "Automate repetitive business workflows and connect 1000+ apps using Make.com, Zapier, and intelligent AI pipelines.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
