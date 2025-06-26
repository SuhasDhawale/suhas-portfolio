"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User, Eye } from 'lucide-react'
import { LazyImage, LazySection } from "@/components/lazy-image"
import Link from "next/link"

const blogPosts = [
  {
    title: "My Journey from College Student to Full-Stack Developer",
    excerpt:
      "How I transformed from a curious computer science student to building real-world applications that solve actual problems. The challenges, breakthroughs, and lessons learned along the way.",
    image: "/images/coding.png?height=200&width=400",
    date: "2024-12-20",
    readTime: "8 min read",
    category: "Personal Story",
    slug: "my-developer-journey",
    views: "1.2k",
    featured: true,
  },
  {
    title: "Building My First SaaS: Lessons from the Trenches",
    excerpt:
      "The real story behind creating my AI-powered SaaS platform. From the initial idea to handling 500+ users, here's what I wish I knew before starting.",
    image: "/images/saasblog.jpg?height=200&width=400",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Entrepreneurship",
    slug: "building-first-saas",
    views: "2.1k",
    featured: true,
  },
  {
    title: "Why I Chose React Over Vue (And You Should Too)",
    excerpt:
      "After building projects with both frameworks, here's my honest comparison. Spoiler: it's not just about the syntax, but the ecosystem and job opportunities.",
    image: "/images/react-vue.jpg?height=200&width=400",
    date: "2024-12-10",
    readTime: "6 min read",
    category: "Web Development",
    slug: "react-vs-vue-honest-comparison",
    views: "3.5k",
    featured: false,
  },
  {
    title: "The Internship That Changed Everything",
    excerpt:
      "How my 6-month internship at ICEICO Technologies taught me more than 4 years of college. Real projects, real deadlines, and real growth.",
    image: "/images/intern.jpg?height=200&width=400",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Career",
    slug: "internship-experience",
    views: "1.8k",
    featured: false,
  },
  {
    title: "Freelancing as a Student: My First ₹50,000 Month",
    excerpt:
      "From charging ₹5,000 for a website to earning ₹50,000 in a month. The pricing strategies, client management tips, and mindset shifts that made it possible.",
    image: "/images/money.jpg?height=200&width=400",
    date: "2024-11-28",
    readTime: "10 min read",
    category: "Freelancing",
    slug: "first-50k-month-freelancing",
    views: "4.2k",
    featured: false,
  },
  {
    title: "The AI Tools That 10x My Productivity",
    excerpt:
      "ChatGPT is just the beginning. Here are the AI tools I use daily to code faster, design better, and manage projects more efficiently as a solo developer.",
    image: "/images/ai.jpg?height=200&width=400",
    date: "2024-11-20",
    readTime: "5 min read",
    category: "Productivity",
    slug: "ai-tools-productivity",
    views: "2.7k",
    featured: false,
  },
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700/50 mb-6">
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Personal Insights & Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-100">Real Stories from</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              My Developer Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Honest insights, practical tips, and lessons learned from building real projects and growing as a developer. No fluff, just real experiences.
          </p>
        </LazySection>

        {/* Featured Posts */}
        <LazySection animationDelay={200} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center">
            <div className="w-2 h-8 bg-orange-500 rounded-full mr-4"></div>
            Featured Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <LazySection key={index} animationDelay={index * 150}>
                <Card className="glass-effect hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full border-2 border-orange-200 dark:border-orange-800">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0">
                      {post.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Suhas Dhawale
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                        Read Full Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </LazySection>
            ))}
          </div>
        </LazySection>

        {/* Regular Posts */}
        <LazySection animationDelay={400}>
          <h3 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center">
            <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
            More Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularPosts.map((post, index) => (
              <LazySection key={index} animationDelay={index * 100}>
                <Card className="glass-effect hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-500">{post.category}</Badge>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </LazySection>
            ))}
          </div>
        </LazySection>

        <LazySection animationDelay={600} className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Want to Stay Updated?
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new stories about development, entrepreneurship and lessons learned from building real projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4">
                <Link href="https://x.com/suhhasx" target="_blank">Follow on Twitter</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                <Link href="https://www.linkedin.com/in/suhasdhawale" target="_blank">Follow on LinkedIn</Link>
              </Button>
            </div>
          </div>
        </LazySection>
      </div>
    </section>
  )
}
