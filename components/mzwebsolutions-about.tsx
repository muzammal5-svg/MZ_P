"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

export function MZwebSolutionsAbout() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-blue-600">About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Experienced Web Developer{" "}
              <span className="text-blue-600">
                Delivering Results
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center p-4 shadow-lg">
                        <img 
                          src="/MZwebsolution.png" 
                          alt="MZwebSolutions Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">M Muzammil</h3>
                      <p className="text-gray-600 text-lg">Web Developer</p>
                    </div>
                  </div>
                  
                  {/* Professional Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">Available for Projects</div>
                          <div className="text-xs text-gray-600">Responding within 2 hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-gray-200 p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5+</div>
                    <div className="text-xs text-gray-600">Years Exp.</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-gray-200 p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-8">
              {/* Name & Title */}
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  M Muzammil
                </h3>
                <div className="text-xl text-blue-600 font-semibold">
                  Professional Web Developer
                </div>
                <div className="text-lg text-gray-600">
                  Founder of MZwebSolutions
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over <span className="text-gray-900 font-semibold">5+ years of experience</span> in web development, 
                  I have helped <span className="text-gray-900 font-semibold">100+ businesses</span> 
                  establish their digital presence and achieve remarkable growth.
                </p>
                
                <p>
                  I specialize in <span className="text-gray-900 font-semibold">WordPress, Shopify, Webflow, and modern frontend technologies</span>, 
                  combining technical expertise with business understanding to deliver solutions that drive real results.
                </p>
                
                <p>
                  My commitment to quality code, user-centric design, and client satisfaction has earned me a reputation 
                  as a trusted partner for businesses worldwide.
                </p>
              </div>

              {/* Key Skills */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "WordPress Expert",
                  "Shopify Developer", 
                  "Webflow Designer",
                  "React Developer",
                  "Frontend Specialist",
                  "Performance Optimization"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 transition-all duration-300 w-full sm:w-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Start a Project
                    </Button>
                  </Link>
                  
                  <Link href="https://wa.me/923417359571?text=Hi! I'd like to schedule a call to discuss my web development project with MZwebSolutions. When would be a good time?">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" />
                      Schedule Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white border-2 border-blue-200 p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </Card>
            
            <Card className="bg-white border-2 border-green-200 p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </Card>
            
            <Card className="bg-white border-2 border-purple-200 p-6 text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}