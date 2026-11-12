import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Blog",
  description: "Practical web development guides, Next.js tutorials, and performance optimization tips by Muhammad Muzammal.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
