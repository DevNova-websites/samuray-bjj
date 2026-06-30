"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const STATS = [
  { value: "+10", label: "Años de Academia" },
  { value: "4",   label: "Afiliaciones Oficiales" },
];

export default function CredencialesTeaser() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="credenciales-teaser"
      ref={ref}
      style={{
        background: "#F5F3EF",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.2), transparent)" }} />

      <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>

        {/* Header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginBottom: "3rem",
          }}
        >
          <span style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B1A1A",
            display: "block",
            marginBottom: "1rem",
          }}>
            Reconocimientos
          </span>
          <h2 style={{
            fontFamily: "var(--font-oswald), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            textTransform: "uppercase",
            color: "#1A1615",
            lineHeight: 1.05,
            marginBottom: "1rem",
          }}>
            Credenciales &amp; Afiliaciones
          </h2>
          <hr style={{
            height: "3px",
            border: "none",
            background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)",
            maxWidth: "180px",
            margin: "0 auto 1.5rem",
          }} />
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1rem",
            color: "#6B6460",
            maxWidth: "420px",
            margin: "0 auto",
          }}>
            Avalados por los organismos más reconocidos del Jiu-Jitsu a nivel mundial.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "#A31919",
            borderRadius: "0.75rem",
            overflow: "hidden",
            maxWidth: "420px",
            margin: "0 auto 2.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
            boxShadow: "0 8px 32px rgba(139,26,26,0.18)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                background: "#8B1A1A",
                padding: "1.75rem 1.5rem",
                textAlign: "center",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
              }}
            >
              <div style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.6875rem",
                color: "rgba(255,235,235,0.7)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <Link
            href="/credenciales-y-afiliaciones"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              background: "transparent",
              border: "2px solid #8B1A1A",
              color: "#8B1A1A",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#8B1A1A";
              (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#8B1A1A";
            }}
          >
            Ver credenciales completas →
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #credenciales-teaser { padding: 3.5rem 1.25rem !important; }
        }
        @media (max-width: 640px) {
          #credenciales-teaser { padding: 3rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
