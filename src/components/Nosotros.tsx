"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Star, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

function BJJBelt({ degrees = 4 }: { degrees?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div style={{
        display: "flex",
        alignItems: "stretch",
        height: "22px",
        borderRadius: "3px",
        overflow: "hidden",
        width: "fit-content",
        border: "1px solid #000000",
      }}>
        {/* Main black body */}
        <div style={{ width: "150px", background: "#111111", flexShrink: 0 }} />
        {/* Black separator */}
        <div style={{ width: "2px", background: "#000000", flexShrink: 0 }} />
        {/* Red dan panel */}
        <div style={{ width: "28px", background: "#8B1A1A", flexShrink: 0 }} />
        {/* Red separator */}
        <div style={{ width: "2px", background: "#8B1A1A", flexShrink: 0 }} />
        {/* Degree stripes */}
        {Array.from({ length: degrees }).map((_, i) => (
          <div key={i} style={{ display: "flex", alignSelf: "stretch" }}>
            {i > 0 && <div style={{ width: "4px", background: "#8B1A1A" }} />}
            <div style={{ width: "5px", background: "#FFFFFF" }} />
          </div>
        ))}
        {/* Red separator */}
        <div style={{ width: "2px", background: "#8B1A1A", flexShrink: 0 }} />
        {/* Red piece */}
        <div style={{ width: "12px", background: "#8B1A1A", flexShrink: 0 }} />
        {/* Red separator */}
        <div style={{ width: "2px", background: "#8B1A1A", flexShrink: 0 }} />
        {/* White piece */}
        <div style={{ width: "6px", background: "#FFFFFF", flexShrink: 0 }} />
        {/* Black end cap */}
        <div style={{ width: "8px", background: "#111111", flexShrink: 0 }} />
      </div>
    </div>
  );
}

const PILARES = [
  { icon: Shield, title: "Disciplina y Respeto", text: "Saludamos al entrar y salir del tatami. El código de conducta de la academia rige dentro y fuera del dojo: puntualidad, obediencia al profesor y humildad ante la victoria y la derrota." },
  { icon: Star,   title: "Honor y Humildad",     text: "Aplicamos las sumisiones con control y responsabilidad. El honor se construye con cada rolling, y la humildad nos recuerda que siempre hay algo nuevo por aprender." },
  { icon: Award,  title: "Lealtad y Hermandad",  text: "Somos una familia. Nos apoyamos, entrenamos y crecemos juntos bajo la bandera de Sukata Internacional. La hermandad que se forja en el tatami trasciende el deporte." },
];

const PILAR_COLORS = ["#8B1A1A", "#991515", "#7A1010"];

export default function Nosotros() {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="nosotros" ref={ref} style={{ background: "#F8F8F6", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", right: "-200px", transform: "translateY(-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(185,28,28,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "1rem" }}>
            Quiénes Somos
          </span>
          <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
            La Academia
          </h2>
          <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)", maxWidth: "180px", margin: "0 auto" }} />
        </div>

        {/* Main content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))", gap: "4rem", alignItems: "center", marginBottom: "5rem" }}>

          {/* Image */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s" }}>
            <div id="nosotros-img" style={{ position: "relative", aspectRatio: "4/5", maxHeight: "560px", borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(185,28,28,0.15)" }}>
              <Image
                src="/images/prof-jorge-omar-ledesma.webp"
                alt="Profesor Jorge Omar Ledesma — Cinta Negra 4° Grau"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, 520px"
                loading="lazy"
              />
              {/* Inner frame */}
              <div style={{ position: "absolute", top: "16px", left: "16px", right: "16px", bottom: "16px", border: "1px solid rgba(185,28,28,0.1)", borderRadius: "0.5rem", pointerEvents: "none" }} />
              {/* Badge */}
              <div style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem", background: "rgba(255,255,255,0.95)", border: "1px solid rgba(185,28,28,0.2)", borderRadius: "0.5rem", padding: "0.75rem 1rem", backdropFilter: "blur(8px)", boxShadow: "0 4px 20px rgba(185,28,28,0.1)" }}>
                <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#8B1A1A", lineHeight: 1 }}>+50</div>
                <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.625rem", color: "#6B6460", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "2px" }}>Años en Artes Marciales</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s" }}>
            <h3 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Prof. Jorge Omar
            </h3>
            <h3 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", textTransform: "uppercase", background: "linear-gradient(135deg, #8B1A1A, #991515)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Ledesma
            </h3>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "32px", height: "2px", background: "#8B1A1A", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8125rem", color: "#6B6460", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Cinta Negra 4º Grau · Fundador &amp; Profesor
              </span>
            </div>

            {/* Belt */}
            <div style={{ marginBottom: "2rem" }}>
              <BJJBelt degrees={4} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "#6B6460" }}>
                Con más de <strong style={{ color: "#1A1615" }}>50 años de trayectoria</strong> en las artes marciales, el Profesor Jorge Omar Ledesma, alumno del mestre{" "}
                Frederico Peixoto fundó la{" "}
                <strong style={{ color: "#8B1A1A" }}>JL Samuray BJJ Academy</strong> con una misión clara: formar atletas fuertes técnica y moralmente.
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "#6B6460" }}>
                Afiliada a <strong style={{ color: "#1A1615" }}>Sukata Internacional</strong>, la academia cuenta con reconocimientos del{" "}
                <strong style={{ color: "#1A1615" }}>IBJJF</strong> y la <strong style={{ color: "#1A1615" }}>CBJJE</strong>. El Jiu-Jitsu tiene origen japonés y fue adaptado por la familia Gracie en Brasil -  aquí lo transmitimos con esa misma esencia.
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "#6B6460" }}>
                Creemos que el Jiu-Jitsu es un camino de vida. Cada clase refuerza los valores que nos definen:{" "}
                <strong style={{ color: "#1A1615" }}>disciplina, respeto, honor, humildad, lealtad y hermandad</strong>. OSS.
              </p>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "#8B1A1A", border: "none", color: "#FFFFFF", fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: "0.375rem", cursor: "pointer", transition: "background 0.2s, transform 0.2s", boxShadow: "0 4px 16px rgba(185,28,28,0.3)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A31919"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Sumate al Tatami
              </button>
            </div>
          </div>
        </div>

        {/* Pilares */}
        <div id="nosotros-pilares" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {PILARES.map((pilar, i) => {
            const Icon = pilar.icon;
            const color = PILAR_COLORS[i];
            return (
              <div key={pilar.title} className="card-hover" style={{ background: "#F5F3EF", border: "1px solid #D4D0C8", borderRadius: "0.75rem", padding: "2rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.6s ease ${0.4 + i * 0.1}s, transform 0.6s ease ${0.4 + i * 0.1}s` }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "0.5rem", background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon size={22} color={color} />
                </div>
                <div style={{ width: "32px", height: "2px", background: color, marginBottom: "1rem", borderRadius: "1px" }} />
                <h4 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "1.125rem", textTransform: "uppercase", color: "#1A1615", marginBottom: "0.75rem" }}>
                  {pilar.title}
                </h4>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9rem", lineHeight: 1.65, color: "#6B6460" }}>
                  {pilar.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #nosotros { padding: 4rem 1.25rem !important; }
        }
        @media (max-width: 640px) {
          #nosotros { padding: 3rem 1rem !important; }
          #nosotros-img { aspect-ratio: 3/2 !important; max-height: 280px !important; }
          #nosotros-pilares { grid-template-columns: 1fr !important; }
          #nosotros-pilares > div { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
