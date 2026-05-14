import { ContactEmailPayload } from "@/interfaces/ContactEmailPayload";
import {
  sendContactEmail,
} from "../../src/services/emailService";

interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

const headers = {
  "Content-Type": "application/json",
};

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const validatePayload = (payload: Partial<ContactEmailPayload
>) => {
  if (!payload.nombre?.trim()) return "El nombre es requerido.";
  if (!payload.email?.trim()) return "El email es requerido.";
  if (!isValidEmail(payload.email)) return "Email invalido.";
  if (!payload.mensaje?.trim()) return "El mensaje es requerido.";
  return null;
};

export const handler = async (event: NetlifyEvent) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Metodo no permitido." }),
    };
  }

  try {
    const payload = JSON.parse(event.body ?? "{}") as ContactEmailPayload;
    const validationError = validatePayload(payload);

    if (validationError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: validationError }),
      };
    }

    const data = await sendContactEmail({
      nombre: payload.nombre.trim(),
      email: payload.email.trim(),
      telefono: payload.telefono?.trim(),
      nivel: payload.nivel?.trim(),
      mensaje: payload.mensaje.trim(),
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, id: data?.id }),
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "No se pudo enviar el mensaje.";

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: message }),
    };
  }
};
