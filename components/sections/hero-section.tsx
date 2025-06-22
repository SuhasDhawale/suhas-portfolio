"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium huly-text-secondary tracking-wide">Available for work</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm <span className="huly-text-primary block mt-2">Suhas Dhawale</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl huly-text-secondary font-medium tracking-wide">
                Full Stack Developer & Web Designer
              </h2>

              <p className="text-lg huly-text-muted max-w-2xl leading-relaxed">
                Enthusiastic Computer Science Engineering student with strong programming, problem-solving and web
                development skills. I create modern, responsive web applications using React.js, Next.js, and
                cutting-edge technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-xl px-8 py-6 text-base font-medium tracking-wide"
              >
                <Link href="#contact" className="flex items-center">
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 rounded-xl px-8 py-6 text-base font-medium tracking-wide"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </Button>
            </div>

            <div className="flex space-x-6 pt-4">
              <Link
                href="https://github.com/SuhasDhawale"
                target="_blank"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 huly-text-secondary hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/suhasdhawale"
                target="_blank"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 huly-text-secondary hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:suhasdhawale57@gmail.com"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 huly-text-secondary hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded-3xl animate-pulse opacity-20"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-2xl animate-float">
                <Image
                  src="/placeholder.svg?height=384&width=384"
                  alt="Suhas Dhawale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
