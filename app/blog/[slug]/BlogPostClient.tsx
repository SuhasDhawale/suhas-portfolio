"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Eye, Heart, Share2, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blogData"
import { useState } from "react"

// Simple markdown-to-HTML converter (basic version)
function parseMarkdown(markdown: string): string {
  return (
    markdown
      // Headers
      .replace(
        /^### (.*$)/gim,
        '<h3 class="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100 leading-tight">$1</h3>',
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="text-3xl md:text-4xl font-bold mb-6 mt-12 text-gray-900 dark:text-gray-100 leading-tight">$1</h2>',
      )
      .replace(
        /^# (.*$)/gim,
        '<h1 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">$1</h1>',
      )

      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-800 dark:text-gray-200">$1</em>')

      // Code blocks
      .replace(
        /```(\w+)?\n([\s\S]*?)```/g,
        '<pre class="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border border-gray-700 mb-6"><code>$2</code></pre>',
      )

      // Inline code
      .replace(
        /`(.*?)`/g,
        '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">$1</code>',
      )

      // Line breaks
      .replace(/\n\n/g, '</p><p class="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">')
      .replace(/\n/g, "<br />")

      // Wrap in paragraph tags
      .replace(/^/, '<p class="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">')
      .replace(/$/, "</p>")
  )
}

export default function BlogPostClient({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="text-white">
            <Badge className="bg-white/20 text-white border-0 mb-6 text-sm px-4 py-2">{post.category}</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-medium">{post.author}</span>
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Article Body */}
          <div className="p-8 lg:p-12">
            {/* Social Share Buttons */}
            <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`hover:bg-red-50 hover:border-red-200 hover:text-red-600 ${liked ? "bg-red-50 border-red-200 text-red-600" : ""}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-current" : ""}`} />
                  {liked ? "Liked" : "Like"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {post.readTime} • {post.views} views
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(post.content),
                }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  SD
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{post.author}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Full Stack Developer & Computer Science Engineering student passionate about creating modern,
                    responsive web applications. Currently building SaaS products and sharing the journey through real
                    stories and practical insights.
                  </p>
                  <div className="flex space-x-6">
                    <Link
                      href="https://www.linkedin.com/in/suhasdhawale"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      LinkedIn →
                    </Link>
                    <Link
                      href="https://github.com/SuhasDhawale"
                      target="_blank"
                      className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium transition-colors"
                    >
                      GitHub →
                    </Link>
                    <Link
                      href="mailto:suhhas.codes@gmail.com"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition-colors"
                    >
                      Email →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Continue Reading</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(blogPosts)
            .filter(([slug]) => slug !== params.slug)
            .slice(0, 2)
            .map(([slug, relatedPost]) => (
              <Card
                key={slug}
                className="hover:shadow-xl transition-all duration-300 group border-0 bg-white dark:bg-gray-800"
              >
                <div className="relative h-48 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden rounded-t-lg">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{relatedPost.readTime}</span>
                    <span>{relatedPost.views} views</span>
                  </div>
                  <Link href={`/blog/${slug}`}>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want More Stories Like This?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new stories about development, entrepreneurship and lessons learned from
            building real projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <Link href="https://x.com/suhhasx" target="_blank">Follow on Twitter</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold">
              <Link href="https://www.linkedin.com/in/suhasdhawale" target="_blank">Follow on LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
