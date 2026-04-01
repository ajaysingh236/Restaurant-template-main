"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass border-b border-border/30 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group relative font-serif text-2xl lg:text-3xl font-semibold text-foreground tracking-wide"
          >
            <span className="relative z-10">Spice Garden</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300",
                  pathname === link.href 
                    ? "text-primary" 
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <Button 
              asChild 
              className="ml-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-5 text-sm font-medium tracking-wider group overflow-hidden relative"
            >
              <Link href="/contact#reserve" className="flex items-center gap-2">
                <span>Reserve</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-foreground hover:text-primary transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "top-3 rotate-45" : "top-1"
              )} />
              <span className={cn(
                "absolute left-0 top-3 block h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "opacity-0 translate-x-2" : "opacity-100"
              )} />
              <span className={cn(
                "absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "top-3 -rotate-45" : "top-5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 top-0 glass lg:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-serif text-3xl font-semibold tracking-wide transition-all duration-300",
                  "opacity-0",
                  isOpen && "animate-fade-in-up",
                  pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              className={cn(
                "mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-lg font-medium",
                "opacity-0",
                isOpen && "animate-fade-in-up"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <Link href="/contact#reserve" onClick={() => setIsOpen(false)}>
                Reserve Table
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
