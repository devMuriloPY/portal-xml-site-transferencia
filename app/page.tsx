"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TransitionMessage } from "@/components/transition-message"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <TransitionMessage />
        </main>
        <Footer />
      </div>
    </div>
  )
}
