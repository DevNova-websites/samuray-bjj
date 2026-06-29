"use client";

import { useEffect, useRef, useState } from "react";

function BJJBeltMini({ degrees = 4 }: { degrees?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
      <div style={{ display: "flex", alignItems: "stretch", height: "16px", borderRadius: "2px", overflow: "hidden" }}>
        <div style={{ width: "110px", background: "#111111" }} />
        <div style={{ width: "2px", background: "#000000" }} />
        <div style={{ width: "22px", background: "#8B1A1A" }} />
        <div style={{ width: "2px", background: "#000000" }} />
        {Array.from({ length: degrees }).map((_, i) => (
          <div key={i} style={{ display: "flex", alignSelf: "stretch" }}>
            {i > 0 && <div style={{ width: "2px", background: "#000000" }} />}
            <div style={{ width: "6px", background: "#FFFFFF" }} />
          </div>
        ))}
      </div>
      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C9890" }}>
        Cinta Negra · 4° Dan
      </span>
    </div>
  );
}

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
    org: "IBJJF",
    fullName: "International Brazilian Jiu-Jitsu Federation",
    number: "32285",
    label: "N° de Miembro",
    url: "https://ibjjf.com/",
  },
  {
    org: "CBJJE",
    fullName: "Confederación Brasileña de Jiu-Jitsu Esportivo",
    number: "1080",
    label: "N° de Registro",
    url: "https://www.cbjje.com.br/",
  },
  {
    org: "Academia IBJJF",
    fullName: "Academia Afiliada IBJJF",
    number: "10580",
    label: "N° de Academia",
    url: "https://ibjjf.com/",
  },
  {
    org: "Sukata",
    fullName: "Sukata Internacional · Red de Academias de Élite",
    number: "Afiliada",
    label: "Red Internacional",
    url: "https://sukatabjj.com/",
  },
];

const STATS = [
  { value: "+10", label: "Años de Academia" },
  { value: "4",   label: "Afiliaciones Oficiales" },
];

export default function Credenciales() {
  const { ref, visible } = useInView();

  return (
    <section
      id="credenciales"
      ref={ref}
      style={{
        background: "#F5F3EF",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative edges */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.2), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,26,26,0.2), transparent)" }} />
      <div style={{ position: "absolute", right: "-160px", top: "40%", transform: "translateY(-50%)", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,26,26,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "1rem" }}>
            Reconocimientos
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
            Credenciales &amp; Afiliaciones
          </h2>
          <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)", maxWidth: "180px", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", color: "#6B6460", maxWidth: "420px", margin: "0 auto" }}>
            Avalados por los organismos más reconocidos del Jiu-Jitsu a nivel mundial.
          </p>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "#A31919",
            borderRadius: "0.75rem",
            overflow: "hidden",
            maxWidth: "480px",
            margin: "0 auto 4rem",
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
              <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "2.5rem", color: "#FFFFFF", lineHeight: 1, marginBottom: "0.4rem" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", color: "rgba(255,235,235,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional register */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.35s",
          }}
        >
          {/* Top rule */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, #8B1A1A, #D4D0C8)" }} />

          {CREDS.map((cred, i) => (
            <div key={cred.org}>
              <a
                href={cred.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "2rem 0",
                  textDecoration: "none",
                  cursor: "pointer",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-16px)",
                  transition: `opacity 0.55s ease ${0.4 + i * 0.1}s, transform 0.55s ease ${0.4 + i * 0.1}s`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.72";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {/* Red vertical accent */}
                <div style={{
                  width: "2px",
                  height: "44px",
                  background: "linear-gradient(180deg, #8B1A1A, rgba(139,26,26,0.3))",
                  flexShrink: 0,
                  borderRadius: "1px",
                }} />

                {/* Organisation name + full name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                    textTransform: "uppercase",
                    color: "#1A1615",
                    letterSpacing: "0.06em",
                    lineHeight: 1.15,
                  }}>
                    {cred.org}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    color: "#9C9890",
                    marginTop: "0.2rem",
                    letterSpacing: "0.01em",
                  }}>
                    {cred.fullName}
                  </div>
                </div>

                {/* Registration number — secondary, right-aligned */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.625rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#B0ABA4",
                    marginBottom: "0.25rem",
                  }}>
                    {cred.label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#8B1A1A",
                    letterSpacing: "0.08em",
                    opacity: 0.75,
                  }}>
                    {cred.number}
                  </div>
                </div>
              </a>

              {/* Row separator */}
              <div style={{
                height: "1px",
                background: i === CREDS.length - 1
                  ? "linear-gradient(90deg, #D4D0C8, rgba(139,26,26,0.25))"
                  : "#E8E5DF",
              }} />
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2.5rem",
            border: "1px solid rgba(139,26,26,0.18)",
            borderRadius: "0.875rem",
            background: "rgba(139,26,26,0.025)",
            textAlign: "center",
            position: "relative",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.85s",
          }}
        >
          <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", width: "80px", height: "2px", background: "#8B1A1A" }} />
          <blockquote style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.4, letterSpacing: "0.08em", marginBottom: "1rem" }}>
            &ldquo; La Promesa del Tatami &rdquo;
          </blockquote>
          <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", color: "#6B6460", lineHeight: 1.7, maxWidth: "660px", margin: "0 auto 1.25rem" }}>
            En J.L. SAMURAY BJJ Academy, entrenar va más allá de aprender técnicas:{" "}
            <br /><strong>Es un camino de crecimiento personal basado en disciplina, respeto, hermandad y lealtad.</strong>{" "}
            Cada clase es una oportunidad para fortalecerse física y mentalmente, superando desafíos junto a un equipo que acompaña como una familia.
          </div>
          <cite style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#8B1A1A", fontStyle: "normal", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Prof. Jorge Omar Ledesma
          </cite>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0.625rem" }}>
            <BJJBeltMini degrees={4} />
          </div>
        </div>

      </div>
    </section>
  );
}
