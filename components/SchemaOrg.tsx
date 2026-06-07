import { headers } from "next/headers";

export default async function SchemaOrg() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": "https://avocat-montagne.fr/#organization",
        name: "Cabinet Margot Montagne",
        alternateName: "Maître Margot Montagne",
        url: "https://avocat-montagne.fr",
        telephone: "+33744787718",
        email: "margot.montagne.avocat@gmail.com",
        description:
          "Cabinet d'avocat à Dunkerque. Maître Margot Montagne défend vos droits en droit pénal, droit de la famille, droit routier, droit des mineurs, droit civil et préjudice corporel.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "25 Rue du Sud",
          addressLocality: "Dunkerque",
          postalCode: "59140",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.0343,
          longitude: 2.3765,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "€€",
        sameAs: [
          // Remplacer par l'URL exacte de la fiche Google Maps/GBP
          // Ex : "https://maps.google.com/?cid=VOTRE_CID"
          // Puis ajouter les URLs des annuaires une fois les profils créés :
          // Justifit, 1001avocats, avocat.fr, pages-jaunes.fr
        ],
        areaServed: [
          { "@type": "City", name: "Dunkerque" },
          { "@type": "City", name: "Grande-Synthe" },
          { "@type": "City", name: "Calais" },
          { "@type": "City", name: "Saint-Omer" },
          { "@type": "City", name: "Boulogne-sur-Mer" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Domaines d'intervention",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Droit pénal" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Droit de la famille" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Droit routier" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Droit des mineurs" },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Droit civil" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Préjudice corporel",
              },
            },
          ],
        },
        founder: {
          "@id": "https://avocat-montagne.fr/#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://avocat-montagne.fr/#person",
        name: "Margot Montagne",
        givenName: "Margot",
        familyName: "Montagne",
        jobTitle: "Avocate au Barreau de Dunkerque",
        honorificPrefix: "Maître",
        worksFor: {
          "@id": "https://avocat-montagne.fr/#organization",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Université de Lille II",
        },
        knowsAbout: [
          "Droit pénal",
          "Droit de la famille",
          "Droit routier",
          "Droit des mineurs",
          "Droit civil",
          "Préjudice corporel",
        ],
        memberOf: {
          "@type": "Organization",
          name: "Barreau de Dunkerque",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://avocat-montagne.fr/#website",
        url: "https://avocat-montagne.fr",
        name: "Cabinet Margot Montagne — Avocate à Dunkerque",
        publisher: {
          "@id": "https://avocat-montagne.fr/#organization",
        },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
