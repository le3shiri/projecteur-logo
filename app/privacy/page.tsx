import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            سياسة <span className="text-gradient">الخصوصية</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            آخر تحديث: {new Date().toLocaleDateString('ar-MA')}
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. جمع البيانات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نقوم بجمع المعلومات عندما تزور موقعنا الإلكتروني أو تطلب طلبية أو تملأ نموذجًا. تشمل المعلومات التي يتم جمعها اسمك وعنوان بريدك الإلكتروني ورقم هاتف وعنوانك.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. استخدام ملفات تعريف الارتباط</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  نحن نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لـ:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>تحسين تجربة التصفح الخاصة بك</li>
                  <li>تحليل حركة المرور على الموقع</li>
                  <li>تخصيص المحتوى والإعلانات</li>
                  <li>تتبع تحويلات الإعلانات عبر Facebook Pixel</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Facebook Pixel</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحن نستخدم Facebook Pixel (المعرف: 680515578431305) لقياس فعالية حملاتنا الإعلانية وتحسين خدماتنا. يجمع Facebook Pixel معلومات حول تصفحك وتفاعلاتك مع موقعنا. يمكنك رفض التتبع عن طريق رفض ملفات تعريف الارتباط عند زيارتك الأولى.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. استخدام البيانات</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  نحن نستخدم معلوماتك من أجل:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>معالجة طلباتك وإدارة حسابك</li>
                  <li>تحسين موقعنا وخدماتنا</li>
                  <li>إرسال المعلومات والتحديثات لك</li>
                  <li>تخصيص تجربتك</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. حماية البيانات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحن ننفذ تدابير أمنية مختلفة لحماية معلوماتك الشخصية. يتم تخزين بياناتك بأمان ولا يمكن الوصول إليها إلا للموظفين المصرح لهم.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. مشاركة البيانات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة، باستثناء الشركاء الموثوق بهم الذين يساعدوننا في تشغيل موقعنا الإلكتروني (مثل Facebook لتتبع الإعلانات)، شريطة أن يوافقوا على الحفاظ على سرية هذه المعلومات.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. حقوقك</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  لديك الحق في:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>الوصول إلى بياناتك الشخصية</li>
                  <li>تصحيح بياناتك</li>
                  <li>حذف بياناتك</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                  <li>سحب موافقتك في أي وقت</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. الاتصال</h2>
                <p className="text-muted-foreground leading-relaxed">
                  لأي أسئلة تتعلق بسياسة الخصوصية هذه أو لممارسة حقوقك، اتصل بنا على: <a href="tel:0607056637" className="text-primary hover:underline" dir="ltr">0607056637</a>
                </p>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  قد يتم تحديث سياسة الخصوصية هذه بشكل دوري. نحن نشجعك على مراجعة هذه الصفحة بانتظام للبقاء على اطلاع بممارسات حماية البيانات الخاصة بنا.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
