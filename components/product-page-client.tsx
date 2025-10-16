"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Zap, Shield, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { trackViewContent, trackInitiateCheckout } from "@/lib/facebook-pixel"

interface Product {
  id: string
  name: string
  description: string
  power: string
  distance: string
  image: string
  badge: string
  badgeColor: string
  features: string[]
  specifications: { label: string; value: string }[]
  price: string
  priceHT: number
}

interface ProductPageClientProps {
  product: Product
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  // Multiple images for the product - using real installation photos
  const productImages = [
    product.image,
    "/IMG-20251016-WA0138.jpg",
    "/IMG-20251016-WA0140.jpg",
    "/IMG-20251016-WA0145.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Track product view when component mounts
  useEffect(() => {
    trackViewContent(product.name, product.id, product.priceHT)
  }, [product])

  // Handle Commander button click
  const handleCommanderClick = () => {
    trackInitiateCheckout(product.name, product.id, product.priceHT)
  }

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className={`${product.badgeColor} text-lg px-6 py-3`}>{product.badge}</Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-gradient">{product.name}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{product.description}</p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-xl pulse-glow">
                  <Zap className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Puissance</p>
                    <p className="font-semibold text-lg">{product.power}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-xl pulse-glow">
                  <Sparkles className="h-6 w-6 text-accent-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="font-semibold text-lg">{product.distance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-secondary/10 rounded-xl pulse-glow">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Durée de vie</p>
                    <p className="font-semibold text-lg">30 000 heures</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="gradient-glow text-lg mt-8 px-8 py-6 rounded-full" asChild>
                <Link href={`/contact?produit=${product.id}`} onClick={handleCommanderClick}>
                  Commander maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl shadow-2xl w-full h-auto glow-effect overflow-hidden">
                <img
                  src={productImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`Projecteur ${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover transition-all duration-300"
                />

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-background z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-background z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index ? "w-8 bg-primary" : "w-2 bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute -bottom-4 right-4 bg-background/95 backdrop-blur-md border-2 border-primary/20 rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold text-primary">
                  {currentImageIndex + 1} / {productImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Caractéristiques <span className="text-gradient">principales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les fonctionnalités avancées de ce projecteur LED professionnel
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <Card key={index} className="card-hover border-2 bg-background/50 backdrop-blur-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center pulse-glow">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-base font-medium leading-relaxed mt-1">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Spécifications <span className="text-gradient">techniques</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Toutes les caractéristiques techniques détaillées de ce modèle
            </p>
          </div>
          <Card className="border-2 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-6 border-b border-primary/10 last:border-b-0">
                    <span className="text-lg font-medium text-muted-foreground">{spec.label}</span>
                    <span className="text-lg font-bold text-primary">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Prêt à illuminer votre marque ?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Commandez votre projecteur {product.name} dès aujourd'hui et bénéficiez de notre garantie satisfaction.
          </p>
          <Button size="lg" className="gradient-glow text-lg px-8 py-6 rounded-full" asChild>
            <Link href={`/contact?produit=${product.id}`} onClick={handleCommanderClick}>
              Commander ce modèle <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
