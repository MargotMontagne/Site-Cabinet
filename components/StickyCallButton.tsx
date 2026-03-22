"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-500",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <a
        href="tel:0744787718"
        className="flex items-center gap-3 bg-forest-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-forest-700 active:scale-95 transition-all duration-200"
        aria-label="Appeler Maître Montagne"
      >
        <div className="relative">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-forest-600" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-forest-200 leading-none">Appeler maintenant</span>
          <span className="text-sm font-semibold leading-tight">07 44 78 77 18</span>
        </div>
      </a>
    </div>
  );
}
