import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Cabinet Margot Montagne",
  description: "Mentions légales du site web du Cabinet Margot Montagne, avocate à Dunkerque.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="section-container max-w-3xl">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span>Mentions légales</span>
        </nav>

        <h1 className="font-serif text-3xl text-stone-950 mb-10">Mentions légales</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Éditeur du site</h2>
            <p>
              <strong>Maître Margot Montagne</strong><br />
              Avocate au Barreau de Dunkerque<br />
              25 Rue du Sud, 59140 Dunkerque<br />
              Téléphone : <a href="tel:0744787718" className="text-forest-600">07 44 78 77 18</a><br />
              Email : margot.montagne.avocat@gmail.com<br />
              N° RPVA : [à compléter]<br />
              Ordre professionnel : Barreau de Dunkerque
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Hébergement</h2>
            <p>
              Ce site est hébergé par [Hébergeur à compléter].<br />
              Adresse : [à compléter]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes) est la propriété exclusive de Maître Margot Montagne, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont données à titre informatif et ne constituent pas des conseils juridiques. Pour toute situation particulière, consultez un avocat. Maître Montagne ne saurait être tenue responsable de l&apos;utilisation qui serait faite de ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Données personnelles</h2>
            <p>
              Pour toute information relative au traitement de vos données personnelles, consultez notre{" "}
              <Link href="/politique-confidentialite" className="text-forest-600 underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Règles déontologiques</h2>
            <p>
              Maître Margot Montagne est soumise aux règles déontologiques de la profession d&apos;avocat : décret du 12 juillet 2005 (réglementation de la profession), décret du 27 novembre 1991 (organisation de la profession), Règlement Intérieur National (RIN) des avocats.
            </p>
          </section>

          <p className="text-xs text-gray-400">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </div>
    </div>
  );
}
