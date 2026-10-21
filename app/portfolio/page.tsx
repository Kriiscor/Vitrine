import Link from "next/link";

const projects = [
  {
    title: "Cherry's — Nutrition & Sport",
    category: "Application web · IA",
    emoji: "🍒",
    color: "bg-red-100",
    tags: ["TypeScript", "Analyse IA", "Nutrition", "Sport"],
    desc: "Plateforme complète de suivi santé : enregistrement des repas, analyse nutritionnelle par IA, gestion des séances de sport et suivi de l'évolution du poids. Tableaux de bord personnalisés et insights intelligents.",
    highlights: [
      "Enregistrement et analyse des repas par IA",
      "Suivi des séances de sport",
      "Évolution du poids avec graphiques",
      "Recommandations nutritionnelles personnalisées",
    ],
    github: "https://github.com/Kriiscor/Cherry-s",
  },
  {
    title: "Application client Giva Assurances",
    category: "Application métier",
    emoji: "🛡️",
    color: "bg-blue-100",
    tags: ["React", "TypeScript", ".NET", "C#", "SQL", "API REST"],
    desc: "Application web développée from scratch pour digitaliser la collecte d'informations clients — ce qui prenait 1h d'appels téléphoniques se fait désormais en quelques minutes en ligne. API REST C#/.NET, automatisation des tâches répétitives.",
    highlights: [
      "Réduction de 1h d'appels à quelques minutes en ligne",
      "API REST C#/.NET robuste et documentée",
      "Composants UI React/TypeScript réutilisables",
      "Automatisation agentique de tâches répétitives",
    ],
    github: null,
  },
  {
    title: "ProjetMariage-FullStack",
    category: "Site événementiel",
    emoji: "💐",
    color: "bg-rose-100",
    tags: ["TypeScript", "Fullstack"],
    desc: "Application fullstack pour la gestion d'un événement de mariage. Site complet avec gestion des invités et fonctionnalités événementielles.",
    highlights: [
      "Stack fullstack TypeScript",
      "Gestion des invités",
      "Interface responsive",
    ],
    github: "https://github.com/Kriiscor/ProjetMariage-FullStack",
  },
  {
    title: "Job Board",
    category: "Application web",
    emoji: "💼",
    color: "bg-emerald-100",
    tags: ["TypeScript"],
    desc: "Plateforme de mise en relation entre candidats et offres d'emploi, développée en TypeScript.",
    highlights: [
      "Listing et recherche d'offres",
      "TypeScript end-to-end",
    ],
    github: "https://github.com/Kriiscor/Job-Board",
  },
  {
    title: "Outil d'administration Lumeens",
    category: "Application web",
    emoji: "⚙️",
    color: "bg-amber-100",
    tags: ["Node.js", "Firebase"],
    desc: "Outil d'administration développé lors d'un stage : analyse des besoins utilisateurs, développement back-end Node.js avec Firebase, site responsive.",
    highlights: [
      "Backend Node.js / Firebase",
      "Site responsive",
      "Analyse des besoins utilisateurs",
    ],
    github: null,
  },
];

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
            Projets professionnels et personnels — applications métier, plateformes web,
            outils sur mesure.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                {/* Visual */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`${project.color} rounded-2xl h-72 flex items-center justify-center text-8xl`}
                  >
                    {project.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
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
                        <svg
                          className="w-4 h-4 text-brand-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Voir sur GitHub
                      </a>
                    )}
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
