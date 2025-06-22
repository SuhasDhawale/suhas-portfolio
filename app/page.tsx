import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
