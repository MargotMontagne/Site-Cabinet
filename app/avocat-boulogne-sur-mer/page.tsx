import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Boulogne-sur-Mer — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Boulogne-sur-Mer et dans l'arrondissement en droit pénal, droit de la famille et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-boulogne-sur-mer",
  },
};

export default function BoulognePage() {
  return (
    <GeoPage
      ville="Boulogne-sur-Mer"
      breadcrumbLabel="Avocat à Boulogne-sur-Mer"
      canonicalUrl="https://avocat-montagne.fr/avocat-boulogne-sur-mer"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Boulogne-sur-Mer et dans l'arrondissement dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Boulogne-sur-Mer, première ville du Pas-de-Calais par sa population, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, assure la défense de ses clients à Boulogne-sur-Mer et dans l'arrondissement devant les juridictions compétentes.",
        "Le cabinet intervient en droit pénal (garde à vue, défense au tribunal correctionnel, représentation des victimes), en droit de la famille (divorce, autorité parentale, pension alimentaire), en préjudice corporel — notamment pour les accidents liés à l'activité portuaire et maritime — ainsi qu'en droit civil et droit des mineurs.",
        "Cabinet situé à Dunkerque, à environ 1 heure de Boulogne-sur-Mer. Intervention immédiate possible pour les gardes à vue et urgences pénales. Consultation gratuite si ouverture de dossier.",
      ]}
    />
  );
}
