"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HistoriaHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", background: "#0c0404" }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/foto-3-historia.webp"
          alt="Historia de JL Samuray BJJ Academy"
          fill
          style={{ objectFit: "cover", objectPosition: "center 10%" }}
          sizes="100vw"
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,2,2,0.5) 0%, rgba(8,2,2,0.6) 40%, rgba(8,2,2,0.9) 80%, #0c0404 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(8,2,2,0.4) 0%, transparent 70%)" }} />
      </div>

      {/* Breadcrumb */}
      <div
        style={{
          position: "absolute",
          top: "calc(72px + 1.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.08em",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
          width: "100%",
          maxWidth: "1100px",
          padding: "0 1.5rem",
        }}
      >
        <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: "#E87070" }}>Historia</span>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "calc(72px + clamp(2rem, 5vw, 4rem)) clamp(1rem, 4vw, 1.5rem) 0", width: "100%" }}>
        <div style={{ paddingBottom: "4rem" }}>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#E87070",
              display: "block",
              marginBottom: "1rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            · Sukata Internacional · Desde 1975 ·
          </span>
          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "0.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            El Camino
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #8B1A1A 0%, #A31919 55%, #991515 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "2rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            del Guerrero
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(0.9375rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "580px",
              marginBottom: "3rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            Más de 50 años de dedicación a las artes marciales. La historia del Profesor Jorge Omar Ledesma es la historia de una vida entregada al tatami, a sus alumnos y a los valores que definen a un verdadero guerrero.
          </p>

        </div>
      </div>

    </section>
  );
}
