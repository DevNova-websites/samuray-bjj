"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToNosotros = () => {
    document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#FFFFFF",
      }}
    >
      {/* Background image — very light watermark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.06,
          filter: "grayscale(80%) brightness(1.8)",
        }}
      />

      {/* Subtle radial tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(27,45,79,0.04) 0%, transparent 65%)",
        }}
      />
      {/* Bottom fade to white */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.5) 80%, #FFFFFF 100%)",
        }}
      />

      {/* Decorative corner lines — navy, subtle */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, width: "280px", opacity: 0.07, pointerEvents: "none" }}
        viewBox="0 0 300 300"
        fill="none"
      >
        <line x1="0" y1="150" x2="150" y2="0" stroke="#1B2D4F" strokeWidth="1" />
        <line x1="0" y1="200" x2="200" y2="0" stroke="#1B2D4F" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="0" stroke="#1B2D4F" strokeWidth="0.5" />
      </svg>
      <svg
        style={{ position: "absolute", bottom: 0, right: 0, width: "280px", opacity: 0.07, pointerEvents: "none" }}
        viewBox="0 0 300 300"
        fill="none"
      >
        <line x1="300" y1="150" x2="150" y2="300" stroke="#1B2D4F" strokeWidth="1" />
        <line x1="300" y1="100" x2="100" y2="300" stroke="#1B2D4F" strokeWidth="0.5" />
        <line x1="300" y1="200" x2="200" y2="300" stroke="#1B2D4F" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "6rem 1.5rem 4rem",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.75rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <span style={{ display: "block", width: "40px", height: "1px", background: "#1B2D4F" }} />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1B2D4F",
            }}
          >
            · Sukata Internacional ·
          </span>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#1B2D4F" }} />
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-oswald), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#1A1615",
            marginBottom: "0.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          Bienvenido
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-oswald), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            background: "linear-gradient(135deg, #C8A850 0%, #E0C870 50%, #C8A850 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}
        >
          JL Samuray BJJ Academy
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.65,
            color: "#6B6460",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
          }}
        >
          Disciplina. Respeto. Hermandad. <br></br> Formamos atletas{" "}
          <strong style={{ color: "#1A1615" }}>técnicamente sólidos y moralmente íntegros</strong>.
          Afiliados al <strong style={{ color: "#1B2D4F" }}>IBJJF</strong> y{" "}
          <strong style={{ color: "#1B2D4F" }}>Sukata Internacional</strong>.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
          }}
        >
          <button
            onClick={scrollToContacto}
            style={{
              background: "#1B2D4F",
              border: "2px solid #1B2D4F",
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              boxShadow: "0 4px 20px rgba(27,45,79,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#2A4070";
              (e.currentTarget as HTMLElement).style.borderColor = "#2A4070";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(27,45,79,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1B2D4F";
              (e.currentTarget as HTMLElement).style.borderColor = "#1B2D4F";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(27,45,79,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Contactanos
          </button>
          <button
            onClick={scrollToNosotros}
            style={{
              background: "transparent",
              border: "2px solid rgba(27,45,79,0.35)",
              color: "#1B2D4F",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1B2D4F";
              (e.currentTarget as HTMLElement).style.background = "rgba(27,45,79,0.06)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,45,79,0.35)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Conocer Más
          </button>
        </div>

        {/* Values row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(27,45,79,0.1)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.75s",
          }}
        >
          {["Disciplina", "Respeto", "Honor", "Humildad", "Lealtad", "Hermandad"].map((value) => (
            <div key={value} style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#1B2D4F",
                  display: "block",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* OSS motto */}
        <div
          style={{
            marginTop: "1.5rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.9s",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.75rem",
              color: "#9C9890",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontStyle: "italic",
            }}
          >
            Sé fuerte. Sé parte. OSS.
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNosotros}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#1B2D4F",
          opacity: visible ? 0.5 : 0,
          transition: "opacity 0.5s ease 1.2s",
          animation: "bounce 2s ease infinite",
        }}
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={28} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
