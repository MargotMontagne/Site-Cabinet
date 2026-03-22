import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat accident Dunkerque | Indemnisation préjudice corporel | Maître Montagne",
  description:
    "Avocate en réparation du préjudice corporel à Dunkerque. Accident de la route, accident du travail, agression, erreur médicale. Face aux assureurs. Maître Margot Montagne. 07 44 78 77 18.",
  keywords: [
    "avocat préjudice corporel Dunkerque",
    "avocat accident Dunkerque",
    "avocat indemnisation Dunkerque",
    "avocat accident de la route Dunkerque",
    "avocat victime Dunkerque",
    "avocat accident travail Dunkerque",
    "avocat expertise médicale Dunkerque",
    "avocat assurance Dunkerque",
  ],
  alternates: {
    canonical: "https://avocat-montagne.fr/expertises/prejudice-corporel",
  },
  openGraph: {
    title: "Avocat accident Dunkerque | Indemnisation préjudice corporel | Maître Montagne",
    description: "Avocate en réparation du préjudice corporel à Dunkerque. Accident, agression, erreur médicale. Face aux assureurs. Maître Margot Montagne. ☎ 07 44 78 77 18.",
    url: "https://avocat-montagne.fr/expertises/prejudice-corporel",
    type: "website",
    locale: "fr_FR",
  },
};

export default function PrejudiceCorpoelPage() {
  return (
    <DomainePage
      introLayout="full"
      whyChooseStyle="grid"
      image="prejudice-hero.webp"
      canonicalUrl="https://avocat-montagne.fr/expertises/prejudice-corporel"
      breadcrumbLabel="Préjudice corporel"
      title="Avocat en préjudice corporel à Dunkerque"
      subtitle="Victime d'un accident ou d'une agression, vous méritez une indemnisation juste et complète. Maître Montagne se bat pour que chaque poste de préjudice soit reconnu et intégralement réparé."
      h2Intro="Cabinet d'indemnisation à Dunkerque : face aux assureurs, pour vous"
      h2Situations="Accidents et préjudices pris en charge à Dunkerque"
      intro={[
        "Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, défend les victimes d'accidents et d'agressions face aux compagnies d'assurance. Maîtrisant à la fois le droit du dommage corporel et le droit des assurances, elle connaît les méthodes employées par les assureurs pour minimiser les indemnisations — et sait comment les contrer.",
        "La nomenclature Dintilhac, référentiel exhaustif de l'ensemble des postes de préjudice indemnisables, est au coeur de chaque dossier : dépenses de santé actuelles et futures, perte de revenus, tierce personne, préjudice esthétique, d'agrément, sexuel, souffrances endurées. Aucun poste ne doit être négligé, aucune offre ne doit être acceptée sans analyse.",
      ]}
      profiles={[
        {
          icon: "heart",
          title: "Un assureur vous a contacté ou vous a proposé une offre",
          content: "Ne signez rien sans consulter un avocat. Les premières offres des assureurs sont systématiquement inférieures à ce à quoi vous avez droit. Le cabinet évalue votre préjudice réel et négocie une indemnisation juste.",
          bullets: [
            "Analyse de l'offre d'indemnisation reçue",
            "Contre-expertise avec un médecin-conseil indépendant",
            "Négociation avec l'assureur sur la base de la nomenclature Dintilhac",
            "Recours judiciaire si l'assureur maintient une offre insuffisante",
          ],
        },
        {
          icon: "shield",
          title: "Vous n'avez pas encore été indemnisé",
          content: "Après un accident, il est essentiel d'agir rapidement pour préserver vos droits, documenter vos préjudices et éviter que des délais de prescription ne viennent bloquer votre demande.",
          bullets: [
            "Identification du responsable et de son assureur",
            "Constitution du dossier médical et des preuves",
            "Assistance lors des expertises médicales ordonnées",
            "Saisine de la CIVI, de la CRCI ou des juridictions compétentes",
          ],
        },
      ]}
      callout={{
        text: "Ne signez aucune offre d'assureur sans consulter un avocat. Une signature, c'est irréversible.",
        cta: "Faire évaluer mon dossier",
      }}
      calloutPosition="after-intro"
      featureBlocks={[
        {
          image: "prejudice-feature.webp",
          imageAlt: "Cabinet Montagne — indemnisation préjudice corporel Dunkerque",
          title: "Face aux assureurs : ne négociez pas seul",
          direction: "image-right",
          content: [
            "Les compagnies d'assurance disposent de médecins-conseils salariés, d'experts en évaluation du dommage corporel et de juristes spécialisés — tous formés pour limiter le montant des indemnisations. Face à eux, une victime qui négocie seule est systématiquement désavantagée, souvent sans même s'en rendre compte.",
            "Maître Montagne rétablit l'équilibre. Présente lors des expertises médicales, elle veille à ce que chaque séquelle soit correctement documentée. Lors des négociations, elle s'appuie sur la nomenclature Dintilhac et, si nécessaire, sur l'avis d'un médecin-conseil indépendant pour contester une évaluation insuffisante. L'objectif est toujours une réparation intégrale, sans compromis.",
          ],
        },
      ]}
      situations={[
        {
          title: "Accident de la route",
          description: "Victime d'un accident de voiture, de moto, de vélo ou piéton renversé. Indemnisation par l'assurance du responsable ou le FGAO en cas de conducteur non assuré.",
        },
        {
          title: "Accident du travail",
          description: "Blessures survenues sur le lieu de travail ou lors du trajet. Reconnaissance de la faute inexcusable de l'employeur pour obtenir une indemnisation complémentaire.",
        },
        {
          title: "Agression et violence",
          description: "Indemnisation des victimes d'agressions physiques, y compris devant la Commission d'Indemnisation des Victimes d'Infractions (CIVI) en cas d'auteur insolvable.",
        },
        {
          title: "Erreur médicale",
          description: "Préjudice causé par une faute médicale, un défaut d'information ou une erreur de diagnostic. Saisine de la commission de conciliation (CRCI) ou action judiciaire.",
        },
        {
          title: "Assistance lors d'expertises médicales",
          description: "Présence et conseils lors des expertises ordonnées par les assureurs ou le tribunal pour que tous vos préjudices soient correctement évalués et aucun oublié.",
        },
        {
          title: "Accident domestique",
          description: "Blessures survenues à domicile ou dans un lieu tiers. Engagement de la responsabilité du gardien du lieu, du produit défectueux ou de l'auteur du dommage.",
        },
      ]}
      whyChoose={[
        { title: "Vous n'êtes plus seul face à l'assureur", description: "Les assureurs ont des équipes entières pour limiter les indemnisations. Maître Montagne connaît leurs méthodes et sait les contrer." },
        { title: "Aucun préjudice oublié", description: "Chaque poste est passé en revue : perte de revenus, tierce personne, préjudice esthétique, d'agrément, sexuel — rien n'est laissé de côté." },
        { title: "À vos côtés lors des expertises", description: "Présence lors des expertises médicales pour que vos séquelles soient correctement documentées et qu'aucune ne soit minimisée." },
        { title: "Un avis médical indépendant", description: "Si l'évaluation de l'assureur est insuffisante, un médecin-conseil indépendant est missionné pour la contester chiffres à l'appui." },
        { title: "Un seul interlocuteur pour tout", description: "Le cabinet gère les assureurs, les organismes sociaux et les juridictions. Vous n'avez qu'à vous concentrer sur votre rétablissement." },
        { title: "Agir vite pour protéger vos droits", description: "Les délais de prescription sont courts. Une intervention rapide permet de tout documenter avant que vos droits ne soient compromis." },
      ]}
      faqItems={[
        {
          question: "Quels préjudices peuvent être indemnisés ?",
          answer: "De nombreux postes sont indemnisables selon la nomenclature Dintilhac : dépenses de santé actuelles et futures, perte de revenus, frais de logement adapté, tierce personne, souffrances endurées, préjudice esthétique, préjudice d'agrément (impossibilité de pratiquer un sport ou loisir), préjudice sexuel, préjudice moral. Le cabinet veille à ce qu'aucun poste ne soit oublié.",
        },
        {
          question: "L'assurance m'a proposé une offre d'indemnisation, dois-je l'accepter ?",
          answer: "Non, surtout sans consulter un avocat. Les premières offres des assureurs sont presque systématiquement inférieures à ce à quoi vous avez réellement droit. Une fois l'accord signé, il est très difficile de revenir dessus. Le cabinet évalue si l'offre est juste et négocie une meilleure indemnisation.",
        },
        {
          question: "Quand faut-il contacter un avocat après un accident ?",
          answer: "Le plus tôt possible. Certains délais de prescription sont courts (2 ans pour les accidents de la route, 10 ans pour les préjudices corporels en général). De plus, une intervention précoce permet de mieux documenter votre préjudice, notamment les séquelles médicales évolutives.",
        },
        {
          question: "L'avocat est-il pris en charge par mon assurance ?",
          answer: "Si vous disposez d'une protection juridique dans votre contrat d'assurance habitation, auto ou santé, elle peut prendre en charge tout ou partie des honoraires d'avocat. Vérifiez vos contrats avant de renoncer à vous faire assister.",
        },
        {
          question: "Quels sont les délais de prescription pour réclamer une indemnisation ?",
          answer: "Les délais varient selon l'origine du préjudice : 2 ans pour les accidents de la route (loi Badinter), 10 ans à compter de la consolidation pour les autres préjudices corporels, 3 ans devant la CIVI pour les victimes d'infraction. Ces délais peuvent être suspendus dans certains cas. N'attendez pas.",
        },
        {
          question: "Comment se déroule une expertise médicale et pourquoi faut-il être accompagné ?",
          answer: "L'expertise médicale, ordonnée par l'assureur ou le tribunal, évalue l'étendue de vos séquelles et fixe le taux de déficit fonctionnel. Elle est déterminante pour le montant de l'indemnisation. Sans avocat ni médecin-conseil, des préjudices peuvent être sous-évalués ou oubliés. La présence du cabinet à vos côtés garantit que tous vos préjudices sont pris en compte.",
        },
        {
          question: "Qu'est-ce que la CIVI et quand y recourir ?",
          answer: "La Commission d'Indemnisation des Victimes d'Infractions (CIVI) permet aux victimes d'infractions pénales de demander une indemnisation à l'État lorsque l'auteur est insolvable, inconnu ou non assuré. Elle intervient pour les préjudices graves résultant d'agressions, viols, homicides involontaires et autres infractions.",
        },
      ]}
      relatedLinks={[
        {
          label: "Droit pénal",
          href: "/expertises/droit-penal",
          description: "Votre préjudice corporel est la conséquence d'une infraction pénale ? Le cabinet vous représente à la fois pour la défense pénale et l'indemnisation.",
        },
        {
          label: "Droit routier",
          href: "/expertises/droit-routier",
          description: "Accident de la route impliquant un conducteur fautif : le cabinet intervient sur les deux volets, pénal et indemnitaire.",
        },
        {
          label: "Droit de la famille",
          href: "/expertises/droit-de-la-famille",
          description: "Violences conjugales, accidents impliquant un enfant : certains préjudices corporels naissent dans le cadre familial et exigent une prise en charge globale.",
        },
      ]}
    />
  );
}
