"use client";

import { useInView } from "@/hooks/useInView";

export default function Novedades() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="novedades" ref={ref} style={{ background: "#F8F8F6", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "1rem" }}>
            Novedades y Eventos
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
            Seguimos creciendo en{" "}
            <span style={{ background: "linear-gradient(135deg, #8B1A1A, #991515)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              JL Samuray BJJ Academy
            </span>
          </h2>
          <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)", maxWidth: "180px", margin: "0 auto" }} />
        </div>

        {/* Main content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))", gap: "4rem", alignItems: "center" }}>

          {/* Video */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <div id="novedades-video" style={{ position: "relative", background: "#000000", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(185,28,28,0.15)" }}>
              <video
                src="/images/video-seminario.mp4"
                controls
                playsInline
                preload="metadata"
                style={{ width: "100%", maxHeight: "560px", display: "block" }}
              />
            </div>
          </div>

          {/* Text content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
            <p style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "clamp(1.125rem, 2.2vw, 1.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Seminario
            </p>
            <h3 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4.5vw, 3rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Mestre <span style={{ color: "#8B1A1A" }}>Carlson Gracie Jr</span>
            </h3>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "32px", height: "2px", background: "#8B1A1A", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#6B6460", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                04 · 09 · 2026
              </span>
            </div>

            <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "#6B6460" }}>
              Este año, de la mano del <strong style={{ color: "#1A1615" }}>Mestre Fredy Sukata</strong>, recibimos en nuestra casa al{" "}
              <strong style={{ color: "#8B1A1A" }}>Mestre Carlson Gracie Jr</strong> para realizar un seminario que nadie se lo puede perder.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #novedades { padding: 4rem 1.25rem !important; }
        }
        @media (max-width: 640px) {
          #novedades { padding: 3rem 1rem !important; }
          #novedades-video video { max-height: 80vh !important; }
        }
      `}</style>
    </section>
  );
}
