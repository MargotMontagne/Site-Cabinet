import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Hazebrouck — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Hazebrouck et dans les Flandres intérieures en droit pénal, droit de la famille et droit routier. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-hazebrouck",
  },
};

export default function HazebrouckPage() {
  return (
    <GeoPage
      ville="Hazebrouck"
      breadcrumbLabel="Avocat à Hazebrouck"
      canonicalUrl="https://avocat-montagne.fr/avocat-hazebrouck"
      subtitle="Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Hazebrouck et dans les Flandres intérieures, à moins d'une heure du cabinet."
      intro={[
        "Hazebrouck, ville des Flandres intérieures dans le département du Nord, relève du ressort de la Cour d'appel de Douai. Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient pour les résidents d'Hazebrouck et du canton à moins d'une heure de son cabinet.",
        "Droit pénal (garde à vue, tribunal correctionnel), droit de la famille (divorce, garde des enfants), droit routier, préjudice corporel, droit civil et droit des mineurs : le cabinet assure la défense de ses clients dans l'ensemble de ces domaines.",
        "Cabinet basé à Dunkerque, à 45 minutes d'Hazebrouck. Disponible immédiatement pour les gardes à vue. Premier contact téléphonique gratuit.",
      ]}
    />
  );
}
