import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Maître Montagne est une excellente avocate, dévouée et très compétente notamment dans les domaines du droit pénal, droit de la famille, droit routier et préjudice corporel. Elle est intervenue dans mon dossier en préjudice corporel devant le tribunal judiciaire de Dunkerque et a été particulièrement réactive et dévouée. Je la recommande vivement !",
    author: "Sandra V.",
    date: "il y a 2 semaines",
    context: "Préjudice corporel",
    stars: 5,
  },
  {
    quote:
      "Maître Montagne, je viens de passer au tribunal et je tenais à vous remercier de m'avoir accompagnée avec une telle bienveillance. L'issue de ce procès a été favorable pour tout le monde et cela grâce à vous. Merci encore Maître Montagne.",
    author: "Christine",
    date: "il y a 2 mois",
    context: "Droit pénal",
    stars: 5,
  },
  {
    quote:
      "Maître Montagne m'a accompagné dans une période compliquée. Elle a été à l'écoute, disponible et très claire dans ses explications. J'ai apprécié son sérieux et le fait qu'elle prenne vraiment le temps de suivre le dossier. Ça met en confiance. Je recommande.",
    author: "Rémi B.",
    date: "il y a 2 mois",
    context: "Suivi de dossier",
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
                      {t.date}
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

        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-2 mt-10">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <p className="text-xs text-gray-400">
              Avis vérifiés Google · <a href="https://www.google.com/maps/place/Montagne+Margot/@51.0324916,2.3750472,17z/data=!4m6!3m5!1s0x47dc8d2a2b76e43b:0x610d35d7fdad033d!8m2!3d51.0324883!4d2.3776221!16s%2Fg%2F11l6186rfl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gray-600 transition-colors">Voir tous les avis</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
