"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Upload, Palette, Cog, Truck, Wrench, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "اختيار الموديل",
    description: "التنسيق، المسافة، قوة الإضاءة ونوع الإضاءة حسب احتياجاتك.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "إرسال شعارك",
    description: "أرسل لنا هويتك البصرية بصيغة PDF أو صورة عالية الدقة.",
    icon: Upload,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "التخصيص",
    description: "تحسين تصميمك للحصول على عرض واضح وقوي على أي سطح.",
    icon: Palette,
    color: "from-orange-500 to-amber-500"
  },
  {
    number: "04",
    title: "التصنيع",
    description: "تتطلب عدساتنا دقة وتركيزاً مطلقين للحصول على نتيجة استثنائية.",
    icon: Cog,
    color: "from-emerald-500 to-teal-500"
  },
  {
    number: "05",
    title: "الشحن",
    description: "توصيل آمن لتتمكن من الاستمتاع بتركيبتك بسرعة.",
    icon: Truck,
    color: "from-primary to-accent"
  },
  {
    number: "06",
    title: "التركيب",
    description: "مرافقة ومساعدة لتركيب مثالي وتأثير أقصى.",
    icon: Wrench,
    color: "from-rose-500 to-orange-500"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export function HowItWorks() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4"
          >
            <Sparkles className="h-3 w-3" />
            عملية التميز
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            كيف <span className="text-gradient">يعمل</span> ؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            مسار سلس في 6 خطوات رئيسية، من التصميم إلى إضاءة علامتك التجارية.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {/* Connecting Lines for Desktop */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative h-full border-none bg-background/40 backdrop-blur-xl rounded-[40px] p-8 group hover:shadow-2xl transition-all duration-500 ring-1 ring-white/10 hover:ring-primary/40 overflow-hidden">
                {/* Step Number Background */}
                <div className={`absolute -top-4 -right-4 text-8xl font-black opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`}>
                  {step.number}
                </div>

                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-foreground" />
                      </div>
                    </div>
                    <span className="text-sm font-black text-primary tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                      مرحلة {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
           <button className="group relative px-8 py-4 rounded-2xl bg-secondary/50 font-black text-sm tracking-widest hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden shadow-xl ring-1 ring-white/10">
              <span className="relative z-10 flex items-center gap-3">
                ابدأ مشروعك 
                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
           </button>
        </motion.div>
      </div>
    </section>
  )
}
