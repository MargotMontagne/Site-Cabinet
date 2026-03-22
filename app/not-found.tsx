import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable — Cabinet Margot Montagne",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
      <div className="text-center max-w-md">
        <div className="font-serif text-8xl text-forest-100 mb-6">404</div>
        <h1 className="font-serif text-2xl text-stone-950 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil
          </Link>
          <a href="tel:0744787718" className="btn-outline">
            Appeler le cabinet
          </a>
        </div>
      </div>
    </div>
  );
}
