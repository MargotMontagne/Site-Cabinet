import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end bg-stone-950 overflow-hidden"
      aria-label="Présentation du cabinet"
    >
      {/* Image de fond plein écran */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/Tribunal-Dunkerque.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay de base pour assombrir l'ensemble */}
        <div className="absolute inset-0 bg-stone-950/50" />
        {/* Dégradé du bas vers le haut pour renforcer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
      </div>

      <div className="section-container relative w-full pb-10 sm:pb-20 lg:pb-28 pt-28 sm:pt-36 lg:pt-44 hero-fade-in">
        <div className="max-w-3xl backdrop-blur-sm bg-stone-950/25 rounded-2xl px-6 sm:px-10 py-6 sm:py-10">
          {/* Badge disponibilité */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span className="text-xs font-medium text-white/90 tracking-wide">
              Disponible rapidement · Intervention en urgence
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-4 sm:mb-6">
            Maître Margot Montagne,<br />
            <span className="text-forest-200">avocate à Dunkerque</span>
          </h1>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-6 sm:mb-10 max-w-xl">
            Avocate au Barreau de Dunkerque depuis 2020, Maître Montagne vous accueille et vous accompagne dans la défense de vos droits. Garde à vue, séparation, accident ou litige : elle est à vos côtés à chaque étape de la procédure.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-12">
            <a
              href="tel:0744787718"
              className="btn-white text-base py-4 px-8"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contacter le cabinet
            </a>
            <a
              href="https://cal.eu/margot-montagne/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white text-base py-4 px-8"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Prendre rendez-vous
            </a>
          </div>

          {/* Signaux de confiance */}
          <div className="hidden sm:flex flex-wrap items-center gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-white/60">Barreau de Dunkerque</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-white/60">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-forest-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-sm text-white/60">Secret professionnel garanti</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
