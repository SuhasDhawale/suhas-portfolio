"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazySection } from "@/components/lazy-image"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "C", "C++", "Python", "PHP"],
    color: "bg-blue-500 dark:bg-blue-400",
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
    color: "bg-green-500 dark:bg-green-400",
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "REST APIs", "MySQL", "Laravel", "Strapi"],
    color: "bg-purple-500 dark:bg-purple-400",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Supabase", "Netlify", "Vercel", "Render"],
    color: "bg-orange-500 dark:bg-orange-400",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight huly-text-primary">
            Skills & Technologies
          </h2>
          <p className="text-xl huly-text-muted max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </LazySection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <LazySection key={index} animationDelay={index * 100}>
              <Card className="huly-card hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-900/20 transition-all duration-500 group border-0 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-3 h-3 rounded-full ${category.color} mr-4`}></div>
                    <h3 className="font-semibold text-lg huly-text-primary tracking-wide">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-105 transition-transform duration-300 cursor-default bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border-0 px-3 py-1 rounded-lg font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </LazySection>
          ))}
        </div>
      </div>
    </section>
  )
}
