import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Timeline from "@/components/Timeline";
import Credenciales from "@/components/Credenciales";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Timeline />
        <Credenciales />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
