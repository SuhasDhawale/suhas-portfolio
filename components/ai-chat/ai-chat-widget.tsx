"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Suhas's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
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

  // Simple rule-based AI responses (completely free)
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Skills related
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return "Suhas is skilled in JavaScript, TypeScript, React.js, Next.js, Node.js, Python, and more! He's particularly strong in full-stack development with modern frameworks. He also works with databases like MySQL and tools like Git, VS Code, and cloud platforms."
    }

    // Projects related
    if (message.includes("project") || message.includes("work") || message.includes("built")) {
      return "Suhas has built some impressive projects! His SaaS AI Application includes video generation, image generation, music creation, and AI chat features using Next.js and TypeScript. He also created an AI Resume Builder and worked on healthcare and e-commerce platforms during his internship."
    }

    // Experience related
    if (message.includes("experience") || message.includes("job") || message.includes("internship")) {
      return "Suhas completed a Web Developer Internship at ICEICO Technologies Pvt Ltd from Jan-Jun 2025, where he developed healthcare and e-commerce websites. He's currently pursuing B.Tech in Computer Science Engineering with a CGPA of 7.83/10."
    }

    // Contact related
    if (message.includes("contact") || message.includes("hire") || message.includes("email")) {
      return "You can reach Suhas at suhhas.codes@gmail.com or call him at +91-8766775823. He's also active on GitHub (SuhasDhawale) and LinkedIn. He's currently available for new opportunities!"
    }

    // Education related
    if (message.includes("education") || message.includes("college") || message.includes("study")) {
      return "Suhas is pursuing B.Tech in Computer Science Engineering from G H Raisoni College of Engineering and Management, Nagpur (2021-2025) with a CGPA of 7.83/10. He's also solved 100+ DSA problems on LeetCode, HackerRank & GFG."
    }

    // Location related
    if (message.includes("location") || message.includes("where") || message.includes("nagpur")) {
      return "Suhas is based in Nagpur, Maharashtra, India. He's open to both remote and on-site opportunities globally."
    }

    // Default responses
    const defaultResponses = [
      "That's a great question! Suhas is a passionate full-stack developer with experience in React.js, Next.js, and modern web technologies. What specific aspect would you like to know more about?",
      "I'd be happy to help! You can ask me about Suhas's skills, projects, experience, or how to get in touch with him.",
      "Suhas is always excited to discuss new opportunities and projects. Feel free to ask about his technical expertise or recent work!",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
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

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(input),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 shadow-lg animate-bounce"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white dark:text-zinc-900" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] huly-card shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <CardTitle className="text-lg">AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-[400px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 huly-text-primary"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "ai" && <Bot className="h-4 w-4 mt-0.5 text-blue-500" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-blue-500" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Suhas..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button onClick={handleSend} disabled={isLoading || !input.trim()} size="icon">
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
