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
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[36px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <Card className="relative h-full border-none bg-background/40 backdrop-blur-xl rounded-[34px] p-2 overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-500 flex flex-col">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-[28px] bg-secondary">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                <Badge className={`absolute top-4 right-4 ${product.badgeColor} px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border-none shadow-xl`}>
                  {product.badge}
                </Badge>

                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 inset-x-4 flex justify-between items-center bg-black/20 backdrop-blur-md rounded-2xl p-3 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 text-white">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{product.power}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{product.distance}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className="pt-6 pb-2">
                <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                   <div className="h-1 w-12 bg-primary rounded-full group-hover:w-20 transition-all duration-500" />
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground text-sm font-semibold leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto space-y-6">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">À partir de</span>
                      <span className="text-3xl font-black text-foreground">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                       <Sparkles className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-black text-primary uppercase">Best-Seller</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button className="gradient-glow h-14 rounded-2xl text-xs font-black shadow-lg group/btn" asChild>
                      <Link href={`/produit/${product.id}`} className="flex items-center gap-2">
                        DÉTAILS
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="h-14 rounded-2xl text-xs font-black border-2 hover:bg-primary/5 transition-all" asChild>
                      <Link href={`/produit/${product.id}`}>ACHETER</Link>
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
