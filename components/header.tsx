"use client"

import { Lightbulb, Menu, X, Phone, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-2 md:py-3" 
          : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "bg-background/60 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-white/10" 
              : "bg-background/40 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border border-white/5 lg:border-transparent shadow-none"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/logo.png" 
                alt="بروجيكتور لوجو" 
                className="w-12 h-auto object-contain relative z-10 hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                بروجيكتور <span className="text-gradient">لوجو</span>
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
                التميز بتقنية LED
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: "من نحن", href: "/about" },
              { label: "المتجر", href: "/shop", icon: ShoppingBag },
              { label: "أسئلة شائعة", href: "/faq" }
            ].map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className="px-4 py-2 text-sm font-bold hover:text-primary transition-all relative group rounded-xl hover:bg-white/5 flex items-center gap-2"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
                <motion.span 
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" 
                />
              </Link>
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-4" />

            <div className="flex items-center gap-3">
              <a 
                href="tel:0607056637" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all font-bold text-xs"
              >
                <Phone className="h-3 w-3 text-primary" />
                <span dir="ltr">06 07 05 66 37</span>
              </a>
              
              <Button className="gradient-glow px-6 py-2.5 text-sm font-black rounded-xl shadow-xl hover:scale-105 transition-all group" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  اطلب الآن
                  <Sparkles className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
                </Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden rounded-xl hover:bg-white/5 border border-white/10 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 py-8 px-6 bg-background/80 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl lg:hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {[
                { label: "من نحن", href: "/about" },
                { label: "المتجر", href: "/shop", icon: ShoppingBag },
                { label: "أسئلة شائعة", href: "/faq" }
              ].map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="flex items-center gap-4 p-4 text-xl font-black hover:text-primary hover:bg-white/5 transition-all rounded-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {item.icon ? <item.icon className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </div>
                  {item.label}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-2" />
              
              <a 
                href="tel:0607056637" 
                className="flex items-center gap-4 p-4 text-xl font-black bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span dir="ltr">06 07 05 66 37</span>
              </a>
              
              <Button className="gradient-glow py-8 text-xl font-black rounded-2xl" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  اطلب الآن

                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
