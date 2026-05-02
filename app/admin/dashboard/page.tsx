"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Save, 
  X, 
  Image as ImageIcon,
  ExternalLink,
  FolderOpen
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getProjects, saveProjects, defaultProjects as allDefaultProjects } from "@/lib/projects-data"

type Project = {
  id: number
  title: string
  niche: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  isEbayTemplate: boolean
  trustScore: number
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)
  const router = useRouter()

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    niche: "",
    description: "",
    category: "WordPress",
    technologies: "",
    image: "",
    liveUrl: "",
    isEbayTemplate: false,
    trustScore: 100,
  })

  useEffect(() => {
    // Check authentication
    const isLoggedIn = localStorage.getItem("adminLoggedIn")
    if (isLoggedIn !== "true") {
      router.push("/admin")
      return
    }

    // Load projects from localStorage
    loadProjects()
  }, [router])

  const loadProjects = () => {
    const loadedProjects = getProjects()
    
    // If only 4 projects (old data), use all 22 default projects
    if (loadedProjects.length <= 4) {
      saveProjects(allDefaultProjects)
      setProjects(allDefaultProjects)
    } else {
      setProjects(loadedProjects)
    }
  }

  const updateProjects = (updatedProjects: Project[]) => {
    saveProjects(updatedProjects)
    setProjects(updatedProjects)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin")
  }

  const handleAddNew = () => {
    setIsEditing(false)
    setEditingProject(null)
    setFormData({
      title: "",
      niche: "",
      description: "",
      category: "WordPress",
      technologies: "",
      image: "",
      liveUrl: "",
      isEbayTemplate: false,
      trustScore: 100,
    })
    setShowForm(true)
  }

  const handleEdit = (project: Project) => {
    setIsEditing(true)
    setEditingProject(project)
    setFormData({
      title: project.title,
      niche: project.niche,
      description: project.description,
      category: project.category,
      technologies: project.technologies.join(", "),
      image: project.image,
      liveUrl: project.liveUrl,
      isEbayTemplate: project.isEbayTemplate,
      trustScore: project.trustScore,
    })
    setShowForm(true)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updatedProjects = projects.filter(p => p.id !== id)
      updateProjects(updatedProjects)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const techArray = formData.technologies
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0)

    if (isEditing && editingProject) {
      // Update existing project
      const updatedProjects = projects.map(p =>
        p.id === editingProject.id
          ? {
              ...p,
              title: formData.title,
              niche: formData.niche,
              description: formData.description,
              category: formData.category,
              technologies: techArray,
              image: formData.image,
              liveUrl: formData.liveUrl,
              isEbayTemplate: formData.isEbayTemplate,
              trustScore: formData.trustScore,
            }
          : p
      )
      updateProjects(updatedProjects)
    } else {
      // Add new project
      const newProject: Project = {
        id: Date.now(),
        title: formData.title,
        niche: formData.niche,
        description: formData.description,
        category: formData.category,
        technologies: techArray,
        image: formData.image,
        liveUrl: formData.liveUrl,
        isEbayTemplate: formData.isEbayTemplate,
        trustScore: formData.trustScore,
      }
      updateProjects([...projects, newProject])
    }

    setShowForm(false)
    setEditingProject(null)
  }

  const categoryColors: Record<string, string> = {
    WordPress: "bg-blue-500/20 text-blue-600 border-blue-500/30",
    "Custom Web": "bg-green-500/20 text-green-600 border-green-500/30",
    Shopify: "bg-purple-500/20 text-purple-600 border-purple-500/30",
    "eBay Templates": "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
  }

  return (
    <div 
      className="min-h-screen p-6"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 
              className="text-4xl font-bold mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              Admin Dashboard
            </h1>
            <p 
              className="text-sm"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Manage your portfolio projects
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleAddNew}
              className="text-white font-semibold rounded-xl"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Project
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="rounded-xl"
              style={{
                borderColor: "rgba(239,68,68,0.3)",
                color: "#dc2626",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group"
            >
              <Card 
                className="overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  border: "2px solid rgba(226,232,240,0.8)",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <span 
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border ${categoryColors[project.category] || "bg-gray-500/20 text-gray-600 border-gray-500/30"}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 
                    className="text-lg font-bold mb-1 line-clamp-1"
                    style={{
                      color: "#0f172a",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-xs mb-2"
                    style={{
                      color: "#94a3b8",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.niche}
                  </p>
                  <p 
                    className="text-sm mb-3 line-clamp-2"
                    style={{
                      color: "#64748b",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(project)}
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-lg"
                      style={{
                        borderColor: "rgba(16,185,129,0.3)",
                        color: "#10b981",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(project.id)}
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-lg"
                      style={{
                        borderColor: "rgba(239,68,68,0.3)",
                        color: "#dc2626",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
                    {!project.isEbayTemplate && project.liveUrl !== "#" && (
                      <Button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        size="sm"
                        variant="outline"
                        className="rounded-lg px-2"
                        style={{
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#64748b",
                        }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <FolderOpen className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p 
              className="text-lg mb-2"
              style={{
                color: "#64748b",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              No projects yet
            </p>
            <Button
              onClick={handleAddNew}
              className="text-white font-semibold rounded-xl mt-4"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Project
            </Button>
          </div>
        )}
      </div>

      {/* Add/Edit Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card 
                className="p-6"
                style={{
                  background: "rgba(255,255,255,0.98)",
                  border: "2px solid rgba(16,185,129,0.2)",
                  borderRadius: "1.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "#0f172a",
                    }}
                  >
                    {isEditing ? "Edit Project" : "Add New Project"}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" style={{ color: "#64748b" }} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Project Title *
                      </label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Modern E-Commerce Store"
                        required
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Niche *
                      </label>
                      <Input
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        placeholder="e.g., E-Commerce Platform"
                        required
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                        className="w-full h-11 px-3 border-2 rounded-lg"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        <option value="WordPress">WordPress</option>
                        <option value="Shopify">Shopify</option>
                        <option value="Custom Web">Custom Web</option>
                        <option value="eBay Templates">eBay Templates</option>
                      </select>
                    </div>

                    <div className="col-span-2">
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Description *
                      </label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Brief description of the project..."
                        required
                        className="min-h-[80px]"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div className="col-span-2">
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Technologies (comma separated) *
                      </label>
                      <Input
                        value={formData.technologies}
                        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                        placeholder="e.g., React, TypeScript, Tailwind CSS"
                        required
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div className="col-span-2">
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Image Path *
                      </label>
                      <Input
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="e.g., /wordpress/project-name.png"
                        required
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                      <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                        Upload image to /public folder first, then enter path
                      </p>
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Live URL
                      </label>
                      <Input
                        value={formData.liveUrl}
                        onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                        placeholder="https://example.com"
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#475569",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Trust Score (0-100)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.trustScore}
                        onChange={(e) => setFormData({ ...formData, trustScore: parseInt(e.target.value) || 100 })}
                        className="h-11"
                        style={{
                          background: "rgba(248,250,252,0.8)",
                          borderColor: "rgba(226,232,240,0.8)",
                          color: "#0f172a",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isEbayTemplate}
                          onChange={(e) => setFormData({ ...formData, isEbayTemplate: e.target.checked })}
                          className="w-4 h-4 rounded"
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{
                            color: "#475569",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          This is an eBay Template
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="flex-1 h-11 rounded-xl"
                      style={{
                        borderColor: "rgba(226,232,240,0.8)",
                        color: "#64748b",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-11 text-white font-semibold rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isEditing ? "Update Project" : "Add Project"}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
