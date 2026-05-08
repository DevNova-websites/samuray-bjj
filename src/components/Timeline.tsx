"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail: string;
  image?: string;
  side: "left" | "right";
}

const EVENTS: TimelineEvent[] = [
  {
    year: "1975",
    title: "Los Primeros Pasos",
    description: "Jorge Omar Ledesma comienza su camino en las artes marciales, iniciando un viaje que transformaría su vida y la de miles de alumnos.",
    detail: "A los jóvenes años, con una pasión que nunca se apagaría, el Profesor Ledesma da sus primeros pasos en el mundo de las artes marciales. Desde ese momento, la disciplina y el respeto se convierten en pilares de su vida. Este inicio marca el comienzo de una historia extraordinaria que aún continúa.",
    side: "right",
  },
  {
    year: "1990",
    title: "Expansión Marcial",
    description: "Décadas de entrenamiento en múltiples artes marciales consolidan una base técnica excepcional y una filosofía de vida.",
    detail: "Tras años de dedicación intensa, el Profesor profundiza en diversas disciplinas marciales, enriqueciendo su arsenal técnico y su visión filosófica. Este período de exploración y aprendizaje constante lo prepara para lo que se convertiría en su gran pasión: el Brazilian Jiu-Jitsu.",
    side: "left",
  },
  {
    year: "2000",
    title: "Encuentro con el BJJ",
    description: "El descubrimiento del Brazilian Jiu-Jitsu abre una nueva dimensión. La fascinación por el arte suave se convierte en misión de vida.",
    detail: "El encuentro con el Brazilian Jiu-Jitsu cambia todo. El Profesor Ledesma queda cautivado por la profundidad técnica y la filosofía del arte suave. Decide dedicarse de lleno, viajando, entrenando y aprendiendo de los mejores instructores. El BJJ no es solo un deporte — es su misión.",
    side: "right",
  },
  {
    year: "2010",
    title: "Nace JL Samuray BJJ Academy",
    description: "Fundación oficial de la academia, materialización de un sueño y compromiso con la comunidad.",
    detail: "Con más de 35 años de experiencia marcial, el Profesor Ledesma da vida a la JL Samuray BJJ Academy. La academia nace con un propósito claro: formar atletas fuertes técnica y moralmente, en un entorno de respeto y hermandad. Los primeros alumnos son testigos del nacimiento de una familia.",
    side: "left",
  },
  {
    year: "2012",
    title: "Afiliación IBJJF",
    description: "La academia obtiene la afiliación oficial al IBJJF (N° 10580), el organismo más reconocido del Jiu-Jitsu mundial.",
    detail: "La afiliación al International Brazilian Jiu-Jitsu Federation (IBJJF N° 10580) representa un hito fundamental. Este reconocimiento avala la calidad técnica de la academia y abre las puertas a la competencia a nivel internacional bajo las reglas oficiales de la IBJJF.",
    side: "right",
  },
  {
    year: "2015",
    title: "Sukata Internacional",
    description: "Incorporación a la federación Sukata Internacional, expandiendo la red de entrenamiento y conexiones globales.",
    detail: "La afiliación a Sukata Internacional establece lazos con una red global de academias y competidores de élite. Esto enriquece enormemente la formación de los alumnos, que acceden a seminarios, torneos y la experiencia de instructores de todo el mundo. La familia Samuray crece.",
    side: "left",
  },
  {
    year: "2018",
    title: "Reconocimiento CBJJE",
    description: "Registro en la Confederación Brasileña de Jiu-Jitsu Esportivo (N° 1080), consolidando la presencia institucional.",
    detail: "El registro en la CBJJE (N° 1080) consolida el reconocimiento institucional de la academia tanto a nivel nacional como internacional. Este aval certifica la seriedad del proyecto y el compromiso con los estándares más altos del deporte.",
    side: "right",
  },
  {
    year: "2025",
    title: "Más de 10 Años de Legado",
    description: "Una década de dedicación, cientos de alumnos formados y un legado que continúa creciendo cada día en el tatami.",
    detail: "Más de una década después de su fundación, la JL Samuray BJJ Academy sigue siendo un referente del Jiu-Jitsu. Disciplina, respeto, honor, humildad, lealtad y hermandad — los valores del código que guía a cada alumno dentro y fuera del tatami. El camino continúa. OSS.",
    side: "left",
  },
];

const INITIAL_COUNT = 3;

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, i]));
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeEvent = activeIndex !== null ? EVENTS[activeIndex] : null;

  const renderEvent = (event: TimelineEvent, i: number) => {
    const isVisible = visibleItems.has(i);
    const isLeft = event.side === "left";

    return (
      <div
        key={event.year}
        ref={(el) => { itemRefs.current[i] = el; }}
        className="tl-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 80px 1fr",
          alignItems: "center",
          gap: "0",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`,
        }}
      >
        {/* Left slot — hidden on mobile */}
        <div className="tl-left" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "2rem" }}>
          {isLeft ? (
            <TimelineCard event={event} index={i} onClick={() => setActiveIndex(i)} />
          ) : (
            <span />
          )}
        </div>

        {/* Dot */}
        <div className="tl-dot" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <button
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: activeIndex === i ? "#8B1A1A" : "#F8F8F6",
              border: `2px solid ${activeIndex === i ? "#8B1A1A" : "rgba(139,26,26,0.4)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
              boxShadow: activeIndex === i ? "0 0 20px rgba(139,26,26,0.25)" : "0 2px 8px rgba(139,26,26,0.08)",
              zIndex: 1,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: "0.625rem",
                letterSpacing: "0.02em",
                color: activeIndex === i ? "#FFFFFF" : "#8B1A1A",
              }}
            >
              {event.year}
            </span>
          </button>
        </div>

        {/* Right slot — always visible. On mobile also renders left-side cards. */}
        <div className="tl-right" style={{ paddingLeft: "2rem" }}>
          {!isLeft ? (
            <TimelineCard event={event} index={i} onClick={() => setActiveIndex(i)} />
          ) : (
            <span className="tl-mobile-card">
              <TimelineCard event={event} index={i} onClick={() => setActiveIndex(i)} />
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      id="historia"
      ref={sectionRef}
      style={{
        background: "#F8F8F6",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,26,26,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8B1A1A",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Nuestra Historia
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              color: "#1A1615",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            El Camino del Guerrero
          </h2>
          <hr
            style={{
              height: "3px",
              border: "none",
              background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)",
              maxWidth: "180px",
              margin: "0 auto 1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "1rem",
              color: "#6B6460",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Hacé click en cada evento para descubrir la historia detrás de cada hito.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            id="timeline-center-line"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, transparent, #8B1A1A 5%, #8B1A1A 95%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {EVENTS.slice(0, INITIAL_COUNT).map((event, i) => renderEvent(event, i))}
          </div>

          <div
            style={{
              overflow: "hidden",
              maxHeight: showAll ? "9999px" : "0",
              transition: showAll ? "max-height 0.9s cubic-bezier(0.4,0,0.2,1)" : "max-height 0.4s ease",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingTop: "2.5rem" }}>
              {EVENTS.slice(INITIAL_COUNT).map((event, idx) =>
                renderEvent(event, idx + INITIAL_COUNT)
              )}
            </div>
          </div>
        </div>

        {!showAll && (
          <div style={{ textAlign: "center", marginTop: "3rem", animation: "fadeInBtn 0.5s ease" }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                border: "1.5px solid rgba(139,26,26,0.4)",
                color: "#8B1A1A",
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 1.75rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#8B1A1A";
                (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,26,26,0.4)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Ver más
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>

      {activeEvent && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setActiveIndex(null); }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(12,6,6,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "1.5rem",
            backdropFilter: "blur(8px)",
            animation: "fadeInModal 0.2s ease",
          }}
        >
          <div
            style={{
              background: "#F8F8F6",
              border: "1px solid #D4D0C8",
              borderRadius: "1rem",
              maxWidth: "620px",
              width: "100%",
              overflow: "hidden",
              animation: "slideUpModal 0.3s ease",
              boxShadow: "0 24px 80px rgba(12,6,6,0.3)",
            }}
          >
            <div
              style={{
                height: "220px",
                background: "linear-gradient(135deg, #F5F3EF 0%, #EEECEA 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`/images/timeline-${activeEvent.year}.jpg`}
                alt={activeEvent.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(139,26,26,0.05), transparent)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontWeight: 700,
                    fontSize: "5rem",
                    color: "rgba(139,26,26,0.1)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {activeEvent.year}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6875rem",
                    color: "#9C9890",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Foto del período — próximamente
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "#8B1A1A",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "0.375rem",
                }}
              >
                {activeEvent.year}
              </div>

              <button
                onClick={() => setActiveIndex(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(139,26,26,0.15)",
                  color: "#1A1615",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.9)"; }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  color: "#1A1615",
                  marginBottom: "1rem",
                }}
              >
                {activeEvent.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#6B6460",
                  marginBottom: "1.5rem",
                }}
              >
                {activeEvent.detail}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button
                  onClick={() => setActiveIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev)}
                  disabled={activeIndex === 0}
                  style={{
                    background: "none",
                    border: "1px solid rgba(139,26,26,0.25)",
                    color: activeIndex === 0 ? "#D4D0C8" : "#8B1A1A",
                    borderColor: activeIndex === 0 ? "#D4D0C8" : "rgba(139,26,26,0.25)",
                    borderRadius: "0.375rem",
                    padding: "0.5rem 1rem",
                    cursor: activeIndex === 0 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { if (activeIndex !== 0) (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "none"; }}
                >
                  <ChevronLeft size={14} /> Anterior
                </button>

                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.75rem", color: "#9C9890" }}>
                  {(activeIndex ?? 0) + 1} / {EVENTS.length}
                </span>

                <button
                  onClick={() => setActiveIndex((prev) => prev !== null && prev < EVENTS.length - 1 ? prev + 1 : prev)}
                  disabled={activeIndex === EVENTS.length - 1}
                  style={{
                    background: "none",
                    border: "1px solid rgba(139,26,26,0.25)",
                    color: activeIndex === EVENTS.length - 1 ? "#D4D0C8" : "#8B1A1A",
                    borderColor: activeIndex === EVENTS.length - 1 ? "#D4D0C8" : "rgba(139,26,26,0.25)",
                    borderRadius: "0.375rem",
                    padding: "0.5rem 1rem",
                    cursor: activeIndex === EVENTS.length - 1 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { if (activeIndex !== EVENTS.length - 1) (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "none"; }}
                >
                  Siguiente <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUpModal { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInBtn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .tl-mobile-card { display: none; }
        @media (max-width: 640px) {
          #timeline-center-line { left: 24px !important; transform: none !important; }
          .tl-row { grid-template-columns: 48px 1fr !important; }
          .tl-left { display: none !important; }
          .tl-dot { align-items: flex-start !important; padding-top: 1.25rem; }
          .tl-right { padding-left: 0.75rem !important; }
          .tl-mobile-card { display: block !important; }
        }
      `}</style>
    </section>
  );
}

function TimelineCard({ event, onClick }: { event: TimelineEvent; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#F5F3EF" : "#F8F8F6",
        border: `1px solid ${hovered ? "rgba(139,26,26,0.3)" : "#D4D0C8"}`,
        borderRadius: "0.75rem",
        padding: "1.25rem 1.5rem",
        textAlign: "left",
        cursor: "pointer",
        maxWidth: "380px",
        width: "100%",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(139,26,26,0.08)" : "0 2px 8px rgba(139,26,26,0.04)",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          fontWeight: 700,
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          color: "#8B1A1A",
          marginBottom: "0.5rem",
          textTransform: "uppercase",
        }}
      >
        {event.year}
      </div>
      <h4
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "uppercase",
          color: "#1A1615",
          lineHeight: 1.2,
          marginBottom: "0.625rem",
        }}
      >
        {event.title}
      </h4>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.8125rem",
          lineHeight: 1.6,
          color: "#6B6460",
        }}
      >
        {event.description}
      </p>
      <div
        style={{
          marginTop: "0.75rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.75rem",
          color: "#8B1A1A",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        Ver más →
      </div>
    </button>
  );
}
