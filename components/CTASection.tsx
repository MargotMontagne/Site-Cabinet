export default function CTASection() {
  return (
    <section className="section-padding bg-forest-600 relative overflow-hidden">
      {/* Background decorations statiques */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full" />
      </div>

      <div className="section-container relative text-center">
        <span className="inline-block text-forest-200 text-xs font-semibold tracking-widest uppercase mb-6">
          Vous avez une question ?
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
          Ne laissez pas votre situation<br />
          sans réponse
        </h2>

        <p className="text-forest-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Que vous soyez confronté à une urgence ou que vous souhaitiez obtenir un premier conseil, Maître Montagne est disponible pour étudier votre situation et vous orienter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0744787718"
            className="btn-white text-base py-4 px-8 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler le <strong>07 44 78 77 18</strong>
          </a>
          <a
            href="https://cal.eu/margot-montagne/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-base py-4 px-8 w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Prendre rendez-vous<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-forest-200">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Consultation gratuite si ouverture de dossier
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Réponse sous 24h ouvrées
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Confidentialité absolue
          </div>
        </div>
      </div>
    </section>
  );
}
