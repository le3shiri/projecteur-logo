"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Palette, Zap, Shield, Wrench, Award, Sparkles, Ruler, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Eye,
    title: "أقصى درجات الظهور",
    description: "اجذب الأنظار على الفور. 90% من المارة يلاحظون اللافتات الضوئية المتحركة أو الإسقاطات عالية الوضوح.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "تخصيص كامل",
    description: "اعرض أي تصميم. شعارات معقدة، نصوص، أو أنماط موسمية، قابلة للتغيير في بضع دقائق.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "إضاءة LED صديقة للبيئة",
    description: "استهلاك منخفض جداً للطاقة (12V/24V) مع أقصى قوة. خيار بيئي واقتصادي ومستدام.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "مقاومة فائقة",
    description: "حاصل على شهادة IP65/67. مصمم ليتحمل ظروف الطقس القاسية، من البرد القارس للحرارة الشديدة.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Wrench,
    title: "التوصيل والتشغيل",
    description: "تركيب سريع كالبرق. تثبيت سهل على الحائط وتوصيل بديهي للحصول على نتيجة احترافية فورية.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "صورة العلامة التجارية",
    description: "امنح منشأتك بُعداً فاخراً. حداثة وتميز مضمونان من النظرة الأولى.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "تعدد الاستخدامات",
    description: "المتاجر، المعارض، الفنادق، أو الفعاليات الخاصة. جهاز عرض واحد لآلاف المناسبات المختلفة.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Ruler,
    title: "إسقاط بعيد المدى",
    description: "دقة مثالية من 1 متر إلى 50 متراً. موديلات متعددة تتكيف مع جميع احتياجاتك.",
    color: "text-accent-foreground",
    bgColor: "bg-accent/10",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export function Benefits() {
  return (
    <section id="benefits" className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/20 shadow-xl shadow-primary/5"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-black tracking-widest uppercase">الخبرة والأداء</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            لماذا <span className="text-gradient">تختارنا</span> ؟
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            أكثر من مجرد ملحق، أجهزة العرض لدينا هي أدوات اتصال قوية مصممة لتدوم وتبهر.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group h-full"
            >
              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[32px] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <Card className="relative h-full border-none bg-background/40 backdrop-blur-xl rounded-[30px] p-2 overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-500">
                <CardHeader className="pt-8 pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner`}
                  >
                    <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tight leading-tight mb-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm font-semibold leading-relaxed group-hover:text-foreground/90 transition-colors">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
                
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <benefit.icon className="w-12 h-12" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
