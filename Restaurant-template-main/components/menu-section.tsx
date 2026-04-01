"use client"

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSectionProps {
  title: string
  subtitle?: string
  items: MenuItem[]
}

export function MenuSection({ title, subtitle, items }: MenuSectionProps) {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-foreground/50 text-sm tracking-wider">{subtitle}</p>
        )}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-16 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-16 h-px bg-border" />
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-card/30 hover:bg-card/60 transition-all duration-300 border border-transparent hover:border-border/50"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
              <div className="flex-1">
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="hidden md:block flex-1 border-b border-dashed border-border/30 min-w-[40px]" />
                  <span className="text-primary font-semibold text-lg">{item.price}</span>
                </div>
                <p className="text-foreground/50 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
