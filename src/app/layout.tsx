import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JL Samuray BJJ Academy | Jiu-Jitsu Brasileño",
  description:
    "Academia de Brazilian Jiu-Jitsu con más de 10 años de experiencia. Afiliada a IBJJF, CBJJE y Sukata Internacional. Dirigida por el Profesor Jorge Omar Ledesma.",
  keywords: [
    "jiu jitsu", "BJJ", "Samuray", "academia", "artes marciales",
    "Ledesma", "IBJJF", "Sukata", "grappling", "defensa personal",
  ],
  openGraph: {
    title: "JL Samuray BJJ Academy",
    description: "Academia de Brazilian Jiu-Jitsu — Sukata Internacional",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "#0a0a0a", color: "#F5F5F5", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
