"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react"
import { LazySection } from "@/components/lazy-image"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "ICEICO Technologies Pvt Ltd",
    location: "Nagpur, Maharashtra",
    duration: "Jan 2025 - Jun 2025",
    type: "Internship",
    description:
      "Gained hands-on experience in full-stack web development, working on real-world projects for healthcare and e-commerce domains.",
    responsibilities: [
      "Developed responsive web applications using modern frameworks",
      "Collaborated with senior developers on client projects",
      "Implemented best practices for code quality and performance",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP", "MySQL"],
  },
]

const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "G H Raisoni College of Engineering and Management, Nagpur",
  duration: "2021 - 2025",
  cgpa: "7.83/10",
  achievements: [
    "Solved 100+ DSA problems on LeetCode, HackerRank & GeeksforGeeks",
    "Participated in college hackathons and coding competitions",
    "Active member of coding club and technical societies",
    "Completed multiple online certifications in web development",
  ],
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <LazySection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my development skills
          </p>
        </LazySection>

        <div className="space-y-12">
          {/* Experience */}
          <LazySection>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
              Professional Experience
            </h3>

            {experiences.map((exp, index) => (
              <LazySection key={index} animationDelay={200}>
                <Card className="glass-effect hover:shadow-lg transition-all duration-300 mb-6">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Building className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                          <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h4>
                          <Badge variant="secondary" className="ml-3">
                            {exp.type}
                          </Badge>
                        </div>
                        <h5 className="text-lg font-medium mb-2 text-zinc-900 dark:text-zinc-100">{exp.company}</h5>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2 lg:ml-6">
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

                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h6 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Responsibilities:</h6>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h6 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Technologies Used:</h6>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LazySection>
            ))}
          </LazySection>

          {/* Education */}
          <LazySection animationDelay={400}>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <div className="w-2 h-8 bg-green-500 rounded-full mr-4"></div>
              Education
            </h3>

            <Card className="glass-effect hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      <h4 className="text-xl font-semibold text-green-600 dark:text-green-400">{education.degree}</h4>
                    </div>
                    <h5 className="text-lg font-medium mb-2 text-zinc-900 dark:text-zinc-100">
                      {education.institution}
                    </h5>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {education.duration}
                    </div>
                  </div>
                  <div className="lg:ml-6">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      CGPA: {education.cgpa}
                    </Badge>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h6 className="font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Key Achievements:</h6>
                  <ul className="space-y-2">
                    {education.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </LazySection>
        </div>
      </div>
    </section>
  )
}
