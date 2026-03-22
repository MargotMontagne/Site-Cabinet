export interface GlossaireItem {
  terme: string;
  definition: string;
  href: string;
  domaine: string;
}

export const glossaire: GlossaireItem[] = [
  // ── A ──
  {
    terme: "Acquittement",
    definition:
      "Décision rendue par une cour d'assises qui reconnaît l'innocence d'un accusé poursuivi pour crime. À la différence de la relaxe (prononcée par un tribunal correctionnel), l'acquittement intervient après un procès criminel avec jury populaire. L'accusé acquitté ne peut plus être jugé pour les mêmes faits : c'est le principe de l'autorité de la chose jugée.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "AIPP (Atteinte à l'Intégrité Physique et Psychique)",
    definition:
      "Taux médical exprimé en pourcentage qui mesure la réduction des capacités physiques ou psychiques d'une victime après consolidation de son état de santé. Évalué par un médecin-expert, ce taux sert de base au calcul de l'indemnisation du déficit fonctionnel permanent. Plus le taux est élevé, plus l'indemnisation est importante. Il est essentiel d'être assisté d'un avocat lors de l'expertise pour contester un taux sous-évalué.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Aide juridictionnelle",
    definition:
      "Dispositif permettant à toute personne dont les ressources sont insuffisantes de bénéficier de la prise en charge totale ou partielle de ses frais d'avocat par l'État. Elle est accordée sous conditions de ressources après examen d'un dossier Cerfa. L'aide totale couvre 100 % des honoraires ; l'aide partielle laisse une fraction à la charge du justiciable. Elle est cumulable avec une protection juridique d'assurance.",
    href: "/honoraires",
    domaine: "Honoraires",
  },
  {
    terme: "Assignation",
    definition:
      "Acte de procédure rédigé par un avocat et remis par un commissaire de justice (ex-huissier) à la partie adverse pour la convoquer devant un tribunal. L'assignation expose les faits, les prétentions du demandeur et les fondements juridiques de sa demande. Elle marque le début officiel d'une procédure judiciaire contentieuse et fixe la date de l'audience.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Assistance éducative",
    definition:
      "Procédure judiciaire déclenchée par le juge des enfants lorsqu'un mineur est en danger dans sa famille (maltraitance, carence éducative, mise en danger). Elle peut aboutir à des mesures de soutien à domicile ou à un placement de l'enfant auprès de l'ASE (Aide Sociale à l'Enfance). Les parents conservent l'autorité parentale mais voient leur exercice encadré. L'avocat peut intervenir pour défendre les parents ou le mineur.",
    href: "/domaines/droit-des-mineurs",
    domaine: "Mineurs",
  },
  {
    terme: "Audition libre",
    definition:
      "Convocation par la police ou la gendarmerie sans placement en garde à vue. La personne entendue n'est pas privée de liberté et peut quitter les locaux à tout moment. Elle doit cependant être informée qu'elle peut se faire assister d'un avocat et qu'elle a le droit de se taire. L'audition libre ne doit pas être confondue avec une simple formalité : les déclarations faites peuvent être utilisées contre vous.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Autorité parentale",
    definition:
      "Ensemble de droits et devoirs exercés par les parents sur la personne et les biens de leur enfant mineur : éducation, santé, logement, scolarité. En cas de séparation, elle est en principe exercée conjointement par les deux parents, sauf décision contraire du JAF. Les désaccords sur son exercice (changement d'école, opération chirurgicale) relèvent du juge aux affaires familiales.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },

  // ── B ──
  {
    terme: "Bracelet électronique",
    definition:
      "Dispositif de surveillance permettant d'exécuter une peine d'emprisonnement à domicile plutôt qu'en détention. Aussi appelé placement sous surveillance électronique (PSE), il est décidé par le juge d'application des peines. Le condamné doit rester à son domicile aux horaires fixés par le juge, sous peine de révocation et d'incarcération immédiate. Il peut être accordé dès la condamnation ou en cours de peine.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── C ──
  {
    terme: "Classement sans suite",
    definition:
      "Décision du procureur de la République de ne pas engager de poursuites pénales, faute de preuves suffisantes, d'auteur identifié ou d'intérêt à agir. Ce n'est pas un jugement : la personne mise en cause n'est pas déclarée innocente. La victime peut contester cette décision en saisissant directement le juge d'instruction ou en citant l'auteur présumé devant le tribunal correctionnel.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Commissaire de justice",
    definition:
      "Officier ministériel issu de la fusion (2022) des huissiers de justice et des commissaires-priseurs judiciaires. Il est chargé de signifier les actes de procédure (assignations, jugements), d'exécuter les décisions de justice (saisies, expulsions) et de constater des faits. Ses actes ont une force probante particulière reconnue par les tribunaux.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Comparution immédiate",
    definition:
      "Procédure permettant de juger un prévenu le jour même de sa garde à vue ou dans les jours suivants, sans renvoi à une audience ultérieure. Elle s'applique aux délits punis d'au moins deux ans d'emprisonnement. Le délai très court entre l'arrestation et le jugement rend l'assistance immédiate d'un avocat absolument indispensable pour préparer une défense efficace.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Conciliation",
    definition:
      "Mode amiable de résolution des litiges dans lequel un tiers neutre (conciliateur de justice, bénévole désigné par le tribunal) aide les parties à trouver un accord sans passer par un procès. Pour certains litiges civils de faible montant, une tentative de conciliation est obligatoire avant toute action judiciaire. Un accord de conciliation a force exécutoire s'il est homologué par le juge.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Consolidation",
    definition:
      "En matière de préjudice corporel, date à partir de laquelle l'état de santé de la victime est considéré comme stabilisé, c'est-à-dire qu'il n'évoluera plus de façon significative malgré les traitements. C'est à cette date charnière que le préjudice permanent peut être évalué et indemnisé. Elle est fixée par le médecin-expert. Une consolidation trop précoce peut sous-évaluer le préjudice : l'avocat veille à la contester si nécessaire.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Contribution à l'entretien et à l'éducation",
    definition:
      "Obligation légale pour chaque parent de participer financièrement aux dépenses liées à l'enfant (nourriture, vêtements, santé, scolarité, activités). En cas de séparation, elle prend la forme d'une pension alimentaire versée par le parent chez qui l'enfant ne réside pas principalement, fixée par le JAF selon les ressources de chacun et les besoins de l'enfant. Elle est due jusqu'à l'autonomie financière de l'enfant.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Convention de divorce",
    definition:
      "Document contractuel signé par les deux époux et contresigné par leurs avocats respectifs dans le cadre d'un divorce par consentement mutuel. Elle fixe l'ensemble des conséquences de la séparation : partage des biens, résidence des enfants, pension alimentaire, prestation compensatoire. Déposée chez un notaire pour acquérir force exécutoire, elle évite tout passage devant le juge.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "CRPC (plaider coupable)",
    definition:
      "Comparution sur Reconnaissance Préalable de Culpabilité : procédure pénale permettant au procureur de proposer une peine à une personne qui reconnaît les faits, sans passer par un procès classique. Si le prévenu accepte (assisté obligatoirement d'un avocat) et que le juge homologue, la peine est exécutoire immédiatement. Elle peut permettre d'éviter une audience publique et d'obtenir une peine allégée.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── D ──
  {
    terme: "Déficit fonctionnel permanent",
    definition:
      "Séquelle définitive réduisant les capacités physiques ou psychiques d'une victime après la consolidation de son état de santé. Il englobe la perte de qualité de vie, les douleurs résiduelles chroniques et la limitation des activités quotidiennes. Il est évalué par un médecin-expert en pourcentage (taux d'AIPP) et donne lieu à une indemnisation calculée selon l'âge de la victime et le taux retenu.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Délibéré",
    definition:
      "Phase secrète de la procédure judiciaire pendant laquelle les juges se retirent pour délibérer entre eux, après la fin des plaidoiries et réquisitions. Le délibéré peut être immédiat (jugement rendu le jour même) ou mis en délibéré à une date ultérieure. Aucune des parties ni leurs avocats n'y assistent. Le jugement est rendu publiquement à l'issue du délibéré.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Délit de fuite",
    definition:
      "Infraction pénale commise par un conducteur impliqué dans un accident qui ne s'arrête pas pour s'identifier, porter secours aux blessés ou constater les dommages. C'est un délit puni de 3 ans d'emprisonnement et 75 000 € d'amende, avec retrait de 6 points sur le permis. Il peut être reproché même si le conducteur n'est pas responsable de l'accident.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },
  {
    terme: "Détention provisoire",
    definition:
      "Mesure privative de liberté décidée par le juge des libertés et de la détention (JLD) à la demande du juge d'instruction, avant tout jugement. Elle ne peut être prononcée que si les autres mesures (contrôle judiciaire, assignation à résidence) sont insuffisantes. La personne détenue est présumée innocente. L'avocat peut contester la détention et solliciter une mise en liberté à tout moment.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Discernement",
    definition:
      "Capacité d'un mineur à comprendre et vouloir ses actes, condition nécessaire pour qu'il puisse être tenu pénalement responsable. Le Code de la Justice Pénale des Mineurs (CJPM) présume le discernement à partir de 13 ans. En dessous de cet âge, le juge des enfants peut tout de même prononcer des mesures éducatives. L'avocat du mineur peut faire valoir l'absence de discernement pour écarter toute sanction.",
    href: "/domaines/droit-des-mineurs",
    domaine: "Mineurs",
  },
  {
    terme: "Divorce pour faute",
    definition:
      "Procédure de divorce fondée sur la violation grave ou renouvelée des obligations du mariage par l'un des époux (violences, infidélité, abandon du domicile conjugal). Le juge doit reconnaître la faute pour prononcer ce type de divorce, ce qui peut influer sur la prestation compensatoire. La preuve de la faute est à la charge de l'époux demandeur et nécessite une stratégie probatoire solide.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Droit de visite et d'hébergement",
    definition:
      "Droit accordé au parent chez qui l'enfant ne réside pas habituellement de maintenir des liens avec lui. Il comprend généralement un weekend sur deux et la moitié des vacances scolaires, mais peut être adapté selon la situation. Il peut être réduit à un droit de visite simple (sans hébergement) voire suspendu en cas de danger pour l'enfant. Il est fixé par le JAF ou par accord entre les parents.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },

  // ── E ──
  {
    terme: "Expertise médicale",
    definition:
      "Examen réalisé par un médecin-expert mandaté (par un tribunal, une assurance ou une commission) pour évaluer les séquelles physiques et psychiques d'une victime. En matière de préjudice corporel, l'expertise est l'étape clé qui conditionne le montant de l'indemnisation. Il est fortement conseillé — voire indispensable — d'être accompagné par un avocat lors de cet examen pour défendre vos intérêts face à l'expert de l'assureur.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },

  // ── F ──
  {
    terme: "Flagrant délit",
    definition:
      "Infraction constatée au moment même où elle est commise ou immédiatement après. Le flagrant délit permet aux forces de l'ordre d'interpeller une personne sans mandat et d'ouvrir une enquête en urgence avec des pouvoirs renforcés (perquisition sans juge). La procédure de flagrance est plus rapide et peut conduire à une comparution immédiate devant le tribunal le jour même ou les jours suivants.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── G ──
  {
    terme: "Garde à vue",
    definition:
      "Mesure de contrainte permettant à la police ou la gendarmerie de retenir une personne dans leurs locaux pendant 24 heures (renouvelable jusqu'à 48 h sur autorisation du procureur) pour les besoins d'une enquête. Tout gardé à vue a le droit d'être assisté par un avocat dès la première heure, de garder le silence et d'être examiné par un médecin. Ces droits doivent être exercés sans attendre.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Grand excès de vitesse",
    definition:
      "Infraction routière caractérisée par un dépassement de la vitesse autorisée d'au moins 50 km/h. Elle constitue un délit pénal (et non une simple contravention) puni d'une suspension de permis pouvant aller jusqu'à 3 ans, d'une amende de 1 500 € et de 6 points retirés. Au-delà de 50 km/h en récidive, la confiscation du véhicule est obligatoire. Une défense pénale est nécessaire.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },

  // ── I ──
  {
    terme: "Injonction de payer",
    definition:
      "Procédure civile simplifiée permettant à un créancier d'obtenir rapidement une décision de justice contre un débiteur qui ne conteste pas l'existence de la dette. La demande est déposée au tribunal sans audience contradictoire. Si le juge l'accorde, une ordonnance est signifiée au débiteur, qui dispose d'un mois pour s'y opposer. En l'absence d'opposition, l'ordonnance est rendue exécutoire et une saisie peut être engagée.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Instruction judiciaire",
    definition:
      "Phase d'enquête approfondie conduite par un juge d'instruction, obligatoire pour les crimes et facultative pour les délits complexes. Le juge dispose de pouvoirs étendus : perquisitions, écoutes téléphoniques, mise en examen, placement en détention provisoire. La personne mise en examen a le droit d'être assistée d'un avocat à chaque acte d'instruction. L'instruction se clôt par un renvoi en jugement ou un non-lieu.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Invalidation du permis",
    definition:
      "Perte automatique du permis de conduire lorsque le solde de points tombe à zéro. Contrairement à la suspension, l'invalidation n'est pas une sanction judiciaire mais une conséquence administrative du solde de points. Le conducteur doit restituer son permis et ne peut en redemander un nouveau qu'après un délai de six mois (ou un an en cas de récidive), sous conditions (stage, examen médical et psychotechnique, examen de code).",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },
  {
    terme: "ITT (Incapacité Totale de Travail)",
    definition:
      "Terme médico-légal désignant la période pendant laquelle une victime blessée ne peut pas exercer ses activités habituelles (professionnelles ou quotidiennes) en raison de ses blessures. L'ITT est évaluée en jours par le médecin légiste ou l'expert. En matière pénale, sa durée détermine la qualification de l'infraction (contravention, délit ou crime). En préjudice corporel, elle conditionne l'indemnisation du déficit fonctionnel temporaire.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },

  // ── J ──
  {
    terme: "JAF (Juge aux affaires familiales)",
    definition:
      "Juge spécialisé du tribunal judiciaire compétent pour toutes les questions liées à la vie familiale : divorce, séparation, fixation de la résidence des enfants, pension alimentaire, droit de visite, autorité parentale, ordonnance de protection en cas de violences conjugales. Il peut statuer en urgence (référé familial) ou dans le cadre d'une procédure classique. Ses décisions sont immédiatement exécutoires sauf appel.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Juge des enfants",
    definition:
      "Magistrat spécialisé compétent à la fois pour les mineurs en danger (assistance éducative) et les mineurs délinquants (CJPM). En matière de protection, il peut ordonner des mesures de soutien à domicile ou un placement. En matière pénale, il privilégie les mesures éducatives avant la sanction. Il suit l'évolution de chaque situation sur le long terme et peut modifier ses décisions à tout moment.",
    href: "/domaines/droit-des-mineurs",
    domaine: "Mineurs",
  },

  // ── L ──
  {
    terme: "Liberté conditionnelle",
    definition:
      "Mesure d'aménagement de peine permettant à un condamné d'être libéré avant la fin de sa peine d'emprisonnement, sous conditions (ne pas commettre de nouvelle infraction, respecter des obligations de suivi, travailler…). Elle est accordée par le juge d'application des peines (JAP) lorsque le condamné a exécuté la moitié de sa peine (ou les deux tiers en cas de récidive). Son non-respect entraîne la révocation et le retour en détention.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Liquidation du régime matrimonial",
    definition:
      "Opération notariale consistant à évaluer et partager les biens communs ou indivis des époux lors d'un divorce. Elle implique d'inventorier les actifs et les dettes du couple, de déterminer les droits de chacun selon le régime matrimonial (communauté réduite aux acquêts, séparation de biens…) et de procéder au partage. Les désaccords sur la valorisation des biens ou le partage peuvent donner lieu à un contentieux devant le JAF.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },

  // ── M ──
  {
    terme: "Médiation familiale",
    definition:
      "Processus volontaire et confidentiel dans lequel un médiateur familial neutre aide des parents séparés à trouver eux-mêmes des solutions concernant leurs enfants (résidence, vacances, pension alimentaire). Elle est distincte de la médiation judiciaire ordonnée par le juge. Le résultat peut être homologué par le JAF pour acquérir force de loi. Elle est souvent plus rapide et moins conflictuelle qu'une procédure judiciaire.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Mesure éducative",
    definition:
      "Réponse judiciaire prononcée par le juge des enfants à l'égard d'un mineur délinquant, prioritaire sur la sanction pénale depuis le CJPM de 2021. Elle peut prendre la forme d'un avertissement, d'un stage de citoyenneté, d'une mesure de réparation envers la victime, d'un placement ou d'un suivi éducatif renforcé. Son objectif est la réinsertion du mineur. L'avocat l'accompagne à chaque audience pour défendre ses intérêts.",
    href: "/domaines/droit-des-mineurs",
    domaine: "Mineurs",
  },
  {
    terme: "Mise en demeure",
    definition:
      "Acte formel — souvent une lettre recommandée avec accusé de réception — par lequel une personne enjoint à une autre de respecter une obligation contractuelle ou légale dans un délai précis. Elle constitue la dernière étape avant l'engagement d'une procédure judiciaire et a pour effet de faire courir les intérêts de retard. Rédigée par un avocat, elle démontre le sérieux de la démarche et incite souvent au règlement amiable.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Mise en examen",
    definition:
      "Acte par lequel le juge d'instruction informe officiellement une personne qu'elle est soupçonnée d'avoir commis ou participé à une infraction. Elle remplace l'ancienne inculpation. La mise en examen n'est pas une condamnation : la personne reste présumée innocente jusqu'au jugement. Elle ouvre des droits importants : accès au dossier, présence de l'avocat à chaque acte, possibilité de demander des actes d'instruction en sa faveur.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── N ──
  {
    terme: "Nomenclature Dintilhac",
    definition:
      "Référentiel officieux mais universellement utilisé en France pour identifier et classer tous les postes de préjudice indemnisables après un dommage corporel. Elle distingue les préjudices patrimoniaux (pertes financières) des préjudices extrapatrimoniaux (souffrances, qualité de vie). Son nom vient du magistrat Jean-Pierre Dintilhac qui l'a élaborée en 2005. Maîtriser cette nomenclature est indispensable pour obtenir une indemnisation complète.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Non-lieu",
    definition:
      "Décision rendue par le juge d'instruction mettant fin aux poursuites pénales, faute de charges suffisantes pour renvoyer la personne en jugement. La personne mise en examen bénéficie alors d'un non-lieu et ne peut plus être poursuivie pour les mêmes faits, sauf découverte de charges nouvelles. C'est une décision favorable mais qui n'équivaut pas à une reconnaissance d'innocence au sens strict.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── O ──
  {
    terme: "Ordonnance de protection",
    definition:
      "Décision d'urgence rendue par le JAF pour protéger une personne victime ou menacée de violences au sein du couple ou de la famille. Le juge dispose de six jours pour statuer et peut interdire à l'auteur d'entrer en contact avec la victime, l'évincer du domicile conjugal et fixer provisoirement la résidence des enfants. Elle est valable six mois et peut être renouvelée. Aucune plainte préalable n'est nécessaire.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },

  // ── P ──
  {
    terme: "Partie civile",
    definition:
      "Victime d'une infraction pénale qui décide de se joindre à la procédure pénale pour obtenir réparation de son préjudice en plus de la sanction de l'auteur. Sa constitution est possible dès le dépôt de plainte, devant le juge d'instruction ou à l'audience. La partie civile bénéficie de droits procéduraux étendus : accès au dossier, droit de poser des questions, de faire appel de la décision sur les intérêts civils.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Pension alimentaire",
    definition:
      "Somme versée par un parent à l'autre pour contribuer à l'entretien et l'éducation de l'enfant commun après séparation. Elle est fixée par le JAF en fonction des ressources de chacun, des charges de chaque parent et des besoins de l'enfant. Elle est due jusqu'à l'autonomie financière de l'enfant, indépendamment de sa majorité. Son non-paiement constitue le délit d'abandon de famille, passible de poursuites pénales.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Perquisition",
    definition:
      "Opération de police consistant à fouiller un domicile ou tout autre lieu pour y rechercher des preuves d'une infraction. Elle nécessite en principe une autorisation du juge d'instruction ou du procureur. En flagrant délit, elle peut être effectuée sans autorisation préalable. La perquisition doit se dérouler entre 6 h et 21 h, en présence de l'occupant ou de deux témoins. Tout irrégularité peut entraîner la nullité des preuves recueillies.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Perte de gains professionnels",
    definition:
      "Poste d'indemnisation couvrant la perte de revenus subie par la victime en raison de ses blessures, qu'elle soit salariée, indépendante ou sans emploi. Elle se divise en perte temporaire (pendant la période d'arrêt de travail) et perte permanente (si la victime ne peut reprendre son activité ou doit changer de métier). Son calcul précis nécessite une analyse rigoureuse des revenus passés et futurs.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Prescription",
    definition:
      "Délai légal au-delà duquel une action en justice n'est plus recevable. Il varie selon les matières : 5 ans en droit civil (contrats, responsabilité), 1 an pour les contraventions, 6 ans pour les délits, 20 ans pour les crimes. Le délai court généralement à partir du jour où la victime a connaissance du dommage. Certains faits (crimes contre l'humanité, agressions sexuelles sur mineurs) sont imprescriptibles.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Présomption d'innocence",
    definition:
      "Principe fondamental du droit pénal français selon lequel toute personne suspectée ou poursuivie est réputée innocente jusqu'à ce que sa culpabilité soit établie par une décision de justice définitive. Elle impose à l'accusation de prouver la culpabilité, et non à la personne mise en cause de prouver son innocence. Toute atteinte à ce principe (déclaration publique prématurée, médiatisation excessive) peut être sanctionnée.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Prestation compensatoire",
    definition:
      "Somme versée par un époux à l'autre pour compenser la disparité de niveau de vie causée par la rupture du mariage. Elle prend généralement la forme d'un capital versé en une fois ou échelonné, plus rarement d'une rente viagère. Son montant est fixé en tenant compte de la durée du mariage, de l'âge et de la santé des époux, de leurs patrimoines respectifs et de leurs droits à la retraite.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Pretium doloris",
    definition:
      "Terme latin désignant le poste d'indemnisation des souffrances physiques et morales endurées par une victime entre la survenance du dommage et la consolidation de son état de santé. Il est évalué sur une échelle de 1 à 7 par le médecin-expert. Il constitue l'un des postes extrapatrimoniaux les plus importants de la nomenclature Dintilhac. Il ne doit pas être confondu avec le déficit fonctionnel permanent qui couvre l'après-consolidation.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Préjudice d'agrément",
    definition:
      "Poste d'indemnisation couvrant l'impossibilité ou la limitation pour la victime de pratiquer ses activités de loisirs, sportives ou culturelles antérieures au dommage. Il ne se confond pas avec le déficit fonctionnel permanent. Il doit être prouvé concrètement (licences sportives, témoignages, photos) pour être indemnisé. Son montant varie selon la nature et l'intensité de la pratique antérieure.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Protection juridique",
    definition:
      "Garantie d'assurance souvent incluse sans le savoir dans les contrats multirisques habitation, assurance auto ou carte bancaire haut de gamme. Elle prend en charge tout ou partie des honoraires d'avocat en cas de litige. Avant d'engager des frais, il est conseillé de vérifier l'ensemble de ses contrats d'assurance. L'avocat peut vous aider à activer cette garantie et à en négocier l'étendue avec l'assureur.",
    href: "/honoraires",
    domaine: "Honoraires",
  },

  // ── R ──
  {
    terme: "Récidive",
    definition:
      "Situation légale dans laquelle une personne commet une nouvelle infraction après avoir déjà été condamnée définitivement pour une infraction similaire. La récidive entraîne un doublement automatique du maximum de la peine encourue. Elle se distingue de la réitération (plusieurs infractions différentes). L'avocat peut parfois contester l'état de récidive légale en vérifiant les conditions strictes posées par la loi.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Référé",
    definition:
      "Procédure civile d'urgence permettant d'obtenir une décision rapide du président du tribunal (en quelques semaines, voire quelques jours en référé d'heure à heure) lorsque la situation ne peut pas attendre une procédure classique. Le juge des référés peut ordonner des mesures provisoires, faire cesser un trouble manifestement illicite ou désigner un expert. Sa décision n'est pas définitive et peut être complétée par une procédure au fond.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Relaxe",
    definition:
      "Décision rendue par un tribunal correctionnel ou de police qui acquitte un prévenu poursuivi pour délit ou contravention. La relaxe peut intervenir pour insuffisance de preuves, prescription de l'action publique ou absence d'infraction constituée. Contrairement à l'acquittement (cour d'assises), la relaxe est prononcée par des magistrats professionnels, sans jury. Elle fait obstacle à de nouvelles poursuites pour les mêmes faits.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Responsabilité délictuelle",
    definition:
      "Obligation de réparer le dommage causé à autrui en dehors de tout contrat, sur le fondement des articles 1240 et suivants du Code civil. Elle suppose la preuve d'une faute (ou d'un risque créé), d'un préjudice et d'un lien de causalité entre les deux. Elle s'oppose à la responsabilité contractuelle qui naît de la violation d'un contrat. Les accidents de la vie courante, les accidents de la route et les troubles de voisinage en relèvent.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Résidence alternée",
    definition:
      "Mode de résidence des enfants après séparation où l'enfant partage son temps de façon équilibrée entre les deux parents. Elle peut être fixée par accord des parents (homologué par le JAF) ou imposée par le juge si elle est conforme à l'intérêt de l'enfant. Elle implique généralement une réduction de la pension alimentaire puisque chaque parent supporte les dépenses courantes lors de son temps de résidence.",
    href: "/domaines/droit-de-la-famille",
    domaine: "Famille",
  },
  {
    terme: "Rétention du permis",
    definition:
      "Mesure administrative immédiate de confiscation physique du permis de conduire (72 heures) prise par les forces de l'ordre lors d'une infraction routière grave (alcool, stupéfiants, grand excès de vitesse). Elle précède et peut déboucher sur la suspension administrative par le préfet. La rétention est distincte de la suspension judiciaire prononcée par le tribunal. Un avocat peut intervenir très rapidement pour en limiter les suites.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },
  {
    terme: "Retrait de points",
    definition:
      "Perte automatique de points sur le permis de conduire à 12 points suite à une infraction routière constatée et définitivement sanctionnée. Le nombre de points retirés dépend de la nature de l'infraction (de 1 à 6 points). Le conducteur n'est notifié du retrait que par courrier 48 LRAR envoyé après la condamnation définitive. Contester l'infraction ou la procédure peut permettre d'éviter ou de réduire le retrait.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },

  // ── S ──
  {
    terme: "SARVI (Service d'Aide au Recouvrement des Victimes d'Infractions)",
    definition:
      "Dispositif géré par le Fonds de Garantie permettant aux victimes d'infractions pénales d'être indemnisées rapidement lorsque l'auteur est condamné mais insolvable. La victime peut saisir le SARVI dans un délai d'un an après la décision de justice définitive. Le Fonds verse une avance sur l'indemnisation accordée par le tribunal, puis se retourne contre le condamné pour en obtenir le remboursement.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Saisie",
    definition:
      "Voie d'exécution forcée permettant à un créancier muni d'un titre exécutoire (jugement, acte notarié) de faire appréhender les biens de son débiteur pour se faire payer. Elle peut porter sur les comptes bancaires (saisie-attribution), les salaires (saisie sur rémunération) ou les biens mobiliers et immobiliers. Elle est mise en œuvre par un commissaire de justice. Le débiteur peut saisir le juge de l'exécution pour en contester la régularité.",
    href: "/domaines/droit-civil",
    domaine: "Civil",
  },
  {
    terme: "Stage de sensibilisation",
    definition:
      "Formation de deux jours permettant à un conducteur de récupérer jusqu'à 4 points sur son permis de conduire, dans la limite du solde disponible, une fois tous les deux ans. Il peut être suivi volontairement ou imposé comme peine complémentaire par le tribunal. Le stage n'efface pas les mentions au casier judiciaire. Il n'est pas possible si le permis est invalidé ou suspendu.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },
  {
    terme: "Sursis",
    definition:
      "Modalité d'exécution d'une peine permettant de ne pas l'exécuter immédiatement. Le sursis simple est accordé sous condition de ne pas commettre de nouvelle infraction pendant un délai fixé. Le sursis probatoire (ex-sursis avec mise à l'épreuve) impose en plus des obligations (soins, travail, indemnisation des victimes). En cas de non-respect, le sursis peut être révoqué et la peine exécutée.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Suspension administrative",
    definition:
      "Mesure préfectorale de retrait temporaire du permis de conduire, prononcée rapidement après une infraction grave (alcool, stupéfiants, grand excès de vitesse), indépendamment de toute décision judiciaire. Sa durée peut aller jusqu'à 6 mois. Elle précède généralement la suspension judiciaire prononcée par le tribunal. Contester la suspension administrative dans les délais peut permettre d'en réduire la durée ou de l'annuler.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },

  // ── T ──
  {
    terme: "Témoin assisté",
    definition:
      "Statut intermédiaire entre le simple témoin et la mise en examen, accordé par le juge d'instruction à une personne mise en cause mais pour laquelle les indices de culpabilité ne sont pas suffisamment graves. Le témoin assisté bénéficie du droit d'être assisté d'un avocat et d'accéder au dossier, sans subir les contraintes de la mise en examen (pas de détention provisoire possible). Ce statut peut évoluer vers la mise en examen.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },
  {
    terme: "Tierce personne",
    definition:
      "Poste d'indemnisation couvrant le besoin d'assistance humaine pour les actes de la vie quotidienne que la victime ne peut plus accomplir seule en raison de ses séquelles (toilette, habillage, préparation des repas, déplacements). Indemnisable en phase temporaire comme permanente, il est calculé sur la base d'un taux horaire, que l'aide soit assurée par un professionnel ou par un proche. Ce poste peut représenter des sommes très importantes.",
    href: "/domaines/prejudice-corporel",
    domaine: "Préjudice",
  },
  {
    terme: "Tribunal correctionnel",
    definition:
      "Juridiction pénale composée de magistrats professionnels qui juge les délits (infractions de gravité intermédiaire entre la contravention et le crime). Il peut prononcer des peines d'emprisonnement (jusqu'à 10 ans), d'amende, de travail d'intérêt général ou de suspension du permis. Le tribunal correctionnel siège au sein du tribunal judiciaire. Ses décisions sont susceptibles d'appel devant la cour d'appel.",
    href: "/domaines/droit-penal",
    domaine: "Pénal",
  },

  // ── V ──
  {
    terme: "Vice de procédure",
    definition:
      "Irrégularité formelle commise lors d'une enquête, d'une instruction ou d'une audience, susceptible d'entraîner la nullité d'un acte ou de l'ensemble de la procédure. En droit pénal et routier, les vices de procédure sont fréquemment invoqués en défense : irrégularité d'une garde à vue, défaut de notification des droits, conditions illégales d'une perquisition ou d'un contrôle éthylotest. Leur identification exige une lecture minutieuse du dossier par un avocat.",
    href: "/domaines/droit-routier",
    domaine: "Routier",
  },
];
