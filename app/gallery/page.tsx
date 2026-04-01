import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Gallery | Spice Garden",
  description: "Explore the visual story of Spice Garden - from our exquisite dishes to our elegant ambiance.",
}

const galleryImages = [
  { src: "/images/dish-1.jpg", alt: "Herb-crusted lamb rack", category: "dishes" },
  { src: "/images/restaurant-interior.jpg", alt: "Restaurant interior", category: "ambiance" },
  { src: "/images/dish-2.jpg", alt: "Pan-seared salmon", category: "dishes" },
  { src: "/images/gallery-3.jpg", alt: "Cocktail bar", category: "ambiance" },
  { src: "/images/gallery-2.jpg", alt: "Chocolate fondant dessert", category: "dishes" },
  { src: "/images/chef.jpg", alt: "Executive Chef at work", category: "team" },
  { src: "/images/dish-3.jpg", alt: "Truffle risotto", category: "dishes" },
  { src: "/images/gallery-4.jpg", alt: "Private dining room", category: "ambiance" },
  { src: "/images/gallery-1.jpg", alt: "Artisan appetizers", category: "dishes" },
  { src: "/images/hero-bg.jpg", alt: "Elegant table setting", category: "ambiance" },
]

export default function GalleryPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/3 to-transparent" />
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6 opacity-0 animate-fade-in-up">
            <span className="w-8 h-px bg-primary" />
            Visual Journey
            <span className="w-8 h-px bg-primary" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in-up animation-delay-100 text-balance">
            Our Gallery
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            A visual feast showcasing our culinary creations, elegant ambiance, 
            and the moments that make Spice Garden special.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-7xl">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-3xl text-center relative">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
            <span className="w-8 h-px bg-primary" />
            Visit Us
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Experience It Yourself
          </h2>
          <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
            Photos capture only a glimpse of what awaits you at Spice Garden. 
            Join us for an unforgettable dining experience.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-sm tracking-wider uppercase font-medium group"
          >
            <Link href="/contact#reserve" className="flex items-center gap-2">
              Reserve Your Table
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
