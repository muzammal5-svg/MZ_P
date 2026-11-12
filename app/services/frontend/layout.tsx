import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontend & React Development",
  description: "Modern web interfaces built with React, Next.js, TypeScript, and Tailwind CSS. Responsive, fast, and accessible.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
