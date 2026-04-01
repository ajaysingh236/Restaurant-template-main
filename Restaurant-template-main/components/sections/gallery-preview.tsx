"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus } from "lucide-react"

const images = [
  { src: "/images/dish-1.jpg", alt: "Herb-crusted lamb", size: "large" },
  { src: "/images/dish-2.jpg", alt: "Pan-seared salmon", size: "small" },
  { src: "/images/restaurant-interior.jpg", alt: "Restaurant interior", size: "small" },
  { src: "/images/gallery-2.jpg", alt: "Signature dessert", size: "medium" },
  { src: "/images/gallery-3.jpg", alt: "Cocktail bar", size: "medium" },
]

export function GalleryPreview() {
  return (
    <section className="py-32 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Gallery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              A Visual Journey
            </h2>
            <p className="text-foreground/60 text-lg">
              Take a glimpse into our world of culinary artistry and elegant ambiance.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large image - spans 2 rows */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer aspect-square">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-foreground font-medium text-lg">{images[0].alt}</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
              <Plus className="h-6 w-6 text-foreground" />
            </div>
          </div>

          {/* Small images */}
          {images.slice(1, 3).map((image, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                <Plus className="h-5 w-5 text-foreground" />
              </div>
            </div>
          ))}

          {/* Medium images */}
          {images.slice(3).map((image, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                <Plus className="h-5 w-5 text-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-primary hover:text-primary rounded-full px-10 py-6 text-sm tracking-wider uppercase font-medium group"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
