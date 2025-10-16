import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Palette, Zap, Shield, Wrench, Award, Sparkles, Ruler } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Visibilité maximale",
    description: "Le logo éclairé attire l'œil, 90% des clients passants verront votre business même de loin",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Personnalisation totale",
    description:
      "Taille, forme, couleurs des LED, support (fixe), possibilité de rotation ou effet dynamique selon le modèle",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Économie d'énergie",
    description:
      "Nos projecteurs LED consomment exactement 12V très peu comparé aux projecteurs classiques. Moins de chaleur générée, durée de vie bien plus longue",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Résistance et durabilité",
    description:
      "Conçus pour l'extérieur/intérieur, avec des matériaux résistants aux intempéries (pluie, vent, poussière)",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Wrench,
    title: "Installation simple",
    description: "4 visses et un raccordement électrique, c'est tout ce qu'il faut pour obtenir cet excellent résultat",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Effet professionnel & image de marque renforcée",
    description: "Illuminer votre logo crée une impression de sérieux et de modernité, cela aide à marquer les esprits",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Flexibilité d'utilisation",
    description: "Idéal pour boutiques, bureaux, salons, stands, foires, soirées, hôtels...",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Ruler,
    title: "Distance et sécurité",
    description: "De 1m jusqu'à 50m de distance basse tension, très peu de surchauffe, respect des normes électriques",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Pourquoi choisir nos <span className="text-gradient">projecteurs de logo LED</span> ?
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
            De la conception à la livraison, du service après-vente à la relation commerciale, notre devise est : aucun
            client insatisfait.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow`}
                >
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed mt-2">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
