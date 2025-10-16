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
    name: "Projecteur 25W Fixe",
    power: "25W",
    distance: "5m",
    usage: "Espaces réduits, vitrines, comptoirs",
    badge: "Fixe",
    image: "/25watt-fix.jpg",
    badgeColor: "bg-accent/20 text-accent-foreground",
    description:
      "Projecteur LED compact de 25W avec montage fixe, idéal pour les petites distances jusqu'à 5m. Parfait pour les vitrines et espaces commerciaux réduits.",
    features: [
      "Montage fixe stable",
      "Distance de projection 5m",
      "Température de couleur 5500K",
      "Durée de vie 10 ans",
      "Résistant à l'eau",
      "Mise au point manuelle",
      "Système de refroidissement intégré",
    ],
    specifications: [
      { label: "Puissance LED", value: "25W" },
      { label: "Durée d'utilisation", value: "10 ans" },
      { label: "Distance", value: "5m" },
      { label: "Télécommande", value: "Non" },
      { label: "Rotation", value: "Non" },
      { label: "Température couleur", value: "5500K" },
      { label: "Garantie", value: "3 ans" },
      { label: "Refroidissement", value: "Oui" },
      { label: "Mise au point manuelle", value: "Oui" },
      { label: "Résistance à l'eau", value: "Oui" },
      { label: "Prix HT", value: "2500 DH" },
    ],
    price: "2 500 DH",
    priceHT: 2500,
    hasRemote: false,
    hasRotation: false,
    colorTemp: "5500K",
    warranty: "3 ans",
    mountType: "Fixe",
  },
  {
    id: "35w-fixe",
    name: "Projecteur 35W Fixe",
    power: "35W",
    distance: "11m",
    usage: "Façades, extérieurs, murs de grande taille",
    badge: "Fixe",
    image: "/35watt-fix.jpg",
    badgeColor: "bg-primary/20 text-primary",
    description:
      "Projecteur LED 35W avec télécommande et montage fixe. Distance de projection jusqu'à 11m, idéal pour les façades commerciales et murs extérieurs.",
    features: [
      "Télécommande incluse",
      "Distance de projection 11m",
      "Température de couleur 6500K",
      "Durée de vie 10 ans",
      "Résistant à l'eau",
      "Mise au point manuelle",
      "Système de refroidissement intégré",
      "Garantie 5 ans",
    ],
    specifications: [
      { label: "Puissance LED", value: "35W" },
      { label: "Durée d'utilisation", value: "10 ans" },
      { label: "Distance", value: "11m" },
      { label: "Télécommande", value: "Oui" },
      { label: "Rotation", value: "Non" },
      { label: "Température couleur", value: "6500K" },
      { label: "Garantie", value: "5 ans" },
      { label: "Refroidissement", value: "Oui" },
      { label: "Mise au point manuelle", value: "Oui" },
      { label: "Résistance à l'eau", value: "Oui" },
      { label: "Prix HT", value: "2900 DH" },
    ],
    price: "2 900 DH",
    priceHT: 2900,
    hasRemote: true,
    hasRotation: false,
    colorTemp: "6500K",
    warranty: "5 ans",
    mountType: "Fixe",
  },
  {
    id: "35w-rotatif",
    name: "Projecteur 35W Rotatif",
    power: "35W",
    distance: "11m",
    usage: "Façades, extérieurs avec effet dynamique",
    badge: "Rotatif",
    image: "/35watt-fix.jpg",
    badgeColor: "bg-primary text-primary-foreground",
    description:
      "Projecteur LED 35W avec rotation et télécommande. Créez des effets dynamiques sur vos façades avec une distance de projection jusqu'à 11m.",
    features: [
      "Rotation automatique",
      "Télécommande incluse",
      "Distance de projection 11m",
      "Température de couleur 6500K",
      "Durée de vie 10 ans",
      "Résistant à l'eau",
      "Mise au point manuelle",
      "Système de refroidissement intégré",
      "Garantie 5 ans",
    ],
    specifications: [
      { label: "Puissance LED", value: "35W" },
      { label: "Durée d'utilisation", value: "10 ans" },
      { label: "Distance", value: "11m" },
      { label: "Télécommande", value: "Oui" },
      { label: "Rotation", value: "Oui" },
      { label: "Température couleur", value: "6500K" },
      { label: "Garantie", value: "5 ans" },
      { label: "Refroidissement", value: "Oui" },
      { label: "Mise au point manuelle", value: "Oui" },
      { label: "Résistance à l'eau", value: "Oui" },
      { label: "Prix HT", value: "3200 DH" },
    ],
    price: "3 200 DH",
    priceHT: 3200,
    hasRemote: true,
    hasRotation: true,
    colorTemp: "7000K",
    warranty: "5 ans",
    mountType: "Rotatif",
  },
  {
    id: "55w-rotatif",
    name: "Projecteur 55W Rotatif",
    power: "55W",
    distance: "20m",
    usage: "Grandes distances, événements, signalisation",
    badge: "Rotatif",
    image: "/55watt.jpg",
    badgeColor: "bg-accent text-accent-foreground",
    description:
      "Projecteur LED 55W haute performance avec rotation et portée exceptionnelle de 20m. Température de couleur 7000K pour une luminosité maximale.",
    features: [
      "Portée exceptionnelle 20m",
      "Rotation automatique",
      "Télécommande incluse",
      "Température de couleur 7000K",
      "Durée de vie 10 ans",
      "Résistant à l'eau",
      "Mise au point manuelle",
      "Système de refroidissement intégré",
      "Garantie 5 ans",
    ],
    specifications: [
      { label: "Puissance LED", value: "55W" },
      { label: "Durée d'utilisation", value: "10 ans" },
      { label: "Distance", value: "20m" },
      { label: "Télécommande", value: "Oui" },
      { label: "Rotation", value: "Oui" },
      { label: "Température couleur", value: "7000K" },
      { label: "Garantie", value: "5 ans" },
      { label: "Refroidissement", value: "Oui" },
      { label: "Mise au point manuelle", value: "Oui" },
      { label: "Résistance à l'eau", value: "Oui" },
      { label: "Prix HT", value: "3900 DH" },
    ],
    price: "3 900 DH",
    priceHT: 3900,
    hasRemote: true,
    hasRotation: true,
    colorTemp: "7000K",
    warranty: "5 ans",
    mountType: "Rotatif",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
