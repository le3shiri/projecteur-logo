export interface Product {
  id: string
  name: string
  power: string
  distance: string
  usage: string
  badge: string
  image: string
  badgeColor: string
  description: string
  features: string[]
  specifications: {
    label: string
    value: string
  }[]
  price: string
  priceHT: number
  hasRemote: boolean
  hasRotation: boolean
  colorTemp: string
  warranty: string
  mountType: "Fixe" | "Rotatif"
}

export const products: Product[] = [
  {
    id: "25w-fixe",
    name: "جهاز عرض ثابت 25W",
    power: "25W",
    distance: "5m",
    usage: "المساحات الصغيرة، واجهات العرض، المكاتب",
    badge: "ثابت",
    image: "/25watt-fix.jpg",
    badgeColor: "bg-accent/20 text-accent-foreground",
    description:
      "جهاز عرض LED مدمج بقوة 25 واط مع تركيب ثابت، مثالي للمسافات القصيرة حتى 5 أمتار. ممتاز لواجهات المتاجر والمساحات التجارية الصغيرة.",
    features: [
      "تركيب ثابت ومستقر",
      "مسافة العرض 5m",
      "درجة حرارة اللون 5500K",
      "عمر افتراضي 10 سنوات",
      "مقاوم للماء",
      "تركيز يدوي",
      "نظام تبريد مدمج",
    ],
    specifications: [
      { label: "قوة LED", value: "25W" },
      { label: "مدة الاستخدام", value: "10 سنوات" },
      { label: "المسافة", value: "5m" },
      { label: "جهاز تحكم", value: "لا" },
      { label: "دوران", value: "لا" },
      { label: "درجة حرارة اللون", value: "5500K" },
      { label: "الضمان", value: "3 سنوات" },
      { label: "التبريد", value: "نعم" },
      { label: "تركيز يدوي", value: "نعم" },
      { label: "مقاوم للماء", value: "نعم" },
      { label: "السعر غير شامل الضريبة", value: "2500 درهم" },
    ],
    price: "2,500 درهم",
    priceHT: 2500,
    hasRemote: false,
    hasRotation: false,
    colorTemp: "5500K",
    warranty: "3 سنوات",
    mountType: "Fixe",
  },
  {
    id: "35w-fixe",
    name: "جهاز عرض ثابت 35W",
    power: "35W",
    distance: "11m",
    usage: "الواجهات، المساحات الخارجية، الجدران الكبيرة",
    badge: "ثابت",
    image: "/35watt-fix.jpg",
    badgeColor: "bg-primary/20 text-primary",
    description:
      "جهاز عرض LED بقوة 35 واط مع جهاز تحكم عن بعد وتركيب ثابت. مسافة عرض تصل إلى 11 متراً، مثالي للواجهات التجارية والجدران الخارجية.",
    features: [
      "جهاز تحكم عن بعد مرفق",
      "مسافة العرض 11m",
      "درجة حرارة اللون 6500K",
      "عمر افتراضي 10 سنوات",
      "مقاوم للماء",
      "تركيز يدوي",
      "نظام تبريد مدمج",
      "ضمان 5 سنوات",
    ],
    specifications: [
      { label: "قوة LED", value: "35W" },
      { label: "مدة الاستخدام", value: "10 سنوات" },
      { label: "المسافة", value: "11m" },
      { label: "جهاز تحكم", value: "نعم" },
      { label: "دوران", value: "لا" },
      { label: "درجة حرارة اللون", value: "6500K" },
      { label: "الضمان", value: "5 سنوات" },
      { label: "التبريد", value: "نعم" },
      { label: "تركيز يدوي", value: "نعم" },
      { label: "مقاوم للماء", value: "نعم" },
      { label: "السعر غير شامل الضريبة", value: "2900 درهم" },
    ],
    price: "2,900 درهم",
    priceHT: 2900,
    hasRemote: true,
    hasRotation: false,
    colorTemp: "6500K",
    warranty: "5 سنوات",
    mountType: "Fixe",
  },
  {
    id: "35w-rotatif",
    name: "جهاز عرض دوار 35W",
    power: "35W",
    distance: "11m",
    usage: "الواجهات والمساحات الخارجية مع تأثير ديناميكي",
    badge: "دوار",
    image: "/35watt-fix.jpg",
    badgeColor: "bg-primary text-primary-foreground",
    description:
      "جهاز عرض LED بقوة 35 واط مع دوران وجهاز تحكم عن بعد. اصنع تأثيرات ديناميكية على واجهات مبناك بمسافة عرض تصل إلى 11 متراً.",
    features: [
      "دوران تلقائي",
      "جهاز تحكم عن بعد مرفق",
      "مسافة العرض 11m",
      "درجة حرارة اللون 6500K",
      "عمر افتراضي 10 سنوات",
      "مقاوم للماء",
      "تركيز يدوي",
      "نظام تبريد مدمج",
      "ضمان 5 سنوات",
    ],
    specifications: [
      { label: "قوة LED", value: "35W" },
      { label: "مدة الاستخدام", value: "10 سنوات" },
      { label: "المسافة", value: "11m" },
      { label: "جهاز تحكم", value: "نعم" },
      { label: "دوران", value: "نعم" },
      { label: "درجة حرارة اللون", value: "6500K" },
      { label: "الضمان", value: "5 سنوات" },
      { label: "التبريد", value: "نعم" },
      { label: "تركيز يدوي", value: "نعم" },
      { label: "مقاوم للماء", value: "نعم" },
      { label: "السعر غير شامل الضريبة", value: "3200 درهم" },
    ],
    price: "3,200 درهم",
    priceHT: 3200,
    hasRemote: true,
    hasRotation: true,
    colorTemp: "7000K",
    warranty: "5 سنوات",
    mountType: "Rotatif",
  },
  {
    id: "55w-rotatif",
    name: "جهاز عرض دوار 55W",
    power: "55W",
    distance: "20m",
    usage: "المسافات البعيدة، الفعاليات، اللافتات الإرشادية",
    badge: "دوار",
    image: "/55watt.jpg",
    badgeColor: "bg-accent text-accent-foreground",
    description:
      "جهاز عرض LED عالي الأداء بقوة 55 واط مع دوران ومسافة عرض استثنائية تصل إلى 20 متراً. درجة حرارة اللون 7000K لأقصى سطوع.",
    features: [
      "مسافة عرض استثنائية 20m",
      "دوران تلقائي",
      "جهاز تحكم عن بعد مرفق",
      "درجة حرارة اللون 7000K",
      "عمر افتراضي 10 سنوات",
      "مقاوم للماء",
      "تركيز يدوي",
      "نظام تبريد مدمج",
      "ضمان 5 سنوات",
    ],
    specifications: [
      { label: "قوة LED", value: "55W" },
      { label: "مدة الاستخدام", value: "10 سنوات" },
      { label: "المسافة", value: "20m" },
      { label: "جهاز تحكم", value: "نعم" },
      { label: "دوران", value: "نعم" },
      { label: "درجة حرارة اللون", value: "7000K" },
      { label: "الضمان", value: "5 سنوات" },
      { label: "التبريد", value: "نعم" },
      { label: "تركيز يدوي", value: "نعم" },
      { label: "مقاوم للماء", value: "نعم" },
      { label: "السعر غير شامل الضريبة", value: "3900 درهم" },
    ],
    price: "3,900 درهم",
    priceHT: 3900,
    hasRemote: true,
    hasRotation: true,
    colorTemp: "7000K",
    warranty: "5 سنوات",
    mountType: "Rotatif",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
