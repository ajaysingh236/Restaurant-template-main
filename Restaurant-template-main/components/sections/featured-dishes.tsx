"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const dishes = [
  {
    name: "Lucknowi Galouti Kebab",
    description: "Melt-in-mouth lamb kebabs with 36 aromatic spices, served with ulte tawe ka paratha and mint chutney.",
    image: "/images/dish-1.jpg",
    price: "₹895",
    tag: "Chef's Choice",
  },
  {
    name: "Kerala Prawn Curry",
    description: "Tiger prawns in creamy coconut curry with curry leaves, kokum, and fragrant basmati rice.",
    image: "/images/dish-2.jpg",
    price: "₹1,250",
    tag: "Popular",
  },
  {
    name: "Hyderabadi Dum Biryani",
    description: "Slow-cooked aromatic basmati rice layered with tender lamb, saffron, and caramelized onions.",
    image: "/images/dish-3.jpg",
    price: "₹995",
    tag: "Signature",
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Our Specialties
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
              Signature Creations
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Each dish is a masterpiece, crafted with passion and the finest seasonal ingredients sourced from local artisans.
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="text-foreground hover:text-primary hover:bg-transparent group self-start lg:self-end"
          >
            <Link href="/menu" className="flex items-center gap-2 text-sm tracking-wider uppercase">
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className="bg-card/50 border-border/50 overflow-hidden group cursor-pointer rounded-2xl hover-lift"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-xs font-medium tracking-wider uppercase rounded-full">
                    {dish.tag}
                  </span>
                </div>

                {/* View icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-foreground" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="text-primary font-semibold text-lg shrink-0">{dish.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
