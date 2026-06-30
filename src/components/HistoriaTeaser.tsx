"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const HITOS = [
  { year: "1975", label: "Inicio en artes marciales" },
  { year: "2010", label: "Fundación de la academia" },
  { year: "2015", label: "Sukata Internacional" },
  { year: "2025", label: "+10 años de legado" },
];

export default function HistoriaTeaser() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="historia-teaser"
      ref={ref}
      style={{ background: "#1A0A0A", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Background photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/llave-de-brazo.webp"
          alt="El Camino del Guerrero — JL Samuray BJJ Academy"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          loading="lazy"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(12,4,4,0.93) 0%, rgba(26,10,10,0.88) 60%, rgba(12,4,4,0.93) 100%)" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "4rem", alignItems: "center" }}>

          {/* Left: text */}
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
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: "1rem" }}>
              Más de <strong style={{ color: "#FFFFFF" }}>50 años de trayectoria marcial</strong> forjaron la esencia de lo que hoy es la JL Samuray BJJ Academy. Cada hito en el camino del Profesor Jorge Omar Ledesma fue un paso más hacia la construcción de una familia.
            </p>
            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem" }}>
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

          {/* Right: timeline mini */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div style={{ position: "relative", paddingLeft: "2rem" }}>
              <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, transparent, #8B1A1A 10%, #8B1A1A 90%, transparent)" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {HITOS.map((hito, i) => (
                  <div
                    key={hito.year}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
                    }}
                  >
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#8B1A1A", border: "3px solid rgba(139,26,26,0.3)", flexShrink: 0, position: "relative", left: "-1.875rem", zIndex: 1 }} />
                    <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.625rem", padding: "1rem 1.25rem", flex: 1 }}>
                      <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#E87070", display: "block", lineHeight: 1, marginBottom: "0.25rem" }}>{hito.year}</span>
                      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)" }}>{hito.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #historia-teaser { padding: 4rem 1.25rem !important; }
        }
        @media (max-width: 640px) {
          #historia-teaser { padding: 3rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
