"use client"

import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Zap, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { LazySection } from "@/components/lazy-image"

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Complete Website Development",
    subtitle: "From Concept to Conversion",
    description:
      "I don't just build websites—I create digital experiences that turn visitors into customers. Every line of code is crafted with your business goals in mind.",
    features: [
      "Custom Design & Development",
      "Mobile-First Responsive Design",
      "SEO & Performance Optimization",
      "Content Management Systems",
    ],
    popular: true,
    results: "Average 40% increase in conversions",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Modern Web Applications",
    subtitle: "Scalable & Future-Ready",
    description:
      "Build powerful web applications that grow with your business. Using cutting-edge technologies like React, Next.js and AI integration.",
    features: [
      "React.js & Next.js Development",
      "Real-time Features & APIs",
      "AI-Powered Functionality",
      "Cloud Deployment & Scaling",
    ],
    popular: false,
    results: "50% faster load times guaranteed",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "E-Commerce Solutions",
    subtitle: "Sell More, Stress Less",
    description:
      "Launch your online store with confidence. Complete e-commerce solutions that handle everything from payments to inventory management.",
    features: [
      "Custom Shopping Cart Development",
      "Payment Gateway Integration",
      "Inventory Management System",
      "Analytics & Reporting Dashboard",
    ],
    popular: false,
    results: "Clients see 60% more online sales",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Website Redesign & Optimization",
    subtitle: "Transform Your Digital Presence",
    description:
      "Breathe new life into your existing website. I'll modernize your design, boost performance and improve user experience.",
    features: ["Complete Visual Overhaul", "Speed & Performance Boost", "Mobile Optimization", "SEO Improvements"],
    popular: false,
    results: "Average 3x improvement in page speed",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Maintenance & Support",
    subtitle: "Keep Your Site Running Smoothly",
    description:
      "Focus on your business while I handle the technical stuff. Ongoing maintenance, updates and 24/7 monitoring included.",
    features: ["Regular Security Updates", "Performance Monitoring", "Content Updates & Changes", "Technical Support"],
    popular: false,
    results: "99.9% uptime guarantee",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Landing Page Optimization",
    subtitle: "Convert More Visitors",
    description:
      "High-converting landing pages that turn traffic into leads. Designed with psychology and data-driven insights.",
    features: ["Conversion-Focused Design", "A/B Testing Setup", "Lead Capture Forms", "Analytics Integration"],
    popular: false,
    results: "Average 25% conversion rate increase",
  },
]

const testimonials = [
  {
    quote: "Suhas transformed our online presence completely. Our website now generates 3x more leads!",
    author: "Dinesh Kejariwal",
    company: "CEO, Restin Industries",
  },
  {
    quote: "Professional, fast and delivered exactly what we needed. Highly recommend!",
    author: "Engr. Pradip Bhosale",
    company: "Founder, Pradip Electrical Engineers & Contractors",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <LazySection className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Services That Drive Results</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">I Don't Just Build Websites,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              I Build Your Success
            </span>
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Every project is a partnership. I work closely with you to understand your goals and deliver solutions that
            not only look amazing but drive real business results.
          </p>
        </LazySection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <LazySection key={index} animationDelay={index * 100}>
              <Card
                className={`huly-card hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 group hover:-translate-y-2 border-0 relative overflow-hidden h-full ${
                  service.popular ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{service.subtitle}</p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Results Badge */}
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">✨ {service.results}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 mt-4">
                    <Button className="w-full group bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900">
                      <Link href="#contact">Get Started</Link>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </LazySection>
          ))}
        </div>

        {/* Testimonials */}
        <LazySection animationDelay={600}>
          <div className="bg-white dark:bg-zinc-900/50 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">
              What My Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg italic text-zinc-600 dark:text-zinc-400 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* CTA */}
        <LazySection animationDelay={800} className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Free consultation included with every
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
            >
              <Link href="#contact" className="flex items-center">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              <Link href="#hero">View Portfolio</Link>
            </Button>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
