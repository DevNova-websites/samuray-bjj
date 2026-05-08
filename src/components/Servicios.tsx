"use client";

import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const SCHEDULE = [
  { key: "lunes",    label: "Lunes",     abrev: "LUN", hora: "20:00", fin: "21:15" },
  { key: "miercoles", label: "Miércoles", abrev: "MIÉ", hora: "20:00", fin: "21:15" },
  { key: "viernes",  label: "Viernes",   abrev: "VIE", hora: "20:00", fin: "21:15" },
];

export default function Servicios() {
  const { ref, visible } = useInView();

  return (
    <section
      id="servicios"
      ref={ref}
      style={{ background: "#F5F3EF", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(185,28,28,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(185,28,28,0.2), transparent)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "1rem" }}>
            Calendario de Clases
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
            Horarios
          </h2>
          <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)", maxWidth: "180px", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", color: "#6B6460", maxWidth: "400px", margin: "0 auto", lineHeight: 1.65 }}>
            Clases de Brazilian Jiu-Jitsu para adultos, tres veces por semana.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          marginBottom: "2.5rem",
        }}>
          {SCHEDULE.map((dia, i) => (
            <div
              key={dia.key}
              style={{
                background: "#FFFFFF",
                border: "1px solid #D4D0C8",
                borderRadius: "1rem",
                padding: "2rem 1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
              }}
            >
              {/* Day abbrev */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "rgba(139,26,26,0.07)",
                border: "1px solid rgba(139,26,26,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "#8B1A1A", letterSpacing: "0.08em" }}>
                  {dia.abrev}
                </span>
              </div>

              {/* Full day name */}
              <div>
                <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "1.375rem", textTransform: "uppercase", color: "#1A1615", letterSpacing: "0.04em", lineHeight: 1 }}>
                  {dia.label}
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: "32px", height: "2px", background: "#8B1A1A", borderRadius: "1px" }} />

              {/* Time */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Clock size={14} color="#8B1A1A" />
                <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#1A1615", letterSpacing: "0.02em" }}>
                  {dia.hora}
                </span>
              </div>

              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#9C9890" }}>
                hasta las {dia.fin} hs
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note + CTA */}
        <div style={{
          textAlign: "center",
          padding: "1.75rem 2rem",
          border: "1px solid rgba(185,28,28,0.12)",
          borderRadius: "0.875rem",
          background: "rgba(185,28,28,0.025)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", color: "#6B6460", lineHeight: 1.6, marginBottom: "1rem" }}>
            La primera clase es de prueba y totalmente gratuita.
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#8B1A1A",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 1.75rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              boxShadow: "0 4px 16px rgba(139,26,26,0.25)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A31919"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Reservar clase gratuita
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #svc-grid-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
