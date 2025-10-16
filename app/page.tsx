import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { HowItWorks } from "@/components/how-it-works"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Benefits />
      <HowItWorks />
      <Footer />
    </main>
  )
}
