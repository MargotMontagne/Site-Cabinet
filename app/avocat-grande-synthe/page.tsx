import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Grande-Synthe — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Grande-Synthe en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-grande-synthe",
  },
};

export default function GrandeSynthePage() {
  return (
    <GeoPage
      ville="Grande-Synthe"
      breadcrumbLabel="Avocat à Grande-Synthe"
      canonicalUrl="https://avocat-montagne.fr/avocat-grande-synthe"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, assure la défense des habitants de Grande-Synthe et de l'agglomération dunkerquoise dans l'ensemble de ses domaines d'expertise."
      intro={[
        "Grande-Synthe fait partie de la Communauté Urbaine de Dunkerque et relève du Tribunal Judiciaire de Dunkerque. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient pour les résidents de Grande-Synthe à quelques minutes seulement de son cabinet.",
        "Les dossiers traités concernent fréquemment le droit pénal — garde à vue, comparution immédiate, tribunal correctionnel — ainsi que le droit de la famille (divorce, garde des enfants, pension alimentaire), le droit routier et le préjudice corporel, notamment pour les accidents liés à l'activité industrielle et portuaire du bassin dunkerquois.",
        "Le cabinet reçoit sur rendez-vous au 25 Rue du Sud à Dunkerque. En cas d'urgence — garde à vue en particulier — une intervention immédiate est possible. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
