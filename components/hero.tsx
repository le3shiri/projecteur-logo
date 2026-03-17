"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, Zap, Star, ShieldCheck, CheckCircle2, Play, Check, Camera, Image as LucideImage, Clock, Truck, Award, Palette } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import heroContent from "@/data/hero.json"

const showcaseImages = [
    "/IMG-20251017-WA0016.jpg",
    "/IMG-20251017-WA0019.jpg",
    "/IMG-20251017-WA0023.jpg",
    "/IMG-20251017-WA0032.jpg",
    "/IMG-20251017-WA0035.jpg",
    "/IMG-20251017-WA0040.jpg",
    "/IMG-20251017-WA0041.jpg",
    "/IMG-20251017-WA0042.jpg",
    "/IMG-20251017-WA0043.jpg",
    "/IMG-20251017-WA0044.jpg",
]

const mainAdvantages = [
    { icon: Zap, text: "إضاءة 4K فائقة الوضوح", desc: "أقوى LED في السوق" },
    { icon: Palette, text: "تصميم شعارك مجاناً", desc: "نجهز هويتك للاحترافية" },
    { icon: ShieldCheck, text: "ضمان استبدال سنتين", desc: "دعم فني مضمون 100%" },
    { icon: Clock, text: "توصيل سريع بالمغرب", desc: "استلم في 24/48 ساعة" },
]

export function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="min-h-screen bg-background" />

    return (
        <section className="relative min-h-screen flex flex-col pt-20 pb-10 overflow-hidden bg-background">
            <div className="container mx-auto max-w-7xl px-4 relative z-10 flex flex-col gap-6 md:gap-12">
                
                {/* Visual Image Grid - Mobile Horizontal Scroll / Desktop Grid */}
                <div className="relative group">
                    <div className="flex md:grid md:grid-cols-5 gap-3 h-[300px] md:h-[400px] overflow-x-auto md:overflow-visible scrollbar-hide snap-x px-2 pb-4">
                        {showcaseImages.slice(0, 6).map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex-shrink-0 w-[80%] md:w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white snap-center ${
                                    i === 2 ? 'md:col-span-1 md:h-[110%] md:-translate-y-6' : ''
                                }`}
                            >
                                <img src={img} alt="Showcase" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-4 right-4 md:hidden flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                    <Camera className="w-3 h-3 text-white" />
                                    <span className="text-[10px] text-white font-black uppercase">نتيجة حقيقية</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Swipe indicator for mobile */}
                    <div className="md:hidden flex justify-center gap-1.5 mt-2">
                         {[0,1,2].map((dot) => (
                             <div key={dot} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                         ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Content Section - Simplified for Mobile */}
                    <div className="flex-1 text-right w-full lg:order-2 space-y-6 md:space-y-10">
                        {/* Highlights Grid - Better Mobile Taps */}
                        <div className="grid grid-cols-2 gap-2.5 md:gap-4">
                            {mainAdvantages.map((adv, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center md:items-end justify-center text-center md:text-right bg-secondary/30 backdrop-blur-xl p-4 md:p-6 rounded-[24px] md:rounded-[36px] border border-white shadow-sm active:scale-95 transition-all"
                                >
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                                        <adv.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                                    </div>
                                    <h4 className="text-[13px] md:text-xl font-black text-foreground leading-tight">{adv.text}</h4>
                                    <p className="hidden md:block text-[11px] font-bold text-muted-foreground uppercase tracking-tight mt-1">{adv.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Conversion High-Impact Area */}
                        <div className="flex flex-col gap-5 pt-2">
                           {/* Trust badge for mobile priority */}
                           <div className="flex items-center justify-center md:justify-end gap-3 px-5 py-3 rounded-2xl bg-white/40 border border-white shadow-sm md:hidden">
                                <div className="flex -space-x-2 space-x-reverse">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5 text-amber-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-black text-foreground tracking-tighter">4.9/5</span>
                                    <span className="text-[10px] text-muted-foreground mr-1">(+1.5k عميل)</span>
                                </div>
                            </div>

                            <Button size="lg" className="h-16 md:h-24 px-8 md:px-16 text-xl md:text-3xl font-black rounded-[24px] md:rounded-[2.5rem] bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 w-full group overflow-hidden relative" asChild>
                                <Link href={heroContent.ctas.primary.href} className="flex items-center justify-center gap-4">
                                    <span className="relative z-10 flex items-center gap-3">
                                        {heroContent.ctas.primary.text}
                                        <ArrowLeft className="h-6 w-6 md:h-9 md:w-9 transition-transform group-hover:-translate-x-2" />
                                    </span>
                                </Link>
                            </Button>
                            
                            <div className="hidden md:flex items-center justify-end gap-4 px-6 py-4 rounded-3xl bg-white/50 backdrop-blur-md border border-border shadow-inner">
                                <div className="flex -space-x-3 space-x-reverse">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary overflow-hidden" />
                                    ))}
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1.5 text-amber-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="text-sm font-black text-foreground">4.9/5 التقييم العام</span>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tight">+1,500 زبون سعيد في المغرب</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Visual Grid - Clean Mobile Grid */}
                    <div className="flex-1 w-full lg:order-1 pt-6 md:pt-0">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                            {showcaseImages.slice(6, 10).map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl border-4 border-white transition-transform hover:rotate-2"
                                >
                                    <img src={img} alt="Result" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Light Glare */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
        </section>
    )
}
