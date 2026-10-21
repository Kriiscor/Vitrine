import Link from "next/link";

const features = [
  { icon: "🎨", title: "Design personnalisé", desc: "Charte graphique adaptée à votre identité, jamais un template générique." },
  { icon: "📱", title: "100% Responsive", desc: "Optimisé pour mobile, tablette et desktop. 60% des visites se font sur mobile." },
  { icon: "⚡", title: "Performances", desc: "Temps de chargement < 2s, score Lighthouse > 90. Google vous récompensera." },
  { icon: "🔍", title: "SEO intégré", desc: "Balises méta, sitemap, schema.org, images optimisées. Prêt pour le référencement naturel." },
  { icon: "📝", title: "Éditable", desc: "Interface d'administration simple pour mettre à jour vos textes et images vous-même." },
  { icon: "🔒", title: "Sécurisé & HTTPS", desc: "SSL, protection RGPD, hébergement fiable. Votre site est entre de bonnes mains." },
];

const packages = [
  {
    name: "Essentiel",
    price: "1 500 €",
    desc: "Idéal pour démarrer avec une présence professionnelle.",
    features: [
      "Site 1 à 4 pages",
      "Design personnalisé",
      "Formulaire de contact",
      "Responsive mobile",
      "SEO de base",
      "Hébergement 1 an inclus",
    ],
    cta: "Démarrer",
    highlight: false,
  },
  {
    name: "Professionnel",
    price: "2 800 €",
    desc: "Pour les professionnels qui veulent se démarquer.",
    features: [
      "Site jusqu'à 8 pages",
      "Blog ou actualités",
      "Galerie photos / portfolio",
      "Optimisation SEO avancée",
      "Google Analytics",
      "Formation à l'outil",
      "Support 3 mois",
    ],
    cta: "Démarrer",
    highlight: true,
  },
  {
    name: "Sur-mesure",
    price: "Sur devis",
    desc: "Pour les besoins complexes : multi-langues, e-commerce léger, intégrations.",
    features: [
      "Pages illimitées",
      "Fonctionnalités custom",
      "Intégrations tierces",
      "Multi-langues possible",
      "E-commerce simple",
      "Support prioritaire",
    ],
    cta: "Demander un devis",
    highlight: false,
  },
];

export default function SitesVitrinesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              🏢 Pour Professionnels & PME
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Un site vitrine qui{" "}
              <span className="text-blue-600">convertit vos visiteurs</span> en clients.
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-10">
              Votre site web est souvent le premier contact avec vos prospects. Je conçois
              des sites vitrines performants, élégants et optimisés pour transformer vos
              visiteurs en contacts qualifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Démarrer mon projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                Voir des exemples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
              Ce qui est inclus
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Chaque site vitrine est livré avec ces fondamentaux, sans supplément.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-sm transition-all">
                <span className="text-2xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
              Formules & Tarifs
            </h2>
            <p className="text-stone-500">Pas de surprise, tout est transparent.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 border flex flex-col ${
                  pkg.highlight
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100"
                    : "bg-white border-stone-200"
                }`}
              >
                <div className="mb-6">
                  <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${pkg.highlight ? "text-blue-200" : "text-stone-400"}`}>
                    {pkg.name}
                  </div>
                  <div className={`font-display text-3xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-stone-900"}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm ${pkg.highlight ? "text-blue-100" : "text-stone-500"}`}>
                    {pkg.desc}
                  </p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <svg className={`w-4 h-4 flex-shrink-0 ${pkg.highlight ? "text-blue-200" : "text-emerald-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={pkg.highlight ? "text-blue-50" : "text-stone-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-medium transition-colors ${
                    pkg.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Prêt à avoir un site qui travaille pour vous ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Décrivez-moi votre activité en 5 minutes. Je vous rappelle pour un premier échange gratuit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
          >
            Lancer mon projet
          </Link>
        </div>
      </section>
    </div>
  );
}
