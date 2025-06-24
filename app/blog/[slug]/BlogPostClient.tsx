"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { blogPosts } from "./data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  ArrowRight,
} from "lucide-react"

// Simple markdown-to-HTML parser
function parseMarkdown(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl md:text-3xl font-semibold mb-4 mt-8">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl md:text-4xl font-bold mb-6 mt-12">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl md:text-5xl font-bold mb-8">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, "<br />")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>")
}

export default function BlogPostClient({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug?.toLowerCase() || "")
  const post = Object.entries(blogPosts).find(([key]) => key.toLowerCase() === slug)?.[1]

  if (!post) notFound()

  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="text-white">
            <Badge className="bg-white/20 text-white border-0 mb-6 text-sm px-4 py-2">
              {post.category}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {post.views} views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Image */}
          <div className="relative h-96">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Body */}
          <div className="p-8 lg:p-12">
            <div className="flex items-center justify-between mb-12 pb-8 border-b">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`hover:bg-red-50 hover:text-red-600 ${liked ? "bg-red-50 text-red-600" : ""}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  {liked ? "Liked" : "Like"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigator.share?.({ title: post.title, url: window.location.href })
                  }
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="text-sm text-gray-500">{post.readTime} • {post.views} views</div>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
            />
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold mb-8">Continue Reading</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(blogPosts)
            .filter(([slug]) => slug.toLowerCase() !== slug)
            .slice(0, 2)
            .map(([slug, relatedPost]) => (
              <Card key={slug}>
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{relatedPost.category}</Badge>
                  <h3 className="text-xl font-bold mb-3">{relatedPost.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                  <Link href={`/blog/${slug}`}>
                    <Button variant="ghost" className="w-full">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  )
}
