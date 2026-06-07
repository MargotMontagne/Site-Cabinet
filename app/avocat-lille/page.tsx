import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Lille — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Lille et dans la métropole en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-lille",
  },
};

export default function LillePage() {
  return (
    <GeoPage
      ville="Lille"
      breadcrumbLabel="Avocat à Lille"
      canonicalUrl="https://avocat-montagne.fr/avocat-lille"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Lille et dans la métropole lilloise dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Lille, métropole régionale et chef-lieu du Nord, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient pour les justiciables de la métropole lilloise devant les juridictions compétentes.",
        "Le cabinet prend en charge les dossiers pénaux (garde à vue, tribunal correctionnel, défense des victimes), les affaires de droit de la famille (divorce, garde des enfants, pension alimentaire), les litiges en droit civil, le droit des mineurs et les demandes d'indemnisation en préjudice corporel.",
        "Les consultations ont lieu au cabinet à Dunkerque, à environ 1h15 de Lille. Pour toute urgence pénale — garde à vue notamment — le cabinet est joignable immédiatement. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
