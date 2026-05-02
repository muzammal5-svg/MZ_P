import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code, ShoppingCart, Palette, Store, Zap, Sparkles, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services - MZwebSolutions",
  description: "Professional web development services including WordPress, Shopify, eBay templates, and modern frontend development by M Muzammil.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and performance optimization for scalable business websites.",
      icon: Code,
      features: ["Custom Theme Development", "Plugin Integration", "Performance Optimization", "SEO Ready"],
      href: "/services/wordpress",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      price: "Starting at $2,500"
    },
    {
      title: "Shopify Development",
      description: "High-converting eCommerce stores with custom themes and seamless checkout experiences.",
      icon: ShoppingCart,
      features: ["Custom Store Design", "Payment Integration", "Inventory Management", "Mobile Optimized"],
      href: "/services/shopify",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      price: "Starting at $3,000"
    },
    {
      title: "eBay Listing Templates",
      description: "Professional eBay listing templates that increase conversions and maintain brand consistency.",
      icon: Store,
      features: ["Professional Templates", "Mobile Responsive", "Brand Consistency", "Conversion Optimized"],
      href: "/services/ebay-templates",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      price: "Starting at $500"
    },
    {
      title: "Frontend Development",
      description: "Modern frontend solutions using React, Next.js, TypeScript, and cutting-edge technologies.",
      icon: Zap,
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      href: "/services/frontend",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30",
      price: "Starting at $3,500"
    }
  ]

  return (
    <div className="bg-gradient-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-white">Premium Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8"
            >
              <span className="text-white">Professional Web Development</span>{" "}
              <span className="text-gradient block">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              I specialize in creating high-quality web solutions that help businesses grow online. 
              From custom development to performance optimization, I deliver results that exceed expectations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/20 mb-8">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-white">My Expertise</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Choose Your</span>{" "}
                <span className="text-gradient">Perfect Service</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Each service is crafted with precision and delivered with excellence. Explore my comprehensive range of web development solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {services.slice(0, 4).map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="glass-card border-white/10 hover-lift transition-all duration-500 h-full overflow-hidden">
                      <div className="p-8">
                        {/* Service Icon */}
                        <div className="mb-6">
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor}`}>
                            <Icon className={`h-8 w-8 ${service.color}`} />
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <span className={`text-sm font-semibold ${service.color}`}>
                              {service.price}
                            </span>
                          </div>
                          
                          <p className="text-gray-400 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Features List */}
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-3 text-sm">
                                <CheckCircle className={`w-4 h-4 ${service.color}`} />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <Link href={service.href}>
                            <Button 
                              variant="outline" 
                              className="w-full glass border-white/20 text-white hover:bg-white/10 group-hover:border-primary/50 transition-all duration-300"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Frontend Development - Full Width */}
            <div className="max-w-5xl mx-auto">
              {services.slice(4).map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="glass-card border-white/10 hover-lift transition-all duration-500 overflow-hidden">
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            {/* Service Icon */}
                            <div className="mb-6">
                              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} border ${service.borderColor}`}>
                                <Icon className={`h-8 w-8 ${service.color}`} />
                              </div>
                            </div>

                            {/* Service Content */}
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                  {service.title}
                                </h3>
                                <span className={`text-sm font-semibold ${service.color}`}>
                                  {service.price}
                                </span>
                              </div>
                              
                              <p className="text-gray-400 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          <div>
                            {/* Features List */}
                            <ul className="space-y-3 mb-6">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center gap-3">
                                  <CheckCircle className={`w-4 h-4 ${service.color}`} />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href={service.href}>
                              <Button className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                                <span>Learn More</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Custom Solutions</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Need a{" "}
              <span className="text-gradient">Custom Solution?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly and drives exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-blue hover:bg-gradient-purple text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/portfolio">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}