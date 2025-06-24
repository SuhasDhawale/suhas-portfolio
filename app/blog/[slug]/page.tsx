import type { Metadata } from "next"
import { blogPosts } from "./data"
import BlogPostClient from "./BlogPostClient"
import { notFound } from "next/navigation"

// Generate SEO metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug?.toLowerCase() || "")
  const post = Object.entries(blogPosts).find(([key]) => key.toLowerCase() === slug)?.[1]

  if (!post) {
    return {
      title: "Blog Post Not Found | Suhas Dhawale",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Suhas Dhawale`,
    description: post.excerpt,
    keywords: `${post.category}, web development, programming, ${post.title}`,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate all static paths
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

// Main server-side wrapper
export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug?.toLowerCase() || "")
  const post = Object.entries(blogPosts).find(([key]) => key.toLowerCase() === slug)?.[1]

  if (!post) {
    notFound()
  }

  return <BlogPostClient params={{ slug }} />
}
