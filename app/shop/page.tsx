import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-7xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Notre <span className="text-gradient">Collection</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de projecteurs LED professionnels, conçus pour illuminer votre marque avec style et efficacité
          </p>
        </div>
      </section>
      
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <ProductsGrid />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
