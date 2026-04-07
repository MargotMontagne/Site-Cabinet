import LazyMap from "./LazyMap";
import ScrollReveal from "./ScrollReveal";

const villes = [
  "Dunkerque",
  "Calais",
  "Lille",
  "Saint-Omer",
  "Boulogne-sur-Mer",
  "Valenciennes",
  "Douai",
  "Arras",
  "Lens",
  "Hazebrouck",
];

export default function ZoneGeoSection() {
  return (
    <section className="section-padding bg-white overflow-hidden" id="zone-geographique">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="label-tag">Zone d&apos;intervention</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 leading-tight mb-5 mt-2">
                Avocat à Dunkerque<br />
                <span className="text-forest-600">et dans tout le ressort</span>
              </h2>
              <div className="divider mb-6" />
              <p className="text-gray-500 leading-relaxed mb-8">
                Le cabinet intervient dans l&apos;ensemble du ressort de la Cour d&apos;appel de Douai, couvrant les départements du Nord et du Pas-de-Calais. Basé à Dunkerque, il assure la défense de ses clients devant toutes les juridictions de cette zone.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-stone-950">Cabinet principal</p>
                    <p className="text-sm text-gray-400">25 Rue du Sud, 59140 Dunkerque</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-stone-950">Ressort de la Cour d&apos;appel de Douai</p>
                    <p className="text-sm text-gray-400">Nord (59) et Pas-de-Calais (62)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
                Principales villes du ressort
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {villes.map((ville) => (
                  <span
                    key={ville}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-forest-50 hover:border-forest-300 hover:text-forest-700 transition-colors"
                  >
                    <svg className="w-3 h-3 text-forest-500 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8" aria-hidden="true">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {ville}
                  </span>
                ))}
              </div>

              <LazyMap
                src="https://maps.google.com/maps?q=25+Rue+du+Sud,+59140+Dunkerque,+France&t=&z=17&ie=UTF8&iwloc=&output=embed"
                title="Cabinet Margot Montagne — 25 Rue du Sud, 59140 Dunkerque"
                className="aspect-video rounded-sm border border-gray-200"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
