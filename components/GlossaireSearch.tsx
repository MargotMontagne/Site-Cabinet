"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaireItem } from "@/lib/glossaire-data";

const domaineColors: Record<string, string> = {
  "Pénal":      "bg-stone-100 text-stone-600",
  "Famille":    "bg-stone-100 text-stone-600",
  "Routier":    "bg-stone-100 text-stone-600",
  "Préjudice":  "bg-stone-100 text-stone-600",
  "Civil":      "bg-stone-100 text-stone-600",
  "Mineurs":    "bg-stone-100 text-stone-600",
  "Honoraires": "bg-forest-50 text-forest-700",
};

export default function GlossaireSearch({
  items,
  showAZ = false,
}: {
  items: GlossaireItem[];
  showAZ?: boolean;
}) {
  const [query, setQuery]   = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const letters = useMemo(() => {
    const set = new Set(items.map((i) => i.terme[0].toUpperCase()));
    return Array.from(set).sort();
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchQuery =
        !query ||
        item.terme.toLowerCase().includes(query.toLowerCase()) ||
        item.domaine.toLowerCase().includes(query.toLowerCase()) ||
        item.definition.toLowerCase().includes(query.toLowerCase());
      const matchLetter =
        !letter || item.terme[0].toUpperCase() === letter;
      return matchQuery && matchLetter;
    });
  }, [items, query, letter]);

  return (
    <div>
      {/* Barre de recherche */}
      <div className="relative max-w-lg mx-auto mb-6">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="glossaire-search"
          type="text"
          placeholder="Rechercher un terme juridique…"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setLetter(null); }}
          aria-label="Rechercher un terme juridique"
          className="w-full pl-11 pr-10 py-3 border border-gray-200 rounded-2xl text-sm text-stone-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent bg-white shadow-sm"
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Effacer la recherche" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Navigation A-Z */}
      {showAZ && !query && (
        <div className="flex flex-wrap gap-1.5 justify-center mb-8">
          <button
            onClick={() => setLetter(null)}
            className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
              !letter ? "bg-forest-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-forest-50 hover:text-forest-700"
            }`}
          >
            Tous
          </button>
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => setLetter(l === letter ? null : l)}
              className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                letter === l ? "bg-forest-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-forest-50 hover:text-forest-700"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      {/* Liste */}
      {filtered.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-10">Aucun terme trouvé pour &quot;{query}&quot;</p>
      ) : (
        <div className="max-w-4xl mx-auto divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
          {filtered.map((item) => (
            <Link
              key={item.terme}
              href={item.href}
              className="group flex items-start gap-4 px-6 py-4 hover:bg-forest-50 transition-colors duration-150"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-serif font-semibold text-stone-950 group-hover:text-forest-700 transition-colors">
                    {item.terme}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${domaineColors[item.domaine] ?? "bg-stone-100 text-stone-600"}`}>
                    {item.domaine}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.definition}</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-forest-500 flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>
      )}

      {(query || letter) && filtered.length > 0 && (
        <p className="text-center text-xs text-gray-400 mt-4">
          {filtered.length} terme{filtered.length > 1 ? "s" : ""}
          {query ? ` pour "${query}"` : letter ? ` commençant par "${letter}"` : ""}
        </p>
      )}
    </div>
  );
}
