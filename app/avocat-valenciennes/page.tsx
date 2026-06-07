import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Valenciennes — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Valenciennes et dans l'arrondissement en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-valenciennes",
  },
};

export default function ValenciennesPage() {
  return (
    <GeoPage
      ville="Valenciennes"
      breadcrumbLabel="Avocat à Valenciennes"
      canonicalUrl="https://avocat-montagne.fr/avocat-valenciennes"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Valenciennes et dans l'arrondissement dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Valenciennes, ville du département du Nord aux confins de la Belgique, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient pour les résidents de Valenciennes et de l'arrondissement.",
        "Le cabinet traite les dossiers pénaux (garde à vue, tribunal correctionnel, représentation des victimes), les affaires familiales (divorce, garde des enfants, pension alimentaire), les litiges civils et les demandes d'indemnisation en préjudice corporel.",
        "Cabinet situé à Dunkerque, accessible depuis Valenciennes. Pour les gardes à vue et urgences pénales, une intervention immédiate est assurée. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
