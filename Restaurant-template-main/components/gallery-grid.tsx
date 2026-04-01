"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = ["all", "dishes", "ambiance", "team"]
  
  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter)

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredImages.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  return (
    <>
      {/* Filters */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-8 py-3 text-sm tracking-wider uppercase font-medium transition-all duration-300 rounded-full",
              activeFilter === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card/50 text-foreground/60 hover:text-foreground hover:bg-card/80 border border-border/50"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative overflow-hidden cursor-pointer group rounded-2xl",
              index % 5 === 0 ? "md:col-span-2 md:row-span-2" : "",
              index % 5 === 0 ? "h-64 md:h-[520px]" : "h-48 md:h-64"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-foreground font-medium">{image.alt}</p>
              <p className="text-foreground/60 text-sm capitalize">{image.category}</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
              <Plus className="h-6 w-6 text-foreground" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 glass flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation arrows */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {selectedIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image container */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-foreground font-medium text-lg mb-1">{selectedImage.alt}</p>
            <p className="text-foreground/50 text-sm capitalize">{selectedImage.category}</p>
            <p className="text-foreground/30 text-xs mt-2">
              {selectedIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
