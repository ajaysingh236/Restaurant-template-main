"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Utensils } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Artisan Cuisine",
    description: "Every dish crafted with precision",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "World-class culinary professionals",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence",
  },
]

export function AboutPreview() {
  return (
    <section className="py-32 px-6 bg-secondary/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Composition */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating smaller image */}
            <div className="absolute -bottom-12 -right-8 w-48 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block hover-lift">
              <Image
                src="/images/chef.jpg"
                alt="Executive Chef"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -top-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:flex flex-col items-center justify-center">
              <span className="font-serif text-4xl font-bold">15</span>
              <span className="text-xs uppercase tracking-wider opacity-80">Years</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Our Story
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 text-balance">
              A Passion for Culinary Excellence
            </h2>
            
            <p className="text-foreground/60 text-lg leading-relaxed mb-6">
              Founded in 2010, Spice Garden has been a beacon of culinary excellence in the heart of Mumbai. Our passion for authentic Indian cuisine and warm hospitality has earned us recognition among the finest dining establishments.
            </p>
            
            <p className="text-foreground/60 leading-relaxed mb-10">
              Under the guidance of Executive Chef Rajesh Sharma, our kitchen blends traditional recipes passed down through generations with innovative presentations, creating dishes that celebrate India&apos;s rich culinary heritage.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-foreground/50">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative pl-6 py-4 mb-10 border-l-2 border-primary">
              <blockquote className="font-serif text-xl italic text-foreground/80 mb-3">
                &quot;Every dish tells a story. Our mission is to create memories through food that speaks to the soul.&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/chef.jpg"
                    alt="Chef Rajesh Sharma"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-primary font-medium text-sm">Chef Rajesh Sharma</p>
                  <p className="text-foreground/50 text-xs">Executive Chef & Founder</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm tracking-wider uppercase font-medium group"
            >
              <Link href="/about" className="flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
