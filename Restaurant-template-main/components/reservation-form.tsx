"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Users, Check, Loader2 } from "lucide-react"

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-primary/10 mx-auto mb-8 rounded-full flex items-center justify-center animate-scale-in">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Reservation Received
        </h3>
        <p className="text-foreground/60 mb-8 max-w-sm mx-auto">
          Thank you for your reservation request. We will contact you shortly to confirm your booking.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-primary rounded-full px-8 py-6"
        >
          Make Another Reservation
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Priya Sharma"
            className="bg-input border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="priya@example.com"
            className="bg-input border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="bg-input border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="guests" className="text-sm font-medium text-foreground">
            Number of Guests *
          </label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="20"
              required
              placeholder="2"
              className="bg-input border-border/50 rounded-xl h-12 pl-11 focus:ring-primary focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium text-foreground">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              id="date"
              name="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              lang="en-IN"
              className="bg-input border-border/50 rounded-xl h-12 pl-11 focus:ring-primary focus:border-primary transition-all"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium text-foreground">
            Preferred Time *
          </label>
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input
              id="time"
              name="time"
              type="time"
              required
              className="bg-input border-border/50 rounded-xl h-12 pl-11 focus:ring-primary focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Special Requests
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any dietary restrictions, special occasions, or seating preferences..."
          className="bg-input border-border/50 rounded-xl resize-none focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-7 text-sm tracking-wider uppercase font-medium transition-all duration-300 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </span>
        ) : (
          "Request Reservation"
        )}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/30" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-4 text-foreground/40">Or book instantly</span>
        </div>
      </div>

      <a
        href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20make%20a%20reservation%20at%20Spice%20Garden."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Book via WhatsApp
      </a>

      <p className="text-foreground/40 text-xs text-center">
        By submitting this form, you agree to our reservation policy.
        We will confirm your booking within 24 hours.
      </p>
    </form>
  )
}
