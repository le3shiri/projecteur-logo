"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Link from "next/link"
import { motion } from "framer-motion"

export function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="h-full"
        >
          <Card className="relative overflow-hidden card-hover group border-2 h-full flex flex-col bg-background/50 backdrop-blur-sm">
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-2xl" />
              <img
                src={product.image || "/placeholder.svg"}
                alt={`Projecteur ${product.name}`}
                className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className={`absolute top-4 right-4 ${product.badgeColor} text-base px-3 py-1`}>
                {product.badge}
              </Badge>
            </div>
            <CardHeader className="flex-grow">
              <div className="flex items-start justify-between">
                <CardTitle className="text-2xl">{product.name}</CardTitle>
              </div>
              <CardDescription className="text-lg font-semibold text-primary mt-2">
                {product.power}
              </CardDescription>
              <p className="text-muted-foreground mt-3 line-clamp-2">
                {product.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Distance</p>
                  <p className="text-base font-medium">{product.distance}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">Prix</p>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Button className="w-full gradient-glow text-lg py-6 rounded-full" asChild>
                  <Link href={`/produit/${product.id}`}>
                    Commander maintenant
                  </Link>
                </Button>
                <Button variant="outline" className="w-full text-lg py-6 rounded-full border-2" asChild>
                  <Link href={`/produit/${product.id}`}>
                    Voir les détails
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
