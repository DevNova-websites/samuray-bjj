import { ContactEmailPayload } from "@/interfaces/ContactEmailPayload";

const escapeHtml = (value?: string | null) => {
  if (!value) return "-";

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const normalizeSiteUrl = (siteUrl: string) => siteUrl.replace(/\/$/, "");

export const buildEmailHtml = (
  payload: ContactEmailPayload,
  siteUrl = "https://samuraybjj.com"
) => {
  const logoUrl = `${normalizeSiteUrl(siteUrl)}/images/logo-nuevo.png`;

  return `
  <div style="
    margin: 0;
    padding: 0;
    background-color: #F5F3EF;
    font-family: Arial, Helvetica, sans-serif;
    color: #1A1615;
  ">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="
      width: 100%;
      background-color: #F5F3EF;
      padding: 24px 12px;
    ">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="
            max-width: 620px;
            width: 100%;
            background-color: #FFFFFF;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #D4D0C8;
          ">
            <tr>
              <td style="
                background-color: #1A1615;
                color: #FFFFFF;
                padding: 22px 28px;
              ">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="
                  width: 100%;
                  border-collapse: collapse;
                ">
                  <tr>
                    <td width="76" valign="middle" style="width: 76px; padding: 0 16px 0 0;">
                      <img
                        src="${logoUrl}"
                        width="64"
                        height="64"
                        alt="JL Samuray BJJ Academy"
                        style="
                          display: block;
                          width: 64px;
                          height: 64px;
                          border-radius: 999px;
                          object-fit: cover;
                          border: 1px solid rgba(255,255,255,0.35);
                        "
                      />
                    </td>
                    <td valign="middle" style="padding: 0;">
                      <h1 style="
                        margin: 0;
                        font-size: 22px;
                        line-height: 1.3;
                        font-weight: 700;
                      ">
                        Nueva consulta desde samuraybjj.com
                      </h1>
                      <p style="
                        margin: 6px 0 0;
                        font-size: 14px;
                        color: #E8E2D8;
                      ">
                        Se recibio un nuevo mensaje desde el formulario de contacto.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="
                  width: 100%;
                  border-collapse: collapse;
                ">
                  <tr>
                    <td style="padding: 10px 0; font-size: 14px; color: #7A716A; width: 130px;">
                      Nombre
                    </td>
                    <td style="padding: 10px 0; font-size: 15px; color: #1A1615; font-weight: 600;">
                      ${escapeHtml(payload.nombre)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-size: 14px; color: #7A716A;">
                      Email
                    </td>
                    <td style="padding: 10px 0; font-size: 15px; color: #1A1615; font-weight: 600;">
                      ${escapeHtml(payload.email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-size: 14px; color: #7A716A;">
                      Telefono
                    </td>
                    <td style="padding: 10px 0; font-size: 15px; color: #1A1615; font-weight: 600;">
                      ${escapeHtml(payload.telefono)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 10px 0; font-size: 14px; color: #7A716A;">
                      Nivel
                    </td>
                    <td style="padding: 10px 0; font-size: 15px; color: #1A1615; font-weight: 600;">
                      ${escapeHtml(payload.nivel)}
                    </td>
                  </tr>
                </table>

                <div style="
                  margin-top: 24px;
                  padding-top: 20px;
                  border-top: 1px solid #E6E0D8;
                ">
                  <p style="
                    margin: 0 0 10px;
                    font-size: 14px;
                    color: #7A716A;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                  ">
                    Mensaje
                  </p>

                  <div style="
                    white-space: pre-wrap;
                    padding: 16px;
                    background-color: #F5F3EF;
                    border: 1px solid #D4D0C8;
                    border-radius: 10px;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #1A1615;
                  ">${escapeHtml(payload.mensaje)}</div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="
                padding: 18px 28px;
                background-color: #FAF8F4;
                border-top: 1px solid #E6E0D8;
                font-size: 12px;
                color: #7A716A;
                text-align: center;
              ">
                Este email fue generado automaticamente desde el formulario de contacto de la web.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
`;
};
