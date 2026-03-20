"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, Plus, Upload, X, Image as ImageIcon, Send, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react"
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
          title: "صيغة غير صالحة",
          description: "الرجاء رفع صورة (JPG, PNG, GIF, SVG, WEBP)",
          variant: "destructive",
        })
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "الملف كبير جداً",
          description: "الحد الأقصى للحجم هو 5 ميجابايت",
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
      const productName = product?.name || 'غير محدد'
      const additionalProductsList = additionalProducts.map(id =>
        products.find(p => p.id === id)?.name || id
      ).join(', ')

      const web3formsData: any = {
        access_key: '0d416089-cc65-4d17-9147-a47b2f73a9e4',
        subject: `🎯 طلب جديد - ${productName} (${fullName})`,
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

      let googleDriveUrl = ""
      
      try {
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
          logoFileName: logoFileName || "لا يوجد ملف",
          logoBase64: logoBase64,
          logoFileType: logoFileType
        }

        const googleResponse = await fetch('/api/save-to-google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sheetData),
        })

        if (googleResponse.ok) {
          const result = await googleResponse.json()
          if (result.file) {
            googleDriveUrl = result.file
          }
        }
      } catch (error) {
        console.error('Google Sheets saving error:', error)
      }

      if (product) {
        trackLead(product.name, product.id, product.priceHT)
      }

      toast({
        title: "تم إرسال الطلب!",
        description: "يتم تحويلك إلى واتساب لإتمام الطلب...",
      })

      // Construct WhatsApp Message
      const waPhoneNumber = "212607056637" // Moroccan number format for 06 07 05 66 37
      const waMessage = `*مرحباً، أود تأكيد طلبي:*
      
*المنتج:* ${productName}
*الكمية:* ${quantity}
${additionalProductsList ? `*إضافات:* ${additionalProductsList}\n` : ''}
*معلومات العميل:*
*الاسم:* ${fullName}
*الشركة:* ${company || 'لا يوجد'}
*الهاتف:* ${phone}
*العنوان:* ${address}
${message ? `\n*ملاحظات:* ${message}` : ''}
${logoFileName ? `\n*مرفق شعار:* نعم (${logoFileName})` : ''}
${googleDriveUrl ? `\n*رابط الشعار:* ${googleDriveUrl}` : ''}
`
      
      const whatsappUrl = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(waMessage)}`
      
      // Open WhatsApp
      window.location.href = whatsappUrl

      ;(e.target as HTMLFormElement).reset()
      if (!preselectedProduct) setSelectedProduct("")
      setAdditionalProducts([])
      setLogoFile(null)
      setLogoPreview(null)

    } catch (error: any) {
      console.error('Submission error:', error)
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.",
        variant: "destructive",
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
        className="container mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase shadow-sm">
            <Sparkles className="w-3 h-3" />
            مشروعك المخصص
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="text-gradient">اتصل بنا</span> واطلب
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            اجعل مشروعك ينبض بالحياة. املأ النموذج أدناه وسيتصل بك خبراؤنا خلال 24 ساعة لتقديم عرض مخصص.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Info Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">معلومات الاتصال</h3>
            
            <div className="grid gap-4">
              {[
                { icon: Phone, label: "الهاتف", value: "06 07 05 66 37", href: "tel:0607056637", color: "text-primary", gradient: "from-primary/10 to-transparent", dir: "ltr" },
                { icon: Mail, label: "البريد الإلكتروني", value: "contact@projecteurlogo.com", href: "mailto:Projecteurlogo1@gmail.com", color: "text-accent-foreground", gradient: "from-accent/10 to-transparent", dir: "ltr" }
              ].map((item, i) => (
                <div key={i} className="group relative p-6 rounded-2xl bg-secondary/20 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center gap-4 z-10">
                    <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 border border-border ${item.color}`}>
                       <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</p>
                      <a href={item.href} dir={item.dir} className="text-lg font-bold group-hover:text-primary transition-colors inline-block">{item.value}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 mt-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden group shadow-sm">
               <div className="absolute -top-6 -right-6 p-2 opacity-10 group-hover:rotate-45 group-hover:scale-125 transition-all duration-700">
                 <Sparkles className="h-24 w-24 text-primary" />
               </div>
               <div className="relative z-10 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                 <CheckCircle2 className="w-5 h-5 text-primary" />
               </div>
               <h4 className="text-xl font-bold mb-2 text-foreground">خدمة ممتازة</h4>
               <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                 مرافقة شخصية من الألف إلى الياء. نقوم بتحسين تصميمك مجانًا لضمان جودة الإسقاط.
               </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <Card className="relative border-none bg-background/60 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-border overflow-hidden group/form">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
              
              <CardHeader className="p-6 sm:p-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent border-b border-border">
                <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">نموذج سريع</CardTitle>
                <CardDescription className="text-base font-medium mt-1">سيبدأ فريق التصميم لدينا العمل فور الاستلام.</CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Step 1: Product Selection */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-3">
                       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                       <h4 className="text-xl font-bold tracking-tight">إعداد الجهاز</h4>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {preselectedProduct ? (
                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">الموديل المحدد</p>
                            <p className="text-lg font-bold">{preselectedProductName}</p>
                          </div>
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Label htmlFor="product" className="text-sm font-semibold">الموديل الرئيسي *</Label>
                          <Select value={selectedProduct} onValueChange={setSelectedProduct} required>
                            <SelectTrigger id="product" className="h-12 rounded-xl bg-background border-input focus:ring-2 focus:ring-primary/50 transition-all font-medium">
                              <SelectValue placeholder="اختر جهاز عرض" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-border bg-background shadow-lg">
                              {products.map((product) => (
                                <SelectItem key={product.id} value={product.id} className="rounded-lg p-3 font-medium cursor-pointer">
                                  {product.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="quantity" className="text-sm font-semibold">الكمية *</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          defaultValue="1"
                          required
                          dir="ltr"
                          className="h-12 rounded-xl bg-background border-input focus:ring-2 focus:ring-primary/50 transition-all font-medium text-base text-left"
                        />
                      </div>
                    </div>

                    {/* Additional Options */}
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border space-y-4">
                       <div className="flex items-center gap-3 mb-2">
                          <Plus className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-bold text-foreground">إضافة عدسات / خيارات</p>
                          </div>
                       </div>
                       
                       <div className="grid sm:grid-cols-2 gap-3">
                        {products
                          .filter((p) => p.id !== (preselectedProduct || selectedProduct))
                          .map((product) => (
                            <div key={product.id} className={`relative p-3 rounded-xl border transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                              additionalProducts.includes(product.id) ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-background hover:border-primary/40"
                            }`}>
                              <Checkbox
                                id={`additional-${product.id}`}
                                checked={additionalProducts.includes(product.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) setAdditionalProducts([...additionalProducts, product.id])
                                  else setAdditionalProducts(additionalProducts.filter((id) => id !== product.id))
                                }}
                                className="h-5 w-5 rounded-md border-border data-[state=checked]:border-primary"
                              />
                              <Label htmlFor={`additional-${product.id}`} className="flex-1 cursor-pointer select-none">
                                <p className="text-sm font-semibold">{product.name}</p>
                                <p className="text-xs font-medium text-primary mt-0.5" dir="ltr">{product.power}</p>
                              </Label>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* Step 2: Customer Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-3">
                       <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent-foreground font-bold">2</div>
                       <h4 className="text-xl font-bold tracking-tight">معلوماتك</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
                       {[
                         { id: "fullName", label: "الاسم واللقب", placeholder: "أحمد محمد" },
                         { id: "company", label: "اسم الشركة", placeholder: "شركتك" },
                         { id: "phone", label: "رقم الهاتف", placeholder: "06 00 00 00 00", type: "tel" },
                         { id: "address", label: "عنوان التسليم الكامل", placeholder: "الرقم، الشارع، الرمز البريدي، المدينة", span: "md:col-span-2" }
                       ].map((field) => (
                        <div key={field.id} className={`space-y-2 ${field.span || ""}`}>
                          <Label htmlFor={field.id} className="text-sm font-semibold">{field.label} *</Label>
                          <Input 
                            id={field.id} 
                            name={field.id} 
                            required 
                            type={field.type || "text"}
                            placeholder={field.placeholder} 
                            dir={field.type === "tel" ? "ltr" : "auto"}
                            className="h-12 rounded-xl bg-background border-input focus:ring-2 focus:ring-primary/50 transition-all font-medium text-base placeholder:text-muted-foreground/60 text-right" 
                          />
                        </div>
                       ))}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">ملاحظات وتخصيص (اختياري)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="تفاصيل الحدث، معلومات إضافية..."
                        className="rounded-xl p-4 bg-background border-input focus:ring-2 focus:ring-primary/50 transition-all font-medium text-base placeholder:text-muted-foreground/60 min-h-[120px] resize-y text-right"
                      />
                    </div>
                  </div>

                  {/* Step 3: Logo Upload */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-border pb-3">
                       <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">3</div>
                       <h4 className="text-xl font-bold tracking-tight">ملف الشعار</h4>
                    </div>

                    <div className="relative">
                       <input
                        type="file"
                        id="logo-upload"
                        accept="image/*,.ai,.pdf"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                      
                      {!logoFile ? (
                        <Label
                          htmlFor="logo-upload"
                          className="flex flex-col items-center justify-center w-full py-12 border-2 border-dashed border-border rounded-2xl cursor-pointer bg-secondary/20 hover:bg-secondary/40 hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shadow-sm mb-4">
                             <Upload className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-lg font-bold tracking-tight">نقل التصميم الخاص بك</span>
                          <span className="text-sm font-medium text-muted-foreground mt-2" dir="ltr">الأنواع: PNG, JPG, AI, PDF, SVG (الحد الأقصى 5 ميجابايت)</span>
                        </Label>
                      ) : (
                        <div className="relative p-6 rounded-2xl bg-background border border-border shadow-sm flex flex-col sm:flex-row items-center gap-6">
                          <button
                            type="button"
                            onClick={removeLogoFile}
                            className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-destructive text-white flex items-center justify-center shadow-md hover:scale-105 transition-all z-10"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          
                          {logoPreview && (
                            <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border shrink-0 p-2">
                               <img src={logoPreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0 w-full text-center sm:text-left text-right">
                            <p className="text-lg font-bold truncate" dir="ltr">{logoFile.name}</p>
                            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2" dir="ltr">
                              <span className="text-xs font-semibold text-muted-foreground">
                                {(logoFile.size / 1024).toFixed(0)} KB
                              </span>
                              <span className="text-xs font-semibold text-muted-foreground">
                                {logoFile.type.split('/')[1] || 'ملف'}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-3 mt-4">
                               <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                               <span className="text-sm font-bold text-emerald-500">جاهز للنقل</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-14 rounded-xl text-lg font-bold gradient-glow shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-3">
                           <motion.div
                             animate={{ rotate: 360 }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                           >
                              <Sparkles className="h-5 w-5" />
                           </motion.div>
                           جاري المعالجة...
                        </span>
                      ) : (
                        <span className="flex items-center gap-3">
                          تأكيد الطلب
                          <ArrowRight className="h-5 w-5 rotate-180" />
                        </span>
                      )}
                    </Button>
                    <p className="text-center text-xs font-medium text-muted-foreground mt-4 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> تأمين بياناتك بتشفير من طرف إلى طرف
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
