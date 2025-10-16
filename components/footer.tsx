import { Lightbulb } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 -z-10" />
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Projecteur Logo</span>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              Illuminez votre marque avec nos projecteurs LED professionnels et personnalisables.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-primary-foreground/30" />
              <span className="text-primary-foreground/70 text-sm">Innovation & Qualité</span>
              <div className="h-px flex-1 bg-primary-foreground/30" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-foreground" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" /> À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" /> Boutique
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" /> FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50" /> Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-foreground" />
            </h3>
            <ul className="space-y-4 text-primary-foreground/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary-foreground/50" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-lg">0607056637</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary-foreground/50" />
                <div>
                  <p className="font-medium">Garantie</p>
                  <p>Aucun client insatisfait</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/30 text-center text-primary-foreground/70">
          <p className="text-lg">© {new Date().getFullYear()} Projecteur Logo. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Innovation LED pour une visibilité exceptionnelle</p>
        </div>
      </div>
    </footer>
  )
}
