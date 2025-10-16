"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  productImage: string
  productName: string
}

export function ProductGallery({ productImage, productName }: ProductGalleryProps) {
  // Gallery with 4 images - product photo and real installations
  const galleryImages = [
    {
      id: 1,
      src: productImage,
      alt: `${productName} - Vue principale`,
      title: "Vue principale",
    },
    {
      id: 2,
      src: "/IMG-20251016-WA0138.jpg",
      alt: `${productName} - Installation`,
      title: "Installation professionnelle",
    },
    {
      id: 3,
      src: "/IMG-20251016-WA0140.jpg",
      alt: `${productName} - En action`,
      title: "Projection en action",
    },
    {
      id: 4,
      src: "/IMG-20251016-WA0145.jpg",
      alt: `${productName} - Utilisation`,
      title: "Projecteur en utilisation",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Galerie <span className="text-gradient">Produit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce projecteur sous tous les angles et en situation réelle
          </p>
        </div>

        {/* Main Image Display */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <Card className="overflow-hidden border-2 bg-background/50 backdrop-blur-sm">
            <div className="relative h-[500px]">
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">{galleryImages[currentIndex].title}</h3>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-2 hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative w-28 h-28 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index
                  ? "border-primary scale-110 shadow-lg shadow-primary/50"
                  : "border-muted hover:border-primary/50 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
