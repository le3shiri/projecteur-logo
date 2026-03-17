"use client"

import { Card } from "@/components/ui/card"
import { Play, Sparkles, CheckCircle2, Zap, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function HowToUse() {
  return (
    <section id="comment-utiliser" className="py-32 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest"
          >
            <Play className="h-3 w-3 fill-current" />
            Guide Vidéo
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-balance">
            Comment <span className="text-gradient">utiliser le produit</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Découvrez en moins de 2 minutes comment transformer votre espace avec une installation simple et professionnelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Video Player Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Premium Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-white/5 to-accent/20 rounded-[40px] blur-2xl opacity-50 -z-10" />
            
            <Card className="relative overflow-hidden border-none bg-background/40 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] rounded-[32px] ring-1 ring-white/10 p-2">
              <div className="relative aspect-video rounded-[24px] overflow-hidden bg-black group cursor-pointer">
                <video
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  controls
                  poster="/placeholder.svg"
                >
                  <source src="/howto.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                
                {/* Custom Play Overlay (Optional, if video isn't auto-playing/handling its own) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-125 transition-transform duration-500">
                      <Play className="h-8 w-8 text-white fill-current translate-x-1" />
                   </div>
                </div>
              </div>
            </Card>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                   <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                   <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Installation</p>
                   <p className="text-sm font-black italic">Rapide & Simple</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Steps/Key Points */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-8">
              {[
                { 
                  icon: CheckCircle2, 
                  title: "Fixation Sécurisée", 
                  desc: "Installez le support sur n'importe quel mur ou plafond grâce à notre kit complet inclus.",
                  color: "text-blue-500"
                },
                { 
                  icon: Sparkles, 
                  title: "Ajustement de l'Angle", 
                  desc: "Orientez le faisceau avec précision pour un impact visuel optimal sur 360°.",
                  color: "text-primary"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Prêt à l'Emploi", 
                  desc: "Branchez et projetez directement. Aucune configuration complexe requise.",
                  color: "text-emerald-500"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl bg-background border border-white/5 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 ${item.color}`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <button className="w-full py-6 rounded-2xl bg-primary text-white font-black text-sm tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all gradient-glow">
                  VOIR LE GUIDE COMPLET (PDF)
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
