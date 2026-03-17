"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, Play, Sparkles, Zap, Star, MousePointer2, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import heroContent from "@/data/hero.json"

const iconMap = { Zap, Star, Lightbulb }

// Magnetic Button Component
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const { clientX, clientY } = e
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((clientX - centerX) * 0.4)
    y.set((clientY - centerY) * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-white" />

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 px-6 bg-[#fafafa] overflow-hidden"
    >
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content side */}
          <motion.div
            style={{ opacity, y }}
            className="flex flex-col items-start text-left space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20 transition-all font-bold px-4 py-1.5 uppercase tracking-widest text-[10px]">
                {heroContent.badge}
              </Badge>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl font-extrabold tracking-tight text-slate-900 leading-[0.9]"
              >
                {heroContent.title.main}
                <span className="block text-primary">
                  {heroContent.title.accent}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl text-slate-500 max-w-md font-medium leading-relaxed"
              >
                {heroContent.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <MagneticButton>
                <Button size="lg" className="h-16 px-10 text-base font-bold bg-slate-900 text-white hover:bg-slate-800 rounded-full group overflow-hidden relative shadow-xl shadow-slate-200" asChild>
                  <Link href={heroContent.ctas.primary.href}>
                    <span className="relative z-10 flex items-center gap-2">
                      {heroContent.ctas.primary.text}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  </Link>
                </Button>
              </MagneticButton>

              <Button size="lg" variant="ghost" className="h-16 px-10 text-base font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full underline-offset-8 decoration-primary transition-all" asChild>
                <Link href={heroContent.ctas.secondary.href}>
                  {heroContent.ctas.secondary.text}
                </Link>
              </Button>
            </motion.div>

            {/* Simple Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
                <div className="h-10 w-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                  +1k
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted by Professionals</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] group">
              <video
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline
                poster={heroContent.images.poster}
              >
                <source src={heroContent.images.main} type="video/mp4" />
              </video>

              {/* Info overlap purely for modern balance */}
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[24px] border border-white translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Performance Focus</p>
                    <h4 className="text-xl font-black text-slate-900 leading-none">Ultra-High Precision</h4>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Stats Floating */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 p-6 bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-50 z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none">4K</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Resolution</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
