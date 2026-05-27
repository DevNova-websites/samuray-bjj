﻿"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Nosotros",      href: "#nosotros" },
  { label: "Clases",     href: "#clases" },
  { label: "Historia",      href: "#historia" },
  { label: "Credenciales",  href: "#credenciales" },
  { label: "Contacto",      href: "#contacto" },
];

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");

  useEffect(() => {
    // Turn solid when #nosotros enters the viewport (= left the hero)
    const nosotros = document.getElementById("nosotros");
    let observer: IntersectionObserver | null = null;
    if (nosotros) {
      observer = new IntersectionObserver(
        ([entry]) => setScrolled(entry.isIntersecting || entry.boundingClientRect.top < 0),
        { threshold: 0 }
      );
      observer.observe(nosotros);
    }

    const onScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveHash(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.4s, box-shadow 0.4s, backdrop-filter 0.4s",
        background: scrolled ? "rgba(248,248,246,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(185,28,28,0.12)" : "none",
      }}
    >
      <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <button onClick={() => handleNavClick("#inicio")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.625rem" }}>
          <Image src="/images/logo-nuevo.png" alt="JL Samuray BJJ Academy" width={44} height={44} style={{ borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(185,28,28,0.25)" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "var(--font-oswald), system-ui, sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "0.08em", color: scrolled ? "#8B1A1A" : "#FFFFFF", lineHeight: 1.1, transition: "color 0.4s" }}>
              JL SAMURAY
            </span>
            <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.625rem", letterSpacing: "0.18em", color: scrolled ? "#9C9890" : "rgba(255,255,255,0.55)", textTransform: "uppercase", transition: "color 0.4s" }}>
              BJJ ACADEMY
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <ul id="desktop-nav" style={{ display: "none", gap: "0.25rem", listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.06em",
                  textTransform: "uppercase", padding: "0.5rem 0.75rem", borderRadius: "0.375rem",
                  color: activeHash === link.href
                    ? (scrolled ? "#8B1A1A" : "#E87070")
                    : (scrolled ? "#6B6460" : "rgba(255,255,255,0.75)"),
                  transition: "color 0.3s", position: "relative",
                }}
                onMouseEnter={(e) => { if (activeHash !== link.href) (e.currentTarget as HTMLElement).style.color = scrolled ? "#1A1615" : "#FFFFFF"; }}
                onMouseLeave={(e) => { if (activeHash !== link.href) (e.currentTarget as HTMLElement).style.color = scrolled ? "#6B6460" : "rgba(255,255,255,0.75)"; }}
              >
                {link.label}
                {activeHash === link.href && (
                  <span style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: "20px", height: "2px", background: scrolled ? "#8B1A1A" : "#E87070", borderRadius: "1px" }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick("#contacto")}
          id="desktop-cta"
          style={{ display: "none", background: "transparent", border: `1px solid ${scrolled ? "#8B1A1A" : "rgba(255,255,255,0.6)"}`, color: scrolled ? "#8B1A1A" : "#FFFFFF", transition: "border-color 0.4s, color 0.4s, background 0.2s", fontFamily: "var(--font-oswald), system-ui, sans-serif", fontWeight: 600, fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.5rem 1.25rem", borderRadius: "0.375rem", cursor: "pointer" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#8B1A1A"; }}
        >
          Inscribirse
        </button>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} id="mobile-menu-btn" style={{ background: "none", border: "none", cursor: "pointer", color: "#8B1A1A", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5rem" }} aria-label="Abrir menú">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{ overflow: "hidden", maxHeight: isOpen ? "400px" : "0", transition: "max-height 0.35s ease", background: "rgba(248,248,246,0.98)", backdropFilter: "blur(12px)", borderTop: isOpen ? "1px solid rgba(185,28,28,0.08)" : "none", boxShadow: isOpen ? "0 8px 24px rgba(185,28,28,0.08)" : "none" }}>
        <ul style={{ listStyle: "none", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNavClick(link.href)} style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", fontFamily: "var(--font-oswald), system-ui, sans-serif", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.75rem 0.5rem", color: activeHash === link.href ? "#8B1A1A" : "#6B6460", borderBottom: "1px solid rgba(185,28,28,0.07)" }}>
                {link.label}
              </button>
            </li>
          ))}
          <li style={{ marginTop: "0.75rem" }}>
            <button onClick={() => handleNavClick("#contacto")} style={{ width: "100%", background: "#8B1A1A", border: "none", color: "#FFFFFF", fontFamily: "var(--font-oswald), system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.875rem", borderRadius: "0.5rem", cursor: "pointer" }}>
              Inscribirse
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          #desktop-nav   { display: flex !important; }
          #desktop-cta   { display: block !important; }
          #mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
