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
            Politique de <span className="text-gradient">Confidentialité</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Collecte des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous collectons des informations lorsque vous visitez notre site web, passez une commande, 
                  ou remplissez un formulaire. Les informations collectées incluent votre nom, adresse e-mail, 
                  numéro de téléphone, et adresse.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Utilisation des cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous utilisons des cookies et des technologies similaires pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Améliorer votre expérience de navigation</li>
                  <li>Analyser le trafic du site web</li>
                  <li>Personnaliser le contenu et les publicités</li>
                  <li>Suivre les conversions publicitaires via Facebook Pixel</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Facebook Pixel</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons Facebook Pixel (ID: 680515578431305) pour mesurer l'efficacité de nos 
                  campagnes publicitaires et améliorer nos services. Facebook Pixel collecte des informations 
                  sur votre navigation et vos interactions avec notre site. Vous pouvez refuser le suivi en 
                  déclinant les cookies lors de votre première visite.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Utilisation des données</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous utilisons vos informations pour :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Traiter vos commandes et gérer votre compte</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Vous envoyer des informations et mises à jour</li>
                  <li>Personnaliser votre expérience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Protection des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations 
                  personnelles. Vos données sont stockées de manière sécurisée et ne sont accessibles 
                  qu'aux personnes autorisées.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Partage des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des 
                  tiers, sauf pour les partenaires de confiance qui nous aident à exploiter notre site web 
                  (comme Facebook pour le suivi publicitaire), à condition qu'ils acceptent de garder ces 
                  informations confidentielles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous avez le droit de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Accéder à vos données personnelles</li>
                  <li>Rectifier vos données</li>
                  <li>Supprimer vos données</li>
                  <li>Vous opposer au traitement de vos données</li>
                  <li>Retirer votre consentement à tout moment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos 
                  droits, contactez-nous au : <a href="tel:0607056637" className="text-primary hover:underline">0607056637</a>
                </p>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Cette politique de confidentialité peut être mise à jour périodiquement. Nous vous 
                  encourageons à consulter cette page régulièrement pour rester informé de nos pratiques 
                  en matière de protection des données.
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
