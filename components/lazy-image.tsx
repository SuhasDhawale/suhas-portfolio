"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"
import Image from "next/image"

// Custom hook for intersection observer
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}

// Reusable Lazy Image Component
export function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL,
  ...props
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  [key: string]: any
}) {
  const { ref, hasIntersected } = useIntersectionObserver()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // If priority is true, load immediately
  if (priority) {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        {...props}
      />
    )
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {hasIntersected ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center animate-pulse">
              <div className="flex flex-col items-center space-y-2">
                <Loader2 className="w-8 h-8 animate-spin text-zinc-400" />
                <span className="text-sm text-zinc-500">Loading...</span>
              </div>
            </div>
          )}
          {hasError ? (
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-2xl">🖼️</span>
                </div>
                <span className="text-sm text-zinc-500">Image unavailable</span>
              </div>
            </div>
          ) : (
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false)
                setHasError(true)
              }}
              {...props}
            />
          )}
        </>
      ) : (
        // Skeleton placeholder while not in viewport
        <div className="w-full h-full bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
                <span className="text-xl">📷</span>
              </div>
              <span className="text-sm text-zinc-400">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Lazy Section Component for content sections
export function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  animationDelay = 0,
}: {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animationDelay?: number
}) {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold, rootMargin })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
    >
      {children}
    </div>
  )
}
