import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Calais — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Calais et dans l'arrondissement en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-calais",
  },
};

export default function CalaisPage() {
  return (
    <GeoPage
      ville="Calais"
      breadcrumbLabel="Avocat à Calais"
      canonicalUrl="https://avocat-montagne.fr/avocat-calais"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Calais et dans l'arrondissement dans le cadre du ressort de la Cour d'appel de Douai, couvrant le Nord et le Pas-de-Calais."
      intro={[
        "Calais est couverte par le ressort de la Cour d'appel de Douai, qui regroupe les départements du Nord (59) et du Pas-de-Calais (62). Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient à Calais et dans l'ensemble de l'arrondissement pour défendre ses clients devant les juridictions compétentes.",
        "Le cabinet prend en charge les dossiers pénaux (garde à vue, défense au tribunal correctionnel, représentation des victimes), les affaires familiales (divorce, autorité parentale, pension alimentaire), les demandes d'indemnisation en préjudice corporel, ainsi que les litiges en droit civil et les procédures en droit des mineurs.",
        "Les consultations se tiennent au cabinet à Dunkerque, à 45 minutes de Calais. Pour toute urgence pénale — garde à vue notamment — le cabinet est joignable immédiatement. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
