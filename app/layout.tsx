import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from "next/dynamic";
import SchemaOrg from "@/components/SchemaOrg";
import GTM from "@/components/GTM";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
});

const playfair = Lora({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avocat-montagne.fr"),
  title: {
    default: "Maître Margot Montagne — Avocate à Dunkerque",
    template: "%s | Maître Montagne",
  },
  description:
    "Maître Margot Montagne, avocate au Barreau de Dunkerque. Droit pénal, droit de la famille, droit routier, préjudice corporel. Disponible rapidement, intervention en urgence. Appelez le 07 44 78 77 18.",
  keywords: [
    "avocat Dunkerque",
    "avocate Dunkerque",
    "cabinet avocat Dunkerque",
    "avocat droit pénal Dunkerque",
    "avocat droit famille Dunkerque",
    "avocat droit routier Dunkerque",
    "avocat garde à vue Dunkerque",
    "avocat urgence Dunkerque",
    "Margot Montagne avocate",
    "barreau Dunkerque",
  ],
  authors: [{ name: "Maître Margot Montagne" }],
  creator: "Cabinet Montagne",
  publisher: "Cabinet Montagne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://avocat-montagne.fr",
    siteName: "Cabinet Margot Montagne — Avocate à Dunkerque",
    title: "Maître Margot Montagne — Avocate à Dunkerque",
    description:
      "Avocate au Barreau de Dunkerque, Maître Montagne défend vos droits en droit pénal, droit de la famille, droit routier et préjudice corporel. Disponible rapidement.",
    images: [
      {
        url: "https://avocat-montagne.fr/og-image.jpg?v=2",
        secureUrl: "https://avocat-montagne.fr/og-image.jpg?v=2",
        width: 1200,
        height: 630,
        alt: "Maître Margot Montagne — Avocate à Dunkerque",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maître Margot Montagne — Avocate à Dunkerque",
    description:
      "Avocate au Barreau de Dunkerque. Droit pénal, famille, routier. Intervention rapide.",
    images: ["https://avocat-montagne.fr/og-image.jpg?v=2"],
  },
  alternates: {
    canonical: "https://avocat-montagne.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <GTM />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-forest-600 focus:font-medium focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <SchemaOrg />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
