"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, Play, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-24 px-4 overflow-hidden min-h-screen flex items-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-20" />
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" 
      />

      {/* Projection Beams */}
      <div className="projection-beam opacity-30" />
      <div className="projection-beam opacity-20" style={{ animationDelay: '4s', animationDirection: 'reverse' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="px-5 py-2 bg-primary/10 text-primary border-primary/20 backdrop-blur-md rounded-full text-sm font-bold flex items-center gap-2 w-fit">
                <Sparkles className="h-4 w-4 animate-pulse" />
                DÉCOUVREZ L'INNOVATION LED
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-balance"
              >
                Illuminez <br />
                <span className="text-gradient">Votre Image</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed"
              >
                Le projecteur de logo LED n°1 en France. Une qualité professionnelle pour une visibilité exceptionnelle, de jour comme de nuit.
              </motion.p>
            </div>

            {/* Features Mini-Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { icon: Zap, text: "Haute Puissance", color: "text-amber-500" },
                { icon: Star, text: "Qualité HD", color: "text-primary" },
                { icon: Lightbulb, text: "Longue Durée", color: "text-blue-500" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-colors group">
                  <div className={`p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <span className="text-sm font-bold">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button size="lg" className="gradient-glow text-lg px-10 py-8 rounded-2xl shadow-2xl group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2 font-bold">
                    Commander Votre Projecteur <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-8 rounded-2xl border-2 hover:bg-primary/5 transition-all shadow-xl" asChild>
                <Link href="/shop" className="font-bold">Découvrir la Gamme</Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-6 text-sm font-bold text-muted-foreground/80"
            >
              <span className="flex items-center gap-2">✓ Livraison Express</span>
              <span className="flex items-center gap-2">✓ Support Client 5/7j</span>
            </motion.div>
          </div>

          {/* Right Content - Interactive Media */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Glow Surround */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[40px] blur-3xl animate-pulse" />
            
            <div className="relative group perspective-1000">
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-[32px] overflow-hidden border-2 border-primary/20 shadow-2xl bg-black aspect-square md:aspect-video"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/IMG-20251016-WA0145.jpg"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                  <img
                    src="/IMG-20251016-WA0145.jpg"
                    alt="Projecteur LED"
                    className="w-full h-full object-cover"
                  />
                </video>
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Hover Play Button (Decorative) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 rounded-full bg-primary/30 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <Play className="h-10 w-10 text-white fill-white" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 glass-morphism p-6 rounded-3xl shadow-2xl z-20 border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gradient">+1000</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Clients Satisfaits</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-10 -right-6 glass-morphism p-5 rounded-3xl shadow-2xl z-20 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">Excellent 4.9/5</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
