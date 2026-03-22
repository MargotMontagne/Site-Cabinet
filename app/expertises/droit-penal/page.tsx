import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat pénal Dunkerque | Garde à vue & défense | Maître Montagne",
  description:
    "Avocate pénaliste à Dunkerque. Garde à vue, audition libre, tribunal correctionnel, cour d'assises. Intervention en urgence. Maître Margot Montagne. 07 44 78 77 18.",
  keywords: [
    "avocat pénal Dunkerque",
    "avocat garde à vue Dunkerque",
    "avocat droit pénal Dunkerque",
    "avocate pénaliste Dunkerque",
    "défense pénale Dunkerque",
    "avocat tribunal correctionnel Dunkerque",
    "avocat aménagement de peine Dunkerque",
    "avocat victime infraction Dunkerque",
    "avocat comparution immédiate Dunkerque",
    "avocat mise en examen Dunkerque",
  ],
  alternates: {
    canonical: "https://avocat-montagne.fr/expertises/droit-penal",
  },
  openGraph: {
    title: "Avocat pénal Dunkerque | Garde à vue & défense | Maître Montagne",
    description: "Avocate pénaliste à Dunkerque. Garde à vue, tribunal correctionnel, défense des victimes. Intervention en urgence. ☎ 07 44 78 77 18.",
    url: "https://avocat-montagne.fr/expertises/droit-penal",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DroitPenalPage() {
  return (
    <DomainePage
      image="Droit-penal.webp"
      imagePosition="center 65%"
      canonicalUrl="https://avocat-montagne.fr/expertises/droit-penal"
      breadcrumbLabel="Droit pénal"
      title="Avocat en droit pénal à Dunkerque"
      subtitle="Que vous soyez mis en cause ou victime d'une infraction pénale, le cabinet assure votre défense avec rigueur à chaque étape de la procédure."
      h2Intro="Cabinet pénaliste à Dunkerque : défense et représentation des victimes"
      h2Situations="Interventions en droit pénal à Dunkerque"
      intro={[
        "Face à une procédure pénale, l'assistance d'un avocat pénaliste est indispensable dès le premier instant. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient en droit pénal à Dunkerque et dans l'ensemble du ressort de la Cour d'appel de Douai, couvrant les départements du Nord (59) et du Pas-de-Calais (62).",
        "Le droit pénal couvre un spectre large d'infractions : des délits routiers (conduite en état d'ivresse, stupéfiants au volant, grands excès de vitesse) aux infractions économiques (escroquerie, abus de confiance, travail dissimulé), en passant par les violences, le trafic de stupéfiants, le cyberharcèlement ou la diffamation. Quelle que soit la nature des faits, une défense efficace commence toujours par une analyse rigoureuse du dossier.",
      ]}
      profiles={[
        {
          icon: "shield",
          title: "Vous êtes mis en cause ou prévenu",
          content: "Maître Montagne intervient à chaque stade de la procédure, de la garde à vue jusqu'à l'audience. Elle analyse le dossier, conseille sur l'exercice du droit au silence et construit une stratégie de défense adaptée à votre situation.",
          bullets: [
            "Garde à vue, audition libre et phase d'enquête",
            "Instruction judiciaire et mise en examen",
            "Audiences correctionnelles et criminelles, Cour d'assises",
            "Aménagement de peine devant le Juge d'Application des Peines (semi-liberté, bracelet électronique, libération conditionnelle)",
          ],
        },
        {
          icon: "heart",
          title: "Vous êtes victime d'une infraction",
          content: "Le cabinet vous accompagne pour faire valoir vos droits, obtenir réparation de l'intégralité de votre préjudice et vous représenter à chaque audience.",
          bullets: [
            "Dépôt de plainte et suivi de la procédure",
            "Constitution de partie civile",
            "Citation directe devant le tribunal correctionnel",
            "Indemnisation du préjudice moral, physique et matériel",
          ],
        },
      ]}
      situations={[
        {
          title: "Garde à vue et audition libre",
          description: "Assistance dès la première heure de garde à vue et lors des auditions libres. Vous avez le droit de garder le silence et d'être assisté : exercez-le.",
        },
        {
          title: "Instruction judiciaire",
          description: "Accompagnement tout au long de la mise en examen : contestation des charges, demandes de remise en liberté, actes d'instruction en votre faveur.",
        },
        {
          title: "Tribunal correctionnel",
          description: "Défense devant le tribunal correctionnel pour tout type de délit, de la comparution immédiate à l'audience classique, y compris en appel.",
        },
        {
          title: "Cour d'assises",
          description: "Défense des accusés de crimes avec une préparation rigoureuse, une stratégie construite sur la durée et une plaidoirie engagée.",
        },
        {
          title: "Aménagement de peine",
          description: "Intervention devant le Juge d'Application des Peines pour obtenir semi-liberté, bracelet électronique ou libération conditionnelle.",
        },
        {
          title: "Défense des victimes",
          description: "Constitution de partie civile, suivi de la procédure et représentation à l'audience pour obtenir la réparation intégrale de votre préjudice.",
        },
      ]}
      whyChoose={[
        "Intervention immédiate lors des gardes à vue, y compris en dehors des heures ouvrables, parce que les urgences ne préviennent pas.",
        "Accompagnement complet de A à Z : de la garde à vue à l'audience, jusqu'à l'aménagement de peine si nécessaire.",
        "Défense des mis en cause ET représentation des victimes : une vision globale des deux faces d'une procédure pénale.",
        "Connaissance approfondie des pratiques du Parquet et des juridictions de Dunkerque, du Tribunal judiciaire à la Cour d'appel de Douai.",
        "Explication claire et sans jargon de chaque étape de la procédure, pour que vous ne soyez jamais dans l'incertitude.",
        "Suivi personnalisé et disponibilité constante, du premier contact jusqu'à la clôture définitive de votre dossier.",
      ]}
      faqItems={[
        {
          question: "Puis-je refuser de parler lors d'une garde à vue ?",
          answer: "Oui, vous avez le droit de garder le silence lors d'une garde à vue. C'est même souvent la meilleure décision avant d'avoir pu consulter votre avocat. Une assistance est assurée lors de vos auditions pour protéger vos intérêts.",
        },
        {
          question: "Quand dois-je appeler un avocat lors d'une garde à vue ?",
          answer: "Immédiatement. Dès que vous êtes placé en garde à vue, vous avez le droit d'être assisté par un avocat dès la première heure. N'attendez pas : appelez le 07 44 78 77 18.",
        },
        {
          question: "Combien de temps peut durer une garde à vue ?",
          answer: "En principe, une garde à vue dure 24 heures. Elle peut être prolongée jusqu'à 48 heures sur décision du procureur. Dans certains cas (terrorisme, crime organisé), la durée peut être plus longue.",
        },
        {
          question: "Quelle est la différence entre une audition libre et une garde à vue ?",
          answer: "En audition libre, vous n'êtes pas privé de liberté et pouvez partir quand vous le souhaitez. En garde à vue, vous êtes retenu. Dans les deux cas, vous avez le droit de vous taire et d'être assisté d'un avocat.",
        },
        {
          question: "Puis-je avoir un avocat commis d'office à Dunkerque ?",
          answer: "Oui. Si vous ne disposez pas d'un avocat, vous pouvez en demander un via le barreau de Dunkerque, qui assure une permanence pénale. Toutefois, il est souvent préférable de faire appel à un avocat que vous choisissez vous-même pour bénéficier d'un suivi personnalisé dès la garde à vue.",
        },
        {
          question: "Combien coûte un avocat pour une garde à vue ?",
          answer: "Les honoraires varient selon la complexité du dossier. Une convention d'honoraires claire vous est remise dès le début de la mission. Si vous bénéficiez d'une protection juridique incluse dans votre assurance habitation ou auto, elle peut prendre en charge tout ou partie des frais. L'aide juridictionnelle est également possible sous conditions de ressources.",
        },
        {
          question: "Devant quelles juridictions le cabinet intervient-il en droit pénal ?",
          answer: "Le Cabinet Montagne intervient devant le Tribunal judiciaire de Dunkerque, le tribunal correctionnel, le juge d'instruction, la chambre de l'instruction et la Cour d'assises. Il couvre l'ensemble du ressort de la Cour d'appel de Douai, incluant les juridictions des départements du Nord (59) et du Pas-de-Calais (62).",
        },
        {
          question: "Que faire si je reçois une convocation du tribunal correctionnel ?",
          answer: "Ne vous présentez pas seul. Dès réception de la convocation, contactez le cabinet pour analyser les faits reprochés et préparer votre défense. Plus tôt vous consultez, plus la stratégie peut être construite efficacement avant l'audience.",
        },
      ]}
      callout={{
        text: "Garde à vue, convocation, jugement : chaque étape compte. Ne l'affrontez pas seul.",
        cta: "Urgence pénale : 07 44 78 77 18",
      }}
      calloutPosition="after-intro"
      featureBlocks={[
        {
          image: "penal-feature.webp",
          imageAlt: "Cabinet Montagne — défense pénale à Dunkerque",
          title: "Du commissariat à la cour d'assises : une présence à chaque stade",
          direction: "image-left",
          content: [
            "La procédure pénale se déroule en plusieurs phases, chacune avec ses propres règles et ses propres enjeux. Dès la garde à vue, votre avocat peut intervenir pour vous conseiller, limiter les risques de mise en examen et vérifier la régularité des actes accomplis par les enquêteurs.",
            "Lors de l'instruction, pendant l'enquête préliminaire ou au moment de l'audience, la défense pénale exige une maîtrise technique et une connaissance fine des pratiques locales. Maître Montagne intervient devant le Tribunal correctionnel, le Juge d'instruction et la Cour d'assises de Douai, avec la même exigence à chaque stade.",
          ],
        },
      ]}
      relatedLinks={[
        {
          label: "Droit routier",
          href: "/expertises/droit-routier",
          description: "Alcoolémie, stupéfiants au volant, excès de vitesse grave : des infractions routières qui relèvent aussi du droit pénal.",
        },
        {
          label: "Préjudice corporel",
          href: "/expertises/prejudice-corporel",
          description: "Victime d'une infraction pénale ayant entraîné des blessures ? Le cabinet vous accompagne pour obtenir réparation de l'ensemble de vos préjudices.",
        },
        {
          label: "Droit des mineurs",
          href: "/expertises/droit-des-mineurs",
          description: "Un mineur mis en cause relève d'une procédure pénale spécifique. Le cabinet assure sa défense devant le tribunal pour enfants à chaque stade.",
        },
      ]}
    />
  );
}
