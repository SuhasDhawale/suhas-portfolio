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

interface ConversationContext {
  previousQuestions: string[]
  userInterests: string[]
  conversationFlow: string
}

export function IntelligentAIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Suhas's AI assistant. I can answer questions about his work, general programming topics, career advice, or anything else you'd like to know. What's on your mind?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [context, setContext] = useState<ConversationContext>({
    previousQuestions: [],
    userInterests: [],
    conversationFlow: "greeting",
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI Knowledge Base
  const knowledgeBase = {
    // Suhas's Portfolio Information
    portfolio: {
      name: "Suhas Bhimrao Dhawale",
      title: "Full Stack Developer & Web Designer",
      location: "Nagpur, Maharashtra, India",
      phone: "+91-8766775823",
      email: "suhhas.codes@gmail.com",
      github: "https://github.com/SuhasDhawale",
      linkedin: "https://www.linkedin.com/in/suhasdhawale",

      skills: {
        programming: ["JavaScript", "TypeScript", "C", "C++", "Python", "PHP"],
        frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
        backend: ["Node.js", "REST APIs", "Laravel", "Strapi"],
        database: ["MySQL"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "Supabase", "Netlify", "Vercel", "Render", "Clerk"],
      },

      projects: [
        {
          name: "SaaS AI Application",
          description:
            "Comprehensive SaaS platform with AI-powered features including video generation, image generation, music creation, AI chat and code generation",
          technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Strapi", "Clerk"],
          type: "Full-stack",
        },
        {
          name: "AI Resume Builder",
          description:
            "AI-powered resume builder to automate the creation of professional resumes, improving efficiency and personalization",
          technologies: ["React", "Tailwind CSS", "JavaScript", "Render", "Clerk"],
          type: "Frontend",
        },
        {
          name: "DocBot Healthcare Platform",
          description: "Product-based healthcare website to showcase and promote the DocBot platform",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
          type: "Frontend",
        },
        {
          name: "Restin Mattress E-Commerce",
          description: "Responsive e-commerce platform with product catalog and shopping cart functionality",
          technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
          type: "Full-stack",
        },
      ],

      experience: {
        current: "Web Developer Intern at ICEICO Technologies Pvt Ltd (Jan-Jun 2025)",
        education:
          "B.Tech in Computer Science Engineering from G H Raisoni College of Engineering and Management, Nagpur (2021-2025, CGPA: 7.83/10)",
        achievements: [
          "100+ DSA problems solved on LeetCode, HackerRank & GFG",
          "Participated in college hackathons and coding contests",
        ],
      },
    },

    // General Programming Knowledge
    programming: {
      concepts: {
        react:
          "React is a JavaScript library for building user interfaces, particularly web applications. It uses a component-based architecture and virtual DOM for efficient rendering.",
        nextjs:
          "Next.js is a React framework that provides features like server-side rendering, static site generation, and API routes out of the box.",
        javascript:
          "JavaScript is a versatile programming language used for web development, both frontend and backend. It's dynamic, interpreted, and supports multiple programming paradigms.",
        typescript:
          "TypeScript is a superset of JavaScript that adds static type definitions, helping catch errors early and improve code maintainability.",
        nodejs:
          "Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing JavaScript to run on servers and build scalable network applications.",
        api: "API (Application Programming Interface) is a set of protocols and tools for building software applications, defining how components should interact.",
        database:
          "A database is an organized collection of data stored and accessed electronically. Common types include relational (SQL) and non-relational (NoSQL) databases.",
        git: "Git is a distributed version control system for tracking changes in source code during software development.",
        responsive:
          "Responsive design ensures websites work well on all devices and screen sizes using flexible layouts, images, and CSS media queries.",
      },

      advice: {
        learning:
          "Start with fundamentals, build projects, practice regularly, join communities, and never stop learning. The tech field evolves rapidly!",
        career:
          "Focus on building a strong portfolio, contribute to open source, network with other developers, and stay updated with industry trends.",
        interview:
          "Practice coding problems, understand system design basics, prepare behavioral questions, and showcase your projects confidently.",
        freelancing:
          "Build a strong portfolio, start with smaller projects, deliver quality work on time, communicate clearly with clients, and gradually increase your rates.",
      },
    },

    // General Knowledge Topics
    general: {
      ai: "Artificial Intelligence involves creating systems that can perform tasks typically requiring human intelligence, like learning, reasoning, and problem-solving.",
      "web development":
        "Web development involves creating websites and web applications using various technologies for frontend (user interface) and backend (server-side logic).",
      "software engineering":
        "Software engineering is the systematic approach to designing, developing, testing, and maintaining software applications using engineering principles.",
      "technology trends":
        "Current tech trends include AI/ML, cloud computing, microservices, serverless architecture, progressive web apps, and low-code/no-code platforms.",
      "best practices":
        "Good coding practices include writing clean, readable code, following design patterns, testing thoroughly, documenting well, and using version control.",
    },
  }

  // Advanced Question Analysis
  const analyzeQuestion = (question: string) => {
    const lowerQuestion = question.toLowerCase()
    const questionWords = [
      "what",
      "how",
      "why",
      "when",
      "where",
      "who",
      "which",
      "can",
      "should",
      "would",
      "could",
      "is",
      "are",
      "do",
      "does",
      "will",
    ]
    const isQuestion = questionWords.some((word) => lowerQuestion.includes(word)) || question.includes("?")

    // Categorize the question
    let category = "general"
    let confidence = 0.5

    // Portfolio-related keywords
    const portfolioKeywords = [
      "suhas",
      "portfolio",
      "project",
      "skill",
      "experience",
      "work",
      "hire",
      "contact",
      "resume",
      "education",
    ]
    if (portfolioKeywords.some((keyword) => lowerQuestion.includes(keyword))) {
      category = "portfolio"
      confidence = 0.9
    }

    // Programming-related keywords
    const programmingKeywords = [
      "code",
      "programming",
      "development",
      "react",
      "javascript",
      "typescript",
      "nextjs",
      "node",
      "api",
      "database",
      "git",
    ]
    if (programmingKeywords.some((keyword) => lowerQuestion.includes(keyword))) {
      category = "programming"
      confidence = 0.8
    }

    // Career advice keywords
    const careerKeywords = ["career", "job", "interview", "advice", "learn", "study", "freelance", "salary", "remote"]
    if (careerKeywords.some((keyword) => lowerQuestion.includes(keyword))) {
      category = "career"
      confidence = 0.7
    }

    return { category, confidence, isQuestion }
  }

  // Intelligent Response Generation
  const generateIntelligentResponse = (userMessage: string, conversationContext: ConversationContext): string => {
    const analysis = analyzeQuestion(userMessage)
    const lowerMessage = userMessage.toLowerCase()

    // Update context
    const updatedContext = {
      ...conversationContext,
      previousQuestions: [...conversationContext.previousQuestions, userMessage].slice(-5), // Keep last 5 questions
    }

    // Portfolio-specific responses
    if (analysis.category === "portfolio") {
      return generatePortfolioResponse(lowerMessage)
    }

    // Programming-specific responses
    if (analysis.category === "programming") {
      return generateProgrammingResponse(lowerMessage)
    }

    // Career advice responses
    if (analysis.category === "career") {
      return generateCareerResponse(lowerMessage)
    }

    // General conversation responses
    return generateGeneralResponse(lowerMessage, updatedContext)
  }

  const generatePortfolioResponse = (message: string): string => {
    const { portfolio } = knowledgeBase

    // Skills-related
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      const allSkills = [
        ...portfolio.skills.programming,
        ...portfolio.skills.frontend,
        ...portfolio.skills.backend,
        ...portfolio.skills.database,
        ...portfolio.skills.tools,
      ]
      return `Suhas has a comprehensive skill set including:\n\n🔧 **Programming Languages**: ${portfolio.skills.programming.join(", ")}\n\n⚛️ **Frontend**: ${portfolio.skills.frontend.join(", ")}\n\n🔙 **Backend & Database**: ${portfolio.skills.backend.join(", ")}, ${portfolio.skills.database.join(", ")}\n\n🛠️ **Tools**: ${portfolio.skills.tools.join(", ")}\n\nHe's particularly strong in modern JavaScript frameworks and full-stack development. What specific technology would you like to know more about?`
    }

    // Projects-related
    if (
      message.includes("project") ||
      message.includes("work") ||
      message.includes("built") ||
      message.includes("portfolio")
    ) {
      const featuredProjects = portfolio.projects.slice(0, 2)
      return `Suhas has built several impressive projects:\n\n${featuredProjects
        .map(
          (project) =>
            `**${project.name}**: ${project.description}\n*Technologies*: ${project.technologies.join(", ")}`,
        )
        .join(
          "\n\n",
        )}\n\nHe's also worked on ${portfolio.projects.length - 2} other projects including healthcare and e-commerce platforms. Each project demonstrates his ability to work with modern technologies and solve real-world problems. Would you like details about any specific project?`
    }

    // Contact/Hire related
    if (
      message.includes("contact") ||
      message.includes("hire") ||
      message.includes("email") ||
      message.includes("phone")
    ) {
      return `You can reach Suhas through multiple channels:\n\n📧 **Email**: ${portfolio.email}\n📱 **Phone**: ${portfolio.phone}\n💼 **LinkedIn**: ${portfolio.linkedin}\n👨‍💻 **GitHub**: ${portfolio.github}\n📍 **Location**: ${portfolio.location}\n\nHe's currently available for new opportunities and would love to discuss how he can help with your project!`
    }

    // Experience related
    if (
      message.includes("experience") ||
      message.includes("job") ||
      message.includes("internship") ||
      message.includes("work")
    ) {
      return `Suhas has valuable industry experience:\n\n💼 **Current Role**: ${portfolio.experience.current}\n🎓 **Education**: ${portfolio.experience.education}\n🏆 **Achievements**: ${portfolio.experience.achievements.join(", ")}\n\nDuring his internship, he developed both healthcare and e-commerce solutions, gaining hands-on experience with real-world applications. He's passionate about learning and growing in the tech industry.`
    }

    // Default portfolio response
    return `Suhas Dhawale is a talented Full Stack Developer and Computer Science Engineering student from Nagpur, India. He specializes in modern web technologies like React.js, Next.js, and has built several impressive projects including AI-powered applications. He's currently seeking new opportunities to apply his skills and grow professionally. What would you like to know more about?`
  }

  const generateProgrammingResponse = (message: string): string => {
    const { programming } = knowledgeBase

    // Check for specific programming concepts
    for (const [concept, explanation] of Object.entries(programming.concepts)) {
      if (message.includes(concept)) {
        return `${explanation}\n\nSuhas has hands-on experience with ${concept} and has used it in several of his projects. Would you like to know how he's applied this technology in his work?`
      }
    }

    // Learning advice
    if (message.includes("learn") || message.includes("start") || message.includes("beginner")) {
      return `${programming.advice.learning}\n\nSuhas followed a similar path - he started with fundamentals, built projects like his SaaS AI Application and AI Resume Builder, and continuously practiced by solving 100+ DSA problems. The key is consistent practice and building real projects!`
    }

    // Best practices
    if (message.includes("best practice") || message.includes("clean code") || message.includes("good code")) {
      return `${knowledgeBase.general["best practices"]}\n\nSuhas demonstrates these practices in his projects - you can see his clean, well-structured code on his GitHub. He uses modern development practices like TypeScript for type safety, component-based architecture, and proper version control.`
    }

    // General programming response
    return `That's a great programming question! Programming is all about solving problems efficiently and creating useful applications. Suhas has experience with multiple programming languages and frameworks, and he's always excited to discuss technical topics. Could you be more specific about what aspect of programming you'd like to explore?`
  }

  const generateCareerResponse = (message: string): string => {
    const { programming } = knowledgeBase

    if (message.includes("career") || message.includes("advice")) {
      return `${programming.advice.career}\n\nSuhas is a great example of this approach - he's built a strong portfolio with diverse projects, gained practical experience through internships, and actively participates in coding contests and hackathons. He's always happy to share insights about breaking into the tech industry!`
    }

    if (message.includes("interview") || message.includes("job interview")) {
      return `${programming.advice.interview}\n\nSuhas has prepared extensively for technical interviews by solving 100+ DSA problems and building real-world projects that demonstrate his skills. His portfolio showcases both technical competency and practical application of technologies.`
    }

    if (message.includes("freelance") || message.includes("freelancing")) {
      return `${programming.advice.freelancing}\n\nSuhas has the skills and experience needed for successful freelancing - he's worked on diverse projects from healthcare platforms to e-commerce sites, demonstrating his ability to adapt to different client needs and deliver quality solutions.`
    }

    if (message.includes("salary") || message.includes("pay") || message.includes("money")) {
      return `Developer salaries vary widely based on location, experience, and skills. In India, entry-level developers typically earn ₹3-6 LPA, while experienced full-stack developers can earn ₹8-20+ LPA. Suhas's skill set in modern technologies like React, Next.js, and AI integration positions him well in the current market. Remote opportunities often offer competitive international rates.`
    }

    return `Career development in tech is exciting and full of opportunities! Suhas is actively building his career through practical experience, continuous learning, and building impressive projects. What specific aspect of tech careers would you like to discuss?`
  }

  const generateGeneralResponse = (message: string, context: ConversationContext): string => {
    // Greeting responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return `Hello! Great to meet you! I'm here to help you learn about Suhas and his work, or discuss anything tech-related. What brings you to his portfolio today?`
    }

    // Thank you responses
    if (message.includes("thank") || message.includes("thanks")) {
      return `You're very welcome! I'm glad I could help. Feel free to ask me anything else about Suhas's work, programming, or any other questions you might have!`
    }

    // General AI/technology questions
    if (message.includes("ai") || message.includes("artificial intelligence")) {
      return `${knowledgeBase.general.ai}\n\nSuhas has practical experience with AI - his SaaS AI Application includes features like video generation, image creation, and AI chat functionality. He's passionate about integrating AI into practical applications that solve real problems.`
    }

    // Web development questions
    if (message.includes("web development") || message.includes("website")) {
      return `${knowledgeBase.general["web development"]}\n\nSuhas specializes in modern web development, creating responsive, user-friendly applications using the latest technologies. His projects showcase both frontend beauty and backend functionality.`
    }

    // Technology trends
    if (message.includes("trend") || message.includes("future") || message.includes("latest")) {
      return `${knowledgeBase.general["technology trends"]}\n\nSuhas stays current with these trends - his projects incorporate AI, modern React patterns, and cloud deployment strategies. He's always exploring new technologies to enhance his development capabilities.`
    }

    // Personal questions about the AI
    if (message.includes("who are you") || message.includes("what are you")) {
      return `I'm Suhas's AI assistant, designed to help visitors learn about his skills, projects, and experience. I can also discuss general programming topics, career advice, and answer various questions. I'm here to make your visit to his portfolio more interactive and informative!`
    }

    // Conversational responses
    const conversationalResponses = [
      `That's an interesting question! While I specialize in helping with information about Suhas and programming topics, I'd be happy to discuss this further. Could you provide more context about what you're looking for?`,
      `I appreciate you asking! I'm designed to be helpful with a wide range of topics, especially those related to Suhas's work and web development. How can I assist you better with this?`,
      `Great question! I love engaging in meaningful conversations. While my expertise is strongest in areas related to Suhas's portfolio and programming, I'm always eager to help however I can. What specific aspect interests you most?`,
      `Thanks for the question! I'm here to provide helpful information and have engaging conversations. Whether it's about Suhas's projects, programming concepts, or career advice, I'm ready to help. What would you like to explore?`,
    ]

    return conversationalResponses[Math.floor(Math.random() * conversationalResponses.length)]
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
    const currentInput = input
    setInput("")
    setIsLoading(true)

    // Simulate thinking time for more natural conversation
    setTimeout(
      () => {
        const aiResponseText = generateIntelligentResponse(currentInput, context)

        // Update context based on the conversation
        setContext((prev) => ({
          ...prev,
          previousQuestions: [...prev.previousQuestions, currentInput].slice(-5),
          conversationFlow: "ongoing",
        }))

        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponseText,
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsLoading(false)
      },
      800 + Math.random() * 1200,
    ) // Random delay between 0.8-2 seconds for natural feel
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Quick suggestion buttons
  const quickSuggestions = [
    "Tell me about Suhas's projects",
    "What technologies does he use?",
    "How can I contact him?",
    "What's his experience?",
    "Career advice for developers",
    "Explain React vs Next.js",
  ]

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
  }

  return (
    <>
      {/* Enhanced Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl animate-pulse hover:animate-none transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-7 w-7 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
        </Button>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[650px] huly-card shadow-2xl border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
                <Bot className="h-5 w-5 text-white" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
              </div>
              <div>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <p className="text-xs huly-text-muted">Ask me anything!</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-[550px] p-0">
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
                      {message.sender === "ai" && <Bot className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="text-sm leading-relaxed whitespace-pre-line">{message.text}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Suggestions (show only at start) */}
              {messages.length <= 2 && (
                <div className="space-y-2">
                  <p className="text-xs huly-text-muted text-center">Quick questions you can ask:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs h-8 justify-start"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-700">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-blue-500" />
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
                  placeholder="Ask me anything..."
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
