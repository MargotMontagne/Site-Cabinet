import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Expertise reconnue",
    description:
      "La formation est solide, l'expérience terrain profonde. Chaque dossier est traité avec le même niveau d'exigence, quelle que soit la juridiction saisie.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Réactivité",
    description:
      "Garde à vue, convocation urgente, situation qui ne peut pas attendre : le cabinet s'organise pour intervenir dans les meilleurs délais, y compris hors horaires habituels.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Accompagnement humain",
    description:
      "Maître Montagne prend le temps d'expliquer chaque étape et de vous tenir informé à chaque moment de votre affaire, sans jargon inutile.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Transparence tarifaire",
    description:
      "Les honoraires sont discutés dès le premier entretien. Une convention écrite est établie avant toute intervention, adaptée à la complexité de votre affaire.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-white" id="pourquoi-nous">
      <div className="section-container">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="label-tag">Pourquoi nous choisir</span>
            <h2 className="section-title mt-2">
              Un cabinet qui met<br />
              <span className="text-forest-600">vos intérêts au centre</span>
            </h2>
            <div className="divider mx-auto mt-5 mb-6" />
            <p className="section-subtitle max-w-xl mx-auto">
              Choisir un avocat, c&apos;est choisir quelqu&apos;un en qui vous avez confiance. Voici ce qui distingue le Cabinet Montagne.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.number} delay={i * 110} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                tabIndex={0}
                className="group relative overflow-hidden rounded-2xl p-8 h-full flex flex-col cursor-default transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2 border border-stone-200 bg-white shadow-md hover:bg-forest-600 hover:border-transparent hover:shadow-xl hover:shadow-forest-900/20 focus-within:bg-forest-600 focus-within:border-transparent focus-within:shadow-xl focus-within:shadow-forest-900/20"
              >
                {/* Numéro décoratif — top right, rogné par overflow-hidden */}
                <span className="absolute top-4 right-4 font-serif text-[5rem] leading-none select-none pointer-events-none transition-colors duration-500 text-stone-200/80 group-hover:text-white/10 group-focus-within:text-white/10">
                  {reason.number}
                </span>

                {/* Icône */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-all duration-500 bg-white shadow-sm text-forest-600 group-hover:bg-white/15 group-hover:text-white group-hover:shadow-none group-focus-within:bg-white/15 group-focus-within:text-white group-focus-within:shadow-none">
                  {reason.icon}
                </div>

                {/* Titre */}
                <h3 className="font-serif text-2xl mb-3 transition-colors duration-500 text-stone-950 group-hover:text-white group-focus-within:text-white">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 transition-colors duration-500 text-gray-500 group-hover:text-forest-100 group-focus-within:text-forest-100">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Prendre rendez-vous
            </a>
            <a href="tel:0744787718" className="btn-outline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 44 78 77 18
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
