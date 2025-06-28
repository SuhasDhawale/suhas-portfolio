"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, User, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AdvancedAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Suhas's advanced AI assistant powered by Hugging Face. I can provide detailed information about his portfolio, skills and projects. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Hugging Face API call (Free tier)
  const getHuggingFaceResponse = async (userMessage: string): Promise<string> => {
    try {
      // Using Hugging Face's free inference API
      const response = await fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium", {
        headers: {
          "Content-Type": "application/json",
          // You can use this without API key for limited requests
          // Or get a free API key from huggingface.co
        },
        method: "POST",
        body: JSON.stringify({
          inputs: {
            past_user_inputs: messages
              .filter((m) => m.sender === "user")
              .slice(-3)
              .map((m) => m.text),
            generated_responses: messages
              .filter((m) => m.sender === "ai")
              .slice(-3)
              .map((m) => m.text),
            text: userMessage,
          },
        }),
      })

      const result = await response.json()
      return result.generated_text || getContextualResponse(userMessage)
    } catch (error) {
      console.error("Hugging Face API error:", error)
      return getContextualResponse(userMessage)
    }
  }

  // Enhanced contextual responses as fallback
  const getContextualResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    const portfolioContext = `
    Suhas Dhawale is a Full Stack Developer and Computer Science Engineering student with expertise in:
    - Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery
    - Backend: Node.js, REST APIs, PHP, Laravel
    - Languages: JavaScript, TypeScript, C, C++, Python
    - Databases: MySQL
    - Tools: Git, GitHub, VS Code, Postman, Supabase, Netlify, Vercel
    
    Key Projects:
    1. SaaS AI Application - AI-powered platform with video/image generation, music creation, chat, and code generation
    2. AI Resume Builder - Automated professional resume creation tool
    3. DocBot Healthcare Platform - Product showcase website
    4. Restin Mattress E-Commerce - Full e-commerce platform with shopping cart
    
    Experience: Web Developer Intern at ICEICO Technologies (Jan-Jun 2025)
    Education: B.Tech CSE from G H Raisoni College, Nagpur (CGPA: 8/10)
    Contact: suhhas.codes@gmail.com, +91-8766775823
    `

    // AI-style contextual responses
    if (message.includes("skill") || message.includes("technology")) {
      return "Suhas has a comprehensive skill set spanning the entire web development stack. His frontend expertise includes React.js and Next.js for building modern, responsive applications, while his backend skills cover Node.js and PHP with Laravel. He's proficient in multiple programming languages including JavaScript, TypeScript, Python, and C++. What specific technology would you like to know more about?"
    }

    if (message.includes("project") || message.includes("portfolio")) {
      return "Suhas has developed several impressive projects that showcase his full-stack capabilities. His standout project is a SaaS AI Application featuring video generation, image creation, music composition, and AI chat functionality - demonstrating his ability to integrate cutting-edge AI technologies. He's also built an AI Resume Builder and worked on healthcare and e-commerce platforms. Which project interests you most?"
    }

    if (message.includes("experience") || message.includes("work")) {
      return "Suhas gained valuable industry experience as a Web Developer Intern at ICEICO Technologies, where he developed both healthcare and e-commerce solutions. This role allowed him to apply his technical skills in real-world scenarios, working with technologies like Laravel, PHP, and MySQL. He's currently pursuing his B.Tech in Computer Science Engineering and is eager to take on new challenges."
    }

    if (message.includes("ai") || message.includes("artificial intelligence")) {
      return "Suhas has hands-on experience with AI technologies, as evidenced by his SaaS AI Application that includes multiple AI-powered features like content generation and intelligent chat systems. He's also built an AI Resume Builder, showing his ability to leverage AI for practical applications. His interest in AI aligns perfectly with current industry trends."
    }

    if (message.includes("hire") || message.includes("available") || message.includes("job")) {
      return "Suhas is actively seeking new opportunities and is available for both full-time positions and freelance projects. With his strong technical foundation, practical experience, and passion for modern web technologies, he'd be a valuable addition to any development team. You can reach him at suhhas.codes@gmail.com or +91-8766775823."
    }

    // Default intelligent response
    return `Based on Suhas's portfolio, I can see he's a talented developer with strong expertise in modern web technologies. ${portfolioContext.slice(0, 200)}... What specific aspect would you like to explore further?`
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const aiResponseText = await getHuggingFaceResponse(input)

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing some technical difficulties. However, I can still help you learn about Suhas's skills and projects! What would you like to know?",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    }

    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Enhanced Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl animate-glow"
          size="icon"
        >
          <Sparkles className="h-7 w-7 text-white" />
        </Button>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] huly-card shadow-2xl border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <p className="text-xs huly-text-muted">Powered by Hugging Face</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-[500px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 huly-text-primary border border-zinc-200 dark:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "ai" && <Sparkles className="h-4 w-4 mt-0.5 text-blue-500" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-blue-500" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Suhas..."
                  className="flex-1 border-2 border-zinc-200 dark:border-zinc-700 focus:border-blue-500"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
