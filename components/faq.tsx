import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "هل أجهزة العرض مناسبة للاستخدام الخارجي؟",
    answer:
      "نعم، جميع موديلاتنا الخارجية مقاومة للماء والأشعة فوق البنفسجية والغبار ودرجات الحرارة القصوى.",
  },
  {
    question: "ما هي الصيانة المطلوبة؟",
    answer: "لا تتطلب أي صيانة، أجهزة العرض لدينا لها عمر افتراضي طويل. 30,000 ساعة.",
  },
  {
    question: "هل يمكن تغيير الشعار؟",
    answer: "نعم، ما عليك سوى إرسال الشعار الجديد إلينا، يغيره بعض العملاء وفقًا للموسم.",
  },
  {
    question: "ما هو استهلاك الكهرباء؟",
    answer: "منخفض جدا لمعظم الموديلات 12 فولت بالضبط (مثل شاحن الهاتف)",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-secondary/30 relative overflow-hidden rounded-3xl">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">الأسئلة المتداولة (FAQ)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ابحث عن إجابات لجميع أسئلتك حول أجهزة عرض الشعارات LED الخاصة بنا
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 rounded-2xl bg-background/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-lg px-6 py-4 hover:no-underline">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-4 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
