"use client"

import { Lightbulb, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
             <div className="flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Projecteur Logo" 
                className="w-17 h-auto object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Projecteur <span className="text-gradient">Logo</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              À propos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8" />
            </Link>
            <Link 
              href="/shop" 
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              Boutique
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8" />
            </Link>
            <Link 
              href="/faq" 
              className="px-4 py-2 text-sm font-medium hover:text-primary transition-all duration-300 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8" />
            </Link>
            <Button className="gradient-glow ml-4 px-6 py-2 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/contact">Commander</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-foreground hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/10 mt-2 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/shop" 
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link 
                href="/faq" 
                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button className="gradient-glow mx-4 mt-2" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Commander
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
