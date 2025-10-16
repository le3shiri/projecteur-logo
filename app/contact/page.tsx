"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ContactContent() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get("produit")

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl -z-10" />

        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Réservez votre <span className="text-gradient">Projecteur</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <ContactForm preselectedProduct={preselectedProduct} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ContactContent />
    </Suspense>
  )
}
