import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Saint-Omer — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Saint-Omer et dans l'arrondissement en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-saint-omer",
  },
};

export default function SaintOmerPage() {
  return (
    <GeoPage
      ville="Saint-Omer"
      breadcrumbLabel="Avocat à Saint-Omer"
      canonicalUrl="https://avocat-montagne.fr/avocat-saint-omer"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Saint-Omer et dans l'arrondissement dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Saint-Omer, sous-préfecture du Pas-de-Calais à 50 kilomètres de Dunkerque, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient dans l'arrondissement pour assurer la défense de ses clients devant les juridictions locales.",
        "Droit pénal, droit de la famille, droit routier, préjudice corporel, droit des mineurs et droit civil : le cabinet traite l'ensemble des contentieux courants de l'arrondissement de Saint-Omer, pour les particuliers et les familles.",
        "Cabinet situé à Dunkerque, à 50 minutes de Saint-Omer. Disponible immédiatement pour les gardes à vue et urgences pénales. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
