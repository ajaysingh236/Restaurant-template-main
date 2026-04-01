import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { FeaturedDishes } from "@/components/sections/featured-dishes"
import { AboutPreview } from "@/components/sections/about-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { ContactPreview } from "@/components/sections/contact-preview"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FeaturedDishes />
      <AboutPreview />
      <Testimonials />
      <GalleryPreview />
      <ContactPreview />
      <Footer />
    </main>
  )
}
