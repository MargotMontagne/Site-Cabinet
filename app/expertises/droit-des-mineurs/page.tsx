import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat droit des mineurs Dunkerque | Protection enfance | Maître Montagne",
  description:
    "Avocate en droit des mineurs à Dunkerque. Assistance éducative, mineur mis en cause, opposition au placement, protection de l'enfance. Maître Margot Montagne. 07 44 78 77 18.",
  keywords: [
    "avocat droit des mineurs Dunkerque",
    "avocat mineur Dunkerque",
    "avocat protection enfance Dunkerque",
    "avocat assistance éducative Dunkerque",
    "avocat juge des enfants Dunkerque",
    "avocat placement enfant Dunkerque",
    "avocat tribunal pour enfants Dunkerque",
  ],
  alternates: {
    canonical: "https://www.avocat-montagne.fr/expertises/droit-des-mineurs",
  },
  openGraph: {
    title: "Avocat droit des mineurs Dunkerque | Protection enfance | Maître Montagne",
    description: "Avocate en droit des mineurs à Dunkerque. Assistance éducative, mineur mis en cause, protection de l'enfance. Maître Margot Montagne. ☎ 07 44 78 77 18.",
    url: "https://www.avocat-montagne.fr/expertises/droit-des-mineurs",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DroitMineursPage() {
  return (
    <DomainePage
      introLayout="sidebar"
      whyChooseStyle="list"
      image="Hero-mineurs.webp"
      imagePosition="center"
      canonicalUrl="https://www.avocat-montagne.fr/expertises/droit-des-mineurs"
      breadcrumbLabel="Droit des mineurs"
      title="Avocat en droit des mineurs à Dunkerque"
      subtitle="Le cabinet accompagne les mineurs, les parents et les familles dans les procédures d'assistance éducative et les affaires pénales impliquant des jeunes, avec bienveillance et rigueur."
      h2Intro="Cabinet spécialisé en droit des mineurs à Dunkerque : protection et défense"
      h2Situations="Procédures impliquant des mineurs à Dunkerque"
      intro={[
        "Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient en droit des mineurs devant le Juge des enfants et le Tribunal pour enfants du Tribunal judiciaire de Dunkerque. Elle accompagne à la fois les mineurs mis en cause pénalement et les familles confrontées à des procédures de protection de l'enfance.",
        "Le droit des mineurs exige une double compétence : juridique pour maîtriser des procédures spécifiques et distinctes du droit commun, et humaine pour accompagner des familles dans des situations souvent douloureuses. Chaque dossier est abordé avec la même attention portée à l'intérêt supérieur de l'enfant et aux droits des parents.",
      ]}
      profiles={[
        {
          icon: "shield",
          title: "Votre enfant est mis en cause pénalement",
          content: "Un mineur poursuivi pénalement bénéficie de droits spécifiques et de procédures adaptées. Maître Montagne assure sa défense devant le juge des enfants ou le tribunal pour enfants, avec pour objectif des mesures éducatives plutôt que des sanctions.",
          bullets: [
            "Assistance lors des auditions et gardes à vue de mineurs",
            "Défense devant le juge des enfants et le tribunal pour enfants",
            "Plaidoirie pour des mesures éducatives alternatives",
            "Accompagnement du mineur et de sa famille tout au long de la procédure",
          ],
        },
        {
          icon: "heart",
          title: "Votre famille est confrontée à une mesure de protection",
          content: "Une procédure d'assistance éducative, une menace de placement, une mesure imposée par le juge des enfants : ces situations sont éprouvantes. Le cabinet vous représente pour défendre vos droits parentaux et l'intérêt de votre enfant.",
          bullets: [
            "Représentation des parents devant le juge des enfants",
            "Opposition à une mesure de placement ou contestation",
            "Demande de mainlevée ou d'aménagement des mesures",
            "Accompagnement dans les relations avec les services de protection de l'enfance",
          ],
        },
      ]}
      situations={[
        {
          title: "Assistance éducative",
          description: "Représentation des parents ou du mineur dans les procédures d'assistance éducative devant le juge des enfants, y compris les mesures de suivi et de placement.",
        },
        {
          title: "Mineur mis en cause pénalement",
          description: "Défense d'un adolescent poursuivi pour une infraction pénale, devant le juge des enfants ou le tribunal pour enfants. Plaidoirie pour des mesures éducatives adaptées.",
        },
        {
          title: "Opposition à un placement",
          description: "Contestation d'une mesure de placement d'un enfant et défense du droit des parents à maintenir le lien familial. Demande de mainlevée ou d'aménagement.",
        },
        {
          title: "Mineur victime",
          description: "Représentation d'un mineur victime d'infractions (violences, abus, harcèlement) pour obtenir réparation, protection et suivi de la procédure pénale.",
        },
        {
          title: "Autorité parentale et mineur",
          description: "Questions relatives à l'autorité parentale, aux droits de visite et au maintien des liens familiaux dans les procédures impliquant des mineurs.",
        },
        {
          title: "Mesures éducatives alternatives",
          description: "Plaidoirie pour des mesures éducatives adaptées (AEMO, liberté surveillée, stage) plutôt que des sanctions pénales, dans l'intérêt supérieur de l'enfant.",
        },
      ]}
      whyChoose={[
        "Connaissance approfondie des juridictions pour mineurs et des mécanismes spécifiques de la protection de l'enfance à Dunkerque.",
        "Approche bienveillante et pédagogique, adaptée à la sensibilité des situations impliquant des enfants et des familles en difficulté.",
        "Défense des droits des parents sans perdre de vue l'intérêt supérieur de l'enfant, ces deux objectifs étant souvent complémentaires.",
        "Accompagnement des jeunes mis en cause pour qu'ils comprennent la procédure et soient acteurs de leur défense.",
        "Relation de confiance avec les familles, qui ont besoin d'être rassurées et guidées dans des moments particulièrement éprouvants.",
        "Réactivité : les procédures concernant des mineurs peuvent évoluer rapidement et nécessitent une disponibilité constante.",
      ]}
      faqItems={[
        {
          question: "Mon enfant a été convoqué par la police, que faire ?",
          answer: "Contactez immédiatement le cabinet. Un mineur a le droit d'être assisté par un avocat lors de toute audition ou garde à vue, et ses représentants légaux doivent en être informés. Il ne doit pas être entendu sans avocat. Appelez le 07 44 78 77 18.",
        },
        {
          question: "Qu'est-ce que l'assistance éducative ?",
          answer: "L'assistance éducative est une procédure civile devant le juge des enfants, déclenchée lorsqu'un mineur est en danger ou risque de l'être. Elle peut aboutir à des mesures de suivi à domicile (AEMO), d'aide éducative ou, dans les cas les plus graves, à un placement en famille d'accueil ou en foyer.",
        },
        {
          question: "Puis-je m'opposer au placement de mon enfant ?",
          answer: "Oui. Le placement est une mesure grave qui peut être contestée. Vous pouvez demander la mainlevée de la mesure ou son aménagement devant le juge des enfants. La présence d'un avocat est essentielle pour préparer l'audience et défendre vos droits parentaux.",
        },
        {
          question: "Un mineur peut-il avoir son propre avocat ?",
          answer: "Oui, et c'est même recommandé. Le mineur a le droit d'être assisté par un avocat distinct de celui de ses parents, notamment lorsque leurs intérêts peuvent diverger. Le mineur peut demander lui-même à être assisté dès l'âge où il est capable de discernement.",
        },
        {
          question: "Quelle différence entre le juge des enfants et le tribunal pour enfants ?",
          answer: "Le juge des enfants statue seul sur les mesures d'assistance éducative (civil) et sur les infractions mineures. Le tribunal pour enfants, composé du juge des enfants et de deux assesseurs, juge les infractions plus graves. Pour les crimes, c'est la cour d'assises des mineurs.",
        },
        {
          question: "Quelles mesures le juge des enfants peut-il prononcer ?",
          answer: "En matière civile (protection) : mesures de suivi éducatif, aide éducative à domicile (AEMO), délégation d'autorité parentale, placement. En matière pénale : avertissement, mise sous protection judiciaire, liberté surveillée, stage, travail d'intérêt général, placement ou emprisonnement pour les plus graves.",
        },
        {
          question: "Comment contester une décision du juge des enfants ?",
          answer: "Les décisions du juge des enfants peuvent faire l'objet d'un appel devant la chambre spécialisée de la Cour d'appel de Douai dans un délai de 15 jours. Le cabinet vous accompagne pour préparer l'appel et présenter de nouveaux éléments susceptibles de modifier la décision.",
        },
      ]}
      featureBlocks={[
        {
          image: "feature-mineurs.webp",
          imageAlt: "Cabinet Montagne — droit des mineurs à Dunkerque",
          title: "Comprendre pour agir : la spécificité du droit des mineurs",
          direction: "image-right",
          content: [
            "Le droit des mineurs n'est pas simplement une déclinaison du droit commun : c'est un domaine à part entière, avec ses propres juridictions, ses propres procédures et sa propre philosophie. Le Code de la justice pénale des mineurs, entré en vigueur en 2021, a profondément transformé la manière dont la justice traite les jeunes mis en cause.",
            "Cette spécificité exige un avocat formé à ces procédures, capable de communiquer avec le mineur, ses parents, les éducateurs et le juge. Maître Montagne prend le temps d'expliquer chaque étape, de rassurer la famille et de construire une défense adaptée à la réalité du dossier et à la personnalité du jeune.",
          ],
        },
      ]}
      relatedLinks={[
        {
          label: "Droit pénal",
          href: "/expertises/droit-penal",
          description: "Un mineur mis en cause dans une procédure pénale bénéficie des mêmes droits fondamentaux qu'un adulte. Le cabinet assure sa défense à chaque stade.",
        },
        {
          label: "Droit de la famille",
          href: "/expertises/droit-de-la-famille",
          description: "Les procédures impliquant des mineurs croisent souvent les questions d'autorité parentale et de garde. Une prise en charge globale est possible.",
        },
        {
          label: "Préjudice corporel",
          href: "/expertises/prejudice-corporel",
          description: "Un mineur victime de violence ou d'un accident a droit à une indemnisation complète. Le cabinet défend ses intérêts face aux assureurs et aux juridictions.",
        },
      ]}
    />
  );
}
