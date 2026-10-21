import Link from "next/link";

const offers = [
  {
    href: "/offres/sites-vitrines",
    icon: "🏢",
    title: "Site vitrine",
    target: "Professionnels & PME",
    desc: "Un site qui donne envie d'appeler. Pas un template recyclé — quelque chose qui ressemble à votre activité.",
    price: "À partir de 1 500 €",
    priceColor: "text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    href: "/offres/evenements-mariage",
    icon: "💍",
    title: "Mariage & événement",
    target: "Particuliers",
    desc: "J'ai fait le site du mariage de ma sœur. Je peux faire le vôtre — avec RSVP, les infos pratiques, le tout.",
    price: "À partir de 800 €",
    priceColor: "text-rose-600",
    border: "hover:border-rose-200",
  },
  {
    href: "/offres/applications-metier",
    icon: "⚙️",
    title: "Application métier",
    target: "Entreprises & Startups",
    desc: "Des outils qui font vraiment ce qu'ils promettent. Pas de fonctionnalités superflues — ce dont vos équipes ont besoin.",
    price: "Devis sur mesure",
    priceColor: "text-emerald-600",
    border: "hover:border-emerald-200",
  },
];

const recentWork = [
  {
    title: "Cherry's",
    category: "App nutrition & sport",
    desc: "Suivi des repas, analyse IA, séances de sport, évolution du poids.",
    color: "bg-red-100",
    emoji: "🍒",
    href: "/portfolio",
  },
  {
    title: "Giva Assurances",
    category: "Application métier",
    desc: "Ce qui prenait 1h d'appels se fait maintenant en quelques minutes en ligne.",
    color: "bg-blue-100",
    emoji: "🛡️",
    href: "/portfolio",
  },
  {
    title: "Projet Mariage",
    category: "Site événementiel",
    desc: "Le site du mariage de ma sœur — site vitrine avec gestion des invités.",
    color: "bg-rose-100",
    emoji: "💐",
    href: "/portfolio",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 bg-white border-b border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible pour de nouveaux projets
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6">
              En journée je code pour JCDecaux.{" "}
              <span className="text-brand-500">Le reste du temps, je construis ce dont vous avez besoin.</span>
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed mb-10">
              Je m&apos;appelle Corentin, je suis développeur fullstack basé à Guyancourt.
              Sites vitrines, plateformes de mariage, outils métier — du concret, livré proprement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors"
              >
                Parlons de votre projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-600 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                Voir ce que j&apos;ai fait
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">
            Ce que je fais
          </h2>
          <p className="text-stone-500 mb-10">
            Trois types de projets, trois façons différentes de travailler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offers.map((offer) => (
              <Link
                key={offer.href}
                href={offer.href}
                className={`group flex flex-col p-6 rounded-2xl bg-white border border-stone-100 hover:shadow-md transition-all duration-200 ${offer.border}`}
              >
                <span className="text-2xl mb-4">{offer.icon}</span>
                <div className="text-xs text-stone-400 mb-1">{offer.target}</div>
                <h3 className="font-semibold text-stone-900 text-lg mb-3">{offer.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-5">
                  {offer.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${offer.priceColor}`}>{offer.price}</span>
                  <svg
                    className="w-4 h-4 text-stone-300 group-hover:text-stone-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-1">
                Projets récents
              </h2>
              <p className="text-stone-500 text-sm">Ce sur quoi j&apos;ai travaillé.</p>
            </div>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              Tout voir →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recentWork.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md transition-all duration-200"
              >
                <div className={`${project.color} h-40 flex items-center justify-center text-5xl`}>
                  {project.emoji}
                </div>
                <div className="p-5 bg-white">
                  <div className="text-xs text-stone-400 mb-1">{project.category}</div>
                  <h3 className="font-semibold text-stone-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{project.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Honest section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Ce que vous obtenez vraiment.
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  Un développeur qui comprend votre métier avant d&apos;ouvrir son éditeur.
                  J&apos;ai travaillé sur des vrais projets en production — chez Giva Assurances,
                  une app qui a remplacé 1h d&apos;appels téléphoniques. Ce genre de résultat,
                  ça commence par écouter.
                </p>
                <p>
                  Je travaille seul, donc vous avez affaire à la même personne du premier
                  appel à la livraison. Pas de chef de projet qui relaie à un dev junior.
                </p>
                <p>
                  Le code source vous appartient. La doc aussi. Si un jour vous voulez
                  reprendre le projet avec quelqu&apos;un d&apos;autre, vous pouvez.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Réponse sous", value: "24h" },
                { label: "Expérience", value: "2 ans" },
                { label: "Projets livrés", value: "Pro" },
                { label: "Code livré", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-stone-800 rounded-xl p-5">
                  <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container-site">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
              Vous avez un projet ?
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Décrivez-moi ce que vous voulez construire. Je vous réponds sous 24h
              avec une première estimation — sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
              >
                Démarrer la conversation
              </Link>
              <a
                href="mailto:corentindubail@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-600 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                corentindubail@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
