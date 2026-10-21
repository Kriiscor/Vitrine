import Link from "next/link";

export default function ApplicationsMetierPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-20 border-b border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
              Entreprises & Startups
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Un outil qui fait vraiment ce qu&apos;il promet.
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed mb-6">
              Chez Giva Assurances, j&apos;ai développé une application qui a remplacé
              une heure d&apos;appels téléphoniques par quelques minutes en ligne.
              C&apos;est le type de projet qui m&apos;intéresse : pas un outil de plus,
              un outil qui change quelque chose.
            </p>
            <p className="text-stone-400 text-sm mb-8">
              React, TypeScript, Node.js, .NET, SQL, Azure — selon ce dont votre projet a besoin.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-700 transition-colors"
            >
              Parler de mon projet
            </Link>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="py-20 bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">
                Ce que je construis
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Applications qui remplacent des process manuels",
                    desc: "Fichiers Excel, emails de suivi, saisies répétitives — si ça prend du temps sans vraiment de valeur ajoutée, ça se digitalise.",
                  },
                  {
                    title: "Interfaces de gestion et dashboards",
                    desc: "Visualiser ses données, suivre ses indicateurs, prendre de meilleures décisions. Construit avec vos vrais chiffres, pas des données fictives.",
                  },
                  {
                    title: "Intégrations et automatisations",
                    desc: "Connecter vos outils entre eux (CRM, ERP, Twilio, Make…). J'ai fait ça pour Giva Assurances — messages Twilio exposés en temps réel dans leur CRM.",
                  },
                  {
                    title: "Applications avec de l'IA",
                    desc: "Analyse de documents, classification, génération de contenu structuré. Pas du ChatGPT collé dessus — une vraie intégration qui sert votre flux de travail.",
                  },
                  {
                    title: "Progressive Web Apps",
                    desc: "Accessible depuis un navigateur, installable sur mobile, fonctionne offline. Sans passer par l'App Store.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
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
                <div className="font-display text-2xl font-bold text-stone-900 mb-2">
                  Devis sur mesure
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  Chaque projet est différent. Un outil interne simple, c&apos;est
                  quelques milliers d&apos;euros. Une plateforme avec authentification,
                  API, intégrations et tableau de bord, c&apos;est plus.
                  Je ne donne pas de fourchette au hasard.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Ce qui ne change pas : vous savez exactement ce que vous payez
                  avant que je commence. Et vous restez propriétaire du code.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                <p className="text-sm text-stone-700 font-medium mb-1">
                  Premier échange gratuit
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  On s&apos;appelle 45 min pour que je comprenne votre besoin.
                  Je reviens avec un périmètre précis et un chiffrage.
                  Sans engagement de votre côté.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-stone-900 mb-3 text-sm">Stack technique</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", ".NET / C#", "PostgreSQL", "SQL Server", "MongoDB", "Azure", "Docker", "Make / Zapier"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-600 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I work — honest */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
              Comment je travaille sur ce type de projet
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              Je commence toujours par comprendre votre métier, pas par choisir un framework.
              Ça semble évident mais beaucoup sautent cette étape.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Cadrage",
                  desc: "On définit ensemble le périmètre exact. Ce qui est dans le projet, ce qui n'y est pas. Un bon cadrage évite 80% des problèmes ensuite.",
                },
                {
                  title: "Développement en itérations",
                  desc: "Je livre des versions utilisables régulièrement — pas une livraison surprise au bout de 3 mois. Vous pouvez tester, ajuster, rediriger.",
                },
                {
                  title: "Livraison et passation",
                  desc: "Code propre, documenté, versionné sur Git. Formation si besoin. L'objectif : que votre équipe puisse prendre la main.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-stone-200 pl-5">
                  <div className="font-semibold text-stone-900 mb-1">{item.title}</div>
                  <div className="text-sm text-stone-500 leading-relaxed">{item.desc}</div>
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
              Un projet en tête ?
            </h2>
            <p className="text-stone-400 mb-8">
              Décrivez-moi en quelques lignes ce que vous voulez résoudre.
              On s&apos;appelle cette semaine.
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
