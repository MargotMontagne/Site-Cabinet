import type { Metadata } from "next";
import GeoPage from "@/components/GeoPage";

export const metadata: Metadata = {
  title: "Avocat à Douai — Cabinet Montagne",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque, intervient à Douai et devant la Cour d'appel de Douai en droit pénal, droit de la famille et préjudice corporel. 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr/avocat-douai",
  },
};

export default function DouaiPage() {
  return (
    <GeoPage
      ville="Douai"
      breadcrumbLabel="Avocat à Douai"
      canonicalUrl="https://avocat-montagne.fr/avocat-douai"
      subtitle="Douai est le siège de la Cour d'appel qui couvre l'ensemble du Nord et du Pas-de-Calais. Maître Margot Montagne intervient devant les juridictions de Douai et dans l'arrondissement."
      intro={[
        "Douai est le siège de la Cour d'appel de Douai, juridiction d'appel pour l'ensemble des départements du Nord (59) et du Pas-de-Calais (62). Maître Margot Montagne, inscrite au Barreau de Dunkerque depuis 2020, intervient devant les juridictions de Douai et de l'arrondissement.",
        "Le cabinet assure la défense en droit pénal (garde à vue, tribunal correctionnel, chambre correctionnelle d'appel), en droit de la famille, en préjudice corporel et en droit civil, y compris devant la Cour d'appel de Douai pour les procédures en phase d'appel.",
        "Cabinet situé à Dunkerque. Disponible pour toute urgence pénale — garde à vue notamment. Consultation gratuite si ouverture de dossier.",
      ]}
    />
  );
}
