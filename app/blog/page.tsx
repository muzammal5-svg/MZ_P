"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Calendar, Clock, Tag, TrendingUp, ArrowRight } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { getAllPosts, getFeaturedPosts, getAllCategories } from "@/lib/blog-data"
import { useState } from "react"
import Image from "next/image"

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const categories = getAllCategories()
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
      <MZwebSolutionsNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
              }}>
              <TrendingUp className="w-4 h-4" style={{ color: "#10b981" }} />
              <span className="text-sm font-medium" style={{ color: "#10b981", fontFamily: "'Poppins', sans-serif" }}>
                Expert Insights
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}>
              <span style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Web Development</span>{" "}
              <span style={{ color: "#0f172a" }}>Blog</span>
            </h1>

            <p className="text-lg sm:text-xl mb-8"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
              }}>
              Expert guides, tutorials, and insights on WordPress, Shopify, React, AI automation, and modern web development.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: "#94a3b8" }} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-base"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "2px solid rgba(226,232,240,0.8)",
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", ...categories].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: selectedCategory === category
                    ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
                    : "rgba(255,255,255,0.9)",
                  color: selectedCategory === category ? "#ffffff" : "#64748b",
                  border: selectedCategory === category ? "none" : "2px solid rgba(226,232,240,0.8)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
              }}>
              Featured Articles
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "2px solid rgba(16,185,129,0.2)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      }}>
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            color: "#ffffff",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          Featured
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: "rgba(16,185,129,0.1)",
                              color: "#10b981",
                              fontFamily: "'Poppons', sans-serif",
                            }}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs"
                            style={{ color: "#94a3b8" }}>
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          {post.title}
                        </h3>

                        <p className="text-sm mb-4 line-clamp-2"
                          style={{
                            color: "#64748b",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4"
                          style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}>
                          <div className="flex items-center gap-2 text-sm"
                            style={{ color: "#64748b" }}>
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            style={{ color: "#10b981" }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#0f172a",
            }}>
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </motion.h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl" style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "2px solid rgba(226,232,240,0.8)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      }}>
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: "rgba(16,185,129,0.1)",
                              color: "#10b981",
                              fontFamily: "'Poppins', sans-serif",
                            }}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs"
                            style={{ color: "#94a3b8" }}>
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2"
                          style={{
                            color: "#0f172a",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          {post.title}
                        </h3>

                        <p className="text-sm mb-4 line-clamp-3"
                          style={{
                            color: "#64748b",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs"
                              style={{
                                background: "rgba(248,250,252,0.8)",
                                color: "#64748b",
                                fontFamily: "'Poppins', sans-serif",
                              }}>
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4"
                          style={{ borderTop: "1px solid rgba(226,232,240,0.8)" }}>
                          <div className="flex items-center gap-2 text-xs"
                            style={{ color: "#64748b" }}>
                            <Calendar className="w-3 h-3" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            style={{ color: "#10b981" }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <MZwebSolutionsFooter />
    </div>
  )
}
