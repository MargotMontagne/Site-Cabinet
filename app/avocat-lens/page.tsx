import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Lens — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Lens et dans le bassin minier du Pas-de-Calais en droit pénal, droit de la famille et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-lens",
  },
};

export default function LensPage() {
  return (
    <GeoPage
      ville="Lens"
      breadcrumbLabel="Avocat à Lens"
      canonicalUrl="https://avocat-montagne.fr/avocat-lens"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Lens et dans le bassin minier du Pas-de-Calais dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Lens, ville du bassin minier du Pas-de-Calais, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient pour les résidents de Lens et de l'arrondissement de Lens-Liévin.",
        "Le cabinet traite les dossiers pénaux (garde à vue, défense correctionnelle, représentation des victimes), les affaires de droit de la famille, les litiges en droit civil et les demandes d'indemnisation en préjudice corporel — notamment pour les accidents du travail.",
        "Cabinet situé à Dunkerque, accessible depuis Lens. Disponible pour toute garde à vue ou urgence pénale. Consultation gratuite si ouverture de dossier.",
      ]}
    />
  );
}
