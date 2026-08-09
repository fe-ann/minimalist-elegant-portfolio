"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin } from "lucide-react"

const phrases = [
  "I design digital experiences.",
  "I build fast websites.",
  "I craft beautiful brands.",
  "I create intuitive interfaces.",
]

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhrase]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToConnect = () => {
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 animate-fade-in">
          Product Designer & Developer
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-delay-1">
          <span className="text-balance">{displayText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance animate-fade-in-delay-2">
          I'm a creative professional passionate about crafting exceptional digital experiences that blend beautiful
          design with powerful functionality.
        </p>

        <div className="flex flex-col items-center gap-3 mb-12 animate-fade-in-delay-3">
          <p className="text-base md:text-lg font-medium">Murat Sahin</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToConnect}
            className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
