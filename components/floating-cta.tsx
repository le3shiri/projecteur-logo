"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { trackInitiateCheckout } from "@/lib/facebook-pixel"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleCTAClick = () => {
    // Track CTA click for conversion measurement
    trackInitiateCheckout("Floating CTA Click", "floating-cta", 0)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
      setIsVisible(scrollY > 200)
    }

    // Make button visible immediately for testing
    setIsVisible(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500 floating-animation">
        <div className="relative group">
          {/* Glow Effect - Behind button */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-60 group-hover:opacity-90 animate-pulse -z-10" />
          
          {/* Multiple Ripple Animations - Behind button */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping -z-10 pointer-events-none" />
          <div className="absolute inset-2 rounded-full border border-accent/30 animate-ping animation-delay-150 -z-10 pointer-events-none" />
          
          {/* Main Button - On top with proper z-index */}
          <Button
            size="lg"
            className="relative z-10 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-8 py-5 rounded-full floating-cta-glow transform hover:scale-110 transition-all duration-300 border-2 border-white/30 text-lg cursor-pointer"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-3 cursor-pointer" onClick={handleCTAClick}>
              <Zap className="h-6 w-6 animate-pulse" />
              <span className="font-extrabold">Demander maintenant</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Secondary Phone CTA (Mobile) */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden animate-in slide-in-from-bottom-4 duration-700">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur-md opacity-60 group-hover:opacity-90" />
          
          {/* Phone Button */}
          <Button
            size="icon"
            className="relative bg-accent hover:bg-accent/90 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 w-14 h-14"
            asChild
          >
            <a href="tel:0607056637" className="flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </a>
          </Button>

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse" />
        </div>
      </div>

      {/* Floating Notification Bubble */}
      {isScrolled && (
        <div className="fixed top-24 right-6 z-40 animate-in slide-in-from-right-4 duration-500 hidden lg:block">
          <div className="bg-gradient-to-r from-primary/95 to-accent/95 backdrop-blur-sm text-white px-4 py-3 rounded-2xl shadow-xl border border-white/20 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="text-sm">
                <p className="font-semibold">Disponible maintenant</p>
                <p className="text-xs opacity-90">Réponse rapide garantie</p>
              </div>
            </div>
          </div>
          
          {/* Arrow pointing to CTA */}
          <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/95" />
        </div>
      )}
    </>
  )
}
