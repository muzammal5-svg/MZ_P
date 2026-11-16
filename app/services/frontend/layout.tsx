import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontend & Next.js Development Services | Muzammal Zaheer",
  description: "Modern web applications built with Next.js App Router, React, TypeScript, and Tailwind CSS. Responsive, fast, and accessible.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
