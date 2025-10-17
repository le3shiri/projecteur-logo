import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, Zap, Heart, Shield, ArrowRight } from "lucide-react"
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
                <span className="text-base font-medium text-primary">Excellence & Innovation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                À propos de <span className="text-gradient">Projecteur Logo</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 text-balance">
                Votre partenaire de confiance en éclairage LED professionnel
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Spécialistes en projecteurs LED professionnels, nous illuminons votre marque avec innovation 
                et excellence. Notre mission : transformer votre identité visuelle en une expérience lumineuse 
                inoubliable.
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
              Notre <span className="text-gradient">Histoire</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une passion pour l'innovation LED et un engagement envers l'excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text">90%</div>
                <h3 className="text-xl font-bold mb-2">Visibilité Accrue</h3>
                <p className="text-muted-foreground">
                  Augmentez la visibilité de votre marque de 90% avec nos projecteurs LED haute performance
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text">48h</div>
                <h3 className="text-xl font-bold mb-2">Livraison Express</h3>
                <p className="text-muted-foreground">
                  Recevez votre projecteur personnalisé en seulement 48 heures partout au Maroc
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-4 neon-text">10+</div>
                <h3 className="text-xl font-bold mb-2">Années d'Expérience</h3>
                <p className="text-muted-foreground">
                  Une décennie d'expertise dans l'éclairage LED professionnel et la projection de logos
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez <span className="font-semibold text-foreground">Projecteur Logo</span>, nous transformons votre identité visuelle en une expérience 
              lumineuse captivante. Spécialisés dans les projecteurs LED professionnels, nous offrons des solutions 
              d'éclairage innovantes qui donnent vie à votre marque.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque projecteur est conçu avec précision pour garantir une projection parfaite de votre logo. 
              De la conception à la livraison, nous nous engageons à fournir des produits de haute qualité 
              et un service client exceptionnel. Notre mission est simple : <span className="font-semibold text-foreground">aucun client insatisfait</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre travail et notre engagement envers nos clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nous visons l'excellence dans chaque projecteur que nous livrons, garantissant une qualité professionnelle irréprochable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Service Client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Notre devise : aucun client insatisfait. Nous sommes disponibles 7j/7 pour vous accompagner dans votre projet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Qualité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nos projecteurs sont fabriqués avec des composants de haute qualité pour une durée de vie de 10 ans minimum.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nous utilisons les dernières technologies LED pour offrir des solutions d'éclairage économiques et performantes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nous sommes passionnés par l'éclairage LED et nous mettons tout notre cœur dans chaque projet client.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 card-hover group bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform pulse-glow">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Fiabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Livraison gratuite, garantie satisfaction à 100%, et support technique disponible pour tous nos clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Notre <span className="text-gradient">Engagement</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ce qui nous différencie et fait de nous votre partenaire de confiance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ On s'occupe du design de votre logo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe de designers professionnels adapte votre logo pour une projection optimale. 
                  Nous nous assurons que chaque détail est parfaitement reproduit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ Livraison Gratuite</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Profitez de la livraison gratuite partout au Maroc. Nous prenons en charge tous les frais 
                  d'expédition pour que vous receviez votre projecteur sans coût supplémentaire.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ Satisfaction client à 100%</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre devise est simple : aucun client insatisfait. Nous mettons tout en œuvre pour garantir 
                  votre satisfaction totale à chaque étape du processus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">✓ Support et Assistance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Disponibles 7j/7 pour répondre à vos questions et vous accompagner dans l'installation 
                  et l'utilisation de votre projecteur LED.
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
          <h2 className="text-3xl md:text-5xl font-bold">Prêt à illuminer votre marque ?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de projecteurs LED professionnels et trouvez celui qui correspond 
            parfaitement à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-glow text-lg px-8 py-6 rounded-full" asChild>
              <Link href="/shop">
                Voir nos produits <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2" asChild>
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
