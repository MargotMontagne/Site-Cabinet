import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Honoraires — Maître Margot Montagne, avocate à Dunkerque",
  description:
    "Honoraires de Maître Margot Montagne, avocate à Dunkerque. Taux horaire, forfait, convention d'honoraires, aide juridictionnelle, protection juridique. Appelez le 07 44 78 77 18.",
  alternates: {
    canonical: "https://www.avocat-montagne.fr/honoraires",
  },
};

const faqHonoraires = [
  {
    question: "Le premier entretien est-il payant ?",
    answer:
      "Le premier contact téléphonique est gratuit. Un entretien de consultation approfondi au cabinet fait l'objet d'honoraires définis à l'avance et communiqués avant le rendez-vous.",
  },
  {
    question: "Comment sont fixés les honoraires ?",
    answer:
      "Les honoraires sont librement fixés par convention entre l'avocat et son client. Ils tiennent compte de la nature et de la complexité de l'affaire, du temps prévisible à y consacrer, des diligences à accomplir et des enjeux en cause. Une convention d'honoraires écrite est systématiquement établie.",
  },
  {
    question: "Qu'est-ce qu'une convention d'honoraires ?",
    answer:
      "C'est un document écrit qui fixe les modalités de calcul des honoraires, le mode de règlement et une estimation du coût global. Elle est obligatoire pour toute mission sauf urgence, et garantit une totale lisibilité sur le coût de la défense.",
  },
  {
    question: "Puis-je bénéficier de l'aide juridictionnelle ?",
    answer:
      "Si vos ressources sont inférieures à un plafond fixé annuellement, l'État prend en charge tout ou partie des honoraires d'avocat. Le cabinet accepte les bénéficiaires de l'aide juridictionnelle.",
  },
  {
    question: "Ma protection juridique peut-elle couvrir mes honoraires ?",
    answer:
      "Oui, dans de nombreux cas. La protection juridique est souvent incluse dans les contrats d'assurance habitation, automobile ou carte bancaire. Avant tout engagement, il est conseillé de vérifier vos contrats : vous êtes peut-être déjà couvert. Le cabinet peut vous accompagner dans l'activation de cette garantie.",
  },
  {
    question: "Peut-on payer en plusieurs fois ?",
    answer:
      "Des facilités de paiement peuvent être accordées selon les situations. L'accès au droit ne doit pas être conditionné par des contraintes financières. Ce point est abordé librement lors du premier entretien.",
  },
  {
    question: "Qu'est-ce que les honoraires au résultat ?",
    answer:
      "Il s'agit d'un complément d'honoraires versé en cas de résultat favorable : par exemple, un pourcentage des sommes obtenues à l'issue du litige. Ce complément vient toujours s'ajouter à un honoraire de base fixé à l'avance. La loi interdit une rémunération basée exclusivement sur le résultat (« quota litis »). Ce mode est envisageable pour certains contentieux, notamment en matière de préjudice corporel.",
  },
];

export default function HonorairesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/honoraire-hero.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/50 to-stone-950/30" />
        </div>

        {/* Contenu */}
        <div className="relative w-full section-container pb-14 pt-36">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/70" aria-current="page">Honoraires</span>
          </nav>

          <span className="inline-block text-forest-300 text-xs font-semibold tracking-widest uppercase mb-4">
            Honoraires
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-5 max-w-2xl">
            Une information complète<br />
            dès le premier entretien
          </h1>
          <div className="w-12 h-px bg-forest-400 mb-6" />
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            La question des honoraires est abordée sans détour, avant tout engagement. Le coût de l&apos;intervention est établi selon des critères précis, formalisé par écrit et discuté librement.
          </p>
        </div>
      </section>

      {/* Principe */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
            <div>
              <span className="label-tag">Le principe</span>
              <h2 className="section-title mb-5">
                La convention d&apos;honoraires,<br />
                <span className="text-forest-600">un cadre clair et écrit</span>
              </h2>
              <div className="divider mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Conformément aux règles déontologiques du barreau, une <strong className="text-stone-950 font-semibold">convention d&apos;honoraires écrite</strong> est établie avant toute intervention. Ce document précise le mode de calcul des honoraires, leur montant prévisionnel et les modalités de règlement.
                </p>
                <p>
                  Ce cadre contractuel permet au client de s&apos;engager en pleine connaissance de cause, sans risque de facturation inattendue en cours ou en fin de procédure.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4">
                {[
                  { icon: "✓", text: "Coût communiqué avant tout engagement" },
                  { icon: "✓", text: "Convention d'honoraires écrite et signée" },
                  { icon: "✓", text: "Compte rendu régulier des diligences effectuées" },
                  { icon: "✓", text: "Facilités de paiement possibles" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 text-xs font-bold flex-shrink-0">
                      {item.icon}
                    </span>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
            {/* Modes de calcul */}
            <ScrollReveal direction="right" delay={150}>
            <div className="space-y-4">
              {[
                {
                  title: "Honoraires au temps passé",
                  description:
                    "Un taux horaire est défini à l'avance. Les honoraires correspondent au temps effectivement consacré au dossier : consultations, rédaction d'actes, audiences, recherches. Ce mode s'applique aux affaires dont la durée est difficile à anticiper.",
                  tag: "Le plus courant",
                },
                {
                  title: "Honoraires forfaitaires",
                  description:
                    "Pour certaines procédures standardisées (divorce par consentement mutuel, injonction de payer, etc.), un forfait global peut être proposé. Le coût est arrêté dès le début de la mission.",
                  tag: "Procédures définies",
                },
                {
                  title: "Honoraires au résultat",
                  description:
                    "Un honoraire de base est fixé dès le départ, auquel peut s'ajouter un complément lié au résultat obtenu. La rémunération basée exclusivement sur le résultat est interdite par la loi : un honoraire de base est toujours prévu.",
                  tag: "Contentieux",
                },
              ].map((mode) => (
                <div
                  key={mode.title}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-forest-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-base text-stone-950">{mode.title}</h3>
                    <span className="text-xs text-forest-600 bg-forest-50 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {mode.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{mode.description}</p>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Aides & prise en charge */}
      <section className="section-padding bg-forest-50/40">
        <div className="section-container">
          <ScrollReveal>
          <div className="text-center mb-14">
            <span className="label-tag">Aides disponibles</span>
            <h2 className="section-title">
              Des dispositifs pour<br />
              <span className="text-forest-600">financer votre défense</span>
            </h2>
            <div className="divider mx-auto mt-5 mb-5" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Deux mécanismes peuvent prendre en charge tout ou partie des honoraires d&apos;avocat. Un point est fait systématiquement sur les droits du client lors du premier entretien.
            </p>
          </div>

          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Aide juridictionnelle */}
            <ScrollReveal direction="left">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-950 mb-3">Aide juridictionnelle</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Lorsque les ressources du demandeur sont inférieures au plafond légal, l&apos;État prend en charge tout ou partie des honoraires d&apos;avocat. L&apos;aide est totale ou partielle selon le niveau de revenus.
              </p>
              <ul className="space-y-2">
                {[
                  "Acceptée au cabinet",
                  "Applicable à la plupart des procédures",
                  "Constitution du dossier accompagnée",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
            {/* Protection juridique */}
            <ScrollReveal direction="right" delay={150}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center text-forest-600 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-stone-950 mb-3">Protection juridique</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Souvent incluse dans les contrats d&apos;assurance habitation, automobile ou carte bancaire, la protection juridique couvre les honoraires d&apos;avocat. Cette garantie est fréquemment méconnue des assurés.
              </p>
              <ul className="space-y-2">
                {[
                  "À vérifier dans vos contrats d'assurance",
                  "Fréquemment sous-utilisée",
                  "Accompagnement pour l'activation de la garantie",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-forest-50/40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag">Questions fréquentes</span>
              <h2 className="section-title">Questions sur les honoraires</h2>
              <div className="divider mx-auto mt-5" />
            </div>
            </ScrollReveal>

            <div className="space-y-4">
              {faqHonoraires.map((item, index) => (
                <ScrollReveal key={item.question} delay={index * 60}>
                <details
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <span className="font-sans font-semibold text-base text-stone-900 leading-snug">{item.question}</span>
                    <svg
                      className="w-5 h-5 text-forest-600 flex-shrink-0 transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                  </div>
                </details>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Contestation des honoraires */}
      <section className="py-10 bg-stone-50 border-y border-stone-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-xl text-stone-800 mb-3">Contestation des honoraires</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              En cas de désaccord sur la facturation, le client peut saisir le Bâtonnier de l&apos;Ordre des avocats de Dunkerque, qui met en place une médiation amiable, ou le médiateur de la consommation par courrier recommandé.
            </p>
          </div>
        </div>
      </section>

      {/* Domaines d'intervention */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="section-container">
          <ScrollReveal>
          <div className="text-center mb-10">
            <span className="label-tag">Nos domaines</span>
            <h2 className="section-title">
              Pour quel type de dossier ?
            </h2>
            <div className="divider mx-auto mt-5 mb-4" />
            <p className="section-subtitle max-w-xl mx-auto">
              Les honoraires varient selon la nature et la complexité de l&apos;affaire. Chaque domaine fait l&apos;objet d&apos;une convention spécifique.
            </p>
          </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Droit pénal", href: "/domaines/droit-penal", desc: "Garde à vue, tribunal correctionnel, cour d'assises" },
              { label: "Droit de la famille", href: "/domaines/droit-de-la-famille", desc: "Divorce, garde des enfants, pension alimentaire" },
              { label: "Droit routier", href: "/domaines/droit-routier", desc: "Permis, alcool au volant, excès de vitesse" },
              { label: "Préjudice corporel", href: "/domaines/prejudice-corporel", desc: "Accidents, indemnisation, face aux assureurs" },
              { label: "Droit civil", href: "/domaines/droit-civil", desc: "Contrats, litiges, responsabilité civile" },
              { label: "Droit des mineurs", href: "/domaines/droit-des-mineurs", desc: "Mineur mis en cause, protection de l'enfance" },
            ].map((domain, i) => (
              <ScrollReveal key={domain.href} delay={i * 80}>
              <Link
                href={domain.href}
                className="group flex items-start gap-4 bg-stone-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full"
              >
                <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-forest-700 group-hover:scale-110 transition-all duration-200">
                  <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-stone-950 group-hover:text-forest-700 transition-colors leading-snug">{domain.label}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{domain.desc}</p>
                </div>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
