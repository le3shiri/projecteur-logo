"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, Sparkles } from "lucide-react"

export function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="h-full group"
        >
          <div className="relative h-full">
            {/* Animated Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[42px] blur-md opacity-0 group-hover:opacity-100 transition duration-700" />
            
            <Card className="relative h-full border-none bg-background/60 backdrop-blur-3xl rounded-[40px] p-4 sm:p-5 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10 group-hover:ring-primary/50 transition-all duration-500 flex flex-col group-hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-[32px] bg-secondary/50 group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.4)] transition-all duration-500">
                <motion.img
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <Badge className={`absolute top-4 right-4 ${product.badgeColor} px-4 py-2 rounded-full text-[11px] font-black tracking-widest uppercase border-none shadow-xl backdrop-blur-md`}>
                  {product.badge}
                </Badge>

                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 inset-x-4 flex justify-between items-center bg-black/40 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 text-white">
                    <Zap className="w-4 h-4 text-primary drop-shadow-[0_0_5px_rgba(var(--primary),0.8)]" />
                    <span className="text-sm font-bold">{product.power}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Target className="w-4 h-4 text-primary drop-shadow-[0_0_5px_rgba(var(--primary),0.8)]" />
                    <span className="text-sm font-bold">{product.distance}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className="pt-8 pb-3 px-2 sm:px-4">
                <CardTitle className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                   <div className="h-1.5 w-12 bg-primary rounded-full group-hover:w-24 shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all duration-500" />
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col px-2 sm:px-4 pb-2 sm:pb-4">
                <p className="text-muted-foreground text-base font-medium leading-relaxed mb-8 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto space-y-8">
                  <div className="flex items-end justify-between bg-primary/5 rounded-3xl p-4 border border-primary/10">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">ابتداءً من</span>
                      <span className="text-4xl font-black text-foreground tracking-tighter" dir="ltr">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-primary/20 px-4 py-1.5 rounded-full border border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
                       <Sparkles className="w-3.5 h-3.5 text-primary" />
                       <span className="text-xs font-black text-primary uppercase">الأكثر مبيعاً</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button className="gradient-glow h-16 rounded-2xl text-sm font-black shadow-xl group/btn overflow-hidden relative" asChild>
                      <Link href={`/produit/${product.id}`} className="flex items-center justify-center gap-2 w-full text-white">
                        <span className="relative z-10 flex items-center gap-2">
                          التفاصيل
                          <ArrowRight className="w-5 h-5 group-hover/btn:-translate-x-1.5 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-16 rounded-2xl text-sm font-black border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-primary transition-all shadow-sm" asChild>
                      <Link href={`/produit/${product.id}`} className="w-full">شراء</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
