"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Zap, Code, Smartphone, Database, Layers, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export default function FrontendPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Code,
      title: "React & Next.js",
      description: "Modern React applications with Next.js for optimal performance and SEO benefits."
    },
    {
      icon: Layers,
      title: "TypeScript",
      description: "Type-safe development with TypeScript for better code quality and maintainability."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect functionality across all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with code splitting, lazy loading, and optimization techniques."
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and third-party services."
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description: "Latest frontend technologies including Tailwind CSS, Framer Motion, and more."
    }
  ]

  const packages = [
    {
      name: "Single Page App",
      price: "$799",
      description: "Perfect for interactive web applications",
      features: [
        "React/Next.js development",
        "Single page application",
        "API integration",
        "Responsive design",
        "Performance optimization",
        "1 month support"
      ]
    },
    {
      name: "Multi-Page Application",
      price: "$1,499",
      description: "Ideal for complex web applications",
      features: [
        "React/Next.js development",
        "Multiple pages/routes",
        "State management",
        "Database integration",
        "Authentication system",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$2,999",
      description: "Complete solution for large-scale applications",
      features: [
        "Full-stack development",
        "Scalable architecture",
        "Advanced features",
        "Testing & deployment",
        "Priority support",
        "6 months support"
      ]
    }
  ]

  const projects = [
    {
      title: "Nurse AI Hub",
      description: "React.js healthcare platform with AI integration, user dashboard, and responsive design for medical professionals.",
      image: "/frontend/Nurse-ai-hub.png",
      liveUrl: "https://nurseaihub.com/"
    },
    {
      title: "CodeWire Solutions",
      description: "Professional Next.js portfolio site for a software agency with smooth animations and optimized Core Web Vitals.",
      image: "/frontend/Portfolio_website.png",
      liveUrl: "https://www.codewiresolutions.com/"
    }
  ]

  return (
    <div className="min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)" }} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "-0.02em",
              }}>
              <span style={{ color: "#0f172a" }}>Modern</span>{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Frontend</span>{" "}
              <span style={{ color: "#0f172a" }}>Development</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}>
              Build cutting-edge web applications with React, Next.js, and TypeScript. 
              From interactive user interfaces to complex web applications, I create frontend solutions that perform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}>
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#packages">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 rounded-xl transition-all duration-300 border-2 font-semibold"
                  style={{
                    background: "rgba(255,255,255,1)",
                    borderColor: "rgba(226,232,240,1)",
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}>
                  View Packages
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}>
                <span style={{ color: "#0f172a" }}>Modern Frontend</span>{" "}
                <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Development Services</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                Comprehensive frontend development using the latest technologies and best practices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card className="p-6 h-full border-2 transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(20px)",
                        borderColor: hoveredIndex === index ? "rgba(16,185,129,0.3)" : "rgba(226,232,240,0.8)",
                        boxShadow: hoveredIndex === index ? "0 20px 40px rgba(16,185,129,0.15)" : "0 4px 20px rgba(0,0,0,0.06)",
                      }}>
                      <motion.div 
                        animate={{ 
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                        }}>
                        <Icon className="h-7 w-7" style={{ color: "#10b981" }} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold mb-3"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}>
                        {feature.title}
                      </h3>
                      <p className="leading-relaxed"
                        style={{
                          color: "#64748b",
                          fontFamily: "'Poppins', sans-serif",
                        }}>{feature.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}>
                <span style={{ color: "#0f172a" }}>Frontend Development</span>{" "}
                <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Packages</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                Choose the perfect package for your frontend development needs.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`relative p-8 h-full border-2 transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-offset-2' : ''
                  }`}
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(20px)",
                      borderColor: pkg.popular ? "rgba(16,185,129,0.3)" : "rgba(226,232,240,0.8)",
                      boxShadow: pkg.popular ? "0 25px 50px rgba(16,185,129,0.15)" : "0 4px 20px rgba(0,0,0,0.06)",
                      ringColor: pkg.popular ? "rgba(16,185,129,0.3)" : undefined,
                    }}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}>{pkg.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: "'Poppins', sans-serif",
                          }}>{pkg.price}</span>
                      </div>
                      <p className="text-sm leading-relaxed"
                        style={{
                          color: "#64748b",
                          fontFamily: "'Poppins', sans-serif",
                        }}>{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#10b981" }} />
                          <span className="text-sm leading-relaxed"
                            style={{
                              color: "#475569",
                              fontFamily: "'Poppins', sans-serif",
                            }}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button 
                        className={`w-full font-semibold py-6 rounded-xl transition-all duration-300 ${
                          pkg.popular ? 'shadow-lg hover:shadow-xl' : ''
                        }`}
                        style={{
                          background: pkg.popular 
                            ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
                            : "rgba(255,255,255,1)",
                          color: pkg.popular ? "#ffffff" : "#0f172a",
                          border: pkg.popular ? "none" : "2px solid rgba(226,232,240,1)",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}>
                <span style={{ color: "#0f172a" }}>Frontend</span>{" "}
                <span style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Projects</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: "#64748b",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                Check out some of my recent frontend development projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(20px)",
                      borderColor: "rgba(226,232,240,0.8)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(16,185,129,0.15)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(226,232,240,0.8)"
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"
                    }}>
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                            fontFamily: "'Poppins', sans-serif",
                          }}>
                          <ExternalLink className="w-4 h-4" />
                          View Live Site
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2"
                        style={{
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}>
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed"
                        style={{
                          color: "#64748b",
                          fontFamily: "'Poppins', sans-serif",
                        }}>
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* View Portfolio Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link href="/portfolio">
                <Button 
                  size="lg" 
                  className="text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}>
                  View Complete Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center rounded-3xl p-12 border-2"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(16,185,129,0.15)",
              boxShadow: "0 25px 60px rgba(16,185,129,0.1)",
            }}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6"
              style={{
                color: "#0f172a",
                fontFamily: "'Poppins', sans-serif",
              }}>
              Ready to Build{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Something Amazing?</span>
            </h2>
            
            <p className="text-lg mb-10 leading-relaxed"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}>
              Let's create a modern frontend solution that delivers exceptional user experiences and drives business results.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}>
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
