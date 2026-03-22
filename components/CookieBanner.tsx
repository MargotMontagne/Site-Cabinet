"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (visible && acceptBtnRef.current) {
      acceptBtnRef.current.focus();
    }
  }, [visible]);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl transition-all duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Politique de cookies"
    >
      <div className="section-container py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-stone-950">Nous utilisons des cookies</span> pour améliorer votre expérience sur ce site. En continuant votre navigation, vous acceptez notre{" "}
              <Link href="/politique-confidentialite" className="text-forest-600 underline hover:text-forest-700">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="text-sm text-gray-500 hover:text-stone-950 transition-colors px-4 py-2"
            >
              Refuser
            </button>
            <button
              ref={acceptBtnRef}
              onClick={accept}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
