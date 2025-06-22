"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "SaaS AI Application",
    description:
      "Developed a comprehensive SaaS platform with AI-powered features including video generation, image generation, music creation, AI chat and code generation.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Strapi", "Clerk"],
    category: "Full-stack",
    github: "https://github.com/SuhasDhawale",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Resume Builder",
    description:
      "Built an AI-powered resume builder to automate the creation of professional resumes, improving efficiency and personalization for users.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Render", "Clerk"],
    category: "React",
    github: "https://github.com/SuhasDhawale",
    demo: "#",
    featured: true,
  },
  {
    title: "DocBot Healthcare Platform",
    description:
      "Developed a product-based healthcare website to showcase and promote the DocBot platform with modern design and functionality.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    github: "https://github.com/SuhasDhawale",
    demo: "#",
    featured: false,
  },
  {
    title: "Restin Mattress E-Commerce",
    description:
      "Developed a responsive e-commerce platform for Restin Mattress with comprehensive product catalog and shopping cart functionality.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
    category: "Full-stack",
    github: "https://github.com/SuhasDhawale",
    demo: "#",
    featured: false,
  },
]

const categories = ["All", "Full-stack", "React", "Next.js", "Frontend"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`glass-effect hover:shadow-xl transition-all duration-300 group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600">Featured</Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
