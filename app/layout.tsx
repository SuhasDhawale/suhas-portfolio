import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { IntelligentAIChatWidget } from "@/components/ai-chat/intelligent-ai-chat"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Suhas Dhawale - Full Stack Developer & Web Designer",
  description:
    "Enthusiastic Computer Science Engineering student with strong programming, problem-solving and web development skills. Specializing in React.js, Next.js, and modern web technologies.",
  keywords: "Suhas Dhawale, Full Stack Developer, Web Developer, React.js, Next.js, JavaScript, Portfolio",
  authors: [{ name: "Suhas Dhawale" }],
  openGraph: {
    title: "Suhas Dhawale - Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sora antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="relative min-h-screen bg-white dark:bg-zinc-950">
            <div className="fixed inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pointer-events-none" />
            <div className="relative z-10">
              <Navbar />
              <main className="relative">{children}</main>
              <Footer />
              <BackToTop />
              <IntelligentAIChatWidget />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
