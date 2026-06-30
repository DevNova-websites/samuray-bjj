"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function HistoriaTeaser() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="historia-teaser"
      ref={ref}
      style={{ background: "#1A0A0A", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Background photo — visible */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/llave-de-brazo.webp"
          alt="El Camino del Guerrero — JL Samuray BJJ Academy"
          fill
          className="historia-banner-img"
          style={{ objectFit: "cover", objectPosition: "15% center" }}
          sizes="100vw"
          loading="lazy"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,3,3,0.85) 0%, rgba(10,3,3,0.55) 50%, rgba(10,3,3,0.2) 100%)" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "520px" }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E87070", display: "block", marginBottom: "1rem" }}>
            Nuestra Historia
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.25rem)", textTransform: "uppercase", color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem" }}>
            El Camino<br />
            <span style={{ background: "linear-gradient(135deg, #8B1A1A 0%, #A31919 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              del Guerrero
            </span>
          </h2>
          <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #8B1A1A, transparent)", marginBottom: "1.5rem", borderRadius: "2px" }} />
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: "1rem" }}>
            Más de <strong style={{ color: "#FFFFFF" }}>50 años de trayectoria marcial</strong> forjaron la esencia de lo que hoy es la JL Samuray BJJ Academy. Cada hito en el camino del Mestre Jorge Omar Ledesma fue un paso más hacia la construcción de una familia.
          </p>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem" }}>
            Desde sus primeros pasos en 1975 hasta los más de 10 años de academia, esta es la historia de una vida dedicada al tatami.
          </p>
          <Link
            href="/historia"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              background: "#8B1A1A",
              border: "2px solid #8B1A1A",
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 20px rgba(185,28,28,0.3)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A31919"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(185,28,28,0.4)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(185,28,28,0.3)"; }}
          >
            Ver la historia completa →
          </Link>
        </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #historia-teaser { padding: 4rem 1.25rem !important; }
          #historia-teaser .historia-banner-img { object-position: center !important; }
        }
        @media (max-width: 640px) {
          #historia-teaser { padding: 3rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
