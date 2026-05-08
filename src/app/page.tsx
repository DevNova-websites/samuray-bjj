import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Clases from "@/components/Clases";
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
        <Clases />
        <Timeline />
        <Credenciales />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
