import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            الأسئلة <span className="text-gradient">المتداولة</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ابحث عن إجابات لجميع أسئلتك حول أجهزة عرض الشعارات LED الخاصة بنا
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <FAQ />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">هل لديك أسئلة أخرى؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            فريقنا هنا لمساعدتك. اتصل بنا للحصول على إجابات مخصصة.
          </p>
          <Button size="lg" className="gradient-glow text-lg px-8 py-6 rounded-full" asChild>
            <Link href="/contact" className="flex items-center">
              اطلب الآن <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
