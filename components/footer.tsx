"use client"

import { Lightbulb, Phone, Mail, Clock, Instagram, Facebook, Linkedin, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
               <div className="relative">
                  <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-md" />
                  <img src="/logo.png" alt="Logo" className="w-14 h-auto relative z-10 group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter leading-none">
                     PROJECTEUR <span className="text-gradient">LOGO</span>
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] leading-none mt-1">
                     L'Excellence LED
                  </span>
               </div>
            </Link>
            
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md">
              Nous réinventons la visibilité des marques grâce à une technologie LED de pointe. Une solution d'exception pour un impact visuel sans précédent.
            </p>

            <div className="flex items-center gap-4">
               {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" }
               ].map((social, i) => (
                  <Link key={i} href={social.href} className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center border border-white/5 hover:border-primary/40 hover:text-primary transition-all duration-300">
                     <social.icon className="h-5 w-5" />
                  </Link>
               ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-foreground/50">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: "À propos", href: "/about" },
                { label: "Boutique LED", href: "/shop" },
                { label: "Questions fréquentes", href: "/faq" },
                { label: "Mentions Légales", href: "/privacy" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-foreground/50">Contact & Support</h3>
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                     <Phone className="h-5 text-primary" />
                  </div>
                  <div>
                     <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Téléphone Direct</p>
                     <p className="text-xl font-black">06 07 05 66 37</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                     <Clock className="h-5 text-accent-foreground" />
                  </div>
                  <div>
                     <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Disponibilité</p>
                     <p className="text-xl font-black italic">7j/7 - 24h/24</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-12 border-t border-white/5">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-8">
                 <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Garantie de satisfaction
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Technologie Lens Pro
                 </div>
              </div>
              
              <div className="text-center md:text-right">
                 <p className="text-sm font-bold text-muted-foreground">
                    © {new Date().getFullYear()} Projecteur Logo. <span className="text-foreground">L'Excellence LED.</span>
                 </p>
              </div>
           </div>
        </div>
      </div>
    </footer>
  )
}
