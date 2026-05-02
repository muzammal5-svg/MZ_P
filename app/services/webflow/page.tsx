import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Palette, Zap, Smartphone, Database, MousePointer, Eye } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webflow Design Services - MZwebSolutions",
  description: "Professional Webflow design and development services including custom animations, CMS integration, and responsive design by M Muzammil.",
}

export default function WebflowPage() {
  const features = [
    {
      icon: Palette,
      title: "Custom Animations",
      description: "Engaging micro-interactions and smooth animations that bring your website to life."
    },
    {
      icon: Database,
      title: "CMS Integration",
      description: "Dynamic content management with Webflow CMS for easy content updates and scalability."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Pixel-perfect designs that work flawlessly across all devices and screen sizes."
    },
    {
      icon: MousePointer,
      title: "No-Code Solution",
      description: "Visual development approach that allows for easy maintenance and future updates."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code and hosting for lightning-fast loading speeds and better SEO."
    },
    {
      icon: Eye,
      title: "Visual Excellence",
      description: "Stunning visual designs that capture attention and create memorable user experiences."
    }
  ]

  const packages = [
    {
      name: "Landing Page",
      price: "$899",
      description: "Perfect for single-page websites and campaigns",
      features: [
        "Custom Webflow design",
        "Single landing page",
        "Mobile responsive",
        "Basic animations",
        "Contact form integration",
        "1 month support"
      ]
    },
    {
      name: "Business Website",
      price: "$1,899",
      description: "Ideal for business websites with multiple pages",
      features: [
        "Custom Webflow design",
        "Up to 10 pages",
        "Advanced animations",
        "CMS integration",
        "SEO optimization",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$3,499",
      description: "Complete solution for complex websites",
      features: [
        "Custom Webflow design",
        "Unlimited pages",
        "Advanced CMS setup",
        "Custom integrations",
        "Priority support",
        "6 months support"
      ]
    }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 shadow-sm mb-6">
              <Palette className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Webflow Design</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Stunning{" "}
              <span className="text-purple-600">Webflow</span>{" "}
              Websites That Captivate
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Create visually stunning websites with Webflow's powerful design capabilities. 
              From custom animations to seamless CMS integration, I build websites that stand out and perform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4">
                  Start Your Design
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#packages">
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Webflow for Your Website
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Webflow combines the power of code with the ease of visual design for exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-purple-50">
                        <Icon className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                Webflow Design Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package for your Webflow project needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative p-8 ${pkg.popular ? 'border-2 border-purple-500 shadow-lg' : 'border-2 border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="block">
                    <Button className={`w-full ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                      Get Started
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's bring your vision to life with a stunning Webflow website that captures attention and drives results.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}