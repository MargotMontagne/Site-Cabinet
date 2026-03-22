import type { Metadata } from "next";
import DomainePage from "@/components/DomainePage";

export const metadata: Metadata = {
  title: "Avocat droit civil Dunkerque | Litiges et contrats | Maître Montagne",
  description:
    "Avocate en droit civil à Dunkerque. Litiges contractuels, troubles de voisinage, recouvrement de créances, responsabilité civile, litiges locatifs. Maître Margot Montagne. 07 44 78 77 18.",
  keywords: [
    "avocat droit civil Dunkerque",
    "avocat litige Dunkerque",
    "avocat contrat Dunkerque",
    "avocat recouvrement créances Dunkerque",
    "avocat voisinage Dunkerque",
    "avocat responsabilité civile Dunkerque",
    "avocat locataire propriétaire Dunkerque",
    "avocat injonction payer Dunkerque",
  ],
  alternates: {
    canonical: "https://avocat-montagne.fr/expertises/droit-civil",
  },
  openGraph: {
    title: "Avocat droit civil Dunkerque | Litiges et contrats | Maître Montagne",
    description: "Avocate en droit civil à Dunkerque. Litiges contractuels, voisinage, recouvrement de créances, responsabilité civile. Maître Margot Montagne. ☎ 07 44 78 77 18.",
    url: "https://avocat-montagne.fr/expertises/droit-civil",
    type: "website",
    locale: "fr_FR",
  },
};

export default function DroitCivilPage() {
  return (
    <DomainePage
      introLayout="full"
      whyChooseStyle="grid"
      image="Civil-hero.webp"
      canonicalUrl="https://avocat-montagne.fr/expertises/droit-civil"
      breadcrumbLabel="Droit civil"
      title="Avocat en droit civil à Dunkerque"
      subtitle="Litiges entre particuliers, problèmes de voisinage, contrats non respectés, créances impayées : le cabinet défend vos intérêts avec méthode devant les juridictions civiles de Dunkerque."
      h2Intro="Cabinet de droit civil à Dunkerque : litiges, contrats et recouvrement"
      h2Situations="Litiges civils pris en charge à Dunkerque"
      intro={[
        "Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient en droit civil pour défendre vos intérêts devant le Tribunal judiciaire de Dunkerque et l'ensemble des juridictions civiles du ressort de la Cour d'appel de Douai.",
        "Le droit civil régit les relations entre personnes privées au quotidien : contrats, responsabilité, propriété, voisinage. Lorsqu'un différend survient, une intervention rapide permet souvent de régler le litige à l'amiable. Si le dialogue est impossible, le cabinet engage les procédures judiciaires adaptées pour obtenir rapidement une décision exécutoire.",
      ]}
      profiles={[
        {
          icon: "shield",
          title: "Vous réclamez l'exécution d'un droit ou d'une créance",
          content: "Un contrat non respecté, une somme impayée, un préjudice subi : le cabinet vous accompagne pour obtenir gain de cause, par la négociation ou devant le tribunal.",
          bullets: [
            "Mise en demeure et négociation amiable",
            "Injonction de payer et référé-provision",
            "Action en responsabilité civile",
            "Recouvrement de créances et saisies",
          ],
        },
        {
          icon: "shield",
          title: "Vous faites l'objet d'une action en justice",
          content: "Assigné en justice, mis en cause pour un préjudice ou contesté dans vos droits, le cabinet analyse votre dossier et construit votre défense pour limiter ou écarter votre responsabilité.",
          bullets: [
            "Analyse du fondement juridique de l'action",
            "Contestation des demandes en justice",
            "Contre-expertise et demande reconventionnelle",
            "Représentation devant le tribunal judiciaire",
          ],
        },
      ]}
      situations={[
        {
          title: "Litiges contractuels",
          description: "Inexécution de contrat, résiliation abusive, contrats de vente, de prestation de service ou de bail. Défense de vos droits contractuels par la négociation ou le recours judiciaire.",
        },
        {
          title: "Troubles de voisinage",
          description: "Conflits de voisinage : bruit, empiètement, servitude, clôtures, arbres, vue. Résolution amiable ou judiciaire selon les situations et les enjeux.",
        },
        {
          title: "Responsabilité civile",
          description: "Engagement de la responsabilité d'un tiers qui vous a causé un préjudice, ou défense face à une action en responsabilité vous visant.",
        },
        {
          title: "Recouvrement de créances",
          description: "Recouvrement de sommes impayées par des particuliers : injonction de payer, référé-provision, saisies et exécution forcée.",
        },
        {
          title: "Litiges locatifs",
          description: "Conflits locataires et propriétaires : impayés de loyer, procédure d'expulsion, dépôt de garantie, charges, état des lieux litigieux.",
        },
        {
          title: "Dommages aux biens",
          description: "Indemnisation suite à des dommages causés par un tiers : dégâts des eaux, actes de vandalisme, malfaçons, accidents.",
        },
      ]}
      whyChoose={[
        { title: "On évalue avant d'agir", description: "Analyse préalable de votre dossier pour vous conseiller honnêtement sur vos chances et éviter des frais inutiles." },
        { title: "Régler sans aller au tribunal", description: "Quand c'est possible, une lettre de mise en demeure bien rédigée suffit à obtenir gain de cause rapidement." },
        { title: "Des procédures d'urgence si besoin", description: "Le référé permet d'obtenir une décision du juge en quelques semaines. Le cabinet y a recours quand la situation l'impose." },
        { title: "Connaissance du tribunal local", description: "Pratique régulière devant le Tribunal judiciaire de Dunkerque et connaissance des pratiques locales." },
        { title: "Pris en charge de bout en bout", description: "Du premier courrier jusqu'à l'exécution du jugement, le cabinet gère l'intégralité de la procédure." },
        { title: "Pas de surprise sur les honoraires", description: "Une convention d'honoraires claire est remise dès le départ. Vous savez ce que vous payez et pourquoi." },
      ]}
      faqItems={[
        {
          question: "Est-il obligatoire d'avoir un avocat pour aller au tribunal civil ?",
          answer: "Devant le tribunal judiciaire pour les litiges supérieurs à 10 000 euros, la représentation par avocat est obligatoire. En dessous, elle n'est pas obligatoire mais fortement conseillée : les règles de procédure sont complexes et une erreur peut vous faire perdre un litige pourtant bien fondé.",
        },
        {
          question: "Qu'est-ce qu'une injonction de payer ?",
          answer: "C'est une procédure rapide et peu coûteuse pour récupérer une somme d'argent certaine, liquide et exigible. Le juge rend une ordonnance sans audience contradictoire. Si le débiteur ne conteste pas dans le délai imparti, l'ordonnance devient exécutoire et permet de procéder à des saisies.",
        },
        {
          question: "Mon voisin empiète sur ma propriété, que faire ?",
          answer: "En premier lieu, une mise en demeure rédigée par un avocat permet souvent de régler rapidement le litige. Si le voisin refuse de coopérer, une action en justice peut être engagée pour obtenir la démolition, le déplacement de la construction ou des dommages-intérêts.",
        },
        {
          question: "Qu'est-ce qu'un référé et dans quel cas y recourir ?",
          answer: "Le référé est une procédure d'urgence devant le président du tribunal. Il permet d'obtenir une décision provisoire rapide (sous 15 jours à 1 mois) pour faire cesser un trouble manifestement illicite, obtenir une provision sur une créance non sérieusement contestable, ou ordonner une expertise.",
        },
        {
          question: "Combien de temps dure une procédure civile ?",
          answer: "Une procédure civile classique devant le tribunal judiciaire de Dunkerque dure en moyenne 12 à 18 mois. Le référé permet d'obtenir une décision provisoire en quelques semaines. La médiation judiciaire peut aboutir en 3 à 6 mois si les parties coopèrent.",
        },
        {
          question: "La médiation est-elle obligatoire avant d'aller au tribunal ?",
          answer: "Pour certains litiges inférieurs à 5 000 euros, une tentative de conciliation préalable est obligatoire depuis 2020. Pour les autres, elle n'est pas obligatoire mais peut être ordonnée par le juge. Le cabinet vous conseille sur l'opportunité d'une médiation selon votre dossier.",
        },
        {
          question: "Mon locataire ne paie plus son loyer, quelle est la procédure ?",
          answer: "La procédure commence par une mise en demeure formelle, puis un commandement de payer délivré par huissier. En l'absence de régularisation, une assignation devant le tribunal judiciaire est nécessaire pour obtenir la résiliation du bail et l'expulsion. Le cabinet gère l'ensemble de cette procédure.",
        },
      ]}
      situationsLayout="list"
      callout={{
        text: "Un litige non traité peut se prescrire. Vos droits ont une durée de vie : agissez sans attendre.",
        cta: "Consulter le cabinet",
      }}
      calloutPosition="after-intro"
      featureBlocks={[
        {
          image: "civil-feature.webp",
          imageAlt: "Cabinet Montagne — droit civil à Dunkerque",
          title: "Faire valoir vos droits devant le Tribunal judiciaire de Dunkerque",
          direction: "image-right",
          content: [
            "En matière civile, la juridiction de droit commun est le Tribunal judiciaire de Dunkerque. Qu'il s'agisse d'un litige contractuel, d'un différend successoral ou d'un problème de voisinage, la procédure civile impose des règles strictes de forme et de délai que seul un professionnel maîtrise pleinement.",
            "Maître Montagne vous accompagne depuis la mise en demeure jusqu'au jugement, en passant par les tentatives de conciliation et les procédures d'urgence (référé). L'objectif : obtenir l'exécution de vos droits, ou vous défendre efficacement lorsque vous faites l'objet d'une action injustifiée.",
          ],
        },
      ]}
      relatedLinks={[
        {
          label: "Préjudice corporel",
          href: "/expertises/prejudice-corporel",
          description: "Un litige civil peut impliquer des dommages corporels. Le cabinet intervient sur les deux volets pour une prise en charge globale de votre préjudice.",
        },
        {
          label: "Droit de la famille",
          href: "/expertises/droit-de-la-famille",
          description: "Successions, partages entre héritiers et litiges patrimoniaux familiaux : le cabinet vous accompagne dans ces situations souvent délicates.",
        },
      ]}
    />
  );
}
