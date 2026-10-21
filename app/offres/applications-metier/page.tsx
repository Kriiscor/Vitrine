import Link from "next/link";

const capabilities = [
  { icon: "🔄", title: "Automatisation de process", desc: "Remplacez vos fichiers Excel et process manuels par des outils fluides et fiables." },
  { icon: "📊", title: "Dashboards & Reporting", desc: "Visualisez vos KPIs en temps réel. Prenez de meilleures décisions, plus vite." },
  { icon: "👥", title: "Gestion utilisateurs", desc: "Rôles, permissions, équipes — chaque personne voit ce dont elle a besoin." },
  { icon: "🔗", title: "Intégrations API", desc: "Connectez votre outil à vos logiciels existants : CRM, ERP, facturation, etc." },
  { icon: "📱", title: "Progressive Web App", desc: "Accessible depuis un navigateur, installable sur mobile. Sans passer par l'App Store." },
  { icon: "🤖", title: "IA & Automatisation", desc: "Intégration de modèles de langage pour automatiser la rédaction, l'analyse et la classification." },
];

const process = [
  { num: "01", title: "Audit & Cadrage", desc: "J'analyse vos process actuels, identifie les frictions et définis avec vous le périmètre exact de la solution." },
  { num: "02", title: "Architecture", desc: "Choix techniques, modèle de données, maquettes fonctionnelles. Validation avant de coder." },
  { num: "03", title: "Développement itératif", desc: "Cycles de 2 semaines avec démos régulières. Vous voyez l'avancement et pouvez ajuster." },
  { num: "04", title: "Déploiement & Formation", desc: "Mise en production, formation des équipes, documentation technique et fonctionnelle." },
];

export default function ApplicationsMetierPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              ⚙️ Pour Entreprises & Startups
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Des outils qui{" "}
              <span className="text-emerald-600">automatisent votre métier.</span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-10">
              Vos équipes perdent trop de temps sur des tâches répétitives ? Vos données sont
              éparpillées dans des dizaines de fichiers ? Je développe des applications métier
              sur mesure qui centralisent, automatisent et donnent de la visibilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Discuter de mon projet
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-colors"
              >
                Voir des réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
              Ce que je peux développer
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Des solutions full-stack, de l&apos;interface utilisateur à la base de données.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-6 rounded-xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-sm transition-all">
                <span className="text-2xl mb-3 block">{cap.icon}</span>
                <h3 className="font-semibold text-stone-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-6">
                Stack technique éprouvée
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Je travaille avec des technologies modernes, maintenables et évolutives.
                Pas de framework exotique : du React, du Node.js, du PostgreSQL — des choix
                que vos futurs développeurs pourront reprendre sans friction.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["React / Next.js", "Node.js / Express", "TypeScript", "PostgreSQL", "AWS / Docker", "REST API"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm text-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {process.map((step) => (
                <div key={step.num} className="flex gap-4 p-5 bg-white rounded-xl border border-stone-100 shadow-sm">
                  <div className="font-display text-2xl font-bold text-emerald-200 flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Un projet d&apos;application en tête ?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Chaque projet démarre par un audit gratuit de 1h pour comprendre vos enjeux.
            Sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-sm"
          >
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
