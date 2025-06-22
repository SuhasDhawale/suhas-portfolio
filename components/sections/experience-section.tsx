"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "ICEICO Technologies Pvt Ltd",
    location: "Nagpur",
    duration: "Jan 2025 - Jun 2025",
    description: "Developed product-based healthcare and e-commerce websites using modern web technologies.",
    projects: [
      {
        name: "DocBot Healthcare Platform",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        description: "Developed a product-based healthcare website to showcase and promote the DocBot platform.",
      },
      {
        name: "Restin Mattress E-Commerce",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
        description: "Developed a responsive e-commerce platform with product catalog and shopping cart functionality.",
      },
    ],
  },
]

const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "G H Raisoni College of Engineering and Management, Nagpur",
  duration: "2021 - 2025",
  cgpa: "7.83/10",
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
              Work Experience
            </h3>

            {experiences.map((exp, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300 mb-6">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.title}</h4>
                      <h5 className="text-lg font-medium mb-2">{exp.company}</h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-blue-200 dark:border-blue-800 pl-6">
                        <h6 className="font-semibold mb-2">{project.name}</h6>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-2 h-8 bg-green-500 rounded-full mr-4"></div>
              Education
            </h3>

            <Card className="glass-effect hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                      {education.degree}
                    </h4>
                    <h5 className="text-lg font-medium mb-2">{education.institution}</h5>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {education.duration}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
