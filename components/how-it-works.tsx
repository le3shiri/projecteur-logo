import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload, Palette, Cog, Truck, Wrench } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Choix du modèle",
    description: "Format, distance, puissance lumineuse, type d'éclairage",
    icon: FileText,
  },
  {
    number: "2",
    title: "Envoi de votre logo",
    description: "Format PDF ou image",
    icon: Upload,
  },
  {
    number: "3",
    title: "Personnalisation",
    description: "3 couleurs au maximum. Les logos les plus simples donnent les meilleurs résultats",
    icon: Palette,
  },
  {
    number: "4",
    title: "Fabrication",
    description: "Nos Lens demandent précision et concentration absolue",
    icon: Cog,
  },
  {
    number: "5",
    title: "Expédition",
    description: "Dans un délai de 48h le client reçoit notre colis",
    icon: Truck,
  },
  {
    number: "6",
    title: "Installation",
    description: "Malgré sa simplicité nous pouvons assister nos clients pour une parfaite installation",
    icon: Wrench,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-accent/5 to-transparent -z-10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Comment <span className="text-gradient">ça marche</span> ?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">Un processus simple en 6 étapes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative card-hover border-2 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl gradient-glow text-primary-foreground text-2xl font-bold shrink-0 pulse-glow">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <step.icon className="h-7 w-7 text-primary mb-2" />
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mt-2">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-accent pulse-glow" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
