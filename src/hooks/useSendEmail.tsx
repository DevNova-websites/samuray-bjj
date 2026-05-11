import { ContactEmailPayload } from "@/interfaces/ContactEmailPayload";

export interface SendEmailResponse {
  ok: boolean;
  id?: string;
}

const EMAIL_ENDPOINT = "/.netlify/functions/send-email";

export default function useSendEmail() {
  const sendEmail = async (
    payload: ContactEmailPayload
  ): Promise<SendEmailResponse> => {
    const response = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(
        result?.error ?? "No se pudo enviar el mensaje. Intentá nuevamente."
      );
    }

    return result;
  };

  return sendEmail;
}
