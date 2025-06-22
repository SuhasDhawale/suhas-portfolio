"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Server, Smartphone, Globe, Zap } from "lucide-react"

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks.",
    features: ["React.js & Next.js", "Responsive Design", "Modern UI/UX", "Performance Optimization"],
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, REST APIs, and database integration.",
    features: ["Node.js & Express", "REST API Development", "Database Design", "Authentication"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end web application development from concept to deployment.",
    features: ["Complete Web Apps", "Database Integration", "Cloud Deployment", "Maintenance & Support"],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Web Design",
    description: "Creating beautiful and functional designs that enhance user experience and engagement.",
    features: ["UI/UX Design", "Prototyping", "Brand Identity", "Design Systems"],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Responsive Development",
    description: "Ensuring your website looks and works perfectly on all devices and screen sizes.",
    features: ["Mobile-First Design", "Cross-Browser Testing", "Performance Optimization", "Accessibility"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Optimizing websites for speed, SEO, and better user experience.",
    features: ["Speed Optimization", "SEO Implementation", "Code Splitting", "Image Optimization"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
