import Link from "next/link";

const domaines = [
  { href: "/expertises/droit-penal", label: "Droit pénal" },
  { href: "/expertises/droit-des-mineurs", label: "Droit des mineurs" },
  { href: "/expertises/droit-de-la-famille", label: "Droit de la famille" },
  { href: "/expertises/droit-routier", label: "Droit routier" },
  { href: "/expertises/droit-civil", label: "Droit civil" },
  { href: "/expertises/prejudice-corporel", label: "Préjudice corporel" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Cabinet */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl text-white leading-none block">
                Maître Margot Montagne
              </span>
              <span className="text-xs text-gray-300 tracking-wider uppercase mt-1 block">
                Avocate à Dunkerque
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Cabinet d&apos;avocat au service des particuliers à Dunkerque. Intervention rapide, défense rigoureuse, accompagnement humain.
            </p>
            <div className="mt-6 flex items-center gap-2 text-forest-300">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              <span className="text-sm text-gray-300">Disponible pour urgences</span>
            </div>
          </div>

          {/* Domaines */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-300 mb-5">
              Expertises
            </h3>
            <ul className="space-y-3">
              {domaines.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-300 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/honoraires", label: "Honoraires" },
                { href: "/ressources", label: "Ressources" },
                { href: "/glossaire", label: "Glossaire juridique" },
                { href: "/contact", label: "Contact" },
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-confidentialite", label: "Politique de confidentialité" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-300 mb-5">
              Coordonnées
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0744787718"
                  className="flex items-start gap-3 group"
                  aria-label="Appeler le cabinet"
                >
                  <svg className="w-4 h-4 mt-0.5 text-forest-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    07 44 78 77 18
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-forest-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="not-italic text-sm text-gray-300">
                    25 Rue du Sud<br />
                    59140 Dunkerque
                  </address>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-forest-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-300">
                    Lundi au vendredi<br />
                    9h00 à 18h00
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://cal.eu/margot-montagne/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-xs py-2.5 px-4"
              >
                Prendre rendez-vous en ligne<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Cabinet Margot Montagne · Avocate au Barreau de Dunkerque. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400">
            Membre du Barreau de Dunkerque · RPVA en cours
          </p>
        </div>
      </div>
    </footer>
  );
}
