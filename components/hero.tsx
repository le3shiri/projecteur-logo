"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, Play, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden min-h-[90vh] flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-2xl -z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/20 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
                <Lightbulb className="h-4 w-4 text-primary" />
              </div>
              <span className="text-base font-medium text-primary">Technologie LED Professionnelle</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
              Projecteurs de <span className="text-gradient">Logo LED</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-4xl font-semibold text-foreground/90 text-balance">
              Illuminez votre Marque avec <span className="text-gradient">Style</span>
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Transformez votre visibilité avec nos projecteurs LED professionnels. 
              Personnalisables, puissants et conçus pour faire briller votre marque 24/7.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">Haute Puissance</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
                <Sparkles className="h-8 w-8 text-accent-foreground mb-2" />
                <p className="text-sm font-semibold">Personnalisable</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <Star className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">Qualité Pro</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="gradient-glow text-lg px-8 py-6 rounded-full shadow-lg" asChild>
                <Link href="/contact">
                  Commander maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2" asChild>
                <Link href="/shop">
                  Voir les produits
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                ✓ Livraison 48h
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                ✓ Garantie 2 ans
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                ✓ Support 7j/7
              </Badge>
            </div>
          </div>

          {/* Right Content - Video Player */}
          <div className="relative animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl shadow-2xl w-full glow-effect overflow-hidden border-2 border-primary/20 bg-black">
              {/* Video Element - You'll add your video later */}
              <video
                className="w-full h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/IMG-20251016-WA0145.jpg"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <img
                  src="/IMG-20251016-WA0145.jpg"
                  alt="Projecteur LED illuminant un logo"
                  className="w-full h-auto object-cover"
                />
              </video>

              {/* Play Button Overlay (optional decorative element) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/40 opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-10 w-10 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-md border-2 border-primary/20 rounded-2xl p-4 shadow-xl">
              <p className="text-3xl font-bold text-gradient">+ 90%</p>
              <p className="text-sm text-muted-foreground">Visibilité </p>
            </div>
            <div className="absolute -top-6 -right-6 bg-background/95 backdrop-blur-md border-2 border-accent/20 rounded-2xl p-4 shadow-xl">
              <p className="text-3xl font-bold text-gradient">48h</p>
              <p className="text-sm text-muted-foreground">Livraison</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
