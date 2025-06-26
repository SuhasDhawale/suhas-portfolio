"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Star, Twitter, X, Zap } from "lucide-react"
import Link from "next/link"
import { LazyImage, LazySection } from "@/components/lazy-image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-950 dark:via-blue-950 dark:to-indigo-950"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <LazySection className="space-y-10">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for Projects</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-2">5.0 Client Rating</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-zinc-900 dark:text-zinc-100">I Build</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
                <br />
                <span className="text-zinc-900 dark:text-zinc-100">That Convert</span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl text-zinc-700 dark:text-zinc-300 font-medium">
                  Full Stack Developer & Digital Strategist
                </h2>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  I help businesses grow with{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">high-converting, modern web solutions.</span> From concept to launch, I build websites that don’t just look stunning — they deliver real results like
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {" "}
                    more leads, more customers and more revenue.
                  </span>
                  .
                </p>

                {/* Value Propositions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Lightning Fast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">SEO Optimized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Conversion Focused</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="#contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-zinc-300 dark:border-zinc-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Link href="#projects" className="flex items-center">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                View My Work
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">100%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">24h</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Response Time</div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://github.com/SuhasDhawale"
                target="_blank"
                className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/suhasdhawale"
                target="_blank"
                className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/suhhasx"
                target="_blank"
                className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
              >
                <X className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:suhhas.codes@gmail.com"
                className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </LazySection>

          {/* Hero Image with Lazy Loading */}
          <LazySection animationDelay={300} className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-xl -rotate-12 animate-float delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-yellow-500/20 rounded-full animate-bounce delay-500"></div>

              {/* Main Image Container with Lazy Loading */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-zinc-700 shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <LazyImage
                  src="/images/suhas_img.jpg"
                  alt="Suhas Dhawale - Full Stack Developer"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority={true} // Hero image should load immediately
                />

                {/* Overlay with tech stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 text-xs font-medium rounded-full text-zinc-800 dark:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  )
}
