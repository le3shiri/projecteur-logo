"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export function HowToUse() {
  return (
    <section id="comment-utiliser" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Comment <span className="text-gradient">utiliser le produit</span> ?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez comment installer et utiliser votre projecteur LED en quelques étapes simples
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 bg-background/50 backdrop-blur-sm shadow-2xl">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-background">
              <video
                className="w-full h-full object-cover"
                controls
              >
                <source src="/howto.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            {/* Optional: Video Description */}
            <div className="p-6 bg-background/80 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">
                Guide d&apos;installation et d&apos;utilisation
              </h3>
              <p className="text-muted-foreground">
                Cette vidéo vous guidera à travers les étapes d&apos;installation, de configuration 
                et d&apos;utilisation de votre projecteur LED pour obtenir les meilleurs résultats.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
