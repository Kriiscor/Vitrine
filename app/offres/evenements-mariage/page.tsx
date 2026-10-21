import Link from "next/link";

const features = [
  { icon: "💌", title: "Invitations digitales", desc: "Envoyez vos invitations par lien, sans frais d'impression ni de timbre." },
  { icon: "✅", title: "RSVP en ligne", desc: "Vos invités confirment leur présence directement sur le site, en quelques secondes." },
  { icon: "⏱️", title: "Compte à rebours", desc: "Un compteur élégant qui crée l'impatience jusqu'au grand jour." },
  { icon: "📸", title: "Galerie photos", desc: "Partagez vos plus belles photos avant et après l'événement avec vos proches." },
  { icon: "🗺️", title: "Informations pratiques", desc: "Lieu, hébergements, plan d'accès, programme de la journée — tout en un endroit." },
  { icon: "📋", title: "Gestion des régimes", desc: "Collectez les préférences alimentaires et allergies de vos invités automatiquement." },
];

export default function EvenementsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-rose-50 to-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-6">
              💍 Pour Mariages & Événements
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Un site de mariage aussi{" "}
              <span className="text-rose-500">élégant que votre jour J.</span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-10">
              Votre mariage est unique. Votre site web doit l&apos;être aussi. Je crée des sites
              événementiels sur mesure avec RSVP en ligne, galerie photos et toutes les
              informations pratiques pour vos invités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-rose-500 text-white font-medium rounded-xl hover:bg-rose-600 transition-colors shadow-sm"
              >
                Créer mon site de mariage
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                Voir un exemple
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
              Tout ce dont vous avez besoin
            </h2>
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
      <section className="py-20 bg-rose-50">
        <div className="container-site">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">Tarifs</h2>
            <p className="text-stone-500 mb-10">Un forfait unique, tout inclus.</p>
            <div className="bg-white rounded-2xl p-8 border border-rose-100 shadow-sm">
              <div className="font-display text-4xl font-bold text-stone-900 mb-2">
                À partir de 800 €
              </div>
              <p className="text-stone-500 mb-6">Site de mariage complet</p>
              <ul className="space-y-3 text-left mb-8">
                {[
                  "Design élégant et personnalisé",
                  "RSVP en ligne illimité",
                  "Galerie photos",
                  "Compte à rebours",
                  "Informations pratiques",
                  "Compatible tous appareils",
                  "Hébergement 2 ans inclus",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <svg className="w-4 h-4 text-rose-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center py-3.5 bg-rose-500 text-white font-medium rounded-xl hover:bg-rose-600 transition-colors"
              >
                Obtenir un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-500">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Votre grand jour mérite un beau site.
          </h2>
          <p className="text-rose-100 mb-8">
            Discutons de votre projet en 15 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-colors shadow-sm"
          >
            Commencer
          </Link>
        </div>
      </section>
    </div>
  );
}
