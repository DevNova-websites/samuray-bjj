"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock } from "lucide-react";

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
  {
    key: "lunes",
    label: "Lunes",
    abrev: "LUN",
    clases: [
      { tipo: "open-mat", hora: "19:00", fin: "20:00" },
      { tipo: "adultos",  hora: "20:00", fin: "21:15" },
    ],
  },
  {
    key: "martes",
    label: "Martes",
    abrev: "MAR",
    clases: [],
  },
  {
    key: "miercoles",
    label: "Miércoles",
    abrev: "MIÉ",
    clases: [
      { tipo: "open-mat", hora: "19:00", fin: "20:00" },
      { tipo: "adultos",  hora: "20:00", fin: "21:15" },
    ],
  },
  {
    key: "jueves",
    label: "Jueves",
    abrev: "JUE",
    clases: [],
  },
  {
    key: "viernes",
    label: "Viernes",
    abrev: "VIE",
    clases: [
      { tipo: "open-mat", hora: "18:30", fin: "20:00" },
      { tipo: "adultos",  hora: "20:00", fin: "21:15" },
    ],
  },
];

const CLASS_CONFIG = {
  adultos: {
    label: "Adultos",
    color: "#1B4A8C",
    bg: "rgba(27,74,140,0.07)",
    border: "rgba(27,74,140,0.18)",
    dot: "#1B4A8C",
  },
  "open-mat": {
    label: "Open Mat",
    color: "#5E3090",
    bg: "rgba(94,48,144,0.07)",
    border: "rgba(94,48,144,0.18)",
    dot: "#5E3090",
  },
};

export default function Servicios() {
  const { ref, visible } = useInView();

  return (
    <section
      id="servicios"
      ref={ref}
      style={{ background: "#F5F3EF", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(27,74,140,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(27,74,140,0.2), transparent)" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#1B4A8C", display: "block", marginBottom: "1rem" }}>
            Calendario de Clases
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
            Horarios
          </h2>
          <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #1B4A8C, transparent)", maxWidth: "180px", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", color: "#6B6460", maxWidth: "460px", margin: "0 auto", lineHeight: 1.65 }}>
            Clases regulares de adultos más Open Mat para sparring libre.
            La primera clase de prueba es gratuita.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.75rem", marginBottom: "2.5rem", flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.15s" }}>
          {(["adultos", "open-mat"] as const).map((key) => {
            const cfg = CLASS_CONFIG[key];
            return (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: cfg.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#6B6460" }}>{cfg.label}</span>
              </div>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "2px", background: "#D4D0C8", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#9C9890" }}>Libre</span>
          </div>
        </div>

        {/* Calendar grid */}
        <div
          id="svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0.75rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
          }}
        >
          {SCHEDULE.map((dia) => {
            const isEmpty = dia.clases.length === 0;
            return (
              <div
                key={dia.key}
                style={{
                  background: isEmpty ? "rgba(212,208,200,0.3)" : "#FFFFFF",
                  border: "1px solid #D4D0C8",
                  borderRadius: "0.875rem",
                  overflow: "hidden",
                  opacity: isEmpty ? 0.5 : 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Day header */}
                <div style={{
                  padding: "0.875rem 0.75rem 0.75rem",
                  borderBottom: "1px solid #EEECEA",
                  background: isEmpty ? "transparent" : "rgba(27,74,140,0.03)",
                  textAlign: "center",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem", marginBottom: "0.125rem" }}>
                    <Calendar size={11} color={isEmpty ? "#C4C0B8" : "#1B4A8C"} />
                    <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "1rem", textTransform: "uppercase", color: isEmpty ? "#B0ABA4" : "#1A1615", letterSpacing: "0.06em" }}>
                      {dia.abrev}
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.5625rem", color: isEmpty ? "#C4C0B8" : "#9C9890", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {dia.label}
                  </span>
                </div>

                {/* Class blocks */}
                <div style={{ padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                  {isEmpty ? (
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px" }}>
                      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.625rem", color: "#C4C0B8", letterSpacing: "0.1em", textTransform: "uppercase" }}>—</span>
                    </div>
                  ) : (
                    dia.clases.map((clase) => {
                      const cfg = CLASS_CONFIG[clase.tipo as keyof typeof CLASS_CONFIG];
                      return (
                        <div
                          key={clase.tipo}
                          style={{
                            background: cfg.bg,
                            border: `1px solid ${cfg.border}`,
                            borderRadius: "0.5rem",
                            padding: "0.625rem 0.75rem",
                          }}
                        >
                          <span style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.5rem",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: cfg.color,
                            display: "block",
                            marginBottom: "0.25rem",
                          }}>
                            {cfg.label}
                          </span>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.125rem" }}>
                            <Clock size={10} color={cfg.color} style={{ flexShrink: 0 }} />
                            <span style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "#1A1615", letterSpacing: "0.01em" }}>
                              {clase.hora}
                            </span>
                          </div>
                          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.625rem", color: "#6B6460", letterSpacing: "0.02em" }}>
                            hasta {clase.fin} hs
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: "2.5rem",
          textAlign: "center",
          padding: "1.625rem 2rem",
          border: "1px solid rgba(27,74,140,0.12)",
          borderRadius: "0.75rem",
          background: "rgba(27,74,140,0.025)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.55s",
        }}>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", color: "#6B6460", lineHeight: 1.6 }}>
            ¿Querés reservar tu lugar o tenés alguna consulta?{" "}
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "none", border: "none", color: "#1B4A8C", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Contactanos
            </button>
            {" "}— la primera clase es gratuita.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          #svc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
