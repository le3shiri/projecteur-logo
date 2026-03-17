"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Sparkles, Zap, Star, ShieldCheck, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import heroContent from "@/data/hero.json"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-background" />

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/40 via-primary/5 to-transparent blur-[100px] pointer-events-none -z-10 rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-accent/50 via-accent/5 to-transparent blur-[80px] pointer-events-none -z-10 rounded-full mix-blend-screen" />
      
      {/* Light Beam Effect */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[150vw] h-[20vh] bg-gradient-to-r from-transparent via-primary/5 to-transparent -rotate-12 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content - Right Side (RTL) */}
          <motion.div 
            style={{ y, opacity }}
            className="flex-1 text-right w-full pt-10 lg:pt-0 z-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-bold tracking-wide">{heroContent.badge}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.1] text-foreground mb-6"
            >
              {heroContent.title.main}
              <br />
              <div className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {heroContent.title.accent}
                </span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2" />
              </div>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground font-medium mb-10 max-w-xl leading-relaxed"
            >
              {heroContent.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-center mb-12"
            >
              <Button size="lg" className="w-full sm:w-auto h-16 px-8 text-lg font-black rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:scale-105 transition-all group" asChild>
                <Link href={heroContent.ctas.primary.href} className="flex items-center justify-center gap-3">
                  {heroContent.ctas.primary.text}
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-8 text-lg font-bold rounded-2xl border-2 border-border hover:bg-muted/50 transition-all flex items-center justify-center gap-3 group" asChild>
                <Link href={heroContent.ctas.secondary.href}>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-3 w-3 text-primary ml-0.5" />
                  </div>
                  {heroContent.ctas.secondary.text}
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {heroContent.trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-bold text-foreground">{item.replace('✓ ', '')}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video / Visual - Left Side (RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="flex-1 w-full max-w-2xl lg:max-w-none relative z-10 mt-10 lg:mt-0"
          >
            {/* Projector Ring Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-primary/20 bg-primary/5 animate-spin-slow -z-10" style={{ animationDuration: '20s' }} />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-accent/20 bg-accent/5 animate-spin-slow -z-10" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            <div className="relative rounded-[2.5rem] overflow-hidden p-3 bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] group">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/4.5] shadow-inner">
                <video
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  autoPlay loop muted playsInline
                  poster={heroContent.images.poster}
                >
                  <source src={heroContent.images.main} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 pointer-events-none" />
                
                {/* Embedded Glassmorphism Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
                    {/* Floating Stat 1 */}
                    <div className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4 group-hover:translate-y-0 translate-y-2 opacity-90 group-hover:opacity-100 transition-all duration-500">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div className="text-left flex flex-col items-start">
                        <p className="text-white text-2xl font-black leading-none" dir="ltr">{heroContent.floating.stats.value}</p>
                        <p className="text-white/70 text-[10px] font-bold uppercase tracking-wider mt-1">{heroContent.floating.stats.label}</p>
                      </div>
                    </div>
                    
                    {/* Floating Stat 2 */}
                    <div className="w-full sm:w-auto bg-background/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center sm:items-end gap-1 shadow-xl group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <div className="flex gap-1 mb-1" dir="ltr">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-foreground text-xl font-black leading-none" dir="ltr">{heroContent.floating.rating.value}</p>
                      <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider text-center">{heroContent.floating.rating.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature Tag Floating */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border hidden sm:flex items-center gap-3 z-30"
            >
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-foreground">{heroContent.features[2].text}</p>
                <p className="text-[10px] text-muted-foreground font-bold">جودة مضمونة</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
