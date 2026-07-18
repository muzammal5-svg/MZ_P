"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight, Lightbulb } from "lucide-react"
import { MZwebSolutionsNavigation } from "@/components/rsweblabs-navigation"
import { MZwebSolutionsFooter } from "@/components/mzwebsolutions-footer"
import { getPostBySlug, getPostsByCategory } from "@/lib/blog-data"
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [shareUrl, setShareUrl] = useState('')
  
  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter(p => p.slug !== post.slug)
    .slice(0, 3)

  const shareTitle = post.seoTitle

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
        <MZwebSolutionsNavigation />

        {/* Breadcrumb */}
        <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-sm"
              style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}
            >
              <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span style={{ color: "#0f172a" }}>{post.category}</span>
            </motion.div>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}>
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8"
                style={{ borderBottom: "2px solid rgba(226,232,240,0.8)" }}>
                <div className="flex items-center gap-2"
                  style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2"
                  style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2"
                  style={{ color: "#64748b", fontFamily: "'Poppins', sans-serif" }}>
                  <span className="text-sm font-medium">By {post.author}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#10b981",
                      fontFamily: "'Poppins', sans-serif",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}>
                    <Tag className="w-3.5 h-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#334155",
                lineHeight: 1.8,
              }}
            >
              <div className="rounded-2xl p-8 mb-8"
                style={{
                  background: "rgba(16,185,129,0.05)",
                  border: "2px solid rgba(16,185,129,0.2)",
                }}>
                <p className="text-xl leading-relaxed m-0"
                  style={{ color: "#0f172a", fontWeight: 500 }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Article Body */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  This comprehensive guide will walk you through everything you need to know about <strong>{post.category.toLowerCase()}</strong>. 
                  Whether you're a beginner or looking to enhance your existing knowledge, you'll find actionable insights and practical tips.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "#0f172a" }}>
                  Why This Matters
                </h2>
                <p className="text-lg leading-relaxed">
                  In today's digital landscape, staying up-to-date with the latest {post.category.toLowerCase()} trends and techniques is crucial 
                  for success. This article covers proven strategies that have helped businesses and developers achieve outstanding results.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "#0f172a" }}>
                  Key Takeaways
                </h2>
                <ul className="space-y-3 text-lg">
                  {post.tags.slice(0, 5).map((tag, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                          color: "#ffffff",
                        }}>
                        {index + 1}
                      </span>
                      <span>Understanding and implementing {tag.toLowerCase()} strategies effectively</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "#0f172a" }}>
                  Getting Started
                </h2>
                <p className="text-lg leading-relaxed">
                  Let's dive into the practical aspects. The strategies outlined in this guide are based on real-world experience 
                  and proven results from multiple successful projects. Follow along to implement these techniques in your own work.
                </p>

                <div className="rounded-2xl p-8 my-12"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,182,212,0.1) 100%)",
                    border: "2px solid rgba(16,185,129,0.3)",
                  }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      }}>
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold m-0" style={{ color: "#0f172a" }}>
                      Pro Tip
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed m-0" style={{ color: "#334155" }}>
                    Always test your implementations in a staging environment before deploying to production. 
                    This ensures a smooth user experience and helps catch any potential issues early.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "#0f172a" }}>
                  Best Practices
                </h2>
                <p className="text-lg leading-relaxed">
                  Following industry best practices is essential for long-term success. Here are the most important principles 
                  to keep in mind as you work with {post.category.toLowerCase()} technologies.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: "#0f172a" }}>
                  Conclusion
                </h2>
                <p className="text-lg leading-relaxed">
                  Implementing these strategies will help you achieve better results with your {post.category.toLowerCase()} projects. 
                  Remember that continuous learning and adaptation are key to staying ahead in the rapidly evolving tech landscape.
                </p>

                <p className="text-lg leading-relaxed">
                  Need help implementing these solutions? <Link href="/contact" className="font-semibold"
                    style={{ color: "#10b981" }}>Get in touch</Link> for professional {post.category} services.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8"
          style={{ borderTop: "2px solid rgba(226,232,240,0.8)", borderBottom: "2px solid rgba(226,232,240,0.8)" }}>
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-3">
                <Share2 className="w-6 h-6" style={{ color: "#10b981" }} />
                <span className="text-lg font-semibold"
                  style={{ color: "#0f172a", fontFamily: "'Poppins', sans-serif" }}>
                  Share this article
                </span>
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    border: "2px solid rgba(59,130,246,0.2)",
                  }}
                >
                  <Facebook className="w-5 h-5" style={{ color: "#3b82f6" }} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    border: "2px solid rgba(14,165,233,0.2)",
                  }}
                >
                  <Twitter className="w-5 h-5" style={{ color: "#0ea5e9" }} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(14,116,144,0.1)",
                    border: "2px solid rgba(14,116,144,0.2)",
                  }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: "#0e7490" }} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#0f172a",
                }}>
                Related Articles
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="group h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                        style={{
                          background: "rgba(255,255,255,0.9)",
                          border: "2px solid rgba(226,232,240,0.8)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                        }}>
                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={400}
                            height={250}
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
                              {relatedPost.category}
                            </span>
                            <div className="flex items-center gap-1 text-xs"
                              style={{ color: "#94a3b8" }}>
                              <Clock className="w-3 h-3" />
                              {relatedPost.readTime}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2"
                            style={{
                              color: "#0f172a",
                              fontFamily: "'Poppins', sans-serif",
                            }}>
                            {relatedPost.title}
                          </h3>

                          <p className="text-sm mb-4 line-clamp-2"
                            style={{
                              color: "#64748b",
                              fontFamily: "'Poppins', sans-serif",
                            }}>
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl p-12 text-center"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                boxShadow: "0 20px 60px rgba(16,185,129,0.3)",
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "#ffffff", fontFamily: "'Poppins', sans-serif" }}>
                Need Professional Help?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Poppins', sans-serif" }}>
                Get expert {post.category} services tailored to your business needs. 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl text-base font-bold transition-all"
                    style={{
                      background: "#ffffff",
                      color: "#10b981",
                      fontFamily: "'Poppins', sans-serif",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "#ffffff",
                      fontFamily: "'Poppins', sans-serif",
                      border: "2px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Blog
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <MZwebSolutionsFooter />
      </div>
  )
}
