"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Elegant restaurant interior"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Overline */}
        <div className="opacity-0 animate-fade-in-up">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.4em] uppercase text-xs font-medium mb-8">
            <span className="w-12 h-px bg-primary/50" />
            Welcome to
            <span className="w-12 h-px bg-primary/50" />
          </span>
        </div>

        {/* Main Title */}
        <h1 className="opacity-0 animate-fade-in-up animation-delay-100 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-foreground mb-6 tracking-tight text-balance">
          Spice Garden
        </h1>

        {/* Subtitle with premium styling */}
        <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance">
          Where culinary artistry meets timeless elegance. An unforgettable dining experience crafted with passion.
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-sm tracking-wider uppercase font-medium group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/contact#reserve" className="flex items-center gap-3">
              Reserve Your Table
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-primary hover:bg-transparent rounded-full px-10 py-7 text-sm tracking-wider uppercase font-medium group"
          >
            <Link href="/menu" className="flex items-center gap-2">
              Explore Menu
              <span className="w-8 h-px bg-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </Link>
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400 mt-20 pt-12 border-t border-border/30">
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-1">15+</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-1">50k+</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-1">4.9</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Star Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  )
}
