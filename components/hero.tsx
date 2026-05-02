"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy" />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-lg animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500/20 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/20 rounded-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available for Hire</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance animate-fade-in-up">
            Building High-Performance
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Websites That Convert 🚀
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            WordPress • Shopify • Webflow • Full-Stack Developer
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
            {/* <Button size="lg" variant="ghost" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button> */}
          </div>

          {/* Tech Stack Icons */}
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 opacity-60 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-sm font-medium">React</span>
            <span className="text-sm font-medium">Next.js</span>
            <span className="text-sm font-medium">TypeScript</span>
            <span className="text-sm font-medium">Tailwind</span>
            <span className="text-sm font-medium">Laravel</span>
            <span className="text-sm font-medium">MySQL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
