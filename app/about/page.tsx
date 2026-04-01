import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Award, Leaf, Users, Utensils } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Spice Garden",
  description: "Discover the story behind Spice Garden, our philosophy, and the talented team that makes every dining experience unforgettable.",
}

const values = [
  {
    icon: Utensils,
    title: "Culinary Excellence",
    description: "We pursue perfection in every dish, combining traditional techniques with innovative approaches.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "We partner with local farmers and suppliers to bring you the freshest seasonal ingredients.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description: "Every guest is family. We create memorable experiences through attentive, personalized service.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized by culinary critics and food enthusiasts for our commitment to excellence.",
  },
]

const team = [
  {
    name: "Rajesh Sharma",
    role: "Executive Chef & Founder",
    image: "/images/chef.jpg",
    bio: "With over 20 years of culinary experience in prestigious kitchens across India and abroad, Chef Rajesh brings a unique perspective to Spice Garden, blending authentic regional flavors with modern presentation.",
  },
]

export default function AboutPage() {
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
            Our Story
            <span className="w-8 h-px bg-primary" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in-up animation-delay-100 text-balance">
            About Spice Garden
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            A journey of passion, flavor, and unforgettable dining experiences since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Spice Garden interior"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating year badge */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:flex flex-col items-center justify-center">
                <span className="font-serif text-4xl font-bold">2010</span>
                <span className="text-xs uppercase tracking-wider opacity-80">Est.</span>
              </div>
            </div>
            <div className="lg:pl-8">
              <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
                <span className="w-8 h-px bg-primary" />
                Our Beginning
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 text-balance">
                Where Passion Meets Plate
              </h2>
              <div className="space-y-6 text-foreground/60 leading-relaxed text-lg">
                <p>
                  Founded in 2010 in the heart of Mumbai, Spice Garden emerged from a simple yet profound vision: 
                  to celebrate India&apos;s rich culinary heritage while creating a dining destination where 
                  authentic flavors and warm Indian hospitality converge.
                </p>
                <p>
                  What began as a small restaurant in Bandra has evolved into one of Mumbai&apos;s most 
                  celebrated dining establishments, earning recognition from critics and food lovers 
                  across India for our unwavering commitment to excellence.
                </p>
                <p>
                  Our philosophy is rooted in respect for traditional recipes passed down through generations, 
                  sourcing the finest spices from across the subcontinent. Every plate that leaves our kitchen 
                  tells a story of India&apos;s diverse culinary traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Our Philosophy
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group p-8 rounded-3xl bg-card/30 hover:bg-card/60 transition-all duration-300 border border-transparent hover:border-border/50 hover-lift">
                <div className="w-16 h-16 bg-primary/10 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-foreground/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-32 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
              <span className="w-8 h-px bg-primary" />
              Meet The Chef
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              The Creative Force
            </h2>
          </div>
          {team.map((member, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative lg:order-2">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-lg mb-8">{member.role}</p>
                <p className="text-foreground/60 leading-relaxed text-lg mb-10">
                  {member.bio}
                </p>
                <blockquote className="relative pl-8 py-4 border-l-2 border-primary">
                  <p className="font-serif text-xl md:text-2xl italic text-foreground/80 mb-4 text-balance">
                    &quot;Cooking is not just about nourishment—it&apos;s about creating moments 
                    that linger in memory long after the last bite.&quot;
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6">
            <span className="w-8 h-px bg-primary" />
            Recognition
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-16 text-balance">
            Awards & Accolades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2024", title: "Best Fine Dining", org: "Times Food Awards" },
              { year: "2023", title: "Chef of the Year", org: "EazyDiner Awards" },
              { year: "2022", title: "Top 50 Restaurants", org: "Condé Nast Traveller India" },
            ].map((award, index) => (
              <div key={index} className="p-10 rounded-3xl bg-card/30 hover:bg-card/60 transition-all duration-300 border border-border/50 hover-lift">
                <p className="text-5xl font-serif text-primary mb-4">{award.year}</p>
                <p className="font-semibold text-foreground text-xl mb-2">{award.title}</p>
                <p className="text-foreground/50">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
