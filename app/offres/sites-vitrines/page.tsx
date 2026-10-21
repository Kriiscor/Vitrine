import Link from "next/link";

export default function SitesVitrinesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-20 border-b border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Professionnels & PME
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Un site qui ressemble à votre activité.
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed mb-8">
              Pas un template Wix avec votre logo dessus. Un site conçu pour ce que vous
              faites, pour les gens à qui vous vous adressez — et qui se charge vite.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors"
            >
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </section>

      {/* What's included — honest version */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
                Ce que vous avez au final
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Un design qui ne ressemble pas à tout le monde",
                    desc: "Je travaille depuis Figma, pas depuis un thème WordPress. Votre identité, votre façon de présenter les choses.",
                  },
                  {
                    title: "Rapide sur mobile",
                    desc: "60% des visites se font sur téléphone. Je teste sur de vrais appareils, pas juste dans l'inspecteur Chrome.",
                  },
                  {
                    title: "Référençable dès le départ",
                    desc: "Balises, structure, performances. Pas du SEO magique — les fondamentaux bien faits.",
                  },
                  {
                    title: "Vous pouvez le modifier vous-même",
                    desc: "Interface d'admin simple si vous en avez besoin. Sinon, je reste disponible pour les mises à jour.",
                  },
                  {
                    title: "Le code source vous appartient",
                    desc: "Vous n'êtes pas locataire de votre propre site. Si vous partez un jour, vous emportez tout.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
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
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-stone-200">
                  <div className="font-semibold text-stone-900 mb-1">Site essentiel</div>
                  <div className="font-display text-3xl font-bold text-stone-900 mb-2">1 500 €</div>
                  <p className="text-sm text-stone-500 mb-4">
                    1 à 4 pages, formulaire de contact, responsive, SEO de base.
                    Idéal pour une activité qui démarre ou qui n&apos;a pas encore de présence en ligne.
                  </p>
                  <Link href="/contact" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                    Démarrer →
                  </Link>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-stone-900">
                  <div className="font-semibold text-stone-900 mb-1">Site complet</div>
                  <div className="font-display text-3xl font-bold text-stone-900 mb-2">2 500 – 4 000 €</div>
                  <p className="text-sm text-stone-500 mb-4">
                    Jusqu&apos;à 8 pages, blog, galerie, animations, optimisation SEO poussée,
                    Google Analytics. Pour une activité qui veut vraiment être visible.
                  </p>
                  <Link href="/contact" className="text-sm font-medium text-brand-600 hover:text-brand-700">
                    Démarrer →
                  </Link>
                </div>
                <div className="bg-stone-50 rounded-xl p-5 border border-stone-100">
                  <p className="text-sm text-stone-500">
                    Besoin de quelque chose de spécifique — multi-langues, e-commerce, intégration CRM ?
                    On en discute et je fais un devis au cas par cas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — short and honest */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-8">
              Comment ça se passe
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Un appel de 30 min",
                  desc: "Vous m'expliquez votre activité, vos clients, ce que vous aimez ou pas sur des sites existants. Je prends des notes.",
                },
                {
                  step: "2",
                  title: "Une maquette et un devis",
                  desc: "Sous 48h, vous recevez une première version visuelle et un devis détaillé. Pas de surprise ensuite.",
                },
                {
                  step: "3",
                  title: "Développement avec vous",
                  desc: "Je vous montre l'avancement régulièrement. Vous pouvez réajuster — c'est le but.",
                },
                {
                  step: "4",
                  title: "Mise en ligne",
                  desc: "Je m'occupe de l'hébergement et du nom de domaine si besoin. Et je reste disponible après.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="font-display text-stone-200 text-4xl font-bold leading-none flex-shrink-0 w-10">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-stone-900 mb-1">{item.title}</div>
                    <div className="text-sm text-stone-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="container-site">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Ça vous parle ?
            </h2>
            <p className="text-stone-400 mb-8">
              Décrivez-moi votre activité en deux lignes. Je vous réponds dans la journée.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-stone-900 font-medium rounded-xl hover:bg-stone-100 transition-colors"
              >
                Prendre contact
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
