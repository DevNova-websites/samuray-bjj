import { ContactEmailPayload } from "@/interfaces/ContactEmailPayload";
import { buildEmailHtml } from "@/utils/mailTemplate";
import { Resend } from "resend";

export const sendContactEmail = async (payload: ContactEmailPayload) => {
  const apiKey = process.env.RESEND_API_KEY ?? process.env.RESEND_API;
  const to = process.env.CONTACT_EMAIL ?? "samurayledesma@gmail.com";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuraybjj.com";
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "JL Samuray BJJ Academy <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("Falta configurar RESEND_API_KEY o RESEND_API.");
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Nueva consulta de ${payload.nombre}`,
    html: buildEmailHtml(payload, siteUrl),
    text: "",
  });

  if (error) {
    throw new Error(error.message ?? "Resend no pudo enviar el email.");
  }

  return data;
};
