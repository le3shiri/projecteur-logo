"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Palette, Zap, Shield, Wrench, Award, Sparkles, Ruler, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Eye,
    title: "Visibilité Maximale",
    description: "Attirez l'œil instantanément. 90% des passants remarquent une enseigne lumineuse en mouvement ou en projection haute définition.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Personnalisation Totale",
    description: "Projetez n'importe quel design. Logos complexes, textes, ou motifs saisonniers, interchangeables en quelques minutes.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Eco-Lumière LED",
    description: "Consommation ultra-basse (12V/24V) pour une puissance maximale. Écologique, économique et durable.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Ultra Résistant",
    description: "Certification IP65/67. Conçu pour braver les intempéries, du froid glacial aux chaleurs extrêmes.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Wrench,
    title: "Plug & Project",
    description: "Installation éclair. Fixation murale facilitée et branchement intuitif pour un résultat professionnel immédiat.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Image de Marque",
    description: "Donnez une dimension Premium à votre établissement. Modernité et distinction garanties dès le premier regard.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Polyvalence d'Usage",
    description: "Boutiques, salons, hôtels, ou événements privés. Un projecteur pour mille occasions différentes.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Ruler,
    title: "Projection Longue Portée",
    description: "Une netteté parfaite de 1m à 50m. Plusieurs modèles disponibles pour s'adapter à toutes vos configurations.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export function Benefits() {
  return (
    <section id="benefits" className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/20 shadow-xl shadow-primary/5"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-black tracking-widest uppercase">Expertise & Performance</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Pourquoi <span className="text-gradient">Nous Choisir</span> ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            Plus qu'un simple accessoire, nos projecteurs sont des outils de communication puissants conçus pour durer et impressionner.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group h-full"
            >
              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <Card className="relative h-full border-none bg-background/40 backdrop-blur-xl rounded-[30px] p-2 overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-500">
                <CardHeader className="pt-8 pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner`}
                  >
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight leading-tight mb-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm font-semibold leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <benefit.icon className="w-12 h-12" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
