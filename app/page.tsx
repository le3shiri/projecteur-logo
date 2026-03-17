import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { HowItWorks } from "@/components/how-it-works"
import { HowToUse } from "@/components/how-to-use"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <ProductsGrid />
      <Benefits />
      <HowToUse />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </main>
  )
}
