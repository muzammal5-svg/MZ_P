"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, Tag, ArrowRight, BookOpen, AlertCircle, Sparkles } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { PreFooterCta } from "@/components/pre-footer-cta"
import { getAllPosts, getAllCategories } from "@/lib/blog-data"
import { siteConfig } from "@/lib/site-config"

export default function BlogPage() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <MZwebSolutionsNavigation />

      <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 focus:outline-none pt-24">
        {/* Draft Notice Banner */}
        <div className="bg-amber-50 border-b border-amber-200/80 py-2.5 px-4 text-center text-xs font-medium text-amber-800">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Draft Section:</strong> These technical articles are currently in preview mode (omitted from sitemap and marked noindex).
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/80">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-20 blur-3xl bg-emerald-200" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-50 border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Technical Knowledge Base
              </span>
            </div>

            {/* Exactly one H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Engineering Insights &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Practical Guides
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              In-depth articles covering WordPress Core Web Vitals optimization, custom Shopify theme architecture, and high-converting e-commerce templates.
            </p>

            {/* Search Input */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles by keyword or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full text-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-6 border-b border-slate-200/80 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["All", ...categories].map((cat) => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 max-w-md mx-auto">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No articles found</h3>
                <p className="text-xs text-slate-500">Try adjusting your keyword search or category filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    {/* Thumbnail Image */}
                    <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-slate-100 block">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/90 text-white shadow-sm backdrop-blur-sm">
                          Draft
                        </span>
                      </div>
                    </Link>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {post.readTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {post.publishedAt}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-3 leading-snug">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-emerald-500/30">
                            <Image
                              src="/profile-pic.jpg"
                              alt={post.author}
                              width={24}
                              height={24}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-700">{post.author}</span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all"
                        >
                          Read Guide <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pre-footer CTA */}
        <PreFooterCta
          title="Looking for Professional Implementation?"
          description="Whether you need Core Web Vitals optimization, a custom Shopify theme, or an automation pipeline, let's build it together."
          buttonText="Get a Free Quote"
        />
      </main>

      <MZwebSolutionsFooter />
    </>
  )
}
