"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const expertises = [
  {
    href: "/expertises/droit-penal",
    label: "Droit pénal",
    sub: "Garde à vue, défense pénale",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>,
  },
  {
    href: "/expertises/droit-des-mineurs",
    label: "Droit des mineurs",
    sub: "Protection, assistance éducative",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>,
  },
  {
    href: "/expertises/droit-de-la-famille",
    label: "Droit de la famille",
    sub: "Divorce, garde, séparation",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  },
  {
    href: "/expertises/droit-routier",
    label: "Droit routier",
    sub: "Permis, infractions, alcool",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
  },
  {
    href: "/expertises/droit-civil",
    label: "Droit civil",
    sub: "Contrats, litiges, créances",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  },
  {
    href: "/expertises/prejudice-corporel",
    label: "Préjudice corporel",
    sub: "Accidents, indemnisation",
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  },
];

// Urgence bar height : 40px (h-10)
// Header mobile height : 64px (h-16)
// Total mobile offset pour le menu : 104px
const URGENCE_BAR_H = 40;
const HEADER_MOBILE_H = 64;
const MOBILE_MENU_TOP = URGENCE_BAR_H + HEADER_MOBILE_H; // 104

function lockScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}
function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const [mobileExpertisesOpen, setMobileExpertisesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExpertisesOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setExpertisesOpen(false), 180);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
    setExpertisesOpen(false);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mobileOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [mobileOpen]);

  function openMobileMenu() { setMobileOpen(true); }
  function closeMobileMenu() { setMobileOpen(false); setMobileExpertisesOpen(false); }
  function toggleMobileMenu() { if (mobileOpen) closeMobileMenu(); else openMobileMenu(); }

  return (
    <>
      {/* Wrapper fixe : barre urgence + header principal */}
      <div className="fixed top-0 left-0 right-0 z-50">

        {/* ── Barre d'urgence ── */}
        <div className="bg-forest-800 h-10 flex items-center">
          <div className="section-container w-full">
            <div className="flex items-center justify-between lg:justify-center gap-4 lg:gap-8">
              {/* Gauche / Centre */}
              <div className="flex items-center gap-2 text-white/90 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">Urgences pénales · Intervention rapide</span>
                <span className="sm:hidden">Urgence pénale</span>
              </div>
              {/* Adresse */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=25+Rue+du+Sud,+59140+Dunkerque"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 text-white/70 text-xs hover:text-white/90 transition-colors"
                aria-label="Adresse du cabinet"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                25 Rue du Sud, 59140 Dunkerque
              </a>
              {/* Téléphone */}
              <a
                href="tel:0744787718"
                className="flex items-center gap-1.5 text-white font-semibold text-xs tracking-wide hover:text-forest-200 transition-colors"
                aria-label="Appeler le cabinet en urgence"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 44 78 77 18
              </a>
            </div>
          </div>
        </div>

        {/* ── Header principal ── */}
        <header
          className={clsx(
            "transition-all duration-300",
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
              : "bg-white"
          )}
        >
          <div className="section-container">
            <div className="flex items-center justify-between h-20 lg:h-24">

              {/* Logo */}
              <Link
                href="/"
                className="shrink-0"
                aria-label="Accueil — Cabinet Margot Montagne"
              >
                <Image
                  src="/Logo navbar 4.webp"
                  alt="Cabinet Margot Montagne — Avocate à Dunkerque"
                  height={64}
                  width={280}
                  className="h-14 lg:h-16 w-auto"
                  priority
                />
              </Link>

              {/* Nav desktop */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
                {/* Dropdown Expertises */}
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={clsx(
                      "flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors",
                      pathname.startsWith("/expertises")
                        ? "text-forest-600"
                        : "text-stone-800 hover:text-stone-950"
                    )}
                    aria-expanded={expertisesOpen}
                    aria-haspopup="menu"
                    onClick={() => setExpertisesOpen((v) => !v)}
                    onKeyDown={(e) => { if (e.key === 'Escape') setExpertisesOpen(false); }}
                  >
                    Expertises
                    <svg
                      className={clsx("w-3.5 h-3.5 transition-transform duration-200", expertisesOpen ? "rotate-180" : "")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expertisesOpen && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 mt-3 w-80 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      {expertises.map((e) => (
                        <Link
                          key={e.href}
                          href={e.href}
                          role="menuitem"
                          className={clsx(
                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group/item",
                            pathname === e.href
                              ? "bg-forest-50"
                              : "hover:bg-gray-50"
                          )}
                        >
                          <div className={clsx(
                            "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150",
                            pathname === e.href
                              ? "bg-forest-600 text-white"
                              : "bg-stone-100 text-stone-500 group-hover/item:bg-forest-600 group-hover/item:text-white"
                          )}>
                            {e.icon}
                          </div>
                          <div>
                            <div className={clsx(
                              "text-sm font-medium leading-none mb-0.5 transition-colors duration-150",
                              pathname === e.href ? "text-forest-700" : "text-stone-800 group-hover/item:text-forest-600"
                            )}>
                              {e.label}
                            </div>
                            <div className="text-xs text-gray-400">{e.sub}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {[
                  { href: "/honoraires", label: "Honoraires" },
                  { href: "/ressources", label: "Ressources" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-4 py-2 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "text-forest-600"
                        : "text-stone-800 hover:text-stone-950"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA desktop */}
              <div className="hidden lg:flex items-center gap-3">
                <a href="tel:0744787718" className="btn-primary" aria-label="Appeler le cabinet">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07 44 78 77 18
                </a>
              </div>

              {/* Burger */}
              <button
                className="lg:hidden p-2 text-stone-950"
                onClick={toggleMobileMenu}
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between" aria-hidden>
                  <span className={clsx("block h-0.5 bg-current transition-all duration-300 origin-center", mobileOpen ? "rotate-45 translate-y-[9px]" : "")} />
                  <span className={clsx("block h-0.5 bg-current transition-all duration-300", mobileOpen ? "opacity-0 scale-x-0" : "")} />
                  <span className={clsx("block h-0.5 bg-current transition-all duration-300 origin-center", mobileOpen ? "-rotate-45 -translate-y-[9px]" : "")} />
                </div>
              </button>

            </div>
          </div>
        </header>
      </div>

      {/* Menu mobile — top = barre urgence + header */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto overscroll-contain"
          style={{ top: MOBILE_MENU_TOP, WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          onKeyDown={(e) => { if (e.key === 'Escape') closeMobileMenu(); }}
        >
          <div className="section-container py-8 flex flex-col">

            {/* Urgence — en tête du menu mobile */}
            <a
              href="tel:0744787718"
              className="flex items-center gap-3 px-4 py-4 mb-2 bg-forest-50 rounded-xl border border-forest-100"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="text-xs text-forest-600 font-semibold uppercase tracking-wide">Urgence pénale</div>
                <div className="font-serif text-stone-950 text-sm font-medium">07 44 78 77 18</div>
              </div>
            </a>

            {/* Accordéon Expertises */}
            <div>
              <button
                onClick={() => setMobileExpertisesOpen((v) => !v)}
                className="flex items-center justify-between w-full px-4 py-4 text-base font-medium border-b border-gray-100 text-stone-950"
                aria-expanded={mobileExpertisesOpen}
                aria-controls="expertises-mobile-panel"
              >
                Expertises
                <svg className={clsx("w-4 h-4 transition-transform duration-200", mobileExpertisesOpen ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileExpertisesOpen && (
                <div id="expertises-mobile-panel" className="px-4 pb-4 pt-2 flex flex-col gap-1">
                  {expertises.map((e) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      className={clsx(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150",
                        pathname === e.href ? "bg-forest-50" : "hover:bg-gray-50"
                      )}
                    >
                      <div className={clsx(
                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                        pathname === e.href ? "bg-forest-600 text-white" : "bg-stone-100 text-stone-500"
                      )}>
                        {e.icon}
                      </div>
                      <div>
                        <div className={clsx(
                          "text-sm font-medium leading-none mb-0.5",
                          pathname === e.href ? "text-forest-700" : "text-stone-800"
                        )}>
                          {e.label}
                        </div>
                        <div className="text-xs text-gray-400">{e.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { href: "/honoraires", label: "Honoraires" },
              { href: "/ressources", label: "Ressources" },
              { href: "/glossaire", label: "Glossaire juridique" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx("px-4 py-4 text-base font-medium border-b border-gray-100 transition-colors", pathname === link.href ? "text-forest-600" : "text-stone-950")}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-8 flex flex-col gap-3 px-4">
              <a href="tel:0744787718" className="btn-primary justify-center py-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </a>
              <a href="https://cal.eu/margot-montagne/30min" target="_blank" rel="noopener noreferrer" className="btn-outline justify-center py-4">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
