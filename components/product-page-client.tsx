"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Zap, Shield, Sparkles, ChevronLeft, ChevronRight, Star, Clock, Trophy } from "lucide-react"
import Link from "next/link"
import { trackViewContent, trackInitiateCheckout } from "@/lib/facebook-pixel"
import { motion, AnimatePresence } from "framer-motion"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export function ProductPageClient({ product }: ProductPageClientProps) {
  const productImages = [
    product.image,
    "/IMG-20251016-WA0138.jpg",
    "/IMG-20251016-WA0140.jpg",
    "/IMG-20251016-WA0145.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    trackViewContent(product.name, product.id, product.priceHT)
  }, [product])

  const handleCommanderClick = () => {
    trackInitiateCheckout(product.name, product.id, product.priceHT)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="bg-background">
      {/* Product Hero Section */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-20" />
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Product Images */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="relative group aspect-square rounded-[40px] overflow-hidden bg-secondary shadow-2xl border border-white/10 ring-1 ring-white/5">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    src={productImages[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Navigation */}
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>

                {/* Counter */}
                <div className="absolute bottom-8 right-8 cursor-default">
                   <div className="bg-background/40 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-2 text-white font-black text-sm tracking-widest">
                     {currentImageIndex + 1} <span className="text-white/40">/</span> {productImages.length}
                   </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === idx ? "border-primary scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Details */}
            <motion.div 
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="space-y-10 lg:sticky lg:top-32"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <Badge className={`${product.badgeColor} px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase border-none shadow-lg`}>
                   <Star className="w-3 h-3 mr-2 fill-current" />
                   {product.badge}
                </Badge>
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
                  <span className="text-gradient">{product.name}</span>
                </h1>
                <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
                  {product.description}
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: "Puissance", value: product.power, sub: "Lumen Pro", color: "text-amber-500" },
                  { icon: Sparkles, label: "Portée Max", value: product.distance, sub: "Clarté HD", color: "text-primary" },
                  { icon: Shield, label: "Garantie", value: "24 Mois", sub: "Échange à neuf", color: "text-blue-500" }
                ].map((stat, i) => (
                  <div key={i} className="bg-secondary/40 backdrop-blur-md rounded-[28px] p-6 border border-white/5 group hover:border-primary/30 transition-all duration-500">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-xl font-black">{stat.value}</p>
                    <p className="text-[10px] font-bold text-muted-foreground/60 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <p className="text-6xl font-black text-foreground">{product.price}</p>
                  <p className="text-lg font-bold text-muted-foreground uppercase tracking-wider">TVA Incluse</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="gradient-glow h-20 px-12 rounded-[24px] text-xl font-black shadow-2xl group flex-1" asChild>
                    <Link href={`/contact?produit=${product.id}`} onClick={handleCommanderClick}>
                      COMMANDER MAINTENANT
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-8 text-sm font-bold text-muted-foreground pt-4">
                   <div className="flex items-center gap-2">
                     <Clock className="w-5 h-5 text-primary" />
                     Expédié en 48h
                   </div>
                   <div className="flex items-center gap-2">
                     <Trophy className="w-5 h-5 text-primary" />
                     Meilleur Prix Garanti
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-secondary/20">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Performance <span className="text-gradient">Sans Compromis</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Une ingénierie de précision pour un résultat visuel qui dépasse vos attentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none bg-background/50 backdrop-blur-xl rounded-[32px] p-4 group hover:shadow-2xl transition-all duration-500 ring-1 ring-white/10">
                  <CardContent className="flex flex-col gap-6 p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Check className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-4 text-gradient">Fiche Technique</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid gap-1">
            {product.specifications.map((spec, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between py-8 px-10 rounded-[24px] hover:bg-secondary/30 transition-colors border-b border-primary/5 last:border-0 group"
              >
                <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">{spec.label}</span>
                <span className="text-xl font-black text-primary">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto max-w-5xl text-center space-y-12">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="space-y-6"
           >
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-balance">
               Prêt à révolutionner <br /> 
               <span className="text-gradient">votre façade ?</span>
             </h2>
             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
               Commandez votre {product.name} et recevez votre visuel personnalisé sous 48h.
             </p>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
           >
             <Button size="lg" className="gradient-glow h-24 px-16 rounded-[30px] text-2xl font-black shadow-3xl hover:scale-105 active:scale-95 transition-all" asChild>
               <Link href={`/contact?produit=${product.id}`}>
                 CONFIGURER VOTRE PROJET
               </Link>
             </Button>
           </motion.div>
        </div>
      </section>
    </div>
  )
}
