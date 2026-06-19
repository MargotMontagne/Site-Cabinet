# CLAUDE.md — Site Maître Margot Montagne

## Le projet

Site vitrine pour **Maître Margot Montagne**, avocate solo au Barreau de Dunkerque depuis 2020.
- **URL prod** : https://avocat-montagne.fr
- **Repo** : https://github.com/MargotMontagne/Site-Cabinet
- **En ligne depuis** : mi-mars 2026
- **Déployé sur** : Vercel (déploiement automatique sur push `main`)

Domaines d'intervention : droit pénal, droit de la famille, droit routier, préjudice corporel, droit civil, droit des mineurs.
Cabinet : 25 Rue du Sud, 59140 Dunkerque — 07 44 78 77 18 — margot.montagne.avocat@gmail.com

---

## Stack

- **Next.js 14** App Router, TypeScript, Tailwind CSS
- **Fonts** : Plus Jakarta Sans (sans) + Lora (serif), via `--font-inter` et `--font-playfair`
- **Pas de base de données**, pas d'auth, pas de CMS — site statique/SSR pur
- **Formulaire de contact** : nodemailer via route API (`/api/contact`)
- **Middleware** : génère un nonce CSP par requête (utilisé dans SchemaOrg.tsx)

---

## Structure des pages

```
app/
  page.tsx                        Homepage
  layout.tsx                      Layout global (metadata, fonts, SchemaOrg, GTM)
  a-propos/page.tsx
  contact/page.tsx
  honoraires/page.tsx
  ressources/page.tsx
  glossaire/page.tsx
  expertises/
    droit-penal/page.tsx
    droit-des-mineurs/page.tsx
    droit-de-la-famille/page.tsx
    droit-routier/page.tsx
    droit-civil/page.tsx
    prejudice-corporel/page.tsx
  avocat-{ville}/page.tsx         10 landing pages géo (voir ci-dessous)
  robots.ts                       Autorise tout sauf /api/
  sitemap.ts                      Sitemap complet avec dates fixes
```

**10 landing pages géographiques** (composant partagé `GeoPage`) :
`avocat-grande-synthe`, `avocat-calais`, `avocat-lille`, `avocat-saint-omer`,
`avocat-boulogne-sur-mer`, `avocat-valenciennes`, `avocat-douai`, `avocat-arras`,
`avocat-lens`, `avocat-hazebrouck`

---

## Composants clés

| Composant | Rôle |
|---|---|
| `SchemaOrg.tsx` | JSON-LD global (LegalService + Attorney + Person + WebSite). Nonce CSP obligatoire. |
| `DomainePage.tsx` | Template partagé pour les 6 pages expertise. Ne pas ajouter de schema ici (déjà dans SchemaOrg global). |
| `GeoPage.tsx` | Template partagé pour les 10 pages géo. Hero = `Droit-penal.webp`. |
| `ZoneGeoSection.tsx` | Section homepage listant les villes du ressort avec liens vers les pages géo. |
| `TestimonialsSection.tsx` | 3 vrais avis Google (Sandra V., Christine, Rémi B.). Lien vers fiche Google avis. |
| `Footer.tsx` | Footer simple, sans section "zones" (a été retirée intentionnellement). |
| `ContactForm.tsx` | Formulaire avec envoi via `/api/contact` (nodemailer). |

---

## Design system

**Couleurs custom Tailwind :**
- `forest-600` : `#1B4332` (vert principal, textes et accents)
- `forest-50` à `forest-900` : palette complète
- `stone-950` : `#1A1A1A` (titres)

**Classes utilitaires globales à connaître** (définies dans `globals.css`) :
- `section-padding` : padding vertical des sections
- `section-container` : max-width + padding horizontal
- `section-title` : style des titres de section
- `label-tag` : petite étiquette verte au-dessus des titres
- `divider` : ligne décorative verte

**Typographie :**
- Titres : `font-serif` (Lora)
- Corps : `font-sans` (Plus Jakarta Sans)

---

## SEO — Conventions importantes

**Titles** : template `"%s | Maître Montagne"` défini dans `layout.tsx`.
Chaque page définit son propre `title` court (max ~55 caractères avec template).

**Canonical** : toujours renseigner dans chaque page.

**Schema.org** : géré uniquement dans `SchemaOrg.tsx` au niveau global.
Ne JAMAIS ajouter de schema JSON-LD dans `DomainePage.tsx` (cause des doublons qui font échouer la validation Semrush).

**robots.ts** : seul `/api/` est disallow. Ne pas bloquer `/_next/`.

**`sameAs` dans SchemaOrg** : tableau vide pour l'instant. À remplir avec les URLs des profils annuaires une fois créés (avocat.fr, Pages Jaunes, 1001avocats...).

---

## Ce qui a été fait (historique des décisions)

- **robots.txt** : `/_next/` retiré du disallow (bloquait 152 ressources Googlebot)
- **SchemaOrg** : double type `["LegalService", "Attorney"]`, noeud `Person` séparé avec `@id`
- **DomainePage** : schema JSON-LD retiré (causait 12 erreurs Semrush de données structurées dupliquées)
- **Titles** : raccourcis sur toutes les pages (étaient trop longs, >60 chars)
- **Sitemap** : dates fixes (plus de `new Date()` dynamique), toutes les pages incluses
- **llms.txt** : créé dans `/public/` pour les crawlers IA
- **TestimonialsSection** : remplacés par de vrais avis Google, avec lien vers l'onglet avis GBP
- **Footer** : section "Zones d'intervention" retirée (donnait l'impression d'une couverture limitée)
- **ZoneGeoSection** : villes cliquables vers les pages géo

---

## Ce qui reste à faire

- [ ] FAQPage JSON-LD sur `/honoraires`
- [ ] FAQPage JSON-LD sur `/ressources`
- [ ] Vérifier et optimiser la page `/a-propos`
- [ ] Remplir `sameAs` dans `SchemaOrg.tsx` une fois les profils annuaires créés
- [ ] Soumettre le sitemap dans Google Search Console (action Maître Montagne)

---

## Déploiement

```bash
git add .
git commit -m "description"
git push origin main
# Vercel déploie automatiquement en ~1 minute
```

Pages à vérifier après chaque déploiement :
- https://avocat-montagne.fr
- https://avocat-montagne.fr/expertises/droit-penal
- https://avocat-montagne.fr/avocat-grande-synthe
- https://avocat-montagne.fr/sitemap.xml
- https://avocat-montagne.fr/robots.txt

---

## Conventions de code

- Pas de commentaires sauf si le WHY est non-évident
- Pas de schema JSON-LD dans les pages ou composants de contenu (tout dans SchemaOrg.tsx)
- Les pages géo utilisent toutes `GeoPage` — ne pas dupliquer la structure
- Les pages expertise utilisent toutes `DomainePage` — idem
- Tailwind uniquement, pas de CSS inline sauf exception justifiée
