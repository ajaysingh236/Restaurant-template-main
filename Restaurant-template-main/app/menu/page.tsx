import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MenuSection } from "@/components/menu-section"

export const metadata: Metadata = {
  title: "Menu | Spice Garden",
  description: "Explore our exquisite menu featuring carefully crafted dishes using the finest seasonal ingredients.",
}

const starters = [
  { name: "Lucknowi Galouti Kebab", description: "Melt-in-mouth lamb kebabs with 36 aromatic spices, served with ulte tawe ka paratha", price: "₹595" },
  { name: "Amritsari Fish Tikka", description: "Crispy fried fish marinated in gram flour batter with ajwain and chaat masala", price: "₹525" },
  { name: "Paneer Tikka Platter", description: "Tandoor-grilled cottage cheese with bell peppers, onions, and mint chutney", price: "₹445" },
  { name: "Murgh Malai Tikka", description: "Creamy chicken tikka marinated in cheese and cream, cooked in tandoor", price: "₹495" },
  { name: "Dahi Ke Kebab", description: "Soft hung curd kebabs with cashew and cardamom, served with green chutney", price: "₹395" },
]

const mains = [
  { name: "Hyderabadi Dum Biryani", description: "Slow-cooked aromatic basmati rice layered with tender lamb, saffron, and caramelized onions", price: "₹995" },
  { name: "Kerala Prawn Curry", description: "Tiger prawns in creamy coconut curry with curry leaves, kokum, and appam", price: "₹1,250" },
  { name: "Raan-E-Sikandari", description: "Whole leg of lamb marinated for 24 hours, slow-roasted with Mughlai spices", price: "₹2,495" },
  { name: "Dal Makhani", description: "Slow-cooked black lentils simmered overnight with butter, cream, and aromatic spices", price: "₹445" },
  { name: "Butter Chicken", description: "Tandoori chicken in rich tomato-based gravy with kasuri methi and fresh cream", price: "₹595" },
  { name: "Laal Maas", description: "Fiery Rajasthani lamb curry cooked with mathania chillies and traditional spices", price: "₹895" },
]

const desserts = [
  { name: "Gulab Jamun Cheesecake", description: "Fusion dessert combining classic gulab jamun with creamy New York cheesecake", price: "₹395" },
  { name: "Saffron Phirni", description: "Traditional rice pudding infused with saffron, cardamom, and topped with silver varq", price: "₹295" },
  { name: "Kulfi Falooda", description: "Creamy malai kulfi with rose falooda, vermicelli, and basil seeds", price: "₹345" },
  { name: "Rasmalai Tres Leches", description: "Bengali rasmalai meets tres leches cake, garnished with pistachios", price: "₹425" },
]

const beverages = [
  { name: "Sula Riesling", description: "Sula Vineyards, Nashik - Crisp and aromatic white wine", price: "₹595 / ₹2,800" },
  { name: "Grover Zampa Viognier", description: "Premium white wine from Nandi Hills, Karnataka", price: "₹695 / ₹3,200" },
  { name: "Fratelli Sangiovese", description: "Medium-bodied red wine from Maharashtra", price: "₹650 / ₹3,000" },
  { name: "Mango Lassi", description: "Traditional yogurt-based drink with Alphonso mango", price: "₹195" },
  { name: "Masala Chai", description: "Authentic spiced tea brewed with fresh ginger and cardamom", price: "₹145" },
]

export default function MenuPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/3 to-transparent" />
        
        <div className="container mx-auto max-w-4xl text-center relative">
          <span className="inline-flex items-center gap-3 text-primary tracking-[0.3em] uppercase text-xs font-medium mb-6 opacity-0 animate-fade-in-up">
            <span className="w-8 h-px bg-primary" />
            Culinary Excellence
            <span className="w-8 h-px bg-primary" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in-up animation-delay-100 text-balance">
            Our Menu
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
            Each dish is crafted with passion using the finest seasonal ingredients, 
            blending traditional techniques with innovative flavors.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-4xl space-y-24">
          <MenuSection title="Starters" items={starters} />
          <MenuSection title="Main Courses" items={mains} />
          <MenuSection title="Desserts" items={desserts} />
          <MenuSection title="Beverages" subtitle="Glass / Bottle" items={beverages} />
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-foreground/40 text-sm">
            Please inform your server of any dietary restrictions or allergies. 
            Prices are subject to change based on seasonal availability.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
