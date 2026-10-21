import Link from "next/link";

const experiences = [
  {
    period: "2026 – Aujourd'hui",
    company: "JCDecaux",
    role: "Développeur Web & IA",
    desc: "Développement d'applications web et de solutions d'intelligence artificielle au sein du leader mondial de la communication extérieure.",
    tags: [],
    current: true,
  },
  {
    period: "Déc. 2025 – Mai 2026",
    company: "Giva Assurances · Paris – La Défense",
    role: "Développeur Web Fullstack",
    desc: "Conception et développement from scratch d'une application client (React, TypeScript, .NET) réduisant la collecte d'informations de 1h d'appels téléphoniques à quelques minutes en ligne. API REST C#/.NET, automatisation agentique.",
    tags: ["React", "TypeScript", ".NET", "C#", "SQL"],
    current: false,
  },
  {
    period: "Déc. 2024 – Déc. 2025",
    company: "Giva Assurances · Paris – La Défense",
    role: "Alternance – Développeur Web Fullstack",
    desc: "Endpoint d'ingestion en base (C#, SQL) et scénario Make/Twilio pour stocker et exposer les messages clients en temps réel dans le CRM. Développement de composants UI (React, TypeScript) dans un environnement Agile (Azure, Git).",
    tags: ["React", "TypeScript", "C#", "SQL", "Azure", "Make"],
    current: false,
  },
  {
    period: "Déc. 2023 – Déc. 2024",
    company: "Euro Mobilier CHR · Paris",
    role: "Alternance – Développeur Web",
    desc: "Analyse des performances du site e-commerce (trafic, conversions, parcours utilisateurs) avec Google Analytics. Analyse SEO/SEA (Google Ads) : suivi des coûts, performances et ROI. Création de reportings et tableaux de bord pour orienter les décisions marketing.",
    tags: ["Google Analytics", "Google Ads", "SEO/SEA", "PowerBI"],
    current: false,
  },
  {
    period: "Juin 2022 – Août 2022",
    company: "Lumeens · Télétravail",
    role: "Stage – Développeur Web Node.js",
    desc: "Analyse des besoins utilisateurs et développement d'un outil d'administration (Node.js, Firebase). Optimisation de l'expérience utilisateur et mise en place d'un site responsive.",
    tags: ["Node.js", "Firebase"],
    current: false,
  },
];

const skills = [
  {
    category: "Langages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "PHP", "HTML", "CSS", "Java"],
    color: "bg-blue-50 border-blue-100",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    category: "Frameworks & Libs",
    items: ["React.js", "Node.js", ".NET", "ASP.NET"],
    color: "bg-emerald-50 border-emerald-100",
    tag: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Bases de données",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    color: "bg-violet-50 border-violet-100",
    tag: "bg-violet-100 text-violet-700",
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Docker", "Git", "CI/CD"],
    color: "bg-orange-50 border-orange-100",
    tag: "bg-orange-100 text-orange-700",
  },
  {
    category: "Outils & Méthodes",
    items: ["Figma", "PowerBI", "UML", "BPMN", "Agile / Scrum", "TDD", "API REST"],
    color: "bg-rose-50 border-rose-100",
    tag: "bg-rose-100 text-rose-700",
  },
  {
    category: "IA & Automatisation",
    items: ["Outils IA", "Processus agentique", "Make / Zapier"],
    color: "bg-amber-50 border-amber-100",
    tag: "bg-amber-100 text-amber-700",
  },
];

const education = [
  {
    year: "2024 – 2025",
    degree: "Bac+4 – Développeur Fullstack (alternance)",
    school: "Cloud Campus",
  },
  {
    year: "2019 – 2022",
    degree: "Bac+3 – Expert en Systèmes Informatiques",
    school: "Ingétis Paris",
  },
  {
    year: "2017 – 2019",
    degree: "BTS SIO – Option SLAM",
    school: "ORT Daniel Mayer",
  },
];

export default function AProposPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
                Développeur web,{" "}
                <span className="text-brand-500">pas juste codeur.</span>
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Je suis Corentin Dubail, développeur fullstack basé à Guyancourt (78).
                2 ans d&apos;expérience en React, TypeScript, C#/.NET et SQL, dans des environnements
                Agile avec livraison de projets concrets.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                En freelance, je mets cette expérience au service de projets sur mesure :
                sites vitrines, plateformes événementielles, outils métier. Chaque projet
                commence par une vraie compréhension de votre besoin.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors shadow-sm"
              >
                Travailler ensemble
              </Link>
            </div>

            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl">
                  CD
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-lg">Corentin Dubail</div>
                  <div className="text-sm text-stone-500">Développeur Web Fullstack Freelance</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "📍", text: "Guyancourt (78) · Remote possible" },
                  { icon: "🏢", text: "Développeur Web & IA chez JCDecaux" },
                  { icon: "📋", text: "Micro-entreprise" },
                  { icon: "✅", text: "Disponible pour de nouveaux projets" },
                  { icon: "🌍", text: "Anglais avancé" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-stone-600">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-stone-900 mb-12">
            Parcours professionnel
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "bg-brand-500 border-brand-500"
                        : "bg-white border-stone-300"
                    }`}
                  >
                    {exp.current && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-xs font-medium px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                          Actuel
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-stone-900 text-lg mb-1">{exp.role}</h3>
                    <div className="text-brand-600 font-medium text-sm mb-3">{exp.company}</div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-3">{exp.desc}</p>
                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-stone-200 text-stone-600 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <h2 className="font-display text-3xl font-bold text-stone-900 mb-12">
            Compétences techniques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div key={skill.category} className={`rounded-xl p-5 border ${skill.color}`}>
                <h3 className="font-semibold text-stone-800 mb-3 text-sm uppercase tracking-wider">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className={`text-xs font-medium px-2.5 py-1 rounded-full ${skill.tag}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-6">
              Mon approche
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Je crois que le meilleur code est celui qu&apos;on n&apos;a pas à réécrire. Ça
                commence par une bonne compréhension du problème : qui sont les utilisateurs,
                quels sont leurs besoins, quelles sont les contraintes techniques et business.
              </p>
              <p>
                Je travaille en cycles courts avec des points réguliers, pour que vous puissiez
                réorienter si besoin. Pas de livraison surprise après plusieurs semaines de silence.
              </p>
              <p>
                Chaque projet est livré avec son code source et une documentation claire.
                Mon objectif : que vous soyez autonomes une fois le projet terminé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-stone-50">
        <div className="container-site">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-8">Formation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
                <div className="text-xs font-semibold text-brand-500 mb-2">{edu.year}</div>
                <div className="font-medium text-stone-900 mb-1 text-sm leading-snug">{edu.degree}</div>
                <div className="text-xs text-stone-500">{edu.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-brand-100 mb-8">
            Je serais ravi d&apos;en discuter avec vous.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 bg-white text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-sm"
          >
            Prendre contact
          </Link>
        </div>
      </section>
    </div>
  );
}
