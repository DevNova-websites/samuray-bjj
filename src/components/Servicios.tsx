"use client";

import { useEffect, useRef, useState } from "react";
import { Users, User, Trophy, Target, Zap, Heart } from "lucide-react";

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

const CLASES = [
  {
    icon: User,
    tag: "Fundamentos",
    title: "Principiantes",
    desc: "El punto de partida ideal. Aprendé la base del Jiu-Jitsu desde cero: posiciones, caídas, escapes y los primeros movimientos en el piso. Sin experiencia previa requerida. Kimono blanco los lunes y viernes.",
    features: ["Técnicas básicas de guardia", "Barridos y escapes", "Terminaciones fundamentales", "Seguridad en el tatami"],
    accent: "#00B4B4",
  },
  {
    icon: Zap,
    tag: "Desarrollo",
    title: "Intermedios",
    desc: "Para los que ya conocen los fundamentos. Profundizamos técnicas, encadenamos movimientos y comenzamos a desarrollar un juego propio. Kimono negro los miércoles.",
    features: ["Combinaciones avanzadas", "Juego de guardia activo", "Pasadas de guardia", "Estrategia situacional"],
    accent: "#00B4B4",
  },
  {
    icon: Trophy,
    tag: "Alto Rendimiento",
    title: "Avanzados",
    desc: "Clases de élite para cintas intermedias y avanzadas. Entrenamiento orientado a la competencia bajo reglamento IBJJF, análisis táctico y refinamiento técnico.",
    features: ["Preparación para torneos", "Reglamento IBJJF", "Drilling intensivo", "Sparring competitivo"],
    accent: "#CC0000",
  },
  {
    icon: Heart,
    tag: "Familia",
    title: "Niños y Jóvenes",
    desc: "Programa especial para los más pequeños. El Jiu-Jitsu como herramienta de desarrollo personal: disciplina, respeto, confianza y los valores que el código de la academia nos enseña.",
    features: ["Metodología lúdica", "Valores y disciplina", "Coordinación motriz", "Defensa personal básica"],
    accent: "#00B4B4",
  },
  {
    icon: Target,
    tag: "Especialización",
    title: "Defensa Personal",
    desc: "Técnicas aplicadas al mundo real. Aprendé a manejar situaciones de riesgo con calma y efectividad usando principios del Jiu-Jitsu. Control sin violencia.",
    features: ["Situaciones reales", "Control sin violencia", "Conciencia situacional", "Para toda la familia"],
    accent: "#00B4B4",
  },
  {
    icon: Users,
    tag: "Comunidad",
    title: "Open Mat",
    desc: "Sesiones libres de sparring para todos los niveles. Intercambiá técnicas, probá nuevos movimientos y conectá con la hermandad del tatami. OSS.",
    features: ["Sparring libre", "Todos los niveles", "Intercambio técnico", "Ambiente colaborativo"],
    accent: "#00B4B4",
  },
];

export default function Servicios() {
  const { ref, visible } = useInView();

  return (
    <section
      id="servicios"
      ref={ref}
      style={{
        background: "#111111",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.3), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00B4B4",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Lo que ofrecemos
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#F5F5F5",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Clases para Todos los Niveles
          </h2>
          <hr
            style={{
              height: "3px",
              border: "none",
              background: "linear-gradient(90deg, transparent, #00B4B4, transparent)",
              maxWidth: "180px",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              color: "#737373",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Desde el primer día en el tatami hasta la competencia de alto nivel — tenemos el programa ideal para vos.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {CLASES.map((clase, i) => {
            const Icon = clase.icon;
            return (
              <div
                key={clase.title}
                className="card-hover"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid #1a1a1a",
                  borderRadius: "0.875rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s`,
                  cursor: "default",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "0.625rem",
                      background: clase.accent === "#CC0000" ? "rgba(204,0,0,0.12)" : "rgba(0,180,180,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={clase.accent} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.625rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: clase.accent,
                      background: clase.accent === "#CC0000" ? "rgba(204,0,0,0.1)" : "rgba(0,180,180,0.1)",
                      border: `1px solid ${clase.accent}33`,
                      padding: "0.25rem 0.625rem",
                      borderRadius: "999px",
                    }}
                  >
                    {clase.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                    textTransform: "uppercase",
                    color: "#F5F5F5",
                    lineHeight: 1.1,
                  }}
                >
                  {clase.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "#737373",
                    flex: 1,
                  }}
                >
                  {clase.desc}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {clase.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.8125rem",
                        color: "#a3a3a3",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: clase.accent,
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(0,180,180,0.3), transparent)",
                  }}
                />

                {/* CTA */}
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "none",
                    border: "none",
                    color: clase.accent,
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    letterSpacing: "0.04em",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.875rem"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "0.5rem"; }}
                >
                  Consultar clase
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Schedule + bottom note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.75rem 2rem",
            border: "1px solid rgba(0,180,180,0.15)",
            borderRadius: "0.75rem",
            background: "rgba(0,180,180,0.03)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}
        >
          {/* Schedule */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "1.25rem",
            }}
          >
            {[
              { day: "Lunes", time: "20:00 – 21:15", gi: "Gi" },
              { day: "Miércoles", time: "20:00 – 21:15", gi: "Gi" },
              { day: "Viernes", time: "20:00 – 21:15", gi: "Gi" },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    textTransform: "uppercase",
                    color: "#F5F5F5",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    color: "#00B4B4",
                  }}
                >
                  {item.time}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6875rem",
                    color: "#525252",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.gi}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.2), transparent)",
              marginBottom: "1.25rem",
            }}
          />

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.9375rem",
              color: "#a3a3a3",
              lineHeight: 1.6,
            }}
          >
            ¿No sabés qué clase es la ideal para vos?{" "}
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "none",
                border: "none",
                color: "#00B4B4",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "inherit",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Contactanos y te asesoramos
            </button>
            . La primera clase de prueba es gratuita.
          </p>
        </div>
      </div>
    </section>
  );
}
