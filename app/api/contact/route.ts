import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  nom: z
    .string()
    .min(2)
    .max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s'\-]+$/),
  email: z.string().email(),
  telephone: z.string().optional(),
  domaine: z.string().min(1),
  message: z.string().min(20).max(2000),
  rgpd: z.boolean().refine((v) => v === true),
  honeypot: z.string().max(0).optional(),
});

// Simple rate limiting in-memory (per serverless instance)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  if (!limit || now > limit.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 }); // 1 min window
    return true;
  }
  if (limit.count >= 5) return false; // max 5 per minute
  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Veuillez réessayer dans une minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { nom, email, telephone, domaine, message, honeypot } = parsed.data;

  // Honeypot check
  if (honeypot) {
    return NextResponse.json({ success: true }); // Silently ignore bots
  }

  // Email sending (configure with your SMTP credentials)
  try {
    // Uncomment and configure when you have SMTP credentials:
    /*
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Cabinet Montagne — Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CABINET_EMAIL ?? "contact@avocat-montagne.fr",
      replyTo: email,
      subject: `[Cabinet Montagne] Nouveau message — ${domaine}`,
      text: [
        `Nom : ${nom}`,
        `Email : ${email}`,
        `Téléphone : ${telephone || "Non renseigné"}`,
        `Domaine : ${domaine}`,
        ``,
        `Message :`,
        message,
      ].join("\n"),
      html: `
        <h2 style="color:#1B4332">Nouveau message via le site</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Nom</td><td style="padding:8px;border:1px solid #eee">${nom}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Téléphone</td><td style="padding:8px;border:1px solid #eee">${telephone || "Non renseigné"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Domaine</td><td style="padding:8px;border:1px solid #eee">${domaine}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });
    */

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact form]", { nom, email, telephone, domaine, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API] Email error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
