"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, Camera, Sparkles, ChevronLeft, ChevronRight, X } from "lucide-react"
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, galleryImages.length))
  }

  const navigate = useCallback(
    (newDirection: number) => {
      if (selectedIndex === null) return
      setDirection(newDirection)
      setSelectedIndex((prev) => {
        if (prev === null) return null
        let newIndex = prev + newDirection
        if (newIndex < 0) newIndex = visibleCount - 1
        if (newIndex >= visibleCount) newIndex = 0
        return newIndex
      })
    },
    [selectedIndex, visibleCount]
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "ArrowRight") navigate(1)
      if (e.key === "ArrowLeft") navigate(-1)
      if (e.key === "Escape") setSelectedIndex(null)
    }

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedIndex, navigate])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-16 lg:py-32 px-4 relative overflow-hidden bg-background">
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
            علامتك التجارية في الأضواء
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            معرض <span className="text-gradient">الإسقاطات</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            اكتشف كيف نقوم بتحويل مساحات عملائنا من خلال حلول العرض بتقنية LED عالية الدقة. ألقِ نظرة على أعمالنا!
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
                <div 
                  className="relative overflow-hidden rounded-[24px] cursor-pointer group-hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-700 bg-secondary/50 border border-white/10 ring-1 ring-white/5"
                  onClick={() => setSelectedIndex(index)}
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={image}
                    alt={`الإسقاط ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                          <Sparkles className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-base font-bold text-white tracking-tight drop-shadow-md">معاينة HD</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
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
              className="gradient-glow px-12 py-8 text-xl font-black rounded-2xl shadow-2xl transition-all active:scale-95 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center text-white">
                شاهد المزيد من الأعمال
                <Sparkles className="mr-2 h-6 w-6 group-hover:-rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Premium Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center">
              {/* Image with Slide Animation */}
              <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-[32px] ring-1 ring-white/10 shadow-2xl bg-black/50">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={selectedIndex}
                    src={galleryImages[selectedIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x)
                      if (swipe < -swipeConfidenceThreshold) {
                        navigate(1)
                      } else if (swipe > swipeConfidenceThreshold) {
                        navigate(-1)
                      }
                    }}
                    className="absolute max-w-full max-h-full object-contain drop-shadow-2xl select-none"
                    alt={`عرض مكبر ${selectedIndex + 1}`}
                  />
                </AnimatePresence>

                {/* Left/Right Navigation Tokens */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(-1)
                  }}
                  className="absolute left-4 z-40 p-4 rounded-full bg-black/40 text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-md hidden md:flex"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(1)
                  }}
                  className="absolute right-4 z-40 p-4 rounded-full bg-black/40 text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-md hidden md:flex"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Mobile controls */}
              <div className="flex items-center gap-6 mt-6 md:hidden">
                <button
                  onClick={() => navigate(-1)}
                  className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-white/60 font-medium text-sm tabular-nums">
                  {selectedIndex + 1} / {visibleCount}
                </span>
                <button
                  onClick={() => navigate(1)}
                  className="p-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails Strip */}
              <div className="hidden md:flex items-center gap-3 mt-8 overflow-x-auto max-w-full pb-4 px-4 snap-x no-scrollbar">
                {galleryImages.slice(0, visibleCount).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > selectedIndex ? 1 : -1)
                      setSelectedIndex(i)
                    }}
                    className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden snap-center transition-all duration-300 ${
                      i === selectedIndex
                        ? "ring-2 ring-primary scale-110 opacity-100"
                        : "ring-1 ring-white/10 opacity-40 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    {i === selectedIndex && (
                      <div className="absolute inset-0 bg-primary/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
