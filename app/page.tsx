import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { HowItWorks } from "@/components/how-it-works"
import { HowToUse } from "@/components/how-to-use"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"
import { ContactForm } from "@/components/contact-form"
import { Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* Premium Products Section */}
      <section id="products" className="py-16 md:py-32 px-4 relative overflow-hidden bg-secondary/30">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest text-primary uppercase shadow-sm">
              <Sparkles className="w-3 h-3" />
              مجموعتنا الحصرية
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              أجهزة عرض <span className="text-gradient">احترافية</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              اكتشف مجموعتنا من أجهزة عرض الشعارات المصممة لتقديم سطوع استثنائي وتصميم خالد.
            </p>
          </div>
          
          <ProductsGrid />
        </div>
      </section>

      <Gallery />
      <ContactForm />

      <Benefits />
      <HowToUse />
      <HowItWorks />
      
      <Footer />
    </main>
  )
}

