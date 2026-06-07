import Link from "next/link";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const domaines = [
  {
    href: "/expertises/droit-penal",
    label: "Droit pénal",
    desc: "Garde à vue, tribunal correctionnel, défense des victimes",
  },
  {
    href: "/expertises/droit-de-la-famille",
    label: "Droit de la famille",
    desc: "Divorce, garde des enfants, pension alimentaire",
  },
  {
    href: "/expertises/droit-routier",
    label: "Droit routier",
    desc: "Retrait de permis, alcoolémie, excès de vitesse",
  },
  {
    href: "/expertises/prejudice-corporel",
    label: "Préjudice corporel",
    desc: "Indemnisation des victimes d'accidents",
  },
  {
    href: "/expertises/droit-des-mineurs",
    label: "Droit des mineurs",
    desc: "Défense du mineur mis en cause, protection de l'enfance",
  },
  {
    href: "/expertises/droit-civil",
    label: "Droit civil",
    desc: "Litiges contractuels, voisinage, recouvrement de créances",
  },
];

interface GeoPageProps {
  ville: string;
  subtitle: string;
  intro: string[];
  breadcrumbLabel: string;
  canonicalUrl: string;
}

export default function GeoPage({
  ville,
  subtitle,
  intro,
  breadcrumbLabel,
  canonicalUrl,
}: GeoPageProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://avocat-montagne.fr" },
      { "@type": "ListItem", position: 2, name: breadcrumbLabel, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-stone-950 pt-36 lg:pt-40 pb-20">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/60" aria-current="page">{breadcrumbLabel}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-forest-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Zone d&apos;intervention
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Avocat à {ville}
            </h1>
            <div className="w-12 h-px bg-forest-400 mb-6" />
            <p className="text-xl text-white/75 leading-relaxed mb-10">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0744787718" className="btn-white py-4 px-8">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 44 78 77 18
              </a>
              <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline-white py-4 px-8">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="label-tag">Le cabinet à {ville}</span>
              <h2 className="section-title mb-6">
                Maître Montagne intervient<br />
                <span className="text-forest-600">à {ville} et dans le ressort</span>
              </h2>
              <div className="divider mb-6" />
              <div className="space-y-4">
                {intro.map((p, i) => (
                  <p key={i} className={`leading-relaxed text-lg ${i === 0 ? "text-gray-800 font-medium" : "text-gray-600"}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-forest-50 border border-forest-100 rounded-2xl p-6 lg:sticky lg:top-28 h-fit">
              <h3 className="font-serif text-lg text-stone-950 mb-4">Contacter le cabinet</h3>
              <p className="text-sm text-gray-500 mb-5">
                Premier contact téléphonique gratuit. Réponse sous 24h.
              </p>
              <div className="space-y-3">
                <a href="tel:0744787718" className="btn-primary w-full justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 44 78 77 18
                </a>
                <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                  Prendre RDV en ligne
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-forest-100">
                <address className="not-italic text-xs text-gray-400 leading-relaxed">
                  Cabinet principal<br />
                  25 Rue du Sud<br />
                  59140 Dunkerque
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-tag">Expertises</span>
              <h2 className="section-title">
                Domaines d&apos;intervention<br />
                <span className="text-forest-600">à {ville}</span>
              </h2>
              <div className="divider mx-auto mt-5" />
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domaines.map((d, i) => (
              <ScrollReveal key={d.href} delay={i * 70}>
                <Link
                  href={d.href}
                  className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full"
                >
                  <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-forest-700 transition-colors duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-serif text-base font-semibold text-stone-950 group-hover:text-forest-700 transition-colors leading-snug">
                      {d.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{d.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
