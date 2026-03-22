import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { glossaire } from "@/lib/glossaire-data";

export const metadata: Metadata = {
  title: "Ressources juridiques — Glossaire, guides & documents | Avocat Dunkerque",
  description:
    "Glossaire juridique, guides pratiques et documents utiles. Comprenez vos droits avant de consulter. Maître Margot Montagne, avocate à Dunkerque — 07 44 78 77 18.",
  alternates: {
    canonical: "https://www.avocat-montagne.fr/ressources",
  },
};

const glossaireTeaser = [
  "Garde à vue", "Mise en examen", "JAF (Juge aux affaires familiales)",
  "Présomption d'innocence", "Prescription", "Référé",
  "Ordonnance de protection", "Sursis", "Consolidation",
];

type Document = { title: string; desc: string; href: string };
type DocumentGroup = { label: string; docs: Document[] };

const documentGroups: DocumentGroup[] = [
  {
    label: "Accès au droit & honoraires",
    docs: [
      {
        title: "Demande d'aide juridictionnelle",
        desc: "Cerfa n°15626 — prise en charge des frais d'avocat par l'État sous conditions de ressources.",
        href: "https://www.service-public.fr/particuliers/vosdroits/R1444",
      },
      {
        title: "Vérifier son éligibilité à l'aide juridictionnelle",
        desc: "Simulateur officiel pour savoir si vous pouvez bénéficier de la prise en charge totale ou partielle.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F18074",
      },
    ],
  },
  {
    label: "Droit routier",
    docs: [
      {
        title: "Requête en exonération d'une contravention",
        desc: "Contester un PV radar ou une contravention auprès de l'Officier du Ministère Public.",
        href: "https://www.service-public.fr/particuliers/vosdroits/R14140",
      },
      {
        title: "Contester une suspension administrative du permis",
        desc: "Démarche pour contester une suspension préfectorale de permis de conduire.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F21520",
      },
      {
        title: "Constat amiable après un accident",
        desc: "Document à remplir sur place après un accident impliquant deux véhicules.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F2149",
      },
    ],
  },
  {
    label: "Droit pénal & victimes",
    docs: [
      {
        title: "Déposer une plainte",
        desc: "Informations officielles sur le dépôt de plainte en ligne ou au commissariat.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F1435",
      },
      {
        title: "Demande d'indemnisation CIVI",
        desc: "Saisir la Commission d'Indemnisation des Victimes d'Infractions après une infraction pénale.",
        href: "https://www.service-public.fr/particuliers/vosdroits/R46478",
      },
      {
        title: "Demande d'aide aux victimes",
        desc: "Associations et dispositifs d'aide aux victimes d'infractions référencés par le Ministère de la Justice.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F1381",
      },
    ],
  },
  {
    label: "Droit de la famille",
    docs: [
      {
        title: "Saisir le Juge aux affaires familiales (JAF)",
        desc: "Procédure pour demander la fixation ou la révision d'une pension alimentaire ou d'un droit de visite.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F991",
      },
      {
        title: "Divorce par consentement mutuel",
        desc: "Conditions et démarches pour un divorce amiable sans passage devant le juge.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F10567",
      },
      {
        title: "Demande d'ordonnance de protection",
        desc: "Procédure d'urgence pour les victimes de violences conjugales — décision en 6 jours.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F2021",
      },
    ],
  },
  {
    label: "Droit civil",
    docs: [
      {
        title: "Requête en injonction de payer",
        desc: "Procédure simplifiée pour récupérer une créance non contestée sans audience.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F1746",
      },
      {
        title: "Saisir le tribunal judiciaire",
        desc: "Démarches pour introduire une action civile en justice (litiges entre particuliers ou avec une entreprise).",
        href: "https://www.service-public.fr/particuliers/vosdroits/F1490",
      },
    ],
  },
  {
    label: "Préjudice corporel",
    docs: [
      {
        title: "Saisir la CRCI / Commission médicale",
        desc: "Procédure de règlement amiable pour les accidents médicaux — Commission de Conciliation et d'Indemnisation.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F10414",
      },
      {
        title: "Indemnisation après un accident de la route",
        desc: "Droits des victimes d'accident corporel et procédure d'indemnisation par l'assureur.",
        href: "https://www.service-public.fr/particuliers/vosdroits/F2033",
      },
    ],
  },
];

export default function RessourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/ressource-hero.webp"
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
            <span className="text-white/70" aria-current="page">Ressources</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-forest-300 text-xs font-sans font-semibold tracking-widest uppercase mb-4">Centre de ressources</span>
            <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6 mt-3">
              Comprendre le droit,<br />
              <span className="text-forest-300">c&apos;est déjà se défendre</span>
            </h1>
            <div className="w-12 h-px bg-forest-400 mb-6" />
            <p className="text-lg text-white/70 leading-relaxed">
              Glossaire juridique et formulaires officiels — pour mieux appréhender votre situation avant de consulter.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "Glossaire juridique", href: "#glossaire" },
                { label: "Documents utiles", href: "#documents" },
              ].map((a) => (
                <a key={a.href} href={a.href} className="text-sm text-white/80 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors">
                  {a.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Glossaire — teaser compact */}
      <section id="glossaire" className="section-padding bg-stone-50">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10">
              <span className="label-tag">Glossaire juridique</span>
              <h2 className="section-title mt-2">
                Le vocabulaire du droit<br />
                <span className="text-forest-600">expliqué simplement</span>
              </h2>
              <div className="divider mt-5 mb-6" />
              <p className="text-gray-500 max-w-2xl">
                {glossaire.length} définitions rédigées pour être comprises par tous, sans jargon. Chaque terme renvoie à la page d&apos;expertise correspondante.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-5">
                {glossaireTeaser.map((terme) => {
                  const item = glossaire.find((g) => g.terme === terme);
                  if (!item) return null;
                  return (
                    <Link
                      key={terme}
                      href={item.href}
                      className="text-xs text-stone-700 bg-stone-50 border border-gray-200 px-3 py-1.5 rounded-full hover:border-forest-300 hover:text-forest-700 transition-colors"
                    >
                      {terme}
                    </Link>
                  );
                })}
                <span className="text-xs text-gray-400 px-3 py-1.5">+{glossaire.length - glossaireTeaser.length} autres…</span>
              </div>
              <Link
                href="/glossaire"
                className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Voir le glossaire complet ({glossaire.length} définitions)
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents utiles */}
      <section id="documents" className="section-padding bg-white">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10">
              <span className="label-tag">Documents</span>
              <h2 className="section-title mt-2">Formulaires & démarches utiles</h2>
              <div className="divider mt-5 mb-6" />
              <p className="text-gray-500 max-w-2xl">
                Formulaires officiels classés par domaine. Tous les liens pointent vers service-public.fr.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl">
            {documentGroups.map((group, gi) => (
              <ScrollReveal key={group.label} delay={gi * 70}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-gray-100 bg-stone-50">
                    <span className="text-xs font-semibold tracking-wide uppercase text-stone-500">{group.label}</span>
                  </div>
                  <ul className="divide-y divide-gray-50">
                    {group.docs.map((doc) => (
                      <li key={doc.title}>
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3 px-5 py-4 hover:bg-forest-50 transition-colors duration-150"
                        >
                          <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-forest-500 flex-shrink-0 mt-0.5 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-stone-950 group-hover:text-forest-700 transition-colors leading-snug mb-0.5">
                              {doc.title}<span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed">{doc.desc}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
