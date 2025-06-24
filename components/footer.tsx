"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 dark:bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Suhas Dhawale</h3>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed text-lg">
              Full Stack Developer passionate about creating modern, responsive web applications that deliver
              exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/SuhasDhawale"
                target="_blank"
                className="p-3 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/suhasdhawale"
                target="_blank"
                className="p-3 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:suhasdhawale57@gmail.com"
                className="p-3 rounded-xl bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/50 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-zinc-400 text-base">Frontend Development</span>
              </li>
              <li>
                <span className="text-zinc-400 text-base">Backend Development</span>
              </li>
              <li>
                <span className="text-zinc-400 text-base">Full Stack Development</span>
              </li>
              <li>
                <span className="text-zinc-400 text-base">Web Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-base">© {new Date().getFullYear()} Suhas Dhawale. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
