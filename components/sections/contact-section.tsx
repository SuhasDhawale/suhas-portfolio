"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Shield,
  X,
} from "lucide-react"
import { LazySection } from "@/components/lazy-image"

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Me",
    description: "Get a response within 2 hours",
    value: "suhasdhawale57@gmail.com",
    action: "mailto:suhasdhawale57@gmail.com",
    color: "bg-blue-500",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Me",
    description: "Available 9 AM - 9 PM IST",
    value: "+91-8766775823",
    action: "tel:+918766775823",
    color: "bg-green-500",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    description: "Available for remote & on-site",
    value: "Nagpur, Maharashtra, India",
    action: "#",
    color: "bg-purple-500",
  },
]

const projectTypes = [
  "New Website Development",
  "Website Redesign",
  "E-commerce Store",
  "Web Application",
  "Landing Page",
  "Maintenance & Support",
  "Other",
]

const guarantees = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24-Hour Response",
    description: "I'll get back to you within 24 hours, guaranteed.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Free Consultation",
    description: "30-minute strategy call to discuss your project.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "100% Satisfaction",
    description: "I don't stop until you're completely happy.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get your money back, no questions asked.",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
   try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })

  const result = await response.json()

  if (!response.ok) {
    alert(result.error || "Failed to send message. Please try again.")
  } else {
    alert("✅ Message sent successfully! Check your email for confirmation.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    })
  }
} catch (error) {
  alert("Something went wrong. Please try again.")
  console.error("Email error:", error)
} finally {
  setIsSubmitting(false)
}

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-950 dark:via-blue-950 dark:to-indigo-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <LazySection className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for New Projects</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">Let's Build Something</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with a stunning website? Let's discuss your project and create something
            that drives real results for your business.
          </p>
        </LazySection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <LazySection animationDelay={200} className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Get In Touch</h3>

              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{method.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{method.description}</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Guarantees */}
            <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                My Guarantees
              </h4>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-green-500 mt-0.5">{guarantee.icon}</div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">{guarantee.title}</p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">{guarantee.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SuhasDhawale"
                  target="_blank"
                  className="w-12 h-12 bg-zinc-800 dark:bg-zinc-700 rounded-xl flex items-center justify-center text-white hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors hover:scale-110 transform duration-200"
                  rel="noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/suhasdhawale"
                  target="_blank"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-110 transform duration-200"
                  rel="noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/suhhasx"
                  target="_blank"
                  className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors hover:scale-110 transform duration-200"
                  rel="noreferrer"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
          </LazySection>

          {/* Contact Form */}
          <LazySection animationDelay={400} className="lg:col-span-2">
            <Card className="huly-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Start Your Project Today
                </CardTitle>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Fill out the form below and I'll get back to you within 24 hours with a detailed proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      >
                        <option value="">Select budget range</option>
                        <option value="₹3,000 - ₹15,000">₹3,000 - ₹15,000</option>
                        <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP (Rush job)">ASAP (Rush job)</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2+ months">2+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Send Project Details
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                    By submitting this form, you agree to receive project-related communications. I respect your privacy
                    and will never spam you.
                  </p>
                </form>
              </CardContent>
            </Card>
          </LazySection>
        </div>

        {/* Bottom CTA */}
        <LazySection
          animationDelay={600}
          className="text-center mt-20 p-8 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Prefer to Talk Directly?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            
            Schedule a free 30-minute consultation call to discuss your project in detail.
          </p>
          <Button size="lg" variant="outline" className="px-8 py-4">
            Schedule Free Call
          </Button>
        </LazySection>
      </div>
    </section>
  )
}
