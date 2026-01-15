"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"

const galleryImages = [
  "/IMG-20251017-WA0016.jpg",
  "/IMG-20251017-WA0019.jpg",
  "/IMG-20251017-WA0021.jpg",
  "/IMG-20251017-WA0023.jpg",
  "/IMG-20251017-WA0025.jpg",
  "/IMG-20251017-WA0026.jpg",
  "/IMG-20251017-WA0027.jpg",
  "/IMG-20251017-WA0028.jpg",
  "/IMG-20251017-WA0029.jpg",
  "/IMG-20251017-WA0030.jpg",
  "/IMG-20251017-WA0031.jpg",
  "/IMG-20251017-WA0032.jpg",
  "/IMG-20251017-WA0033.jpg",
  "/IMG-20251017-WA0034.jpg",
  "/IMG-20251017-WA0035.jpg",
  "/IMG-20251017-WA0036.jpg",
  "/IMG-20251017-WA0037.jpg",
  "/IMG-20251017-WA0038.jpg",
  "/IMG-20251017-WA0039.jpg",
  "/IMG-20251017-WA0040.jpg",
  "/IMG-20251017-WA0041.jpg",
  "/IMG-20251017-WA0042.jpg",
  "/IMG-20251017-WA0043.jpg",
  "/IMG-20251017-WA0044.jpg",
  "/IMG-20251017-WA0045.jpg",
  "/IMG-20251017-WA0046.jpg",
  "/IMG-20251017-WA0047.jpg",
  "/IMG-20251017-WA0048.jpg",
  "/IMG-20251017-WA0049.jpg",
  "/IMG-20251017-WA0050.jpg",
  "/IMG-20251017-WA0051.jpg",
  "/IMG-20251017-WA0052.jpg",
  "/IMG-20251017-WA0053.jpg",
  "/IMG-20251017-WA0054.jpg",
  "/IMG-20251017-WA0055.jpg",
  "/IMG-20251017-WA0056.jpg",
  "/IMG-20251017-WA0057.jpg",
  "/IMG-20251017-WA0059.jpg",
  "/IMG-20251017-WA0060.jpg",
]

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(12)

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, galleryImages.length))
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nos <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Réalisations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Plongez dans notre portfolio de projections lumineuses. Une collection de designs innovants et d'installations percutantes.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 pb-8">
          {galleryImages.slice(0, visibleCount).map((image, index) => (
            <div key={index} className="break-inside-avoid group relative">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative overflow-hidden rounded-xl cursor-zoom-in bg-muted shadow-sm hover:shadow-xl transition-all duration-500 border border-muted/50">
                    <img
                      src={image}
                      alt={`Réalisation Projecteur Logo ${index + 1}`}
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white ring-1 ring-white/20">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] p-1 bg-transparent border-none shadow-2xl backdrop-blur-sm">
                  <DialogTitle className="sr-only">Vue détaillée de la réalisation</DialogTitle>
                  <div className="relative rounded-lg overflow-hidden bg-black/90 aspect-auto flex items-center justify-center ring-1 ring-white/10">
                    <img
                      src={image}
                      alt={`Réalisation Projecteur Logo ${index + 1}`}
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {visibleCount < galleryImages.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={showMore} 
              size="lg" 
              className="px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              Voir plus de réalisations
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
