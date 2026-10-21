"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const expertisesLinks = [
  {
    href: "/offres/sites-vitrines",
    label: "Sites Vitrines",
    desc: "Professionnels & PME",
    icon: "🏢",
  },
  {
    href: "/offres/evenements-mariage",
    label: "Événements & Mariage",
    desc: "Sites avec RSVP",
    icon: "💍",
  },
  {
    href: "/offres/applications-metier",
    label: "Applications Métier",
    desc: "Outils sur mesure",
    icon: "⚙️",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white font-display font-bold text-sm">
              CD
            </div>
            <span className="hidden sm:block font-semibold text-stone-900 group-hover:text-brand-600 transition-colors">
              Corentin Dubail
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-brand-600 bg-brand-50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              Accueil
            </Link>

            {/* Expertises dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setExpertisesOpen(true)}
              onMouseLeave={() => setExpertisesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/offres")
                    ? "text-brand-600 bg-brand-50"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                Expertises
                <svg
                  className={`w-4 h-4 transition-transform ${expertisesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expertisesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-xl shadow-lg border border-stone-100 p-2">
                  {expertisesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors group"
                    >
                      <span className="text-xl mt-0.5">{link.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-stone-900 group-hover:text-brand-600">
                          {link.label}
                        </div>
                        <div className="text-xs text-stone-500">{link.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/portfolio"
                  ? "text-brand-600 bg-brand-50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              Réalisations
            </Link>

            <Link
              href="/a-propos"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/a-propos"
                  ? "text-brand-600 bg-brand-50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              À Propos
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors"
            >
              Démarrer un projet
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-stone-100 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Accueil
            </Link>
            <div className="px-4 py-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Expertises
            </div>
            {expertisesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-stone-700 hover:bg-stone-50"
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Réalisations
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              À Propos
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-4 py-3 text-center bg-brand-500 text-white text-sm font-medium rounded-lg hover:bg-brand-600 transition-colors"
              >
                Démarrer un projet
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
