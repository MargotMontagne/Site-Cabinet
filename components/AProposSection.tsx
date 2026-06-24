import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const credentials = [
  "Master II Droit privé, Université de Lille",
  "CAPA - IXAD, Formation Professionnelle des Avocats du Nord-Ouest",
  "Barreau de Dunkerque depuis 2020",
  "Fondatrice du Cabinet Montagne",
];

export default function AProposSection() {
  return (
    <section className="section-padding bg-white" id="a-propos">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Photo ── */}
          <ScrollReveal direction="left" distance="far">
            <div className="relative mb-3 mr-3 order-last lg:order-first">
              {/* Cadre décalé */}
              <div className="absolute -bottom-3 -right-3 inset-0 rounded-2xl bg-forest-100" />
              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Margot-MONTAGNE-Avocat.webp"
                  alt="Maître Margot Montagne en robe d'avocate, cabinet à Dunkerque"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-950/80 to-transparent px-6 pb-6 pt-12">
                  <p className="font-serif text-white text-lg leading-tight">Maître Margot Montagne</p>
                  <p className="text-forest-200 text-xs tracking-wide mt-0.5">Avocate au Barreau de Dunkerque depuis 2020</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Contenu ── */}
          <ScrollReveal direction="right">
            <div className="lg:pt-4">
              <span className="label-tag">À propos</span>

              <h2 className="section-title mt-2 mb-1">
                Maître Margot Montagne
              </h2>
              <p className="font-serif text-lg text-forest-600 mb-5">Avocate au Barreau de Dunkerque</p>
              <div className="divider mb-8" />

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Maître Margot Montagne est avocate installée à Dunkerque. Après s&apos;être formée au sein du cabinet Sakya Avocats, elle fonde le Cabinet Montagne et intervient devant les juridictions du Nord et du Pas-de-Calais (Dunkerque, Lille, Douai, Boulogne-sur-Mer, Arras) ainsi que sur l&apos;ensemble du territoire national.
                </p>
                <p>
                  Chaque affaire est prise en charge personnellement par Maître Montagne, de la première consultation jusqu&apos;à l&apos;audience. Elle étudie votre dossier, construit votre défense et la plaide. Pas de délégation, pas d&apos;intermédiaire.
                </p>
              </div>

              {/* Credentials */}
              <ul className="space-y-2.5 pt-7 mb-8 border-t border-gray-100">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-forest-500 flex-shrink-0" />
                    <span className="text-sm text-gray-500">{c}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="tel:0744787718" className="btn-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 44 78 77 18
                </a>
                <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Prendre rendez-vous<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
