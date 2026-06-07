import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat droit routier Dunkerque — Permis de conduire",
  description:
    "Avocate en droit routier à Dunkerque. Retrait de permis, alcoolémie, excès de vitesse, suspension administrative. Maître Margot Montagne défend votre droit à conduire. 07 44 78 77 18.",
  keywords: [
    "avocat droit routier Dunkerque",
    "avocat permis de conduire Dunkerque",
    "avocat alcoolémie Dunkerque",
    "avocat retrait permis Dunkerque",
    "avocat excès de vitesse Dunkerque",
    "avocat suspension permis Dunkerque",
    "avocat infractions routières Dunkerque",
    "avocat tribunal correctionnel routier Dunkerque",
  ],
  alternates: {
    canonical: "https://avocat-montagne.fr/expertises/droit-routier",
  },
  openGraph: {
    title: "Avocat droit routier Dunkerque — Permis de conduire",
    description: "Avocate en droit routier à Dunkerque. Retrait de permis, alcoolémie, excès de vitesse, suspension. Maître Margot Montagne. ☎ 07 44 78 77 18.",
    url: "https://avocat-montagne.fr/expertises/droit-routier",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DroitRoutierPage() {
  return (
    <DomainePage
      introLayout="sidebar"
      image="Routier-hero.webp"
      canonicalUrl="https://avocat-montagne.fr/expertises/droit-routier"
      breadcrumbLabel="Droit routier"
      title="Avocat en droit routier à Dunkerque"
      subtitle="Votre permis de conduire est votre liberté. Face à une infraction routière, un retrait ou une suspension de permis, Maître Montagne défend votre droit à la mobilité."
      h2Intro="Cabinet spécialisé en infractions routières à Dunkerque : permis et défense pénale"
      h2Situations="Infractions routières prises en charge à Dunkerque"
      intro={[
        "Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient en droit routier pour défendre votre permis face aux sanctions administratives et pénales. Le cabinet couvre l'ensemble du ressort de la Cour d'appel de Douai, incluant les juridictions du Nord (59) et du Pas-de-Calais (62).",
        "Chaque dossier est analysé avec rigueur : régularité des procédures de contrôle, validité des éthylomètres et des cinémomètres, circonstances de l'infraction. Un vice de forme peut invalider une poursuite. Cette exigence technique, combinée à une connaissance approfondie des pratiques du Parquet de Dunkerque, fait la différence.",
      ]}
      whyChooseStyle="list"
      profiles={[
        {
          icon: "shield",
          title: "Votre permis est suspendu ou retiré",
          content: "Une suspension ou un retrait de permis peut survenir immédiatement après un contrôle, sans attendre le jugement. Maître Montagne intervient en urgence pour contester la mesure et limiter la période sans véhicule.",
          bullets: [
            "Rétention et suspension administrative du permis",
            "Recours gracieux devant la Préfecture",
            "Contenu de la procédure et régularité des contrôles",
            "Aménagement judiciaire en cas de nécessité professionnelle",
          ],
        },
        {
          icon: "shield",
          title: "Vous êtes convoqué au tribunal correctionnel",
          content: "Alcoolémie, stupéfiants, grand excès de vitesse, délit de fuite : ces infractions constituent des délits passibles du tribunal correctionnel. Une défense préparée en amont change radicalement le résultat.",
          bullets: [
            "Analyse de la régularité de la procédure pénale",
            "Stratégie de défense adaptée aux faits et au profil",
            "Négociation avec le Parquet (alternatives aux poursuites)",
            "Représentation à l'audience correctionnelle",
          ],
        },
      ]}
      situations={[
        {
          title: "Alcoolémie et stupéfiants au volant",
          description: "Défense pour conduite sous l'empire de l'alcool ou de stupéfiants : analyse de la régularité du contrôle, validité des mesures, représentation au tribunal correctionnel.",
        },
        {
          title: "Excès de vitesse grave",
          description: "Contestation des grands excès de vitesse, examen de l'homologation du cinémomètre et de la signalisation, recours contre la rétention immédiate du permis.",
        },
        {
          title: "Retrait et suspension de permis",
          description: "Contestation d'une décision administrative de retrait ou de suspension. Recours gracieux devant la Préfecture, recours contentieux, aménagement pour raisons professionnelles.",
        },
        {
          title: "Contester une infraction ou contravention",
          description: "Contestation d'un PV radar, d'une amende forfaitaire ou d'une infraction au code de la route. Identification du conducteur, vice de procédure, requête en exonération.",
        },
        {
          title: "Victime d'un accident de la route",
          description: "Indemnisation des dommages matériels et corporels subis lors d'un accident. Mise en cause du responsable, relation avec les assureurs, saisine du FGAO si nécessaire.",
        },
        {
          title: "Homicide et blessures involontaires",
          description: "Défense en cas d'accident grave : enjeux pénaux, civils et assurantiels. Analyse des circonstances atténuantes et des vices de procédure pour construire la meilleure défense.",
        },
      ]}
      callout={{
        text: "Votre permis, c'est votre liberté de travailler et de vous déplacer. Chaque heure compte.",
        cta: "Appeler en urgence",
      }}
      calloutPosition="after-profiles"
      featureBlocks={[
        {
          image: "routier-feature.webp",
          imageAlt: "Cabinet Montagne — droit routier à Dunkerque",
          title: "La régularité de la procédure : votre premier levier de défense",
          direction: "image-left",
          content: [
            "Avant même de plaider sur le fond, la défense en droit routier commence par un examen minutieux de la procédure : le contrôle d'alcoolémie a-t-il été effectué selon les règles ? L'éthylomètre était-il correctement homologué et entretenu ? Le radar était-il signalisé ? Le conducteur a-t-il été correctement identifié ? Un vice de forme à n'importe quelle étape peut entraîner la nullité de la procédure.",
            "C'est cette rigueur technique, combinée à une connaissance approfondie des pratiques du Parquet et du Tribunal correctionnel de Dunkerque, qui permet d'obtenir des résultats que l'on n'obtiendrait pas sans avocat. Chaque dossier est analysé sous cet angle avant toute autre démarche.",
          ],
        },
      ]}
      whyChoose={[
        "Analyse systématique de la régularité des procédures : éthylomètre, radar, dépistage stupéfiants — un vice de forme peut invalider toute la poursuite.",
        "Intervention en urgence dès la rétention du permis pour engager les recours administratifs sans délai.",
        "Connaissance approfondie des pratiques du Parquet de Dunkerque et des habitudes des juridictions locales.",
        "Négociation avec le Parquet pour obtenir des alternatives aux poursuites ou des aménagements de peine.",
        "Accompagnement humain : perdre son permis peut signifier perdre son emploi. Chaque dossier est traité avec cette réalité en tête.",
        "Conseil sur l'ensemble des recours disponibles, administratifs et judiciaires, pour maximiser vos chances.",
      ]}
      faqItems={[
        {
          question: "Mon permis a été suspendu immédiatement après un contrôle, que faire ?",
          answer: "Contactez le cabinet sans attendre. Dès la rétention du permis, des recours sont possibles. La régularité du contrôle et de la procédure doit être vérifiée immédiatement. Chaque jour compte pour limiter la période sans véhicule.",
        },
        {
          question: "Peut-on contester un radar automatique ?",
          answer: "Oui. Plusieurs motifs permettent de contester : mauvaise identification du conducteur, défaut de signalisation, erreur sur la plaque, doute sur l'homologation du radar. Chaque situation mérite un examen attentif du dossier avant toute décision.",
        },
        {
          question: "Quelle différence entre suspension administrative et judiciaire ?",
          answer: "La suspension administrative est prononcée immédiatement par la Préfecture après un contrôle (alcool, stupéfiants, grand excès). La suspension judiciaire est prononcée par le tribunal correctionnel. Elles peuvent se cumuler, mais la durée de la suspension administrative s'impute sur la judiciaire.",
        },
        {
          question: "Que risque-t-on si l'on conduit pendant une suspension de permis ?",
          answer: "La conduite malgré suspension est un délit pénal passible de 2 ans d'emprisonnement et 4 500 euros d'amende, avec annulation judiciaire du permis et interdiction de repasser le permis pendant 3 ans. C'est une infraction sévèrement sanctionnée.",
        },
        {
          question: "Que risque-t-on en cas de conduite sans permis ?",
          answer: "La conduite sans permis est un délit passible d'1 an d'emprisonnement et 15 000 euros d'amende, avec saisie et confiscation possible du véhicule. Des peines complémentaires s'ajoutent souvent. Une défense préparée est indispensable.",
        },
        {
          question: "Comment récupérer des points après une infraction ?",
          answer: "Les points se récupèrent de deux façons : le temps (récupération automatique après 6 mois sans infraction pour certains retraits, ou 2 ans pour d'autres) et les stages volontaires de sensibilisation, qui permettent de récupérer jusqu'à 4 points par période de 2 ans.",
        },
        {
          question: "Peut-on bénéficier d'un permis blanc ?",
          answer: "Le permis blanc (autorisation de conduire pendant la suspension pour raisons professionnelles) n'existe plus depuis 2011 pour les suspensions judiciaires. Une exception subsiste pour les suspensions administratives dans des cas très précis. Chaque situation doit être évaluée individuellement.",
        },
        {
          question: "Un avocat peut-il vraiment changer le résultat d'un dossier routier ?",
          answer: "Oui, significativement. Un vice de procédure peut entraîner la nullité de la poursuite. Une bonne connaissance des pratiques locales permet de négocier avec le Parquet. La préparation de l'audience change souvent le quantum de la peine ou la durée de suspension.",
        },
      ]}
      relatedLinks={[
        {
          label: "Droit pénal",
          href: "/expertises/droit-penal",
          description: "Alcoolémie et stupéfiants au volant sont des infractions pénales. Le cabinet assure votre défense dès la garde à vue jusqu'à l'audience correctionnelle.",
        },
        {
          label: "Préjudice corporel",
          href: "/expertises/prejudice-corporel",
          description: "Victime d'un accident de la route avec blessures ? Maître Montagne vous accompagne pour obtenir la réparation intégrale de votre préjudice.",
        },
      ]}
    />
  );
}
