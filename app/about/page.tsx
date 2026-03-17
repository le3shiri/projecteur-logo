import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, Zap, Heart, Shield, ArrowRight, Sparkles, Star, Lightbulb, CheckCircle, Rocket, Crown } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-0 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/20">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center pulse-glow">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-base font-medium text-primary">التميز والابتكار</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                عن <span className="text-gradient">Projecteur Logo</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 text-balance">
                شريكك الموثوق في إضاءة LED الاحترافية
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                بصفتنا متخصصين في أجهزة العرض LED الاحترافية، نقوم بإضاءة علامتك التجارية بالابتكار والتميز.
                مهمتنا: تحويل هويتك البصرية إلى تجربة مضيئة لا تُنسى.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl shadow-2xl w-full h-auto glow-effect overflow-hidden">
                <img
                  src="/IMG-20251016-WA0142.jpg"
                  alt="Projecteur LED professionnel"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-muted/20 to-background -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              قصتنا <span className="text-gradient">وتاريخنا</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              شغف بابتكار LED والتزام بالتميز
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text" dir="ltr">90%</div>
                <h3 className="text-xl font-bold mb-2">رؤية محسنة</h3>
                <p className="text-muted-foreground">
                  قم بزيادة ظهور علامتك التجارية بنسبة 90٪ باستخدام أجهزة العرض LED عالية الأداء الخاصة بنا
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text" dir="ltr">48h</div>
                <h3 className="text-xl font-bold mb-2">توصيل سريع</h3>
                <p className="text-muted-foreground">
                  احصل على جهاز العرض المخصص الخاص بك في 48 ساعة فقط في أي مكان في المغرب
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text" dir="ltr">10+</div>
                <h3 className="text-xl font-bold mb-2">سنوات من الخبرة</h3>
                <p className="text-muted-foreground">
                  عقد من الخبرة في إضاءة LED الاحترافية وعرض الشعارات
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              في <span className="font-semibold text-foreground">Projecteur Logo</span>، نقوم بتحويل هويتك البصرية إلى تجربة مضيئة آسرة. بصفتنا متخصصين في أجهزة عرض LED الاحترافية، نقدم حلول إضاءة مبتكرة تضفي الحياة على علامتك التجارية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تم تصميم كل جهاز عرض بدقة لضمان إسقاط مثالي لشعارك. من التصميم إلى التسليم، نحن ملتزمون بتقديم منتجات عالية الجودة وخدمة عملاء استثنائية. 
              مهمتنا بسيطة: <span className="font-semibold text-foreground">لايوجد عميل غير راضٍ</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border-2 border-primary/20 mb-8">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-base font-medium text-primary">قيمنا الأساسية</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              ما <span className="text-gradient">يحددنا</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              توجيه كل قرار وتفاعل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Crown className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">التميز</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  جودة احترافية لا تشوبها شائبة في كل جهاز عرض
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Lightbulb className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">الابتكار</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  أحدث تقنيات LED لحلول عالية الأداء
                </p>
              </CardContent>
            </Card>

            {/* Service Client */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Heart className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">الرضا</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  لايوجد عميل غير راضٍ - متاحون طوال الأسبوع
                </p>
              </CardContent>
            </Card>

            {/* Rapidité */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Rocket className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">السرعة</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  توصيل سريع خلال 48 ساعة في كل مكان في المغرب
                </p>
              </CardContent>
            </Card>

            {/* Fiabilité */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Shield className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">الموثوقية</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ضمان لمدة 10 سنوات ودعم فني كامل
                </p>
              </CardContent>
            </Card>

            {/* Précision */}
            <Card className="border-2 card-hover group bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 floating-animation">
                    <Target className="h-10 w-10 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">الدقة</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  إسقاط مثالي لشعارك بوضوح مثالي
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">توجه هذه القيم كل مشروع نقوم بتنفيذه</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
               <span className="text-gradient">التزامنا</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ما يميزنا ويجعلنا شريكك الموثوق
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ نهتم بتصميم شعارك</h3>
                <p className="text-muted-foreground leading-relaxed">
                  يقوم فريقنا من المصممين المحترفين بتكييف شعارك للحصول على عرض مثالي.
                  نضمن إعادة إنتاج كل التفاصيل بشكل مثالي.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ توصيل مجاني</h3>
                <p className="text-muted-foreground leading-relaxed">
                  استفد من التوصيل المجاني في كل مكان في المغرب. نحن نتحمل كافة تكاليف الشحن
                  بحيث تحصل على جهاز العرض الخاص بك دون أي تكلفة إضافية.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ إرضاء العميل بنسبة 100٪</h3>
                <p className="text-muted-foreground leading-relaxed">
                  شعارنا بسيط: لايوجد عميل غير راضٍ. نبذل قصارى جهدنا لضمان رضاك التام
                  في كل مرحلة من مراحل العملية.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ الدعم والمساعدة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  متاحون طوال الأسبوع للإجابة على جميع أسئلتك ومرافقتك في التثبيت
                  واستخدام جهاز العرض LED الخاص بك.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent/5 to-transparent -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">مستعد لإضاءة علامتك التجارية؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اكتشف مجموعتنا الكاملة من أجهزة العرض LED الاحترافية وابحث عن الجهاز الذي يناسب
            احتياجاتك تمامًا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-glow text-lg px-8 py-6 rounded-full" asChild>
              <Link href="/shop" className="flex items-center">
                شاهد منتجاتنا <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2" asChild>
              <Link href="/contact">
                اتصل بنا
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
