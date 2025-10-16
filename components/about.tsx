export function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl shadow-2xl w-full h-auto glow-effect overflow-hidden">
              <img
                src="/led-logo-projector-displaying-company-logo-on-buil.jpg"
                alt="Projecteur LED affichant un logo sur une façade"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              À propos de nos <span className="text-gradient">projecteurs de logo</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Donnez vie à votre identité visuelle grâce à nos projecteurs de logo LED : des dispositifs élégants,
              professionnels et personnalisables qui mettent en lumière votre logo où que vous le souhaitiez.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-primary/10 rounded-xl border-2 border-primary/30 card-hover">
                <p className="text-4xl font-bold text-primary neon-text">90%</p>
                <p className="text-sm text-muted-foreground mt-2">Visibilité accrue</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-xl border-2 border-accent/30 card-hover">
                <p className="text-4xl font-bold text-accent-foreground neon-text">48h</p>
                <p className="text-sm text-muted-foreground mt-2">Livraison rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
