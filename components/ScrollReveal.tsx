"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: "normal" | "far";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = "normal",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si l'utilisateur a demandé de réduire les animations,
    // on rend l'élément visible immédiatement sans observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls =
    direction === "left" && distance === "far" ? "reveal-left-far"
    : direction === "left"  ? "reveal-left"
    : direction === "right" ? "reveal-right"
    : direction === "down"  ? "reveal-down"
    : "reveal";

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
}
