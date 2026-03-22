import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "À propos — Maître Margot Montagne, avocate à Dunkerque",
  description:
    "Parcours et engagement de Maître Margot Montagne, avocate au Barreau de Dunkerque depuis 2020. Master II droit privé — Université Lille II. Cabinet dédié aux particuliers.",
  alternates: {
    canonical: "https://www.avocat-montagne.fr/a-propos",
  },
};

const timeline = [
  {
    year: "2013–2015",
    title: "Licence de droit",
    subtitle: "Université de Lille II",
    description: "Acquisition des fondamentaux du droit : droit civil, pénal, public, constitutionnel. Développement d'un intérêt marqué pour les droits des personnes.",
  },
  {
    year: "2015–2016",
    title: "Master I Droit privé",
    subtitle: "Université de Lille II",
    description: "Spécialisation en droit privé : droit des obligations, droit de la famille, droit des contrats. Premiers pas dans la recherche juridique.",
  },
  {
    year: "2016–2017",
    title: "Master II Droit privé",
    subtitle: "Université de Lille II",
    description: "Approfondissement en droit privé et droit des personnes. Mémoire de recherche sur la protection des droits fondamentaux. Admissibilité au Barreau.",
  },
  {
    year: "2017–2020",
    title: "Formation et collaboration — Sakya Avocats",
    subtitle: "Cabinet Sakya Avocats",
    description: "Collaboration au sein du cabinet Sakya Avocats. Acquisition d'une expérience terrain en droit pénal, droit de la famille et contentieux civil. Développement d'une pratique rigoureuse et d'une connaissance fine des juridictions.",
  },
  {
    year: "2020",
    title: "Inscription au Barreau de Dunkerque",
    subtitle: "Prestation de serment",
    description: "Prestation de serment et inscription au Barreau de Dunkerque. Fondation du Cabinet Montagne, dédié à la défense des particuliers dans la région dunkerquoise.",
  },
  {
    year: "2020 à aujourd'hui",
    title: "Cabinet Montagne",
    subtitle: "Avocate indépendante",
    description: "Direction du Cabinet Montagne à Dunkerque. Intervention en droit pénal, droit des mineurs, droit de la famille, droit routier, droit civil et préjudice corporel. Engagement quotidien pour la défense des droits des particuliers.",
  },
];

const valeurs = [
  {
    title: "Écoute",
    description: "Chaque client mérite d'être entendu. Maître Montagne consacre le temps nécessaire à comprendre votre situation dans tous ses aspects — juridiques, humains et personnels.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Rigueur",
    description: "La rigueur dans l'analyse juridique, la préparation des dossiers et la stratégie de défense est non négociable. Chaque détail peut changer l'issue d'une affaire.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparence",
    description: "Vous êtes informé à chaque étape. Les honoraires sont définis clairement dès le départ. La transparence est la base d'une relation de confiance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Engagement",
    description: "Votre dossier n'est pas un dossier parmi d'autres. Maître Montagne s'engage pleinement dans chaque affaire, avec la même détermination quelle que soit sa complexité.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 lg:pt-40 pb-0">
        <div className="section-container">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-gray-600 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-400" aria-current="page">À propos</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            {/* Texte */}
            <div className="pb-16">
              <span className="label-tag">À propos</span>
              <h1 className="font-serif text-4xl sm:text-5xl text-stone-950 leading-tight mb-6">
                Maître Margot Montagne,<br />
                <span className="text-forest-600">avocate engagée</span>
              </h1>
              <div className="divider mb-6" />
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Avocate au Barreau de Dunkerque depuis 2020, Maître Montagne a construit sa pratique autour d&apos;une conviction : chaque personne mérite une défense de qualité, quelles que soient les circonstances.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:0744787718" className="btn-primary py-4 px-8">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Prendre contact
                </a>
                <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline py-4 px-8">
                  Prendre rendez-vous
                </a>
              </div>

              {/* Stats en ligne */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-gray-100">
                {[
                  { value: "5+", label: "Années d'expérience" },
                  { value: "100%", label: "Particuliers" },
                  { value: "6", label: "Expertises" },
                  { value: "Urgences", label: "Intervention rapide" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-2xl text-forest-600 font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo portrait */}
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <div className="aspect-[3/4] rounded-t-sm overflow-hidden bg-forest-100 relative">
                <Image
                  src="/Margot-MONTAGNE-Avocat.webp"
                  alt="Maître Margot Montagne en robe d'avocate"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 384px"
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -left-4 top-1/3 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-xs font-medium text-stone-950">Barreau de Dunkerque</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message personnel */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-tag">Mot du cabinet</span>
            <blockquote className="font-serif text-2xl sm:text-3xl text-stone-950 leading-relaxed mb-8">
              &ldquo;J&apos;ai choisi d&apos;exercer le droit parce que je crois profondément que chaque personne mérite d&apos;être entendue, comprise et défendue. Ma mission n&apos;est pas seulement juridique — c&apos;est aussi humaine.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-forest-300" />
              <cite className="not-italic text-sm font-medium text-gray-400 tracking-wide">
                Maître Margot Montagne — Avocate au Barreau de Dunkerque
              </cite>
              <div className="w-12 h-0.5 bg-forest-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-forest-50/30">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="label-tag">Ses valeurs</span>
            <h2 className="section-title">Ce qui guide chaque dossier</h2>
            <div className="divider mx-auto mt-5" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur) => (
              <div key={valeur.title} className="bg-white rounded-sm p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center text-forest-600 mx-auto mb-5">
                  {valeur.icon}
                </div>
                <h3 className="font-serif text-lg text-stone-950 mb-3">{valeur.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="label-tag">Parcours</span>
            <h2 className="section-title">Formation & expérience</h2>
            <div className="divider mx-auto mt-5" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" aria-hidden />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-8 group">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 w-12 flex items-start justify-center pt-1">
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-forest-600 group-hover:bg-forest-600 transition-colors z-10" />
                    </div>

                    {/* Content */}
                    <div className="pb-8 flex-1">
                      <div className="text-xs font-mono text-forest-600 mb-1">{item.year}</div>
                      <h3 className="font-serif text-lg text-stone-950 mb-0.5">{item.title}</h3>
                      <p className="text-sm text-forest-600 font-medium mb-2">{item.subtitle}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo du cabinet */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="overflow-hidden rounded-sm relative h-72 sm:h-96">
            <Image
              src="/cabinet-bureau.webp"
              alt="Bureau de Maître Margot Montagne, cabinet à Dunkerque"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Barreau */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-tag">Appartenance</span>
              <h2 className="section-title mb-5">
                Membre du<br />
                <span className="text-forest-600">Barreau de Dunkerque</span>
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                Le Barreau de Dunkerque regroupe les avocats exerçant dans l&apos;arrondissement de Dunkerque. En tant que membre de ce barreau, Maître Montagne est soumise aux règles déontologiques de la profession et au contrôle de l&apos;Ordre des avocats.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cette appartenance garantit le respect du secret professionnel absolu, l&apos;indépendance totale vis-à-vis de tout intérêt tiers et l&apos;application des règles de conduite les plus strictes de la profession.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Secret professionnel", description: "Absolu et garanti par la déontologie" },
                { title: "Indépendance", description: "Aucun conflit d'intérêt possible" },
                { title: "Formation continue", description: "Mise à jour permanente des connaissances" },
                { title: "Responsabilité", description: "Assurance professionnelle obligatoire" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-sm p-5 border border-gray-100">
                  <div className="w-6 h-6 bg-forest-50 rounded-sm flex items-center justify-center mb-3">
                    <svg className="w-3.5 h-3.5 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-sm text-stone-950 font-medium mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
