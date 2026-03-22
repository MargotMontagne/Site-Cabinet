import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Maître Montagne est intervenue le soir même de ma garde à vue. Elle a su me rassurer, m'expliquer mes droits clairement et défendre mes intérêts avec une vraie détermination. Je ne la remercierai jamais assez.",
    author: "M. B.",
    location: "Dunkerque",
    context: "Droit pénal",
    stars: 5,
  },
  {
    quote:
      "J'ai fait appel à Maître Montagne pour mon divorce. Elle m'a accompagnée avec beaucoup d'humanité dans une période difficile, tout en étant très efficace sur le plan juridique. Elle prend le temps d'expliquer, ce qui est rare.",
    author: "Mme S.",
    location: "Grande-Synthe",
    context: "Droit de la famille",
    stars: 5,
  },
  {
    quote:
      "Après notre accident, les assureurs proposaient une indemnisation largement insuffisante. Maître Montagne a obtenu le double. Professionnelle, disponible et tenace : nous lui faisons entièrement confiance.",
    author: "M. et Mme R.",
    location: "Dunkerque",
    context: "Préjudice corporel",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4" role="img" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-stone-50" id="temoignages">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="label-tag">Témoignages</span>
            <h2 className="section-title text-balance">
              Ils ont fait confiance<br />
              <span className="text-forest-600">au Cabinet Montagne</span>
            </h2>
            <div className="divider mx-auto mt-5" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"}>
              <article className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-md hover:shadow-xl hover:shadow-forest-900/5 transition-all duration-300">
                <Stars count={t.stars} />

                <blockquote className="flex-1 mb-6">
                  <p className="text-gray-600 leading-relaxed text-sm italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                <footer className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <div className="font-serif text-stone-950 font-medium text-sm">
                      {t.author}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {t.location}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-forest-600 bg-forest-50 px-3 py-1 rounded-full">
                    {t.context}
                  </span>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Note déontologique */}
        <ScrollReveal delay={400}>
          <p className="text-center text-xs text-gray-500 mt-10">
            Témoignages anonymisés dans le respect des règles déontologiques du barreau.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
