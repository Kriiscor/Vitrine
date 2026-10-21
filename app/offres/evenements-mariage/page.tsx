import Link from "next/link";

export default function EvenementsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-20 border-b border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Mariages & Événements
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              J&apos;ai fait le site du mariage de ma sœur.
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed mb-8">
              Je peux faire le vôtre. Un site sur mesure pour votre événement —
              avec les informations pratiques, la gestion des RSVP, et un design
              qui correspond à ce que vous avez en tête.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors"
            >
              Parler de mon événement
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
                Ce qui est inclus
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Design personnalisé",
                    desc: "Pas un thème générique. Les couleurs, la typographie, l'ambiance — en accord avec ce que vous voulez transmettre.",
                  },
                  {
                    title: "RSVP en ligne",
                    desc: "Vos invités confirment leur présence directement. Vous voyez les réponses en temps réel depuis un espace admin simple.",
                  },
                  {
                    title: "Infos pratiques centralisées",
                    desc: "Lieu, horaires, hébergements conseillés, plan d'accès. Tout au même endroit, sur mobile.",
                  },
                  {
                    title: "Compte à rebours",
                    desc: "Si vous voulez — certains aiment, d'autres non. Je m'adapte.",
                  },
                  {
                    title: "Galerie photos",
                    desc: "Pour partager des photos en amont ou après l'événement avec vos proches.",
                  },
                  {
                    title: "Préférences alimentaires",
                    desc: "Collecte des régimes et allergies de vos invités via le formulaire RSVP.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-stone-900 mb-0.5">{item.title}</div>
                      <div className="text-sm text-stone-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
                Ce que ça coûte
              </h2>
              <div className="bg-white rounded-xl p-6 border border-stone-200 mb-4">
                <div className="font-display text-3xl font-bold text-stone-900 mb-2">
                  À partir de 800 €
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  Design personnalisé, RSVP, infos pratiques, responsive.
                  Hébergement inclus pendant 2 ans — largement le temps de l&apos;événement
                  et des souvenirs après.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  {[
                    "Fonctionnalités supplémentaires : sur devis",
                    "Modifications illimitées pendant le développement",
                    "Livraison en 2 à 3 semaines selon agenda",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                <p className="text-sm text-stone-600 leading-relaxed">
                  <span className="font-medium">Une chose importante :</span> plus vous me contactez tôt,
                  mieux c&apos;est. Si votre mariage est dans 3 semaines, c&apos;est jouable
                  mais stressant. Dans 3 mois, on est tranquilles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="container-site">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Votre date, votre vision.
            </h2>
            <p className="text-stone-400 mb-8">
              Dites-moi quand c&apos;est et ce que vous imaginez.
              Je reviens vers vous rapidement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-stone-900 font-medium rounded-xl hover:bg-stone-100 transition-colors"
              >
                Démarrer
              </Link>
              <a
                href="mailto:corentindubail@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-700 text-stone-400 font-medium rounded-xl hover:border-stone-500 transition-colors"
              >
                corentindubail@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
