import Link from "next/link";

const projects = [
  {
    title: "Giva",
    category: "Application métier",
    emoji: "🎁",
    color: "bg-emerald-100",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    desc: "Plateforme collaborative de gestion de cadeaux. Les utilisateurs créent des listes partagées, participent collectivement et suivent les contributions en temps réel.",
    highlights: ["Authentification JWT sécurisée", "Paiement en ligne intégré", "Notifications temps réel", "Interface mobile-first"],
    type: "app",
  },
  {
    title: "Euro Mobilier",
    category: "Dashboard analytique",
    emoji: "📊",
    color: "bg-blue-100",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    desc: "Interface d'analyse des ventes et de gestion des stocks pour un distributeur national de mobilier. Remplace des reportings Excel hebdomadaires.",
    highlights: ["Graphiques interactifs temps réel", "Export PDF/Excel", "Gestion multi-dépôts", "Filtres avancés par période"],
    type: "app",
  },
  {
    title: "Site Mariage — Demo",
    category: "Site événementiel",
    emoji: "💐",
    color: "bg-rose-100",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    desc: "Exemple de site de mariage avec RSVP en ligne, compte à rebours, galerie photos et gestion des préférences alimentaires des invités.",
    highlights: ["RSVP avec confirmation email", "Compte à rebours animé", "Galerie photos responsive", "Mode admin pour les mariés"],
    type: "event",
  },
  {
    title: "Portfolio Architecte",
    category: "Site vitrine",
    emoji: "🏛️",
    color: "bg-amber-100",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    desc: "Site vitrine pour un cabinet d'architecture. Mise en valeur des réalisations avec une galerie plein-écran et animations soignées.",
    highlights: ["Galerie plein-écran", "Animations au scroll", "Contact direct intégré", "Score Lighthouse 98"],
    type: "vitrine",
  },
];

const filterLabels: Record<string, string> = {
  all: "Tous les projets",
  vitrine: "Sites vitrines",
  event: "Événements",
  app: "Applications",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-stone-50 to-white">
        <div className="container-site">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
            Réalisations
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl">
            Chaque projet est une collaboration unique. Voici quelques exemples de ce que
            j&apos;ai construit pour mes clients.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Visual */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`${project.color} rounded-2xl h-72 flex items-center justify-center text-8xl`}>
                    {project.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                    {project.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-5">{project.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-stone-700">
                        <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-500">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Votre projet pourrait être ici.
          </h2>
          <p className="text-brand-100 mb-8">
            Discutons de ce que vous souhaitez construire.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
          >
            Démarrer un projet
          </Link>
        </div>
      </section>
    </div>
  );
}
