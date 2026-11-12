import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description: "Start your web development project with Muhammad Muzammal. Fast response within 2-4 hours. Free project estimates.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
