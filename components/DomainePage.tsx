import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { headers } from "next/headers";

interface Situation {
  title: string;
  description: string;
}

interface RelatedLink {
  label: string;
  href: string;
  description: string;
}

interface Profile {
  icon: "shield" | "heart";
  title: string;
  content: string;
  bullets?: string[];
}

interface FeatureBlock {
  image: string;
  imageAlt: string;
  title: string;
  content: string | string[];
  direction?: "image-left" | "image-right";
  imagePosition?: string;
}

interface CalloutBlock {
  text: string;
  cta?: string;
}

interface DomainePageProps {
  title: string;
  subtitle: string;
  intro: string | string[];
  introLayout?: "sidebar" | "full";
  profiles?: Profile[];
  featureBlocks?: FeatureBlock[];
  situations: Situation[];
  situationsLayout?: "grid" | "list";
  whyChoose: (string | { title: string; description: string })[];
  whyChooseStyle?: "list" | "grid";
  faqItems?: { question: string; answer: string }[];
  relatedLinks?: RelatedLink[];
  breadcrumbLabel: string;
  image?: string;
  imagePosition?: string;
  canonicalUrl?: string;
  h2Intro?: string;
  h2Situations?: string;
  callout?: CalloutBlock;
  calloutPosition?: "after-intro" | "after-profiles" | "after-situations";
}

export default async function DomainePage({
  title,
  subtitle,
  situations,
  intro,
  introLayout = "sidebar",
  profiles,
  featureBlocks,
  whyChoose,
  whyChooseStyle = "list",
  situationsLayout = "grid",
  faqItems,
  relatedLinks,
  breadcrumbLabel,
  image,
  imagePosition = "top",
  canonicalUrl,
  h2Intro,
  h2Situations,
  callout,
  calloutPosition = "after-intro",
}: DomainePageProps) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://avocat-montagne.fr" },
      { "@type": "ListItem", "position": 2, "name": "Expertises", "item": "https://avocat-montagne.fr/#domaines" },
      { "@type": "ListItem", "position": 3, "name": breadcrumbLabel, "item": canonicalUrl },
    ],
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${breadcrumbLabel} - Cabinet Montagne Dunkerque`,
    "description": subtitle,
    "url": canonicalUrl,
    "telephone": "+33744787718",
    "areaServed": [
      { "@type": "City", "name": "Dunkerque" },
      { "@type": "AdministrativeArea", "name": "Nord" },
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "25 Rue du Sud",
      "addressLocality": "Dunkerque",
      "postalCode": "59140",
      "addressRegion": "Nord",
      "addressCountry": "FR",
    },
    "provider": {
      "@type": "Attorney",
      "name": "Maître Margot Montagne",
      "telephone": "+33744787718",
      "memberOf": {
        "@type": "Organization",
        "name": "Barreau de Dunkerque",
      },
    },
  };

  const calloutSection = callout ? (
    <section className="bg-forest-600 py-14">
      <div className="section-container text-center">
        <p className="font-serif text-2xl sm:text-3xl text-white leading-snug max-w-3xl mx-auto mb-8">
          {callout.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:0744787718" className="btn-white py-4 px-8">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {callout.cta ?? "Appeler le cabinet"}
          </a>
          <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline-white py-4 px-8">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  ) : null;

  return (
    <>
      {faqSchema && (
        <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      {/* Hero avec image de fond */}
      <section className="relative bg-stone-950 pt-36 lg:pt-40 pb-20 overflow-hidden">
        {image && (
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={`/${image}`}
              alt=""
              fill
              priority
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            <div className="absolute inset-0 bg-stone-950/70" />
          </div>
        )}

        <div className="section-container relative">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-10" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#domaines" className="hover:text-white/80 transition-colors">Expertises</Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/60" aria-current="page">{breadcrumbLabel}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-forest-200 text-xs font-semibold tracking-widest uppercase mb-4">
              Expertise juridique
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {title}
            </h1>
            <div className="w-12 h-px bg-forest-400 mb-6" />
            <p className="text-xl text-white/75 leading-relaxed mb-10">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0744787718" className="btn-white py-4 px-8">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler le cabinet
              </a>
              <a
                href="https://cal.eu/margot-montagne/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white py-4 px-8"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {introLayout === "sidebar" ? (
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="label-tag">Introduction</span>
                <h2 className="section-title mb-6">{h2Intro ?? "Comprendre votre situation"}</h2>
                <div className="divider mb-6" />
                <div className="prose prose-gray max-w-none space-y-4">
                  {Array.isArray(intro)
                    ? intro.map((p, i) => <p key={i} className={`leading-relaxed text-lg ${i === 0 ? "text-gray-800 font-medium" : "text-gray-600"}`}>{p}</p>)
                    : <p className="text-gray-800 font-medium leading-relaxed text-lg">{intro}</p>
                  }
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-forest-50 border border-forest-100 rounded-2xl p-6 lg:sticky lg:top-28">
                  <h3 className="font-serif text-lg text-stone-950 mb-4">Besoin d&apos;aide rapidement ?</h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Maître Montagne répond à vos questions et prend en charge votre dossier dans les meilleurs délais.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:0744787718" className="btn-primary w-full justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      07 44 78 77 18
                    </a>
                    <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                      Prendre RDV en ligne
                    </a>
                  </div>
                  <div className="mt-5 pt-5 border-t border-forest-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
                      Disponible · Réponse sous 24h
                    </div>
                    <Link href="/honoraires" className="flex items-center gap-2 text-xs text-forest-700 hover:text-forest-900 transition-colors group">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                      </svg>
                      <span className="group-hover:underline underline-offset-2">Nos honoraires</span>
                    </Link>
                    <Link href="/ressources" className="flex items-center gap-2 text-xs text-forest-700 hover:text-forest-900 transition-colors group">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                      </svg>
                      <span className="group-hover:underline underline-offset-2">Questions fréquentes</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl">
              <span className="label-tag">Introduction</span>
              <h2 className="section-title mb-6">{h2Intro ?? "Comprendre votre situation"}</h2>
              <div className="divider mb-8" />
              <div className="prose prose-gray max-w-none space-y-5 mb-10">
                {Array.isArray(intro)
                  ? intro.map((p, i) => <p key={i} className={`leading-relaxed text-lg ${i === 0 ? "text-gray-800 font-medium" : "text-gray-600"}`}>{p}</p>)
                  : <p className="text-gray-800 font-medium leading-relaxed text-lg">{intro}</p>
                }
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:0744787718" className="btn-primary py-3 px-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 44 78 77 18
                </a>
                <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline py-3 px-6">
                  Prendre rendez-vous
                </a>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <Link href="/honoraires" className="text-sm text-forest-700 hover:text-forest-900 underline underline-offset-2 transition-colors">
                  Nos honoraires
                </Link>
                <Link href="/ressources" className="text-sm text-forest-700 hover:text-forest-900 underline underline-offset-2 transition-colors">
                  Questions fréquentes
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {callout && calloutPosition === "after-intro" && calloutSection}

      {/* Profils */}
      {profiles && profiles.length > 0 && (
        <section className="section-padding bg-stone-50">
          <div className="section-container">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="label-tag">Votre situation</span>
                <h2 className="section-title">Quelle est votre situation ?</h2>
                <div className="divider mx-auto mt-5 mb-4" />
                <p className="section-subtitle max-w-xl mx-auto">
                  Que vous soyez mis en cause ou victime, le cabinet adapte sa stratégie à votre profil et défend vos intérêts à chaque étape.
                </p>
              </div>
            </ScrollReveal>
            <div className={`grid gap-6 ${profiles.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
              {profiles.map((profile, i) => (
                <ScrollReveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"} className="h-full">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center mb-5">
                    {profile.icon === "shield" ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-stone-950 mb-3">{profile.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{profile.content}</p>
                  {profile.bullets && profile.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {profile.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-forest-500 flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {callout && calloutPosition === "after-profiles" && calloutSection}

      {/* Situations */}
      <section className="section-padding bg-forest-50/40">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="label-tag">Cas d&apos;intervention</span>
              <h2 className="section-title">{h2Situations ?? "Situations prises en charge"}</h2>
              <div className="divider mx-auto mt-5" />
            </div>
          </ScrollReveal>

          {situationsLayout === "list" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {situations.map((situation, index) => (
                <ScrollReveal key={index} delay={index * 80} className="h-full">
                <div
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 border-l-4 border-forest-600 shadow-sm hover:shadow-md transition-all duration-200 h-full"
                >
                  <span className="font-serif text-forest-600 text-sm font-bold flex-shrink-0 mt-0.5 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-stone-950 mb-1.5">{situation.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{situation.description}</p>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {situations.map((situation, index) => (
                <ScrollReveal key={index} delay={index * 80} className="h-full">
                <div
                  className="group relative flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div className="h-1 w-full bg-forest-600 group-hover:bg-forest-700 transition-colors duration-300" />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 bg-forest-50 rounded-lg flex items-center justify-center text-forest-600 font-serif text-sm font-bold mb-6 group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-xl text-stone-950 mb-3 group-hover:text-forest-600 transition-colors">{situation.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{situation.description}</p>
                  </div>
                </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {callout && calloutPosition === "after-situations" && calloutSection}

      {/* Feature blocks — image + texte */}
      {featureBlocks && featureBlocks.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container space-y-20">
            {featureBlocks.map((block, i) => {
              const isRight = (block.direction ?? (i % 2 === 0 ? "image-left" : "image-right")) === "image-right";
              return (
                <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                  <ScrollReveal direction={isRight ? "right" : "left"}>
                  <div className={isRight ? "lg:order-2" : "lg:order-1"}>
                    <div className="w-full h-80 rounded-2xl shadow-md overflow-hidden">
                      <Image
                        src={`/${block.image}`}
                        alt={block.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: block.imagePosition ?? "center" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150} direction={isRight ? "left" : "right"}>
                  <div className={isRight ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-10 h-1 bg-forest-600 mb-6" />
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 mb-5 leading-snug">{block.title}</h3>
                    <div className="space-y-4">
                      {Array.isArray(block.content)
                        ? block.content.map((p, j) => <p key={j} className="text-gray-600 leading-relaxed">{p}</p>)
                        : <p className="text-gray-600 leading-relaxed">{block.content}</p>
                      }
                    </div>
                  </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Pourquoi choisir */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {whyChooseStyle === "grid" ? (
            <>
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="label-tag">Votre défense</span>
                  <h2 className="section-title mb-3">
                    Pourquoi confier votre dossier <span className="text-forest-600">au cabinet ?</span>
                  </h2>
                  <div className="divider mx-auto mt-5" />
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {whyChoose.map((reason, index) => {
                  const title = typeof reason === "object" ? reason.title : undefined;
                  const text = typeof reason === "object" ? reason.description : reason;
                  return (
                  <ScrollReveal key={index} delay={index * 70}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="w-8 h-0.5 bg-forest-500 mb-4" />
                    {title
                      ? <>
                          <h3 className="font-serif font-semibold text-lg text-stone-950 mb-2 leading-snug">{title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                        </>
                      : <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                    }
                  </div>
                  </ScrollReveal>
                  );
                })}
              </div>
              <ScrollReveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:0744787718" className="btn-primary py-3 px-8">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler le 07 44 78 77 18
                </a>
                <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline py-3 px-8">
                  Prendre rendez-vous
                </a>
              </div>
              </ScrollReveal>
            </>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
              <div>
                <span className="label-tag">Votre défense</span>
                <h2 className="section-title mb-5">
                  Pourquoi confier votre dossier<br />
                  <span className="text-forest-600">au cabinet ?</span>
                </h2>
                <div className="divider mb-6" />
                <ul className="space-y-4">
                  {whyChoose.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{typeof reason === "object" ? reason.description : reason}</p>
                    </li>
                  ))}
                </ul>
              </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
              <div className="bg-forest-50 border border-forest-100 rounded-2xl p-10">
                <h3 className="font-serif text-2xl mb-6 text-stone-950">Prête à défendre votre dossier</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Chaque situation est unique. Maître Montagne analyse votre dossier avec attention et vous propose la stratégie la mieux adaptée.
                </p>
                <div className="space-y-3">
                  <a href="tel:0744787718" className="btn-primary w-full justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appeler le 07 44 78 77 18
                  </a>
                  <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center">
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="section-padding bg-forest-50/40">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="label-tag">Questions fréquentes</span>
                  <h2 className="section-title">Questions fréquentes</h2>
                  <div className="divider mx-auto mt-5" />
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 60}>
                  <details
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                      <span className="font-sans font-semibold text-base text-stone-900 leading-snug">{item.question}</span>
                      <svg
                        className="w-5 h-5 text-forest-600 flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                    </div>
                  </details>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Maillage interne */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <span className="label-tag">À explorer également</span>
              <h2 className="section-title mb-8">Domaines associés</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedLinks.map((link, i) => (
                  <ScrollReveal key={i} delay={i * 120} direction={i % 2 === 0 ? "left" : "right"} className="h-full">
                  <Link
                    href={link.href}
                    className="group h-full flex items-start gap-4 bg-forest-50 border border-forest-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="w-9 h-9 bg-forest-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-forest-700 group-hover:scale-110 transition-all duration-200">
                      <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif text-lg text-stone-950 group-hover:text-forest-700 transition-colors leading-snug">{link.label}</p>
                      <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">{link.description}</p>
                    </div>
                  </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
