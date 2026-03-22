import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat divorce Dunkerque | Droit de la famille | Maître Montagne",
  description:
    "Avocate en droit de la famille à Dunkerque. Divorce, garde des enfants, pension alimentaire, séparation, violence conjugale. Maître Margot Montagne. 07 44 78 77 18.",
  keywords: [
    "avocat divorce Dunkerque",
    "avocat droit de la famille Dunkerque",
    "avocat garde enfants Dunkerque",
    "avocat séparation Dunkerque",
    "avocat pension alimentaire Dunkerque",
    "avocat violence conjugale Dunkerque",
    "avocat juge affaires familiales Dunkerque",
    "avocat autorité parentale Dunkerque",
  ],
  alternates: {
    canonical: "https://www.avocat-montagne.fr/domaines/droit-de-la-famille",
  },
  openGraph: {
    title: "Avocat divorce Dunkerque | Droit de la famille | Maître Montagne",
    description: "Avocate en droit de la famille à Dunkerque. Divorce, garde des enfants, pension alimentaire, violence conjugale. Maître Margot Montagne. ☎ 07 44 78 77 18.",
    url: "https://www.avocat-montagne.fr/domaines/droit-de-la-famille",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DroitFamillePage() {
  return (
    <DomainePage
      introLayout="full"
      whyChooseStyle="grid"
      image="family-hero.webp"
      imagePosition="center 45%"
      canonicalUrl="https://www.avocat-montagne.fr/domaines/droit-de-la-famille"
      breadcrumbLabel="Droit de la famille"
      title="Avocat en droit de la famille à Dunkerque"
      subtitle="Séparation, divorce, garde des enfants : dans les moments les plus douloureux de la vie personnelle, Maître Montagne vous accompagne avec rigueur et humanité."
      h2Intro="Cabinet familialiste à Dunkerque : séparation, divorce et protection des enfants"
      h2Situations="Situations en droit de la famille à Dunkerque"
      intro={[
        "Le droit de la famille touche à ce que vous avez de plus précieux. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, accompagne les particuliers à chaque étape des procédures familiales devant le Juge aux affaires familiales et le Tribunal judiciaire de Dunkerque.",
        "Chaque situation est abordée avec rigueur et humanité : en privilégiant les accords amiables quand ils servent vos intérêts, et en défendant fermement vos droits devant le juge quand cela s'impose. L'objectif est toujours de protéger votre avenir et celui de vos enfants.",
      ]}
      profiles={[
        {
          icon: "shield",
          title: "Vous traversez une séparation ou un divorce",
          content: "Maître Montagne vous accompagne pour organiser votre séparation dans les meilleures conditions : partage des biens, logement, prestation compensatoire et gestion des aspects financiers.",
          bullets: [
            "Divorce par consentement mutuel ou contentieux",
            "Dissolution de PACS et séparation de concubins",
            "Partage des biens et liquidation du régime matrimonial",
            "Prestation compensatoire et pension alimentaire entre époux",
          ],
        },
        {
          icon: "heart",
          title: "Vous avez un conflit concernant vos enfants",
          content: "La protection de l'intérêt supérieur de vos enfants est au coeur de chaque dossier. Le cabinet vous représente pour fixer ou modifier les conditions d'exercice de l'autorité parentale.",
          bullets: [
            "Résidence habituelle et garde alternée",
            "Droit de visite et d'hébergement",
            "Révision de la contribution à l'entretien des enfants",
            "Mesures d'urgence en cas de danger ou de non-présentation d'enfant",
          ],
        },
      ]}
      situations={[
        {
          title: "Divorce",
          description: "Divorce par consentement mutuel ou contentieux. Gestion des conséquences : logement, prestation compensatoire, liquidation du régime matrimonial.",
        },
        {
          title: "Garde des enfants",
          description: "Résidence habituelle, garde alternée, droit de visite et d'hébergement. L'intérêt supérieur de vos enfants et vos droits parentaux défendus.",
        },
        {
          title: "Pension alimentaire",
          description: "Fixation, révision ou suppression d'une pension alimentaire ou d'une contribution à l'entretien des enfants.",
        },
        {
          title: "Filiation",
          description: "Reconnaissance d'enfant, établissement ou contestation de la filiation légitime, biologique ou adoptive devant le tribunal judiciaire.",
        },
        {
          title: "Partage des biens",
          description: "Liquidation du régime matrimonial, partage du patrimoine commun, régime légal ou contrat de mariage, biens acquis en concubinage ou sous PACS.",
        },
        {
          title: "Violence intrafamiliale",
          description: "Ordonnance de protection, mesures d'urgence en cas de violence conjugale ou intrafamiliale. Intervention rapide et confidentielle.",
        },
      ]}
      featureBlocks={[
        {
          image: "family-feature.webp",
          imagePosition: "center bottom",
          imageAlt: "Cabinet Montagne — droit de la famille à Dunkerque",
          title: "Quand la rupture touche l'essentiel : vos enfants et votre patrimoine",
          direction: "image-right",
          content: [
            "Une séparation engage simultanément deux dimensions qui se croisent et se compliquent mutuellement : le devenir de vos enfants et l'organisation de votre patrimoine. Maître Montagne aborde chaque dossier dans cette globalité, pour que les décisions prises sur la garde ou la résidence ne compromettent pas votre situation financière, et inversement.",
            "Devant le Juge aux affaires familiales du Tribunal judiciaire de Dunkerque, la défense de vos intérêts passe par une préparation rigoureuse : analyse du régime matrimonial, évaluation des actifs communs, construction d'un argumentaire clair sur l'organisation de la vie des enfants. L'objectif est toujours d'obtenir une issue qui protège votre avenir à long terme.",
          ],
        },
      ]}
      whyChoose={[
        { title: "Ferme sur le droit, attentif à l'humain", description: "Une séparation n'est jamais qu'un dossier juridique. Chaque situation est abordée avec rigueur et sensibilité." },
        { title: "L'accord amiable quand c'est possible", description: "Un accord négocié est souvent plus rapide, moins coûteux et préserve les relations, notamment pour les enfants." },
        { title: "Vos enfants d'abord", description: "Défense de vos droits parentaux à chaque étape, avec l'intérêt supérieur de l'enfant comme boussole constante." },
        { title: "Connaissance du tribunal local", description: "Pratique régulière devant le Juge aux affaires familiales et le Tribunal judiciaire de Dunkerque." },
        { title: "Vous êtes toujours informé", description: "Communication régulière sur l'avancement du dossier, sans que vous ayez à relancer pour savoir où en est votre affaire." },
        { title: "Disponible en cas d'urgence", description: "Ordonnances de protection, mesures conservatoires : le cabinet intervient rapidement quand la situation l'exige." },
      ]}
      faqItems={[
        {
          question: "Quelle est la différence entre divorce par consentement mutuel et divorce contentieux ?",
          answer: "Le divorce par consentement mutuel est le plus rapide : les deux époux s'accordent sur toutes les conséquences (biens, enfants, pension). Il se fait par acte d'avocat sans audience. Le divorce contentieux intervient en cas de désaccord et nécessite l'intervention du juge aux affaires familiales.",
        },
        {
          question: "Comment est fixée la garde des enfants ?",
          answer: "La résidence peut être fixée chez l'un des parents ou en alternance. Le juge décide en tenant compte de l'intérêt de l'enfant, de ses habitudes de vie, de la disponibilité de chaque parent et de leur capacité à coopérer. Un accord entre parents est toujours privilégié.",
        },
        {
          question: "Peut-on réviser une pension alimentaire ?",
          answer: "Oui, à tout moment en cas de changement de situation significatif : perte d'emploi, augmentation des revenus, changement de résidence de l'enfant, nouvelle charge de famille. Le cabinet saisit le juge aux affaires familiales pour obtenir la révision.",
        },
        {
          question: "Que faire en cas de violence conjugale ?",
          answer: "Contactez le cabinet en urgence. Il est possible d'obtenir une ordonnance de protection qui permet d'éloigner le conjoint violent et de prendre des mesures d'urgence pour les enfants. Cette procédure peut être engagée très rapidement.",
        },
        {
          question: "Quel est le délai moyen d'un divorce ?",
          answer: "Un divorce par consentement mutuel prend généralement 2 à 4 mois. Un divorce contentieux est plus long : 12 à 24 mois en moyenne selon la complexité du dossier et l'engorgement des juridictions. Une bonne préparation du dossier réduit les délais.",
        },
        {
          question: "Mon ex-conjoint ne respecte pas le jugement de garde, que faire ?",
          answer: "Le non-respect d'une décision de justice est sanctionnable pénalement. Le cabinet peut engager une procédure de non-représentation d'enfant ou saisir en urgence le juge aux affaires familiales pour faire respecter vos droits.",
        },
        {
          question: "Comment est calculée la prestation compensatoire ?",
          answer: "La prestation compensatoire est fixée en fonction de la disparité créée par le divorce dans les conditions de vie respectives des époux. Le juge tient compte des revenus, du patrimoine, de la durée du mariage, de l'âge et de l'état de santé de chacun.",
        },
        {
          question: "L'avocat est-il obligatoire pour un divorce ?",
          answer: "Oui, dans tous les cas. Chaque époux doit être représenté par son propre avocat, y compris pour un divorce par consentement mutuel. C'est une garantie que chacun a bien compris ses droits et les conséquences de l'accord.",
        },
      ]}
      relatedLinks={[
        {
          label: "Droit des mineurs",
          href: "/domaines/droit-des-mineurs",
          description: "Quand une séparation implique des procédures concernant vos enfants devant le juge des enfants, le cabinet assure un accompagnement global.",
        },
        {
          label: "Droit civil",
          href: "/domaines/droit-civil",
          description: "Les successions et partages entre héritiers relèvent du droit civil. Le cabinet vous accompagne aussi dans ces démarches patrimoniales.",
        },
        {
          label: "Préjudice corporel",
          href: "/domaines/prejudice-corporel",
          description: "Violences conjugales ou accidents impliquant un membre de la famille : lorsqu'une situation familiale engendre un préjudice corporel, le cabinet assure les deux volets.",
        },
      ]}
    />
  );
}
