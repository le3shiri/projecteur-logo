"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { ZoomIn, Camera, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    <section className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Abstract Background Visuals */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase"
          >
            <Camera className="w-3 h-3" />
            VOTRE MARQUE EN LUMIÈRE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Galerie de <span className="text-gradient">Projections</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            Découvrez comment nous transformons les espaces de nos clients avec des solutions de projection LED haute définition.
          </motion.p>
        </div>

        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pb-12"
        >
          <AnimatePresence mode="popLayout">
            {galleryImages.slice(0, visibleCount).map((image, index) => (
              <motion.div
                layout
                key={image}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
                className="break-inside-avoid group relative"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative overflow-hidden rounded-[24px] cursor-zoom-in group-hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-700 bg-secondary/50 border border-white/10 ring-1 ring-white/5">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        src={image}
                        alt={`Projection ${index + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                              <Sparkles className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-sm font-bold text-white tracking-tight">Installation Pro</span>
                          </div>
                          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl text-white border border-white/20">
                            <ZoomIn className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[95vw] p-2 bg-transparent border-none shadow-none backdrop-blur-xl">
                    <DialogTitle className="sr-only">Vue zoomée</DialogTitle>
                    <div className="relative rounded-[32px] overflow-hidden bg-black/40 ring-1 ring-white/20 flex items-center justify-center p-1">
                      <img
                        src={image}
                        alt="Zoom projection"
                        className="w-full h-auto max-h-[90vh] object-contain rounded-[28px]"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < galleryImages.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <Button 
              onClick={showMore} 
              size="lg" 
              className="gradient-glow px-12 py-8 text-xl font-black rounded-2xl shadow-2xl transition-all active:scale-95 group"
            >
              VOIR PLUS DE RÉALISATIONS
              <Sparkles className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
