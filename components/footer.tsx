import Link from "next/link"
import { Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-8 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-3xl font-semibold text-foreground tracking-wide inline-block mb-6">
              Spice Garden
            </Link>
            <p className="text-foreground/50 leading-relaxed mb-6 max-w-xs">
              Experience the art of fine dining with our carefully curated menu featuring the finest ingredients and flavors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm mb-6">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/50 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm mb-6">Hours</h4>
            <ul className="space-y-4 text-foreground/50">
              <li className="flex justify-between gap-4">
                <span>Monday - Thursday</span>
                <span className="text-foreground/70">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Friday - Saturday</span>
                <span className="text-foreground/70">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-foreground/70">12:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-foreground/50">
              <li>
                <p className="text-foreground/70 mb-1">Address</p>
                <p>42, Turner Road, Bandra West<br />Mumbai, Maharashtra 400050</p>
              </li>
              <li>
                <p className="text-foreground/70 mb-1">Phone</p>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <p className="text-foreground/70 mb-1">Email</p>
                <a href="mailto:info@spicegarden.in" className="hover:text-primary transition-colors duration-300">
                  info@spicegarden.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Spice Garden. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <Link href="#" className="hover:text-foreground/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
