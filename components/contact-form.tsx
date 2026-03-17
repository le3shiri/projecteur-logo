"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Plus, Upload, X, Image as ImageIcon, Send, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { products } from "@/lib/products"
import { trackLead } from "@/lib/facebook-pixel"
import { motion, AnimatePresence } from "framer-motion"

interface ContactFormProps {
  preselectedProduct?: string | null
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export function ContactForm({ preselectedProduct }: ContactFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(preselectedProduct || "")
  const [additionalProducts, setAdditionalProducts] = useState<string[]>([])
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp']
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Format invalide",
          description: "Veuillez télécharger une image (JPG, PNG, GIF, SVG, WEBP)",
          variant: "destructive",
        })
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Fichier trop volumineux",
          description: "La taille maximale est de 5 MB",
          variant: "destructive",
        })
        return
      }

      setLogoFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeLogoFile = () => {
    setLogoFile(null)
    setLogoPreview(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const productId = preselectedProduct || selectedProduct
      const product = products.find((p) => p.id === productId)

      let logoBase64 = null
      let logoFileName = null
      let logoFileType = null

      if (logoFile) {
        const reader = new FileReader()
        logoBase64 = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(logoFile)
        })
        logoFileName = logoFile.name
        logoFileType = logoFile.type
      }

      const fullName = formData.get('fullName') as string
      const company = formData.get('company') as string
      const phone = formData.get('phone') as string
      const address = formData.get('address') as string
      const message = (formData.get('message') as string) || ''
      const quantity = formData.get('quantity') as string
      const productName = product?.name || 'Non spécifié'
      const additionalProductsList = additionalProducts.map(id =>
        products.find(p => p.id === id)?.name || id
      ).join(', ')

      const web3formsData: any = {
        access_key: '0d416089-cc65-4d17-9147-a47b2f73a9e4',
        subject: `🎯 Nouvelle Commande - ${productName} (${fullName})`,
        email: 'Projecteurlogo1@gmail.com',
        replyto: 'Projecteurlogo1@gmail.com',
        fullName,
        company,
        phone,
        address,
        message,
        product: productName,
        quantity,
        additionalProducts: additionalProductsList,
      }

      if (logoBase64 && logoFileName && logoFileType) {
        web3formsData.logo_preview = logoBase64
        web3formsData.logo_file_name = logoFileName
        web3formsData.logo_file_type = logoFileType
      }

      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(web3formsData),
      })

      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwF37NQlxhxMtpxfFgIoBRoy-BTd2J6TFFZ3Xh_-qDH-UburxgQNNCNj4yH-E_vRuajAA/exec"

      if (GOOGLE_SCRIPT_URL) {
        const sheetData = {
          date: new Date().toLocaleString('fr-FR'),
          fullName,
          company,
          phone,
          address,
          product: productName,
          quantity,
          additionalProducts: additionalProductsList,
          message,
          logoFileName: logoFileName || "Aucun fichier",
          logoBase64: logoBase64,
          logoFileType: logoFileType
        }

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData),
        })
      }

      if (product) {
        trackLead(product.name, product.id, product.priceHT)
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous avons bien reçu votre commande.",
      })

      ;(e.target as HTMLFormElement).reset()
      if (!preselectedProduct) setSelectedProduct("")
      setAdditionalProducts([])
      setLogoFile(null)
      setLogoPreview(null)

    } catch (error: any) {
      console.error('Submission error:', error)
      toast({
        title: "Information",
        description: "Votre commande a été traitée, mais une erreur technique mineure est survenue.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const preselectedProductName = preselectedProduct ? products.find((p) => p.id === preselectedProduct)?.name : null

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-20" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="text-gradient">Contact</span> & Commande
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            Donnez vie à votre projet. Remplissez le formulaire ci-dessous et nos experts vous recontacteront sous 24h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Info Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-black tracking-tight">Nos Coordonnées</h3>
            
            <div className="grid gap-4">
              {[
                { icon: Phone, label: "Téléphone", value: "06 07 05 66 37", href: "tel:0607056637", color: "text-primary" },
                { icon: Mail, label: "Email", value: "contact@projecteurlogo.com", href: "mailto:Projecteurlogo1@gmail.com", color: "text-accent-foreground" }
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-[28px] bg-secondary/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-background flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${item.color}`}>
                       <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      <a href={item.href} className="text-lg font-black group-hover:text-primary transition-colors">{item.value}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[32px] bg-primary/10 border border-primary/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                 <Sparkles className="h-20 w-20" />
               </div>
               <h4 className="text-xl font-black mb-2">Service Premium</h4>
               <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                 Accompagnement personnalisé pour chaque client. Nous vous aidons à optimiser votre logo pour un rendu LED parfait.
               </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <Card className="border-none bg-background/60 backdrop-blur-2xl rounded-[40px] shadow-3xl ring-1 ring-white/10 overflow-hidden">
              <CardHeader className="p-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-b border-white/5">
                <CardTitle className="text-3xl font-black tracking-tighter">Formulaire de Commande</CardTitle>
                <CardDescription className="text-lg font-medium">Réponse ultra-rapide garantie</CardDescription>
              </CardHeader>
              
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Step 1: Product Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-xs">1</div>
                       <h4 className="text-lg font-black uppercase tracking-widest">Configuration</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                      {preselectedProduct ? (
                        <div className="p-6 bg-primary/10 rounded-2xl border-2 border-primary/20 flex items-center justify-between group">
                          <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Modèle sélectionné</p>
                            <p className="text-xl font-black">{preselectedProductName}</p>
                          </div>
                          <CheckCircle2 className="h-8 w-8 text-primary" />
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Label htmlFor="product" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Modèle Principal *</Label>
                          <Select value={selectedProduct} onValueChange={setSelectedProduct} required>
                            <SelectTrigger id="product" className="h-16 rounded-2xl border-none bg-secondary/50 focus:ring-2 focus:ring-primary/40 transition-all font-black">
                              <SelectValue placeholder="Choisir un projecteur" />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl border-white/10 bg-background/95 backdrop-blur-xl">
                              {products.map((product) => (
                                <SelectItem key={product.id} value={product.id} className="rounded-xl p-3 font-bold">
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="space-y-3">
                        <Label htmlFor="quantity" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Quantité *</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          defaultValue="1"
                          required
                          className="h-16 rounded-2xl border-none bg-secondary/50 focus:ring-2 focus:ring-primary/40 transition-all font-black text-lg text-center"
                        />
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="p-8 rounded-[32px] bg-secondary/30 border border-white/5 space-y-6">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Plus className="h-5 w-5 text-primary" />
                            <p className="text-sm font-black uppercase tracking-widest">Besoin de plus ?</p>
                         </div>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-4">
                        {products
                          .filter((p) => p.id !== (preselectedProduct || selectedProduct))
                          .map((product) => (
                            <div key={product.id} className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                              additionalProducts.includes(product.id) ? "border-primary bg-primary/5 shadow-lg" : "border-white/5 hover:border-primary/30 bg-background/40"
                            }`}>
                              <Checkbox
                                id={`additional-${product.id}`}
                                checked={additionalProducts.includes(product.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) setAdditionalProducts([...additionalProducts, product.id])
                                  else setAdditionalProducts(additionalProducts.filter((id) => id !== product.id))
                                }}
                                className="h-5 w-5 rounded-md border-2 border-primary/30"
                              />
                              <Label htmlFor={`additional-${product.id}`} className="flex-1 cursor-pointer">
                                <p className="text-sm font-black tracking-tight">{product.name}</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">{product.power}</p>
                              </Label>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* Step 2: Customer Details */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent-foreground font-black text-xs">2</div>
                       <h4 className="text-lg font-black uppercase tracking-widest">Informations</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       {[
                         { id: "fullName", label: "Nom Complet", placeholder: "Jean Dupont", icon: Send },
                         { id: "company", label: "Société", placeholder: "Votre Entreprise", icon: Sparkles },
                         { id: "phone", label: "Téléphone", placeholder: "06 00 00 00 00", type: "tel" },
                         { id: "address", label: "Adresse de Livraison", placeholder: "Adresse complète", span: "md:col-span-2" }
                       ].map((field) => (
                        <div key={field.id} className={`space-y-3 ${field.span || ""}`}>
                          <Label htmlFor={field.id} className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{field.label} *</Label>
                          <Input 
                            id={field.id} 
                            name={field.id} 
                            required 
                            type={field.type || "text"}
                            placeholder={field.placeholder} 
                            className="h-16 rounded-2xl border-none bg-secondary/50 focus:ring-2 focus:ring-primary/40 transition-all font-bold px-6" 
                          />
                        </div>
                       ))}
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message (Optionnel)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Précisions sur votre projet..."
                        className="rounded-[28px] border-none bg-secondary/50 focus:ring-2 focus:ring-primary/40 transition-all font-bold p-6 min-h-[150px]"
                      />
                    </div>
                  </div>

                  {/* Step 3: Logo Upload */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs">3</div>
                       <h4 className="text-lg font-black uppercase tracking-widest">Logo & Design</h4>
                    </div>

                    <div className="relative group">
                       <input
                        type="file"
                        id="logo-upload"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                      
                      {!logoFile ? (
                        <Label
                          htmlFor="logo-upload"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/10 rounded-[40px] cursor-pointer bg-secondary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-500 group"
                        >
                          <div className="w-20 h-20 rounded-3xl bg-background flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 transition-transform">
                             <Upload className="h-10 w-10 text-primary" />
                          </div>
                          <span className="text-xl font-black tracking-tight">Télécharger votre Logo</span>
                          <span className="text-sm font-medium text-muted-foreground mt-2">Haute résolution recommandée (PNG, AI, PDF)</span>
                        </Label>
                      ) : (
                        <div className="relative p-8 rounded-[40px] bg-background shadow-2xl ring-1 ring-primary/30 flex items-center gap-8 group">
                          <button
                            type="button"
                            onClick={removeLogoFile}
                            className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-destructive text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-10"
                          >
                            <X className="h-5 w-5" />
                          </button>
                          
                          {logoPreview && (
                            <div className="w-32 h-32 rounded-3xl overflow-hidden bg-muted flex items-center justify-center border-2 border-primary/20 shrink-0">
                               <img src={logoPreview} alt="Preview" className="max-w-[80%] max-h-[80%] object-contain" />
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <p className="text-xl font-black truncate">{logoFile.name}</p>
                            <p className="text-sm font-bold text-muted-foreground mt-1 uppercase">
                              {(logoFile.size / 1024).toFixed(0)} KB • {logoFile.type.split('/')[1]}
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                               <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    className="h-full bg-primary" 
                                  />
                               </div>
                               <span className="text-sm font-black text-primary">Prêt</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-24 rounded-[32px] text-2xl font-black gradient-glow shadow-3xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                         <motion.div
                           animate={{ rotate: 360 }}
                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                         >
                            <Sparkles className="h-8 w-8" />
                         </motion.div>
                         ENVOI EN COURS...
                      </span>
                    ) : (
                      <span className="flex items-center gap-4">
                        COMMANDER MAINTENANT
                        <ArrowRight className="h-8 w-8" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
