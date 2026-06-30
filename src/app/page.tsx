import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Clases from "@/components/Clases";
import CredencialesTeaser from "@/components/CredencialesTeaser";
import PromesaTatami from "@/components/PromesaTatami";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import HistoriaTeaser from "@/components/HistoriaTeaser";

const Chatbot = dynamic(() => import("@/components/Chatbot"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Clases />
        <HistoriaTeaser />
        <CredencialesTeaser />
        <PromesaTatami />
        <Contacto />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
