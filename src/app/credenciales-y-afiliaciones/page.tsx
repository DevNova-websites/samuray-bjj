import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Credenciales from "@/components/Credenciales";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Credenciales & Afiliaciones | JL Samuray BJJ Academy",
  description: "Avalados por los organismos más reconocidos del Jiu-Jitsu a nivel mundial: IBJJF, CBJJE, Academia IBJJF y Sukata Internacional.",
  openGraph: {
    title: "Credenciales & Afiliaciones | JL Samuray BJJ Academy",
    description: "Avalados por los organismos más reconocidos del Jiu-Jitsu a nivel mundial.",
    type: "website",
    locale: "es_AR",
    url: "https://samuraybjj.com/credenciales-y-afiliaciones",
    siteName: "JL Samuray BJJ Academy",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Credenciales y Afiliaciones JL Samuray BJJ Academy" }],
  },
};

export default function CredencialesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px" }}>
        <Credenciales />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
