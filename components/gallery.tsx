"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    image: "/IMG-20251016-WA0138.jpg",
    title: "Projection Logo Entreprise",
    description: "Logo d'entreprise projeté avec netteté",
  },
  {
    id: 2,
    image: "/IMG-20251016-WA0140.jpg",
    title: "Signalétique Lumineuse",
    description: "Projection de logo pour signalétique nocturne",
  },
  {
    id: 3,
    image: "/IMG-20251016-WA0142.jpg",
    title: "Projection Événementielle",
    description: "Logo projeté lors d'un événement professionnel",
  },
  {
    id: 4,
    image: "/IMG-20251016-WA0143.jpg",
    title: "Vitrine Commerciale",
    description: "Projecteur compact pour vitrine de magasin",
  },
  {
    id: 5,
    image: "/IMG-20251016-WA0144.jpg",
    title: "Façade Moderne",
    description: "Projection sur façade de bâtiment moderne",
  },
  {
    id: 6,
    image: "/IMG-20251016-WA0145.jpg",
    title: "Installation Rotatif",
    description: "Projecteur rotatif pour effet dynamique",
  },
  {
    id: 7,
    image: "/IMG-20251016-WA0147.jpg",
    title: "Logo Haute Définition",
    description: "Projection nette et précise de logo",
  },
  {
    id: 8,
    image: "/IMG-20251016-WA0148.jpg",
    title: "Éclairage Commercial",
    description: "Mise en lumière de commerce",
  },
  {
    id: 9,
    image: "/IMG-20251016-WA0149.jpg",
    title: "Installation Murale",
    description: "Projecteur fixe sur mur extérieur",
  },
  {
    id: 10,
    image: "/IMG-20251016-WA0150.jpg",
    title: "Projection Publicitaire",
    description: "Logo publicitaire projeté en grand format",
  },
  {
    id: 11,
    image: "/IMG-20251016-WA0154.jpg",
    title: "Façade Illuminée",
    description: "Bâtiment mis en valeur par projection",
  },
  {
    id: 12,
    image: "/IMG-20251016-WA0155.jpg",
    title: "Logo Entreprise",
    description: "Projection de logo corporate",
  },
  {
    id: 13,
    image: "/IMG-20251016-WA0156.jpg",
    title: "Installation Technique",
    description: "Montage professionnel de projecteur",
  },
  {
    id: 14,
    image: "/IMG-20251016-WA0159.jpg",
    title: "Réalisation Client",
    description: "Installation personnalisée pour client",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets réalisés avec nos projecteurs LED professionnels
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <Card className="overflow-hidden border-2 bg-background/50 backdrop-blur-sm">
            <div className="relative h-[400px]">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">{projects[currentIndex].title}</h3>
                <p className="text-white/90 text-sm">{projects[currentIndex].description}</p>
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
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToSlide(index)}
              className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index
                  ? "border-primary scale-110 shadow-lg shadow-primary/50"
                  : "border-muted hover:border-primary/50 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
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
