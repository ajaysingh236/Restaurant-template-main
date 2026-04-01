"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Malhotra",
    role: "Food Critic, Times of India",
    content: "An extraordinary dining experience. The authenticity of flavors in every dish is remarkable, and the ambiance perfectly captures the essence of Indian hospitality.",
    rating: 5,
    image: "PM",
  },
  {
    name: "Vikram Kapoor",
    role: "Regular Guest",
    content: "Spice Garden has become our family&apos;s go-to for celebrations. The service is impeccable and the biryani consistently exceeds expectations.",
    rating: 5,
    image: "VK",
  },
  {
    name: "Ananya Deshmukh",
    role: "Travel Blogger",
    content: "A culinary gem that deserves all the recognition. The Lucknowi kebabs alone are worth the trip from Delhi. Absolutely divine!",
    rating: 5,
    image: "AD",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
            <span className="w-8 h-px bg-primary" />
            Testimonials
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Loved by Guests
          </h2>
          <p className="text-foreground/60 text-lg">
            Discover why discerning diners choose Spice Garden for their most memorable occasions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover-lift group"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-foreground/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-12 border-t border-border/30">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            <div className="text-center">
              <div className="text-2xl font-serif font-semibold text-foreground mb-1">Zomato</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Gold Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-semibold text-foreground mb-1">Swiggy</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Diner&apos;s Choice</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-semibold text-foreground mb-1">TripAdvisor</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-serif font-semibold text-foreground mb-1">EazyDiner</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">Top Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
