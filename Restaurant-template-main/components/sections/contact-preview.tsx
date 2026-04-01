"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone, ArrowRight, Mail } from "lucide-react"

export function ContactPreview() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Map */}
          <div className="lg:col-span-3 relative h-[500px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8354339587454!2d72.82131631490172!3d19.017646587104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6c8bea51df%3A0x39e4a8d3b9e6c6a!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635959657000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
            
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-xs glass rounded-2xl p-6 shadow-xl">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Visit Us Today</h3>
              <p className="text-foreground/60 text-sm">Experience the finest dining in the heart of Bandra, Mumbai</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-10 text-balance">
              Get In Touch
            </h2>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
<div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      42, Turner Road, Bandra West<br />
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
<div>
                    <h3 className="font-semibold text-foreground mb-1">Reservations</h3>
                    <a href="tel:+919876543210" className="text-foreground/60 hover:text-primary transition-colors block mb-2">
                      +91 98765 43210
                    </a>
                    <a
                      href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20make%20a%20reservation%20at%20Spice%20Garden."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Book via WhatsApp
                    </a>
                  </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@spicegarden.com" className="text-foreground/60 hover:text-primary transition-colors">
                    info@spicegarden.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <div className="text-foreground/60 text-sm space-y-1">
                    <p>Mon - Thu: 11:00 AM - 10:00 PM</p>
                    <p>Fri - Sat: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm tracking-wider uppercase font-medium group"
              >
                <Link href="/contact#reserve" className="flex items-center gap-2">
                  Reserve a Table
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-primary rounded-full px-8 py-6 text-sm tracking-wider uppercase font-medium"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
