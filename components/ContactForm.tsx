"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";

const schema = z.object({
  nom: z
    .string()
    .min(2, "Veuillez indiquer votre nom complet")
    .max(100, "Nom trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'\-]+$/, "Nom invalide"),
  email: z.string().email("Adresse email invalide"),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\s?[0-9]{2}){4}$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  domaine: z.string().min(1, "Veuillez sélectionner un domaine"),
  message: z
    .string()
    .min(20, "Votre message doit comporter au moins 20 caractères")
    .max(2000, "Message trop long (max 2000 caractères)"),
  rgpd: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  honeypot: z.string().max(0, "Erreur de validation").optional(),
});

type FormData = z.infer<typeof schema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return; // Anti-spam honeypot

    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mwvrjlzg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        reset();
        // Événement GTM / GA4
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({ event: "form_submit", form_name: "contact" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (error?: { message?: string }) =>
    clsx(
      "w-full px-4 py-3 rounded-sm text-sm text-stone-950 bg-white border transition-all duration-200 outline-none",
      error
        ? "border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300"
        : "border-gray-200 focus:border-forest-600 focus:ring-1 focus:ring-forest-600/20"
    );

  if (status === "success") {
    return (
      <div role="status" className="text-center py-12">
        <div className="w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-stone-950 mb-2">Message envoyé</h3>
        <p className="text-gray-500 text-sm mb-6">
          Maître Montagne a bien reçu votre message et vous répondra dans les meilleurs délais. Pour une urgence, appelez directement le <a href="tel:0744787718" className="text-forest-600 font-medium">07 44 78 77 18</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline text-sm"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot (anti-spam, caché visuellement) */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden>
        <input {...register("honeypot")} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block text-xs font-medium text-gray-700 mb-1.5">
            Nom complet <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="name"
            placeholder="Jean Dupont"
            className={inputClass(errors.nom)}
            aria-required={true}
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            {...register("nom")}
          />
          {errors.nom && (
            <p id="nom-error" className="mt-1 text-xs text-red-500">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jean.dupont@email.com"
            className={inputClass(errors.email)}
            aria-required={true}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telephone" className="block text-xs font-medium text-gray-700 mb-1.5">
            Téléphone
          </label>
          <input
            id="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className={inputClass(errors.telephone)}
            aria-invalid={!!errors.telephone}
            aria-describedby={errors.telephone ? "telephone-error" : undefined}
            {...register("telephone")}
          />
          {errors.telephone && (
            <p id="telephone-error" className="mt-1 text-xs text-red-500">{errors.telephone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="domaine" className="block text-xs font-medium text-gray-700 mb-1.5">
            Domaine concerné <span className="text-red-400" aria-hidden="true">*</span>
          </label>
          <select
            id="domaine"
            className={inputClass(errors.domaine)}
            aria-required={true}
            aria-invalid={!!errors.domaine}
            aria-describedby={errors.domaine ? "domaine-error" : undefined}
            {...register("domaine")}
            defaultValue=""
          >
            <option value="" disabled>Sélectionnez un domaine</option>
            <option value="droit-penal">Droit pénal</option>
            <option value="droit-mineurs">Droit des mineurs</option>
            <option value="droit-famille">Droit de la famille</option>
            <option value="droit-routier">Droit routier</option>
            <option value="droit-civil">Droit civil</option>
            <option value="prejudice-corporel">Préjudice corporel</option>
            <option value="autre">Autre</option>
          </select>
          {errors.domaine && (
            <p id="domaine-error" className="mt-1 text-xs text-red-500">{errors.domaine.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5">
          Votre message <span className="text-red-400" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Décrivez brièvement votre situation. Ces informations sont strictement confidentielles."
          className={clsx(inputClass(errors.message), "resize-none")}
          aria-required={true}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="rgpd" className="flex items-start gap-3 cursor-pointer group">
          <input
            id="rgpd"
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-forest-600 focus:ring-forest-600 flex-shrink-0"
            {...register("rgpd")}
          />
          <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
            J&apos;accepte que mes données personnelles soient traitées dans le cadre de ma demande de contact, conformément à la{" "}
            <a href="/politique-confidentialite" className="text-forest-600 underline">
              politique de confidentialité
            </a>
            . Ces données ne seront pas transmises à des tiers. <span className="text-red-400" aria-hidden="true">*</span>
          </span>
        </label>
        {errors.rgpd && (
          <p className="mt-1 text-xs text-red-500">{errors.rgpd.message}</p>
        )}
      </div>

      {status === "error" && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-sm p-4 text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou appeler directement le{" "}
          <a href="tel:0744787718" className="font-medium underline">07 44 78 77 18</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-disabled={status === "loading"}
        onClick={(e) => { if (status === "loading") { e.preventDefault(); return; } }}
        className={clsx(
          "btn-primary w-full justify-center py-4",
          status === "loading" && "opacity-70 cursor-not-allowed"
        )}
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Envoyer le message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Vos informations sont protégées et soumises au secret professionnel de l&apos;avocat.
      </p>
    </form>
  );
}
