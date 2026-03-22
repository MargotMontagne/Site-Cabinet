import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const domaines = [
  {
    href: "/domaines/droit-penal",
    title: "Droit pénal",
    description:
      "Mis en cause ou victime, vous méritez une défense immédiate et rigoureuse. Le cabinet intervient dès la garde à vue et assure votre défense à chaque stade de la procédure pénale, devant toutes les juridictions du Nord.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    urgent: true,
  },
  {
    href: "/domaines/droit-des-mineurs",
    title: "Droit des mineurs",
    description:
      "Quand un enfant ou un adolescent est impliqué dans une procédure judiciaire, chaque mot compte. Mineurs et familles sont accompagnés avec toute la bienveillance et la rigueur que la situation exige.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    urgent: false,
  },
  {
    href: "/domaines/droit-de-la-famille",
    title: "Droit de la famille",
    description:
      "Une séparation, un divorce, un désaccord sur la garde des enfants : ces épreuves touchent à l'essentiel. Maître Montagne vous accompagne pour trouver des solutions qui protègent votre famille et préservent l'intérêt de vos enfants.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    urgent: false,
  },
  {
    href: "/domaines/droit-routier",
    title: "Droit routier",
    description:
      "Un retrait de permis, c'est souvent aussi une perte d'emploi. Chaque dossier est examiné avec minutie pour contester les infractions contestables et limiter les conséquences sur votre vie professionnelle et personnelle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    urgent: true,
  },
  {
    href: "/domaines/droit-civil",
    title: "Droit civil",
    description:
      "Un contrat non respecté, un voisin de mauvaise foi, une créance impayée : les litiges du quotidien méritent une réponse ferme et rapide. Le cabinet défend vos intérêts devant les juridictions civiles de Dunkerque et du Nord.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    urgent: false,
  },
  {
    href: "/domaines/prejudice-corporel",
    title: "Préjudice corporel",
    description:
      "Après un accident ou une agression, les assureurs cherchent souvent à minimiser l'indemnisation. Maître Montagne défend chaque poste de préjudice avec détermination pour obtenir une réparation juste et intégrale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    urgent: false,
  },
];

export default function DomainesSection() {
  return (
    <section className="section-padding bg-stone-50" id="domaines">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="label-tag">Expertise</span>
            <h2 className="section-title text-balance mt-2">
              Domaines d&apos;intervention
            </h2>
            <div className="divider mx-auto mt-5 mb-6" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Le cabinet intervient à Dunkerque et dans tout le Nord pour défendre vos droits, quelle que soit votre situation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domaines.map((domaine, i) => (
            <ScrollReveal key={domaine.href} delay={i * 90} direction={i % 2 === 0 ? "left" : "right"}>
              <Link
                href={domaine.href}
                className="group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
              >
                {/* Barre d'accent en haut — propre avec overflow-hidden sur la carte */}
                <div className="h-1 w-full bg-forest-600 group-hover:bg-forest-700 transition-colors duration-300" />

                <div className="p-8 flex flex-col flex-1">
                {domaine.urgent && (
                  <span className="absolute top-5 right-4 text-xs text-forest-600 bg-forest-50 px-2 py-0.5 rounded-full font-medium">
                    Urgences
                  </span>
                )}

                <div className="w-12 h-12 bg-forest-50 rounded-lg flex items-center justify-center text-forest-600 mb-6 group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
                  {domaine.icon}
                </div>

                <h3 className="font-serif text-xl text-stone-950 mb-3 group-hover:text-forest-600 transition-colors">
                  {domaine.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                  {domaine.description}
                </p>

                <div className="flex items-center gap-2 text-forest-600 text-sm font-medium">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
