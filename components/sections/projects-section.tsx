"use client"

import Link from "next/link"

import { useState } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import { LazyImage, LazySection } from "@/components/lazy-image"

const projects = [
  {
  title: "Jaghumeiya Travel",
  subtitle: "Premium Travel & Tour Booking Platform",
  description:
    "A modern travel website built for Jaghumeiya Travel — offering global tour packages, curated itineraries and expert travel guidance. The platform showcases destinations, services and travel benefits with a clean and trustworthy design.",
  image: "/images/jaghumeiya.png?height=400&width=600",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  category: "Frontend",
  github: "https://github.com/SuhasDhawale",
  demo: "https://jaghumeiya.com/",
  featured: true,
  results: {
    metric1: { value: "50+ Destinations", label: "Worldwide Coverage" },
    metric2: { value: "5,000+ Clients", label: "Happy Travelers Served" },
    metric3: { value: "24/7 Support", label: "Always Available Assistance" },
  },
  clientQuote:
    "The website beautifully represents our brand and services. It feels premium, loads fast, and has increased customer inquiries significantly.",
  tags: ["Travel", "Service Website", "Product Showcase", "Responsive Design"],
},
  {
    title: "Healthcare Platform",
    subtitle: "DocBot Medical Solution",
    description:
      "A modern frontend website for DocBot Health Pod — a smart health kiosk delivering clinical-grade tests in under a minute. The platform highlights its features, benefits and technology to promote accessible preventive healthcare.",
    image: "/images/docbot.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    github: "https://github.com/SuhasDhawale",
    demo: "https://web.docbot.in/",
    featured: true,
    results: {
      metric1: { value: "1000+", label: "Patients Served" },
      metric2: { value: "50+", label: "Health Parameters Tracked" },
      metric3: { value: "99%", label: "Uptime" },
    },
    clientQuote: "The site clearly communicates the capabilities of the DocBot Health Pod. It’s fast, informative and designed to build trust in our healthcare innovation.",
    tags: ["Healthcare", "Product Showcase", "Secure"],
  },
  {
    title: "E-Commerce Powerhouse",
    subtitle: "Restin Mattress Store",
    description:
      "Full-featured e-commerce platform with advanced product catalog, smart search, secure payments and comprehensive admin dashboard.",
    image: "/images/restin.png?height=400&width=600",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
    category: "Full-stack",
    github: "https://github.com/SuhasDhawale",
    demo: "https://sharda.abvideopro.com/",
    featured: true,
    results: {
      metric1: { value: "300%", label: "Sales Increase" },
      metric2: { value: "5000+", label: "Products Sold" },
      metric3: { value: "4.8/5", label: "Customer Rating" },
    },
    clientQuote: "Our online sales tripled within 3 months!",
    tags: ["E-commerce", "High Performance", "Sales Booster"],
  },
  {
  title: "Bella Vista Restaurant Website",
  subtitle: "Modern Italian Dining Landing Page",
  description:
    "A responsive and elegant landing page for an Italian restaurant built using modern web technologies. Includes sections for menu, reservation, gallery and contact — with a focus on refined layout, usability and brand feel.",
  image: "/images/cafe.png?width=711&height=400",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  category: "Frontend",
  github: "https://github.com/SuhasDhawale/cafe-restro-website-demo",
  demo: "https://bellavistarestaurant.netlify.app/",
  featured: false,
  results: {
    metric1: { value: "100%", label: "Mobile Responsive" },
    metric2: { value: "6+", label: "Custom UI Sections" },
    metric3: { value: "0", label: "Framework Overhead" },
  },
  clientQuote: "A sleek and modern digital presence for fine dining — minimal, elegant and built for conversion.",
  tags: ["Next.js", "Tailwind", "Restaurant Site", "Landing Page"],
},
  {
    title: "AI-Powered SaaS Platform",
    subtitle: "Complete Business Solution",
    description:
      "Revolutionary SaaS platform featuring AI-driven video generation, image creation, music composition and intelligent chat. Built for scalability and user engagement.",
    image: "/images/ai-saas.png?height=400&width=600",
    technologies: ["Next.js", "React", "TypeScript", "AI APIs", "Stripe", "Clerk"],
    category: "Full-stack",
    github: "https://github.com/SuhasDhawale/Fusion-AI",
    demo: "https://drive.google.com/file/d/1mj54jMZmJ8eu17ZVh69MsDKbDkmXZVj1/view",
    featured: false,
    results: {
      metric1: { value: "4+", label: "AI Tools Integrated" },
      metric2: { value: "100%", label: "Responsive UI/UX" },
      metric3: { value: "10/10", label: "Scalability Score (Tested)" },
    },
    clientQuote:
      "This project pushed my technical and creative limits — from multi-model AI integration to secure SaaS architecture.",
    tags: ["AI Tools", "Full-stack SaaS", "Creative Automation"],
  },
  {
    title: "Smart Resume Builder",
    subtitle: "AI-Enhanced Career Tool",
    description:
      "Intelligent resume builder that uses AI to optimize content, suggest improvements and create professional resumes that get noticed by recruiters.",
    image: "/images/ai-resume1.png?height=400&width=600",
    technologies: ["React", "AI APIs", "Tailwind CSS", "Node.js", "MongoDB"],
    category: "Frontend",
    github: "https://github.com/SuhasDhawale/Ai-Resume-Builder",
    demo: "https://airesumebuilder-suhas.netlify.app/",
    featured: false,
    results: {
      metric1: { value: "100+", label: "Resumes Created" },
      metric2: { value: "85%", label: "Interview Rate" },
      metric3: { value: "4.9/5", label: "User Rating" },
    },
    clientQuote: "This project helped me learn to build scalable AI tools and solve real-world problems effectively.",
    tags: ["AI-Powered", "Career Tool", "High Conversion"],
  },
{
  title: "Kids Quizzland 🌟",
  subtitle: "Fun Learning Platform for Children",
  description:
    "Kids Quizzland is an interactive, educational quiz website designed for kids aged 6–15. It offers a playful way to improve knowledge in Math, English and General Knowledge through fun quizzes, stickers and responsive layouts. Built with a focus on engagement and accessibility.",
  image: "/images/quiz.png?width=711&height=400",
  technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  category: "Frontend",
  github: "https://github.com/SuhasDhawale/icp-8.0-html-css-js-group-project-3",
  demo: "https://kids-quizzland.netlify.app",
  featured: false,
  results: {
    metric1: { value: "3+", label: "Fun Games Added" },
    metric2: { value: "100%", label: "Mobile-Friendly" },
    metric3: { value: "4", label: "Knowledge Categories" },
  },
  clientQuote:
    "This platform makes learning fun and exciting for kids. It’s colorful, interactive and built with love for education.",
  tags: ["Education", "Quizzes", "Fun Learning", "Kids", "Interactive"],
},
]

const categories = ["All Projects", "Full-stack", "Frontend", "AI-Powered"]

// Project Card Component with improved layout
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <LazySection animationDelay={index * 150}>
      <Card className="huly-card hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 group border-0 overflow-hidden h-full flex flex-col">
        {/* Project Image with Fixed Aspect Ratio */}
        <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700">
          <LazyImage
            src={project.image || "/placeholder.svg?height=400&width=600"}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay with Quick Actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                  <Badge key={tagIndex} className="bg-white/90 text-zinc-800 hover:bg-white text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-2">
                <Button size="sm" variant="secondary" asChild className="h-8 px-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3" />
                  </a>
                </Button>
                <Button size="sm" asChild className="h-8 px-3 bg-white text-zinc-900 hover:bg-zinc-100">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-white/90 text-zinc-800 text-xs font-medium">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Header */}
          <div className="mb-4">
            <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {project.title}
            </CardTitle>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{project.subtitle}</p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Results Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {project.results.metric1.value}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                {project.results.metric1.label}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.results.metric2.value}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                {project.results.metric2.label}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {project.results.metric3.value}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-1">
                {project.results.metric3.label}
              </div>
            </div>
          </div>

          {/* Client Quote */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 rounded-r-lg mb-4">
            <p className="text-sm italic text-blue-700 dark:text-blue-300 line-clamp-2">"{project.clientQuote}"</p>
          </div>

          {/* Technologies */}
          <div className="mb-4 flex-1">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="text-xs border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs border-zinc-300 dark:border-zinc-600">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </LazySection>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory || project.tags.includes(activeCategory))

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <LazySection className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 mb-6">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">Projects That</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Drive Real Results
            </span>
          </h2>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Each project tells a success story. From startups to established businesses, I've helped clients achieve
            their goals with innovative web solutions.
          </p>
        </LazySection>

        {/* Filter Buttons */}
        <LazySection animationDelay={200} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "hover:border-purple-500 dark:hover:border-purple-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </LazySection>

        {/* Projects Grid - Improved Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${activeCategory}`} project={project} index={index} />
          ))}
        </div>

        {/* Loading State for Empty Results */}
        {filteredProjects.length === 0 && (
          <LazySection className="text-center py-16">
            <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">No projects found</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Try selecting a different category.</p>
          </LazySection>
        )}

        {/* CTA Section */}
        <LazySection
          animationDelay={600}
          className="text-center mt-20 p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Your project could be the next success story in my portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4">
              <Link href="#contact">Schedule a Call</Link>
            </Button>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
