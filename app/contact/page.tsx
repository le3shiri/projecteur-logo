"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

import { motion } from "framer-motion"
import { Plus, Minus, MessageCircle, Clock, ShieldCheck, Zap } from "lucide-react"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const faqs = [
  {
    question: "ما هو وقت التسليم القياسي؟",
    answer: "بعد التحقق من تصميمك البصري (الشعار)، يقوم فريقنا بإعداد جهاز العرض في 24 إلى 48 ساعة. يستغرق التوصيل بعد ذلك بين 3 إلى 5 أيام عمل.",
    icon: Clock
  },
  {
    question: "هل يمكنني تغيير الصورة المعروضة لاحقًا؟",
    answer: "بالطبع، أجهزة العرض لدينا تستخدم عدسات زجاجية (جوبو) قابلة للتغيير، يمكنك طلب عدسات جديدة في أي وقت لتحديث عروضك أو صورتك.",
    icon: Zap
  },
  {
    question: "هل شعاري الحالي متوافق؟",
    answer: "يمكننا تكييف أي شعار تقريبًا (PDF، AI، PNG عالي الدقة). يتكفل فريق المصممين لدينا بالتحسين مجانًا لضمان الحدة بمستوى الليزر.",
    icon: ShieldCheck
  },
]

function ContactContent() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get("produit")

  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <Header />

      {/* Main Contact Form Section (Self-contained) */}
      <div className="w-full">
        <ContactForm preselectedProduct={preselectedProduct} />
      </div>

      {/* Dedicated FAQ Section for Contact Page */}
      <section className="py-24 px-4 relative overflow-hidden bg-secondary/10 border-t border-border/50">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase mx-auto">
              <MessageCircle className="w-4 h-4 ml-2" />
              <span>هل تحتاج إلى مزيد من المعلومات؟</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">الأسئلة المتداولة</h2>
            <p className="text-muted-foreground font-medium text-lg">ابحث عن إجابات للأسئلة الأكثر شيوعًا لدينا.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      variants={itemVariants}
      className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-secondary/40 shadow-sm' : 'bg-background hover:border-primary/40 hover:bg-secondary/10'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-xl border transition-colors ${isOpen ? 'bg-primary border-primary text-white' : 'bg-primary/5 text-primary border-primary/20'}`}>
            <faq.icon className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg">{faq.question}</span>
        </div>
        <div className={`p-1.5 rounded-full transition-colors ${isOpen ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
           {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0 text-muted-foreground font-medium pl-[4.5rem] leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <ContactContent />
    </Suspense>
  )
}
