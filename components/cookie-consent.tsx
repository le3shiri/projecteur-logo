"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else if (consent === "accepted") {
      // If previously accepted, initialize tracking
      initializeTracking()
    }
  }, [])

  const initializeTracking = () => {
    // Facebook Pixel is already loaded, just track consent
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("consent", "grant")
    }
  }

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    initializeTracking()
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    // Revoke Facebook Pixel consent
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("consent", "revoke")
    }
    setShowBanner(false)
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-500">
      <Card className="max-w-4xl mx-auto border-2 shadow-2xl bg-background/95 backdrop-blur-md">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Cookie className="h-6 w-6 text-primary" />
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">🍪 Nous utilisons des cookies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience, 
                    analyser le trafic du site et personnaliser le contenu. En cliquant sur "Accepter", vous 
                    consentez à l'utilisation de ces technologies, y compris Facebook Pixel pour le suivi des 
                    conversions publicitaires.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={handleClose}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="gradient-glow"
                  size="lg"
                >
                  Accepter tous les cookies
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="lg"
                  className="border-2"
                >
                  Refuser
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Pour plus d'informations, consultez notre{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
