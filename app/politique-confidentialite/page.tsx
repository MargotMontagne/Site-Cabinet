import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Cabinet Margot Montagne",
  description: "Politique de confidentialité et protection des données du Cabinet Margot Montagne, avocate à Dunkerque.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-36 lg:pt-40 pb-20 bg-white">
      <div className="section-container max-w-3xl">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span>Politique de confidentialité</span>
        </nav>

        <h1 className="font-serif text-3xl text-stone-950 mb-10">Politique de confidentialité</h1>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Responsable du traitement</h2>
            <p>
              Maître Margot Montagne, avocate au Barreau de Dunkerque.<br />
              6 Rue du Sud, 59140 Dunkerque<br />
              Email : margot.montagne.avocat@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Données collectées</h2>
            <p>Via le formulaire de contact, nous collectons :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Domaine juridique concerné</li>
              <li>Contenu du message</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur votre consentement (Article 6.1.a du RGPD), exprimé lors de l&apos;envoi du formulaire de contact, ainsi que sur l&apos;intérêt légitime du cabinet à répondre aux demandes qui lui sont adressées (Article 6.1.f du RGPD). Dans le cadre d&apos;une mission juridique, le traitement est fondé sur l&apos;exécution du contrat (Article 6.1.b).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Finalité du traitement</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour répondre à vos demandes de contact et, le cas échéant, pour la gestion de la relation client dans le cadre d&apos;une mission juridique. Ces données sont soumises au secret professionnel absolu de l&apos;avocat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Durée de conservation</h2>
            <p>
              Les données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Sous-traitants et hébergement</h2>
            <p>Vos données peuvent transiter par les prestataires suivants, liés par des obligations contractuelles de confidentialité :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Formspree</strong> (Formspree, Inc.) — traitement des formulaires de contact. Données hébergées aux États-Unis, encadrées par les clauses contractuelles types de la Commission européenne.</li>
              <li><strong>Vercel</strong> (Vercel Inc.) — hébergement du site web. Données hébergées dans des datacenters en Europe (Frankfurt) par défaut.</li>
            </ul>
            <p className="mt-2">Aucune donnée n&apos;est vendue ou transmise à des tiers à des fins commerciales.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit à la portabilité</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : margot.montagne.avocat@gmail.com. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline hover:text-forest-700">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. Aucun cookie de tracking ou de publicité n&apos;est utilisé. Vous pouvez paramétrer votre navigateur pour refuser les cookies, sans impact sur votre navigation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-stone-950 mb-3">Sécurité</h2>
            <p>
              Des mesures de sécurité techniques et organisationnelles sont mises en œuvre pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction (chiffrement HTTPS, en-têtes de sécurité, politique de contenu stricte).
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
