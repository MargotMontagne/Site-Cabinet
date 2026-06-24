import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Arras — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Arras et dans le Pas-de-Calais en droit pénal, droit de la famille, droit routier et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-arras",
  },
};

export default function ArrasPage() {
  return (
    <GeoPage
      ville="Arras"
      breadcrumbLabel="Avocat à Arras"
      canonicalUrl="https://avocat-montagne.fr/avocat-arras"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Arras et dans le Pas-de-Calais dans le ressort de la Cour d'appel de Douai."
      intro={[
        "Arras, chef-lieu du Pas-de-Calais et siège de préfecture, est couverte par le ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient à Arras et dans l'arrondissement pour la défense de ses clients.",
        "Droit pénal, droit de la famille, droit routier, préjudice corporel : le cabinet prend en charge l'ensemble des contentieux civils et pénaux courants, pour les particuliers et les familles de l'arrondissement d'Arras.",
        "Cabinet situé à Dunkerque, à environ 1h30 d'Arras. Intervention immédiate pour les gardes à vue. Consultation gratuite si ouverture de dossier.",
      ]}
    />
  );
}
