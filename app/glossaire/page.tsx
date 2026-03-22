import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import dynamic from "next/dynamic";
import { glossaire } from "@/lib/glossaire-data";
import { headers } from "next/headers";

const GlossaireSearch = dynamic(() => import("@/components/GlossaireSearch"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-50 rounded-sm animate-pulse" />
  ),
});

export const metadata: Metadata = {
  title: "Glossaire juridique — Définitions & termes de droit | Avocat Dunkerque",
  description:
    `${glossaire.length} termes juridiques expliqués simplement : garde à vue, mise en examen, préjudice corporel, JAF, référé... Maître Margot Montagne, avocate à Dunkerque.`,
  alternates: {
    canonical: "https://www.avocat-montagne.fr/glossaire",
  },
};

const domainesLinks = [
  { label: "Droit pénal", href: "/expertises/droit-penal" },
  { label: "Droit de la famille", href: "/expertises/droit-de-la-famille" },
  { label: "Droit routier", href: "/expertises/droit-routier" },
  { label: "Préjudice corporel", href: "/expertises/prejudice-corporel" },
  { label: "Droit civil", href: "/expertises/droit-civil" },
  { label: "Droit des mineurs", href: "/expertises/droit-des-mineurs" },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "Glossaire juridique — Cabinet Margot Montagne",
  "description": `${glossaire.length} termes juridiques expliqués simplement par Maître Margot Montagne, avocate à Dunkerque.`,
  "url": "https://www.avocat-montagne.fr/glossaire",
  "hasDefinedTerm": glossaire.map((item) => ({
    "@type": "DefinedTerm",
    "name": item.terme,
    "description": item.definition,
    "inDefinedTermSet": "https://www.avocat-montagne.fr/glossaire",
    "url": `https://www.avocat-montagne.fr${item.href}`,
  })),
};

export default async function GlossairePage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      {/* Hero */}
      <section className="bg-white pt-36 lg:pt-40 pb-16 border-b border-gray-100">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-gray-600 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/ressources" className="hover:text-gray-600 transition-colors">Ressources</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500" aria-current="page">Glossaire juridique</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="label-tag">Glossaire</span>
              <h1 className="font-serif text-4xl sm:text-5xl text-stone-950 leading-tight mb-6">
                Les termes juridiques<br />
                <span className="text-forest-600">expliqués simplement</span>
              </h1>
              <div className="divider mb-6" />
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-3">
                {glossaire.length} définitions pour comprendre le vocabulaire du droit avant votre rendez-vous.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Chaque terme est lié à la page d&apos;expertise correspondante du cabinet. Ces définitions sont données à titre informatif et ne remplacent pas un conseil juridique personnalisé.
              </p>
            </div>

            {/* Encart domaines */}
            <div className="bg-forest-50 border border-forest-100 rounded-2xl p-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-base text-stone-950 mb-4">Nos domaines d&apos;expertise</h2>
              <ul className="space-y-2">
                {domainesLinks.map((d) => (
                  <li key={d.href}>
                    <Link
                      href={d.href}
                      className="flex items-center gap-2 text-sm text-forest-700 hover:text-forest-900 transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="group-hover:underline underline-offset-2">{d.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-forest-100">
                <a href="tel:0744787718" className="btn-primary w-full justify-center text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 44 78 77 18
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossaire */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <GlossaireSearch items={glossaire} showAZ={true} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
