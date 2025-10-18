"use client"

import { Lightbulb, Menu, X, Phone, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-xl border-b-2 border-primary/30 shadow-lg shadow-primary/5" 
        : "bg-background/95 backdrop-blur-md border-b border-primary/20"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group">
             <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <img 
                src="/logo.png" 
                alt="Projecteur Logo" 
                className="w-14 h-auto object-contain relative z-10"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Projecteur <span className="text-gradient">Logo</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              href="/about" 
              className="px-5 py-2.5 text-sm font-semibold hover:text-primary transition-all duration-300 relative group rounded-lg hover:bg-primary/5"
            >
              À propos
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link 
              href="/shop" 
              className="px-5 py-2.5 text-sm font-semibold hover:text-primary transition-all duration-300 relative group rounded-lg hover:bg-primary/5 flex items-center gap-2"
            >
              <ShoppingBag className="h-4 w-4" />
              Boutique
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4" />
            </Link>
            <Link 
              href="/faq" 
              className="px-5 py-2.5 text-sm font-semibold hover:text-primary transition-all duration-300 relative group rounded-lg hover:bg-primary/5"
            >
              FAQ
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4" />
            </Link>
            
            {/* Phone Button */}
            <Button 
              variant="outline" 
              className="ml-2 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-foreground hover:text-foreground"
              asChild
            >
              <a href="tel:0607056637"  className="flex items-center gap-2 text-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">0607056637</span>
              </a>
            </Button>
            
            {/* Commander Button */}
            <Button className="gradient-glow ml-2 px-6 py-2.5 text-base font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
              <Link href="/contact">Commander</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-foreground hover:bg-primary/10 border-2 border-transparent hover:border-primary/30 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t-2 border-primary/20 mt-4 animate-in slide-in-from-top-2 duration-300 bg-gradient-to-b from-primary/5 to-transparent rounded-b-2xl">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/about" 
                className="px-6 py-3 text-base font-semibold hover:text-primary hover:bg-primary/10 transition-all rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/shop" 
                className="px-6 py-3 text-base font-semibold hover:text-primary hover:bg-primary/10 transition-all rounded-lg mx-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                Boutique
              </Link>
              <Link 
                href="/faq" 
                className="px-6 py-3 text-base font-semibold hover:text-primary hover:bg-primary/10 transition-all rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              {/* Mobile Phone Button */}
              <a 
                href="tel:0607056637" 
                className="px-6 py-3 text-base font-semibold text-foreground hover:text-foreground hover:bg-primary/10 transition-all rounded-lg mx-2 flex items-center gap-2 border-2 border-primary/30 mt-2"
              >
                <Phone className="h-5 w-5" />
                0607056637
              </a>
              
              {/* Mobile Commander Button */}
              <Button className="gradient-glow mx-4 mt-4 py-6 text-lg font-bold rounded-full" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Commander maintenant
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
