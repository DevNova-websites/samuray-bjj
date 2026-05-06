"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Medal, Star, Globe, CheckCircle } from "lucide-react";

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

const CREDS = [
  {
    icon: Shield,
    org: "IBJJF",
    fullName: "International Brazilian Jiu-Jitsu Federation",
    number: "32285",
    label: "N° de Miembro",
    desc: "Miembro oficial del organismo rector del Jiu-Jitsu a nivel mundial.",
    color: "#00B4B4",
  },
  {
    icon: Award,
    org: "CBJJE",
    fullName: "Confederación Brasileña de Jiu-Jitsu Esportivo",
    number: "1080",
    label: "N° de Registro",
    desc: "Registrado en la confederación oficial del Jiu-Jitsu de Brasil.",
    color: "#00B4B4",
  },
  {
    icon: Medal,
    org: "Academia IBJJF",
    fullName: "Academia Afiliada IBJJF",
    number: "10580",
    label: "N° de Academia",
    desc: "La JL Samuray BJJ Academy cuenta con afiliación oficial como academia IBJJF.",
    color: "#CC0000",
  },
  {
    icon: Globe,
    org: "Sukata",
    fullName: "Sukata Internacional",
    number: "Afiliada",
    label: "Federación",
    desc: "Parte de la red internacional Sukata, conectando academias de élite en todo el mundo.",
    color: "#00B4B4",
  },
  {
    icon: Star,
    org: "CAJJ",
    fullName: "Confederación Argentina de Jiu-Jitsu",
    number: "Afiliada",
    label: "Nacional",
    desc: "Afiliada a la Confederación Argentina de Jiu-Jitsu, participando del circuito nacional.",
    color: "#00B4B4",
  },
  {
    icon: CheckCircle,
    org: "+50 Años",
    fullName: "Experiencia en Artes Marciales",
    number: "Desde 1975",
    label: "Trayectoria",
    desc: "Más de cinco décadas de práctica y enseñanza en múltiples disciplinas marciales.",
    color: "#00B4B4",
  },
];

const STATS = [
  { value: "+50", label: "Años en Artes Marciales" },
  { value: "+10", label: "Años de Academia" },
  { value: "5",   label: "Afiliaciones Oficiales" },
  { value: "OSS", label: "El Código de la Academia" },
];

export default function Credenciales() {
  const { ref, visible } = useInView();

  return (
    <section
      id="credenciales"
      ref={ref}
      style={{
        background: "#111111",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top / bottom borders */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.3), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.3), transparent)" }} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,180,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
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
            Reconocimientos
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
            Credenciales &amp; Afiliaciones
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
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Avalados por los organismos más reconocidos del Jiu-Jitsu mundial y con décadas de experiencia que hablan por sí solas.
          </p>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1px",
            background: "#2a2a2a",
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "#0a0a0a",
                padding: "1.75rem 1.5rem",
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.3 + i * 0.08}s, transform 0.6s ease ${0.3 + i * 0.08}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: "#00B4B4",
                  lineHeight: 1,
                  marginBottom: "0.375rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.6875rem",
                  color: "#525252",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {CREDS.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.org}
                className="card-hover"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid #1a1a1a",
                  borderRadius: "0.875rem",
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.35 + i * 0.07}s, transform 0.6s ease ${0.35 + i * 0.07}s`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "0.625rem",
                    background: cred.color === "#CC0000" ? "rgba(204,0,0,0.1)" : "rgba(0,180,180,0.08)",
                    border: `1px solid ${cred.color === "#CC0000" ? "rgba(204,0,0,0.2)" : "rgba(0,180,180,0.15)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={cred.color} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald), sans-serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        textTransform: "uppercase",
                        color: "#F5F5F5",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cred.org}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-oswald), sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8125rem",
                        color: cred.color,
                        background: cred.color === "#CC0000" ? "rgba(204,0,0,0.1)" : "rgba(0,180,180,0.1)",
                        border: `1px solid ${cred.color}33`,
                        padding: "0.125rem 0.5rem",
                        borderRadius: "0.25rem",
                        letterSpacing: "0.04em",
                        flexShrink: 0,
                      }}
                    >
                      {cred.number}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.6875rem",
                      color: "#525252",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {cred.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      color: "#737373",
                    }}
                  >
                    {cred.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* OSS Quote */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2.5rem",
            border: "1px solid rgba(0,180,180,0.2)",
            borderRadius: "0.875rem",
            background: "rgba(0,180,180,0.02)",
            textAlign: "center",
            position: "relative",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.9s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-1px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "2px",
              background: "#00B4B4",
            }}
          />
          <blockquote
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              textTransform: "uppercase",
              color: "#F5F5F5",
              lineHeight: 1.4,
              letterSpacing: "0.08em",
              marginBottom: "1rem",
            }}
          >
            &ldquo;Sé fuerte. Sé parte. Seguí el código.&rdquo;
          </blockquote>
          <div
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.9375rem",
              color: "#737373",
              lineHeight: 1.6,
              maxWidth: "480px",
              margin: "0 auto 1.25rem",
            }}
          >
            OSS expresa respeto, perseverancia y determinación. Lo usamos para saludar, confirmar, motivar y despedirnos — es el código que nos une.
          </div>
          <cite
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.8125rem",
              color: "#00B4B4",
              fontStyle: "normal",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Prof. Jorge Omar Ledesma · Faixa Preta 4º Grado
          </cite>
        </div>
      </div>
    </section>
  );
}
