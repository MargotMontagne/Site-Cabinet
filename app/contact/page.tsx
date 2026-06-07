import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import LazyMap from "@/components/LazyMap";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-50 rounded-sm animate-pulse" />
  ),
});
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact — Cabinet Montagne, Dunkerque",
  description:
    "Contactez Maître Margot Montagne, avocate à Dunkerque. Téléphone, email, formulaire de contact. Cabinet au 25 Rue du Sud, 59140 Dunkerque. Urgences : 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/Contact-hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "blur(2px)", transform: "scale(1.05)" }}
          />
          <div className="absolute inset-0 bg-stone-950/60" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 w-full section-container pt-36 pb-14">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/70" aria-current="page">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-forest-300 text-xs font-sans font-semibold tracking-widest uppercase mb-4">Nous contacter</span>
            <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6 mt-3">
              Parlons de<br />
              <span className="text-forest-300">votre situation</span>
            </h1>
            <div className="w-12 h-px bg-forest-400 mb-6" />
            <p className="text-lg text-white/70 leading-relaxed">
              Pour toute demande, question ou situation d&apos;urgence, Maître Montagne est disponible. Un premier échange peut avoir lieu par téléphone, sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-4">
              <span className="label-tag">Coordonnées</span>
              <h2 className="font-serif text-2xl text-stone-950 mb-6">Retrouvez-nous</h2>

              {/* Téléphone */}
              <ScrollReveal delay={0} direction="left">
              <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Téléphone</p>
                  <a href="tel:0744787718" className="text-lg font-serif font-semibold text-stone-950 hover:text-forest-600 transition-colors">
                    07 44 78 77 18
                  </a>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    <p className="text-xs text-gray-400">Urgences disponibles</p>
                  </div>
                </div>
              </div>
              </ScrollReveal>

              {/* Email */}
              <ScrollReveal delay={150} direction="left">
              <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:margot.montagne.avocat@gmail.com" className="text-sm text-stone-950 hover:text-forest-600 transition-colors break-all">
                    margot.montagne.avocat@gmail.com
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Réponse sous 24h ouvrées</p>
                </div>
              </div>
              </ScrollReveal>

              {/* Adresse */}
              <ScrollReveal delay={300} direction="left">
              <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Adresse</p>
                  <address className="not-italic text-sm text-stone-950 leading-relaxed">
                    25 Rue du Sud<br />59140 Dunkerque
                  </address>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=25+Rue+du+Sud,+59140+Dunkerque"
                    target="_blank" rel="noopener noreferrer"
                    className="text-forest-600 text-xs mt-2 inline-flex items-center gap-1 hover:text-forest-700"
                  >
                    Obtenir l&apos;itinéraire<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              </ScrollReveal>

              {/* Horaires */}
              <ScrollReveal delay={450} direction="left">
              <div className="bg-white rounded-2xl shadow-md p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">Horaires</p>
                  <table className="text-sm w-full">
                    <tbody>
                      {[
                        ["Lun. au ven.", "9h00 à 18h00"],
                        ["Samedi", "Sur rendez-vous"],
                        ["Urgences", "Nous contacter"],
                      ].map(([day, hours]) => (
                        <tr key={day} className="border-b border-gray-50 last:border-0">
                          <td className="text-gray-500 pr-4 py-1.5">{day}</td>
                          <td className="text-stone-950 font-medium py-1.5">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </ScrollReveal>

              {/* RDV en ligne */}
              <ScrollReveal delay={600} direction="left">
              <div className="bg-forest-600 rounded-2xl p-6 shadow-md">
                <h3 className="font-serif text-lg text-white mb-1">Prendre rendez-vous en ligne</h3>
                <p className="text-sm text-forest-100 mb-5">Choisissez votre créneau directement via Cal.com.</p>
                <a
                  href="https://cal.eu/margot-montagne/30min"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-white w-full justify-center text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Réserver un créneau<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                </a>
              </div>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <span className="label-tag">Formulaire de contact</span>
              <h2 className="font-serif text-2xl text-stone-950 mb-2">Envoyez votre message</h2>
              <p className="text-sm text-gray-500 mb-8">
                Décrivez brièvement votre situation. Ces informations sont strictement confidentielles et soumises au secret professionnel.
              </p>
              <div className="bg-white rounded-2xl shadow-md p-8">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="section-container">
          <div className="text-center mb-10">
            <span className="label-tag">Nos domaines</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-950 leading-tight">
              Vous ne savez pas quel domaine<br className="hidden sm:block" /> concerne votre situation ?
            </h2>
            <div className="divider mx-auto mt-5 mb-4" />
            <p className="text-gray-500 leading-relaxed max-w-xl mx-auto text-sm">
              Maître Montagne intervient dans six domaines du droit. Consultez la page correspondante pour comprendre comment le cabinet peut vous aider.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Droit pénal", href: "/expertises/droit-penal", desc: "Garde à vue, tribunal, défense et victimes" },
              { label: "Droit de la famille", href: "/expertises/droit-de-la-famille", desc: "Divorce, enfants, pension alimentaire" },
              { label: "Droit routier", href: "/expertises/droit-routier", desc: "Permis, alcool au volant, infractions" },
              { label: "Préjudice corporel", href: "/expertises/prejudice-corporel", desc: "Accidents, indemnisation, assureurs" },
              { label: "Droit civil", href: "/expertises/droit-civil", desc: "Contrats, litiges, responsabilité" },
              { label: "Droit des mineurs", href: "/expertises/droit-des-mineurs", desc: "Mineur mis en cause, protection de l'enfance" },
            ].map((domain, i) => (
              <ScrollReveal key={domain.href} delay={i * 80}>
              <Link
                href={domain.href}
                className="group flex items-start gap-4 bg-stone-50 border border-gray-100 rounded-2xl p-5 hover:border-forest-200 hover:shadow-md transition-all duration-200 h-full"
              >
                <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-forest-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-stone-950 group-hover:text-forest-700 transition-colors">{domain.label}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{domain.desc}</p>
                </div>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <LazyMap
        src="https://maps.google.com/maps?q=25+Rue+du+Sud,+59140+Dunkerque,+France&t=&z=17&ie=UTF8&iwloc=&output=embed"
        title="Cabinet Margot Montagne — 25 Rue du Sud, 59140 Dunkerque"
        className="h-96"
      />
    </>
  );
}
