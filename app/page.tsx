import type { Metadata } from "next";
import Hero from "@/components/Hero";
import DomainesSection from "@/components/DomainesSection";
import AProposSection from "@/components/AProposSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ZoneGeoSection from "@/components/ZoneGeoSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Maître Margot Montagne — Avocate à Dunkerque | Cabinet d'avocat",
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque. Droit pénal, droit de la famille, droit routier, préjudice corporel. Disponible pour urgences. Appelez le 07 44 78 77 18.",
  alternates: {
    canonical: "https://avocat-montagne.fr",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero plein écran */}
      <Hero />

      {/* 2. Domaines d'intervention */}
      <DomainesSection />

      {/* 4. À propos — qui est Maître Montagne */}
      <AProposSection />

      {/* 5. Pourquoi choisir ce cabinet */}
      <WhyUsSection />

      {/* 6. Témoignages — preuve sociale avant le CTA */}
      <TestimonialsSection />

      {/* 7. Zone géographique — SEO local */}
      <ZoneGeoSection />

      {/* 8. CTA final */}
      <CTASection />
    </>
  );
}
