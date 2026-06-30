"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToNosotros = () => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContacto = () => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={ref}
      style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#100505" }}
    >
      {/* Background group photo */}
      <div style={{ position: "absolute", inset: 0, filter: "grayscale(30%)" }}>
        <Image
          src="/images/group.webp"
          alt="JL Samuray BJJ Academy"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Centered dark overlay — heavier where the text is, transparent at edges */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 85% 75% at 50% 48%, rgba(8,2,2,0.82) 0%, rgba(8,2,2,0.55) 55%, rgba(8,2,2,0.15) 100%)" }} />
      {/* Bottom fade to brand dark */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 25%, rgba(8,2,2,0.55) 85%, #100505 100%)" }} />

      {/* Decorative corner lines */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "260px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 300 300" fill="none">
        <line x1="0" y1="150" x2="150" y2="0" stroke="#8B1A1A" strokeWidth="1" />
        <line x1="0" y1="200" x2="200" y2="0" stroke="#8B1A1A" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="0" stroke="#8B1A1A" strokeWidth="0.5" />
      </svg>
      <svg style={{ position: "absolute", bottom: 0, right: 0, width: "260px", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 300 300" fill="none">
        <line x1="300" y1="150" x2="150" y2="300" stroke="#8B1A1A" strokeWidth="1" />
        <line x1="300" y1="100" x2="100" y2="300" stroke="#8B1A1A" strokeWidth="0.5" />
        <line x1="300" y1="200" x2="200" y2="300" stroke="#8B1A1A" strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div id="hero-content" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "6rem 1.5rem 4rem", maxWidth: "900px", width: "100%" }}>

        {/* Eyebrow */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#E87070" }} />
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E87070" }}>
            · Sukata Internacional ·
          </span>
          <span style={{ display: "block", width: "40px", height: "1px", background: "#E87070" }} />
        </div>

        {/* Main headline */}
        <h1 style={{ fontFamily: "var(--font-oswald), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 0.95, letterSpacing: "0.02em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "0.5rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s" }}>
          Bienvenido
        </h1>
        <h1 style={{ fontFamily: "var(--font-oswald), system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(2.8rem, 8vw, 6rem)", lineHeight: 0.95, letterSpacing: "0.02em", textTransform: "uppercase", background: "linear-gradient(135deg, #8B1A1A 0%, #A31919 55%, #991515 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "1.5rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s" }}>
          JL Samuray BJJ Academy
        </h1>

        {/* Subheadline */}
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1.65, color: "rgba(255,255,255,0.75)", maxWidth: "600px", margin: "0 auto 2.5rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s" }}>
          Formamos atletas <strong style={{ color: "#FFFFFF" }}>técnicamente sólidos y moralmente íntegros</strong>.
          Afiliados al{" "}
          <a href="https://ibjjf.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#E87070", fontWeight: 700, textDecoration: "none" }}>IBJJF</a> y{" "}
          <a href="https://sukatabjj.com" target="_blank" rel="noopener noreferrer" style={{ color: "#E87070", fontWeight: 700, textDecoration: "none" }}>Sukata Internacional</a>.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s" }}>
          <button
            onClick={scrollToContacto}
            style={{ background: "#8B1A1A", border: "2px solid #8B1A1A", color: "#FFFFFF", fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "0.9375rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", cursor: "pointer", transition: "background 0.2s, box-shadow 0.2s, transform 0.2s", boxShadow: "0 4px 20px rgba(185,28,28,0.3)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A31919"; (e.currentTarget as HTMLElement).style.borderColor = "#A31919"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(185,28,28,0.4)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; (e.currentTarget as HTMLElement).style.borderColor = "#8B1A1A"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(185,28,28,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Contactanos
          </button>
          <button
            onClick={scrollToNosotros}
            style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.45)", color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "0.9375rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.875rem 2rem", borderRadius: "0.375rem", cursor: "pointer", transition: "border-color 0.2s, background 0.2s, transform 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Conocer Más
          </button>
        </div>

        {/* Values row */}
        <div id="hero-values" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.15)", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.75s" }}>
          {["Disciplina", "Respeto", "Honor", "Humildad", "Lealtad", "Hermandad"].map((value) => (
            <span key={value} style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
              {value}
            </span>
          ))}
        </div>

        {/* OSS motto */}
        <div style={{ marginTop: "1.5rem", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.9s" }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", fontStyle: "italic" }}>
            Sé fuerte. Sé parte. OSS.
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToNosotros} style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "#FFFFFF", opacity: visible ? 0.45 : 0, transition: "opacity 0.5s ease 1.2s", animation: "bounce 2s ease infinite" }} aria-label="Desplazarse hacia abajo">
        <ChevronDown size={28} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 640px) {
          #hero-content { padding-top: calc(72px + 1.5rem) !important; padding-bottom: 3rem !important; padding-left: 1rem !important; padding-right: 1rem !important; }
          #hero-values { gap: 0.625rem !important; }
        }
        @media (max-width: 375px) {
          #hero-values span { font-size: 0.625rem !important; letter-spacing: 0.1em !important; }
        }
      `}</style>
    </section>
  );
}
