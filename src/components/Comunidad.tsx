"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GALERIA = [
  // Fila 1-2: hero landscape full-width
  { src: "/images/group.webp",                       alt: "Familia Samuray BJJ",            cols: 4, rows: 2, objectPosition: "center 55%" },

  // Fila 3-4: 2 portraits + 1 landscape como cuadrado grande (2×2)
  { src: "/images/profe-mostrando-tecnica.webp",     alt: "Profe mostrando técnica",        cols: 1, rows: 2, objectPosition: "center" },
  { src: "/images/mujer-haciendo-tecnica.webp",      alt: "Mujer practicando técnica",      cols: 1, rows: 2, objectPosition: "center" },
  { src: "/images/la-clase.webp",                    alt: "La clase",                       cols: 2, rows: 2, objectPosition: "center" },

  // Fila 5-6: portrait + landscapes variados
  { src: "/images/alumnos-entrenando.webp",          alt: "Alumnos entrenando",             cols: 1, rows: 2, objectPosition: "center" },
  { src: "/images/hombres-entrenando.webp",          alt: "Hombres entrenando",             cols: 2, rows: 1, objectPosition: "center" },
  { src: "/images/llave-de-brazo.webp",              alt: "Llave de brazo",                 cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/chica-riendo.webp",                alt: "Comunidad y alegría",            cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/samu-con-nino.webp",               alt: "Samu con alumno",                cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/foto-3-historia.webp",             alt: "Entrenamiento en el tatami",     cols: 1, rows: 1, objectPosition: "center" },

  // Fila 7: franja de 4 landscapes iguales
  { src: "/images/image5-historia-afiliacion.webp",  alt: "Afiliación IBJJF",               cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/image6-historia.webp",             alt: "Sukata Internacional",            cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/image7.webp",                      alt: "Competencia CBJJE",               cols: 1, rows: 1, objectPosition: "center" },
  { src: "/images/image8.webp",                      alt: "10 años de legado",               cols: 1, rows: 1, objectPosition: "center" },

  // Fila 8-9: landscape grande (2×2) + 2 portraits
  { src: "/images/familia-tatami.webp",              alt: "Familia en el tatami",            cols: 2, rows: 2, objectPosition: "center" },
  { src: "/images/el-camino-del-guerrero.webp",      alt: "El camino del guerrero",          cols: 1, rows: 2, objectPosition: "center top" },
  { src: "/images/hombre-cinturon-marron.webp",      alt: "Cinturón marrón",                cols: 1, rows: 2, objectPosition: "center top" },

  // Fila 10-11: portrait + landscape grande (2×2) + portrait
  { src: "/images/hombres-luchando.webp",            alt: "Entrenamiento BJJ",               cols: 1, rows: 2, objectPosition: "center top" },
  { src: "/images/image-4-nacimientojlacademy.webp", alt: "Nace JL Samuray Academy",        cols: 2, rows: 2, objectPosition: "center" },
  { src: "/images/hombre-luchando.webp",             alt: "Técnica en el tatami",            cols: 1, rows: 2, objectPosition: "center" },
];

const BLOQUES = [
  {
    tag: "Disciplina",
    title: "Disciplina y Respeto",
    text: "El código de la academia rige dentro y fuera del dojo: puntualidad, respeto al profesor y humildad ante la victoria y la derrota.",
    src: "/images/disciplina-y-respeto.webp",
    alt: "Disciplina y Respeto — JL Samuray BJJ Academy",
    reverse: false,
  },
  {
    tag: "Honor",
    title: "Honor y Humildad",
    text: "El honor se construye en cada rol. Aplicamos las técnicas con control. Trabajamos con intensidad pero cuidamos a nuestro compañero",
    src: "/images/chica-riendo.webp",
    alt: "Alegría en la academia",
    reverse: true,
  },
  {
    tag: "Lealtad",
    title: "Lealtad y Hermandad",
    text: "Somos amigos antes que compañeros de entrenamiento. Lo que se construye en el tatami va mucho más allá del deporte.",
    src: "/images/hermandad.webp",
    alt: "Hermandad en JL Samuray BJJ Academy",
    reverse: false,
  },
];


export default function Comunidad() {
  const [visible, setVisible] = useState(false);
  const { ref: bloquesRef, visible: bloquesVisible } = useInView(0.05);
  const { ref: galeriaRef, visible: galeriaVisible } = useInView(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = useCallback((idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const slide = el.children[idx] as HTMLElement;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActiveSlide(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + GALERIA.length) % GALERIA.length : null), []);
  const nextImage = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % GALERIA.length : null), []);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prevImage, nextImage, closeLightbox]);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", background: "#0c0404" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/banner-comunidad.webp"
            alt="Comunidad JL Samuray BJJ Academy"
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%", transform: "scaleX(-1)" }}
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,2,2,0.45) 0%, rgba(8,2,2,0.55) 35%, rgba(8,2,2,0.88) 78%, #0c0404 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 85% 60% at 50% 45%, rgba(8,2,2,0.35) 0%, transparent 70%)" }} />
        </div>

        {/* Breadcrumb */}
        <div
          style={{
            position: "absolute",
            top: "calc(72px + 1.5rem)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.08em",
            width: "100%",
            maxWidth: "1100px",
            padding: "0 1.5rem",
          }}
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Inicio</Link>
          <span>/</span>
          <span style={{ color: "#E87070" }}>Comunidad</span>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "calc(72px + 4rem) 1.5rem 4rem", width: "100%" }}>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#E87070",
              display: "block",
              marginBottom: "1rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            · Hermandad · Respeto · Crecimiento ·
          </span>
          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "0.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            Nuestra
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #8B1A1A 0%, #A31919 55%, #991515 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "2rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            Comunidad
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(0.9375rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "580px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            Más allá del jiu-jitsu, somos amigos. Nos cuidamos, nos respetamos y compartimos mucho más que el tatami. Si estás buscando un lugar donde entrenar y pertenecer, este es tu lugar.
          </p>
        </div>
      </section>

      {/* ── CARRUSEL HORIZONTAL ── */}
      <section
        id="comunidad-carrusel"
        ref={bloquesRef}
        style={{ background: "#F5F3EF", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}
      >
        {/* header */}
        <div style={{
          maxWidth: "1100px", margin: "0 auto 2.5rem",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem",
          opacity: bloquesVisible ? 1 : 0,
          transform: bloquesVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div>
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "0.75rem" }}>
              Lo que nos une
            </span>
            <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05 }}>
              La Familia Samuray
            </h2>
          </div>
          {/* flechas */}
          <div style={{ display: "flex", gap: "0.625rem", flexShrink: 0 }}>
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Anterior"
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(26,22,21,0.15)", background: activeSlide === 0 ? "rgba(26,22,21,0.04)" : "rgba(26,22,21,0.08)", color: activeSlide === 0 ? "rgba(26,22,21,0.25)" : "#1A1615", display: "flex", alignItems: "center", justifyContent: "center", cursor: activeSlide === 0 ? "default" : "pointer", transition: "background 0.2s" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(BLOQUES.length - 1, activeSlide + 1))}
              disabled={activeSlide === BLOQUES.length - 1}
              aria-label="Siguiente"
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(26,22,21,0.15)", background: activeSlide === BLOQUES.length - 1 ? "rgba(26,22,21,0.04)" : "rgba(26,22,21,0.08)", color: activeSlide === BLOQUES.length - 1 ? "rgba(26,22,21,0.25)" : "#1A1615", display: "flex", alignItems: "center", justifyContent: "center", cursor: activeSlide === BLOQUES.length - 1 ? "default" : "pointer", transition: "background 0.2s" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* slides */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            gap: "1.25rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch" as const,
            paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
            paddingRight: "clamp(1.5rem, 5vw, 4rem)",
            paddingBottom: "0.5rem",
          }}
        >
          {BLOQUES.map((b, i) => {
            return (
              <div
                key={b.title}
                style={{
                  flex: "0 0 min(520px, 82vw)",
                  height: "480px",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  scrollSnapAlign: "start",
                  opacity: bloquesVisible ? 1 : 0,
                  transform: bloquesVisible ? "scale(1)" : "scale(0.97)",
                  transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
                  cursor: "pointer",
                }}
                onClick={() => scrollToSlide(i)}
              >
                {/* foto de fondo */}
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="520px"
                />
                {/* gradiente */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,2,2,0.92) 0%, rgba(8,2,2,0.45) 50%, rgba(8,2,2,0.1) 100%)" }} />
                {/* contenido */}
                <div style={{ position: "absolute", inset: 0, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <h3 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.75rem)", textTransform: "uppercase", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "0.875rem" }}>
                    {b.title}
                  </h3>
                  <div style={{ width: "36px", height: "2px", background: "#8B1A1A", borderRadius: "1px", marginBottom: "0.875rem" }} />
                  <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.72)" }}>
                    {b.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
          {BLOQUES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === activeSlide ? "24px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === activeSlide ? "#8B1A1A" : "rgba(26,22,21,0.2)", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
            />
          ))}
        </div>

        <style>{`
          #bloques-carousel::-webkit-scrollbar { display: none; }
          @media (max-width: 768px) {
            #comunidad-carrusel { padding: 3.5rem 0 3rem !important; }
          }
          @media (max-width: 640px) {
            #comunidad-carrusel { padding: 2.5rem 0 2rem !important; }
          }
        `}</style>
      </section>

      {/* ── GALERÍA ── */}
      <section id="comunidad-galeria" ref={galeriaRef} style={{ background: "#FFFFFF", padding: "6rem 1.5rem", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: galeriaVisible ? 1 : 0,
              transform: galeriaVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B1A1A", display: "block", marginBottom: "1rem" }}>
              Momentos compartidos
            </span>
            <h2 style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", textTransform: "uppercase", color: "#1A1615", lineHeight: 1.05, marginBottom: "1rem" }}>
              Galería
            </h2>
            <hr style={{ height: "3px", border: "none", background: "linear-gradient(90deg, transparent, #8B1A1A, transparent)", maxWidth: "180px", margin: "0 auto" }} />
          </div>

          {/* Gallery grid */}
          <div
            id="galeria-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "220px",
              gridAutoFlow: "dense",
              gap: "0.75rem",
            }}
          >
            {GALERIA.map((img, i) => (
              <GaleriaItem
                key={img.src}
                img={img}
                index={i}
                visible={galeriaVisible}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link
            href="/#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              background: "#8B1A1A",
              border: "2px solid #8B1A1A",
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.875rem 2rem",
              borderRadius: "0.375rem",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(185,28,28,0.3)",
            }}
          >
            Sumate al Tatami →
          </Link>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #galeria-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 200px !important; }
            #galeria-grid > div { grid-column: span 1 !important; }
          }
          @media (max-width: 768px) {
            #comunidad-galeria { padding: 4rem 1.25rem !important; }
          }
          @media (max-width: 480px) {
            #comunidad-galeria { padding: 3rem 1rem !important; }
            #galeria-grid { grid-template-columns: 1fr !important; grid-auto-rows: 240px !important; }
            #galeria-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
          }
        `}</style>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALERIA}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* close */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <X size={22} />
      </button>

      {/* prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
        style={{
          position: "absolute",
          left: "clamp(0.5rem, 2vw, 1rem)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "50%",
          width: "clamp(40px, 8vw, 52px)",
          height: "clamp(40px, 8vw, 52px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* image */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(90vw, 1100px)",
          height: "min(80vh, 750px)",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 90vw, 1100px"
          priority
        />
      </div>

      {/* next */}
      <button
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
        style={{
          position: "absolute",
          right: "clamp(0.5rem, 2vw, 1rem)",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "50%",
          width: "clamp(40px, 8vw, 52px)",
          height: "clamp(40px, 8vw, 52px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* counter */}
      <div
        style={{
          position: "absolute",
          bottom: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.8125rem",
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.08em",
          background: "rgba(0,0,0,0.4)",
          padding: "0.25rem 0.75rem",
          borderRadius: "1rem",
        }}
      >
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// El grid tiene 4 columnas y max-width 1200px en desktop; ancho real de celda = cols/4 del contenedor.
// Por debajo de 900px el grid pasa a 2 columnas y todo se fuerza a span 1 (ver media query más abajo);
// por debajo de 480px pasa a 1 columna. Sin esto, las celdas grandes (2×, 4×) pedían una imagen de
// solo 400px y el navegador la estiraba, pixelando las fotos más grandes.
function getGaleriaSizes(cols: number) {
  const desktopWidth = Math.round((1200 / 4) * cols);
  return `(max-width: 480px) 100vw, (max-width: 900px) 50vw, ${desktopWidth}px`;
}

function GaleriaItem({
  img,
  index,
  visible,
  onClick,
}: {
  img: { src: string; alt: string; cols: number; rows: number; objectPosition?: string };
  index: number;
  visible: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const gridColumn = `span ${img.cols}`;
  const gridRow    = `span ${img.rows}`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn,
        gridRow,
        position: "relative",
        borderRadius: "0.75rem",
        overflow: "hidden",
        background: "#1A0A0A",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.96)",
        transition: `opacity 0.6s ease ${0.05 * index}s, transform 0.6s ease ${0.05 * index}s`,
        cursor: "pointer",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        quality={90}
        style={{
          objectFit: "cover",
          objectPosition: img.objectPosition ?? "center",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
        sizes={getGaleriaSizes(img.cols)}
        loading="lazy"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "rgba(8,2,2,0.45)" : "rgba(8,2,2,0.1)",
          transition: "background 0.3s ease",
        }}
      />
    </div>
  );
}
