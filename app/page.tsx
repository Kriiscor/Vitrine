import Link from "next/link";

const offers = [
  {
    href: "/offres/sites-vitrines",
    icon: "🏢",
    title: "Site Vitrine",
    target: "Professionnels & PME",
    desc: "Une présence web soignée qui génère des contacts qualifiés et renforce votre crédibilité.",
    color: "from-blue-50 to-sky-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    badgeText: "À partir de 1 500 €",
  },
  {
    href: "/offres/evenements-mariage",
    icon: "💍",
    title: "Événement & Mariage",
    target: "Particuliers & Organisateurs",
    desc: "Un site élégant avec gestion des invitations, RSVP et compte-à-rebours pour votre grand jour.",
    color: "from-rose-50 to-pink-50 border-rose-100",
    badge: "bg-rose-100 text-rose-700",
    badgeText: "À partir de 800 €",
  },
  {
    href: "/offres/applications-metier",
    icon: "⚙️",
    title: "Application Métier",
    target: "Entreprises & Startups",
    desc: "Des outils internes et plateformes sur mesure qui automatisent vos process et boostent la productivité.",
    color: "from-emerald-50 to-teal-50 border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    badgeText: "Devis personnalisé",
  },
];

const whySurMesure = [
  {
    icon: "🎯",
    title: "Aligné à vos objectifs",
    desc: "Chaque ligne de code sert votre stratégie. Pas de template générique, pas de compromis.",
  },
  {
    icon: "⚡",
    title: "Performances optimales",
    desc: "Sites rapides, accessibles, bien référencés. Le sur-mesure, c'est aussi de la qualité technique.",
  },
  {
    icon: "🔧",
    title: "Évolutif dans le temps",
    desc: "Votre outil grandit avec vous. Architecture pensée pour les futures fonctionnalités.",
  },
];

const process = [
  {
    num: "01",
    title: "Découverte",
    desc: "Appel de 30 min pour comprendre vos enjeux, votre audience et vos objectifs.",
  },
  {
    num: "02",
    title: "Proposition",
    desc: "Cahier des charges, maquettes et devis détaillé sous 48h.",
  },
  {
    num: "03",
    title: "Réalisation",
    desc: "Développement en cycles courts avec points réguliers. Vous suivez l'avancement en temps réel.",
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Mise en ligne, formation à l'outil et suivi post-lancement inclus.",
  },
];

const projects = [
  {
    title: "Cherry's",
    category: "Application · IA",
    desc: "Plateforme de suivi nutrition & sport avec analyse IA des repas et évolution du poids.",
    color: "bg-red-100",
    emoji: "🍒",
    href: "/portfolio",
  },
  {
    title: "Giva Assurances",
    category: "Application métier",
    desc: "Application client React/TypeScript/.NET : collecte d'infos réduite de 1h à quelques minutes.",
    color: "bg-blue-100",
    emoji: "🛡️",
    href: "/portfolio",
  },
  {
    title: "Projet Mariage",
    category: "Site événementiel",
    desc: "Application fullstack de gestion d'événement de mariage avec gestion des invités.",
    color: "bg-rose-100",
    emoji: "💐",
    href: "/portfolio",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible pour de nouveaux projets
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
              L&apos;ingénierie web sur-mesure,{" "}
              <span className="text-brand-500">conçue pour vos ambitions.</span>
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-10 max-w-2xl">
              Développeur web freelance basé en Île-de-France, je conçois des sites et
              applications qui servent vraiment vos objectifs — pas des templates recyclés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors shadow-sm"
              >
                Démarrer un projet
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offer selector */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Quel est votre projet ?
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Chaque offre est pensée pour un besoin spécifique. Choisissez celle qui vous correspond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <Link
                key={offer.href}
                href={offer.href}
                className={`group relative flex flex-col p-7 rounded-2xl border bg-gradient-to-br ${offer.color} hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
              >
                <span className="text-3xl mb-4">{offer.icon}</span>
                <div className="mb-3">
                  <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    {offer.target}
                  </div>
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    {offer.title}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                  {offer.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${offer.badge}`}>
                    {offer.badgeText}
                  </span>
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why sur-mesure */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Pourquoi choisir le sur-mesure ?
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Les templates et constructeurs de sites conviennent aux besoins génériques.
                Mais quand votre activité a des particularités — et elle en a — le sur-mesure
                devient l&apos;investissement le plus rentable.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
              >
                En savoir plus sur mon approche
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="space-y-5">
              {whySurMesure.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl border border-stone-100 shadow-sm">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Comment ça se passe ?
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Un processus simple et transparent, de l&apos;idée à la mise en ligne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-stone-200 -translate-y-1/2 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative">
                  <div className="font-display text-5xl font-bold text-brand-100 mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                Réalisations récentes
              </h2>
              <p className="text-stone-500">Quelques projets qui illustrent mon approche.</p>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Voir tous les projets
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex flex-col rounded-2xl overflow-hidden border border-stone-100 bg-white hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`${project.color} h-48 flex items-center justify-center text-6xl`}>
                  {project.emoji}
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{project.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Voir tous les projets
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">
            Décrivez-moi votre idée en quelques minutes. Je vous réponds sous 24h avec une
            première estimation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
            >
              Démarrer maintenant
            </Link>
            <a
              href="mailto:corentindubail@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-400 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
            >
              Écrire directement
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
