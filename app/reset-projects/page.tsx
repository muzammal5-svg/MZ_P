"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RefreshCw, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { resetToDefaultProjects, getProjects } from "@/lib/projects-data"

export default function ResetProjectsPage() {
  const [isReset, setIsReset] = useState(false)
  const [projectCount, setProjectCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Check current project count
    const currentProjects = getProjects()
    setProjectCount(currentProjects.length)
  }, [])

  const handleReset = () => {
    // Force reset to all 22 default projects
    resetToDefaultProjects()
    
    // Get updated count
    const updatedProjects = getProjects()
    setProjectCount(updatedProjects.length)
    
    setIsReset(true)
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Background effects */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl relative z-10"
      >
        <Card 
          className="p-10"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(16,185,129,0.2)",
            borderRadius: "1.5rem",
            boxShadow: "0 20px 60px rgba(16,185,129,0.15)",
          }}
        >
          {!isReset ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div 
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  }}
                >
                  <RefreshCw className="w-10 h-10 text-white" />
                </div>
                <h1 
                  className="text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#0f172a",
                    fontWeight: 700,
                  }}
                >
                  Reset Projects
                </h1>
                <p 
                  className="text-lg mb-2"
                  style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Load all 22 default projects
                </p>
                <p 
                  className="text-sm"
                  style={{
                    color: "#94a3b8",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Current projects in storage: <strong>{projectCount}</strong>
                </p>
              </div>

              {/* Info */}
              <div 
                className="p-6 rounded-xl mb-8"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <h3 
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  What will happen:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Clear current localStorage data",
                    "Load 22 default projects",
                    "4 WordPress projects",
                    "3 Shopify projects", 
                    "2 Custom Web projects",
                    "13 eBay Templates"
                  ].map((item, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      style={{
                        color: "#475569",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning */}
              <div 
                className="p-4 rounded-xl mb-8 text-sm"
                style={{
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  color: "#92400e",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <strong>⚠️ Warning:</strong> This will replace your current projects with the default 22 projects. Any custom projects you added will be removed.
              </div>

              {/* Action Button */}
              <Button
                onClick={handleReset}
                className="w-full h-14 text-white font-semibold rounded-xl text-lg"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reset to 22 Default Projects
              </Button>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                  }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#0f172a",
                    fontWeight: 700,
                  }}
                >
                  Successfully Reset!
                </h2>
                
                <p 
                  className="text-lg mb-8"
                  style={{
                    color: "#64748b",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  All <strong style={{ color: "#10b981" }}>{projectCount} projects</strong> have been loaded successfully.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "WordPress", count: "4" },
                    { label: "Shopify", count: "3" },
                    { label: "Custom Web", count: "2" },
                    { label: "eBay Templates", count: "13" },
                  ].map((stat) => (
                    <div 
                      key={stat.label}
                      className="p-4 rounded-xl text-center"
                      style={{
                        background: "rgba(248,250,252,0.8)",
                        border: "1px solid rgba(226,232,240,0.8)",
                      }}
                    >
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{
                          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {stat.count}
                      </div>
                      <div 
                        className="text-xs"
                        style={{
                          color: "#64748b",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => router.push("/portfolio")}
                    className="w-full h-12 text-white font-semibold rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <Button
                    onClick={() => router.push("/admin/dashboard")}
                    variant="outline"
                    className="w-full h-12 rounded-xl font-semibold"
                    style={{
                      borderColor: "rgba(16,185,129,0.3)",
                      color: "#10b981",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Go to Admin Dashboard
                  </Button>

                  <Button
                    onClick={() => router.push("/")}
                    variant="outline"
                    className="w-full h-12 rounded-xl font-semibold"
                    style={{
                      borderColor: "rgba(226,232,240,0.8)",
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </motion.div>
    </div>
  )
}
