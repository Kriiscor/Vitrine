"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  projectType: string;
  projectState: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const projectTypes = [
  { value: "vitrine", label: "Site vitrine", icon: "🏢", desc: "Professionnel ou PME" },
  { value: "evenement", label: "Événement / Mariage", icon: "💍", desc: "Particulier" },
  { value: "app", label: "Application métier", icon: "⚙️", desc: "Entreprise" },
  { value: "autre", label: "Autre projet", icon: "💡", desc: "À définir ensemble" },
];

const projectStates = [
  { value: "idee", label: "J'ai une idée", desc: "Besoin d'affiner le périmètre" },
  { value: "specs", label: "Projet défini", desc: "J'ai un cahier des charges" },
  { value: "urgent", label: "Besoin urgent", desc: "Démarrage dans moins d'1 mois" },
];

const budgets = [
  { value: "moins-1500", label: "Moins de 1 500 €" },
  { value: "1500-3500", label: "1 500 € – 3 500 €" },
  { value: "3500-8000", label: "3 500 € – 8 000 €" },
  { value: "plus-8000", label: "Plus de 8 000 €" },
  { value: "indefini", label: "Je ne sais pas encore" },
];

export default function ContactPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    projectType: "",
    projectState: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const updateForm = (key: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-5">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-bold text-stone-900 mb-4">
            Message envoyé !
          </h1>
          <p className="text-stone-600 mb-8">
            Merci {form.name.split(" ")[0]} ! Je vous réponds sous 24h avec une première
            estimation de votre projet.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors"
          >
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-stone-50 min-h-screen">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
                Démarrons votre projet
              </h1>
              <p className="text-stone-500">
                3 minutes et je dispose de tout ce qu&apos;il faut pour vous faire une proposition.
              </p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3 mb-10">
              {([1, 2, 3, 4] as Step[]).map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      step === s
                        ? "bg-brand-500 text-white"
                        : step > s
                        ? "bg-emerald-500 text-white"
                        : "bg-stone-200 text-stone-500"
                    }`}
                  >
                    {step > s ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s
                    )}
                  </div>
                  {s < 4 && <div className={`flex-1 h-px w-12 ${step > s ? "bg-emerald-300" : "bg-stone-200"}`} />}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-semibold text-stone-900 mb-6 text-lg">
                    Quel type de projet souhaitez-vous ?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => {
                          updateForm("projectType", type.value);
                          setStep(2);
                        }}
                        className={`flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all hover:border-brand-300 hover:bg-brand-50 ${
                          form.projectType === type.value
                            ? "border-brand-500 bg-brand-50"
                            : "border-stone-200"
                        }`}
                      >
                        <span className="text-2xl">{type.icon}</span>
                        <div>
                          <div className="font-medium text-stone-900">{type.label}</div>
                          <div className="text-sm text-stone-500">{type.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-semibold text-stone-900 mb-6 text-lg">
                    Où en êtes-vous dans votre projet ?
                  </h2>
                  <div className="space-y-3">
                    {projectStates.map((state) => (
                      <button
                        key={state.value}
                        onClick={() => {
                          updateForm("projectState", state.value);
                          setStep(3);
                        }}
                        className={`w-full flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all hover:border-brand-300 hover:bg-brand-50 ${
                          form.projectState === state.value
                            ? "border-brand-500 bg-brand-50"
                            : "border-stone-200"
                        }`}
                      >
                        <div>
                          <div className="font-medium text-stone-900">{state.label}</div>
                          <div className="text-sm text-stone-500">{state.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="mt-6 text-sm text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    ← Retour
                  </button>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="font-semibold text-stone-900 mb-6 text-lg">
                    Quel est votre budget approximatif ?
                  </h2>
                  <div className="space-y-3">
                    {budgets.map((budget) => (
                      <button
                        key={budget.value}
                        onClick={() => {
                          updateForm("budget", budget.value);
                          setStep(4);
                        }}
                        className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all hover:border-brand-300 hover:bg-brand-50 ${
                          form.budget === budget.value
                            ? "border-brand-500 bg-brand-50 text-brand-700"
                            : "border-stone-200 text-stone-700"
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="mt-6 text-sm text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    ← Retour
                  </button>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="font-semibold text-stone-900 mb-6 text-lg">
                    Vos coordonnées
                  </h2>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => updateForm("name", e.target.value)}
                          placeholder="Marie Dupont"
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => updateForm("phone", e.target.value)}
                          placeholder="06 xx xx xx xx"
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-colors text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="marie@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Décrivez votre projet
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => updateForm("message", e.target.value)}
                        placeholder="Quelques lignes sur votre activité, vos besoins, vos contraintes..."
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 transition-colors text-sm resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => updateForm("consent", e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-stone-300 text-brand-500 focus:ring-brand-400"
                      />
                      <span className="text-xs text-stone-500 leading-relaxed">
                        J&apos;accepte que mes données soient utilisées pour répondre à ma demande,
                        conformément à la{" "}
                        <a href="/confidentialite" className="text-brand-600 hover:underline">
                          politique de confidentialité
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-brand-500 text-white font-medium rounded-xl hover:bg-brand-600 transition-colors shadow-sm"
                    >
                      Envoyer ma demande
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      ← Retour
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
              <h3 className="font-semibold text-stone-900 mb-4">Contact direct</h3>
              <div className="space-y-3">
                <a
                  href="mailto:corentindubail@gmail.com"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-brand-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  corentindubail@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/corentin-dubail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-600 hover:text-brand-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-500 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6">
              <h3 className="font-semibold text-stone-900 mb-4">Mes garanties</h3>
              <ul className="space-y-3">
                {[
                  "Réponse sous 24h ouvrées",
                  "Devis détaillé et gratuit",
                  "Pas de mauvaise surprise",
                  "Code source livré",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
                    <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
