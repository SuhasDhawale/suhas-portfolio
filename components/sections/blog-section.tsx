"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { LazyImage, LazySection } from "@/components/lazy-image"

const blogPosts = [
  {
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Next.js",
    slug: "nextjs-15-features",
  },
  {
    title: "The Power of TypeScript in React Development",
    excerpt:
      "Learn how TypeScript can enhance your React development experience with better type safety and developer productivity.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "TypeScript",
    slug: "typescript-react-development",
  },
  {
    title: "Optimizing Web Performance: A Complete Guide",
    excerpt:
      "Comprehensive guide to web performance optimization techniques including image optimization, code splitting, and caching strategies.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-12-05",
    readTime: "10 min read",
    category: "Performance",
    slug: "web-performance-optimization",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development
          </p>
        </LazySection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <LazySection key={index} animationDelay={index * 150}>
              <Card className="glass-effect hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden rounded-t-lg">
                  <LazyImage
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-500">{post.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </LazySection>
          ))}
        </div>

        <LazySection className="text-center">
          <Button size="lg" variant="outline">
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </LazySection>
      </div>
    </section>
  )
}
