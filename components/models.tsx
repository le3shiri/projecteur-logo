import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import Link from "next/link"

export function Models() {
  return (
    <section id="models" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background -z-10" />
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          Nos <span className="text-gradient">modèles</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Ce que vous trouverez chez nous</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((model, index) => (
            <Card key={index} className="relative overflow-hidden card-hover group border-2">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={`Projecteur ${model.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 right-4 ${model.badgeColor}`}>{model.badge}</Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                </div>
                <CardDescription className="text-lg font-semibold text-primary">{model.power}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Distance</p>
                  <p className="text-base font-medium">{model.distance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Utilisation</p>
                  <p className="text-base leading-relaxed">{model.usage}</p>
                </div>
                <Button className="w-full gradient-glow" asChild>
                  <Link href={`/contact?produit=${model.id}`}>Commander maintenant</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
