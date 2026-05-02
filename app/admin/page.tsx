"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Lock, User, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already logged in
    const isLoggedIn = localStorage.getItem("adminLoggedIn")
    if (isLoggedIn === "true") {
      router.push("/admin/dashboard")
    }
  }, [router])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simple authentication (aap ye credentials change kar sakte hain)
    // Production mein proper authentication use karein
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid username or password")
      setIsLoading(false)
    }
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
        className="w-full max-w-md relative z-10"
      >
        <Card 
          className="p-8"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            border: "2px solid rgba(16,185,129,0.2)",
            borderRadius: "1.5rem",
            boxShadow: "0 20px 60px rgba(16,185,129,0.15)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div 
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
              }}
            >
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 
              className="text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#0f172a",
                fontWeight: 700,
              }}
            >
              Admin Login
            </h1>
            <p 
              className="text-sm"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Enter your credentials to access the dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl text-sm text-center"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  border: "2px solid rgba(239,68,68,0.3)",
                  color: "#dc2626",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {error}
              </motion.div>
            )}

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{
                  color: "#475569",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Username
              </label>
              <div className="relative">
                <User 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: "#94a3b8" }}
                />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 border-2"
                  style={{
                    background: "rgba(248,250,252,0.8)",
                    borderColor: "rgba(226,232,240,0.8)",
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{
                  color: "#475569",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Password
              </label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  style={{ color: "#94a3b8" }}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-2"
                  style={{
                    background: "rgba(248,250,252,0.8)",
                    borderColor: "rgba(226,232,240,0.8)",
                    color: "#0f172a",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#94a3b8" }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-white font-semibold rounded-xl"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Logging in...
                </div>
              ) : (
                "Login to Dashboard"
              )}
            </Button>
          </form>

          {/* Default Credentials Info */}
          <div 
            className="mt-6 p-4 rounded-xl text-xs text-center"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.2)",
              color: "#64748b",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <strong style={{ color: "#0f172a" }}>Default Credentials:</strong><br />
            Username: admin | Password: admin123
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
