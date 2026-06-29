import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Comunidad from "@/components/Comunidad";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Comunidad | JL Samuray BJJ Academy",
  description: "Conocé la comunidad de JL Samuray BJJ Academy. Una familia que se forja en el tatami: compañerismo, respeto, crecimiento personal y hermandad.",
  openGraph: {
    title: "Comunidad | JL Samuray BJJ Academy",
    description: "Una familia que se forja en el tatami: compañerismo, respeto, crecimiento personal y hermandad.",
    type: "website",
    locale: "es_AR",
    url: "https://samuraybjj.com/comunidad",
    siteName: "JL Samuray BJJ Academy",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Comunidad JL Samuray BJJ Academy" }],
  },
};

export default function ComunidadPage() {
  return (
    <>
      <Navbar />
      <main>
        <Comunidad />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
