"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { products } from "@/lib/products"
import { trackLead } from "@/lib/facebook-pixel"

interface ContactFormProps {
  preselectedProduct?: string | null
}

export function ContactForm({ preselectedProduct }: ContactFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(preselectedProduct || "")
  const [additionalProducts, setAdditionalProducts] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Get form data
      const formData = new FormData(e.currentTarget)
      const productId = preselectedProduct || selectedProduct
      const product = products.find((p) => p.id === productId)

      // Prepare email data
      const emailData = {
        fullName: formData.get('fullName'),
        company: formData.get('company'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        message: formData.get('message'),
        product: product?.name || 'Non spécifié',
        quantity: formData.get('quantity'),
        additionalProducts: additionalProducts.map(id => 
          products.find(p => p.id === id)?.name || id
        ),
      }

      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error('Email API error:', result)
        throw new Error(result.details || 'Failed to send email')
      }

      console.log('Email sent successfully:', result)

      // Track Lead event in Facebook Pixel
      if (product) {
        trackLead(product.name, product.id, product.priceHT)
      }

      toast({
        title: "✅ Demande envoyée !",
        description: "Nous vous contactons dans les plus brefs délais.",
      })

      // Reset form
      ;(e.target as HTMLFormElement).reset()
      if (!preselectedProduct) {
        setSelectedProduct("")
      }
      setAdditionalProducts([])
    } catch (error: any) {
      console.error('Submission error:', error)
      toast({
        title: "❌ Erreur d'envoi",
        description: error.message || "Une erreur est survenue. Veuillez nous appeler au 0607056637.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const preselectedProductName = preselectedProduct ? products.find((p) => p.id === preselectedProduct)?.name : null

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background -z-10" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            <span className="text-gradient">Contact</span> & commande
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Besoin d'aide pour choisir le bon projecteur ? Envie d'un devis personnalisé ou d'une étude de faisabilité ?
            Contactez-nous dès aujourd'hui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 card-hover">
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Appelez-nous</p>
                <a href="tel:0607056637" className="text-lg font-semibold hover:text-primary transition-colors">
                  0607056637
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 card-hover">
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disponible 7j/7</p>
                <p className="text-lg font-semibold">Réponse rapide garantie</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardTitle className="text-2xl">Formulaire de commande</CardTitle>
            <CardDescription>Remplissez ce formulaire et nous vous contacterons rapidement</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {preselectedProduct ? (
                  <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Produit sélectionné</p>
                    <p className="text-xl font-bold text-primary">Projecteur {preselectedProductName}</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="product">Choisir un produit *</Label>
                    <Select value={selectedProduct} onValueChange={setSelectedProduct} required>
                      <SelectTrigger id="product" className="border-2 relative z-10">
                        <SelectValue placeholder="Sélectionnez un modèle de projecteur" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name} - {product.power} ({product.distance})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantité *</Label>
                  <Input 
                    id="quantity" 
                    name="quantity" 
                    type="number" 
                    min="1" 
                    defaultValue="1"
                    required 
                    placeholder="1" 
                    className="border-2 relative z-10" 
                  />
                </div>
              </div>

              {/* Additional Products Section */}
              <div className="space-y-4 p-6 bg-accent/5 rounded-lg border-2 border-accent/20">
                <div className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-accent-foreground" />
                  <Label className="text-lg font-semibold">Produits additionnels (optionnel)</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez d'autres modèles de projecteurs à ajouter à votre commande
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {products
                    .filter((p) => p.id !== (preselectedProduct || selectedProduct))
                    .map((product) => (
                      <div key={product.id} className="flex items-start space-x-3 p-3 rounded-lg border-2 hover:border-primary/50 transition-colors">
                        <Checkbox
                          id={`additional-${product.id}`}
                          checked={additionalProducts.includes(product.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setAdditionalProducts([...additionalProducts, product.id])
                            } else {
                              setAdditionalProducts(additionalProducts.filter((id) => id !== product.id))
                            }
                          }}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label
                            htmlFor={`additional-${product.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {product.name}
                          </Label>
                          <p className="text-xs text-muted-foreground mt-1">
                            {product.power} • {product.distance} • {product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                {additionalProducts.length > 0 && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      {additionalProducts.length} produit{additionalProducts.length > 1 ? "s" : ""} additionnel{additionalProducts.length > 1 ? "s" : ""} sélectionné{additionalProducts.length > 1 ? "s" : ""}
                    </p>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom complet *</Label>
                  <Input id="fullName" name="fullName" required placeholder="Jean Dupont" className="border-2 relative z-10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Nom de la société *</Label>
                  <Input id="company" name="company" required placeholder="Ma Société SARL" className="border-2 relative z-10" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="06 07 05 66 37"
                    className="border-2 relative z-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    placeholder="123 Rue de la République, 75001 Paris"
                    className="border-2 relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet, le modèle souhaité, etc."
                  rows={4}
                  className="border-2 relative z-10"
                />
              </div>

              <Button type="submit" className="w-full gradient-glow text-lg" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Commander maintenant"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
