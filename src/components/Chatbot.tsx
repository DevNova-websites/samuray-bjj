"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Bot } from "lucide-react";

const QA_DATA = [
  {
    q: "¿Hay golpes en el Jiu Jitsu?",
    a: "El Jiu Jitsu es un arte marcial de origen japonés desarrollado para el combate cuerpo a cuerpo. En la práctica deportiva no se utilizan golpes; se trabaja principalmente con derribos, controles, palancas articulares y estrangulaciones. El objetivo es aprender técnica, control y estrategia.",
  },
  {
    q: "¿El Jiu Jitsu es peligroso?",
    a: "Como todo deporte de contacto, el Jiu Jitsu requiere cuidados y responsabilidad. Entrenando en una academia seria, con profesores capacitados y respetando las normas de seguridad, es una disciplina segura y apta para progresar de manera gradual.",
  },
  {
    q: "¿Cualquiera puede practicar Jiu Jitsu?",
    a: "Sí, el Jiu Jitsu puede ser practicado por personas de diferentes edades, niveles físicos y experiencias previas. Cada alumno avanza a su propio ritmo, según su constancia, disciplina y objetivos personales.",
  },
  {
    q: "¿Las mujeres pueden practicar Jiu Jitsu?",
    a: "Por supuesto. El Jiu Jitsu es una disciplina ideal para mujeres, ya que prioriza la técnica, la estrategia y el control corporal por encima de la fuerza física. Además, es considerado uno de los sistemas de defensa personal más efectivos.",
  },
  {
    q: "¿Qué necesito para empezar a practicar Jiu Jitsu?",
    a: "Para tu primera clase solo necesitas ropa cómoda deportiva: remera y pantalón o short de entrenamiento. También recuerda traer ojotas o chancletas para moverte fuera del tatami y mantener la higiene del espacio. No es necesario tener kimono (Gi) desde el primer día; lo más importante es comenzar a entrenar.",
  },
  {
    q: "¿A qué edad puedo comenzar a practicar Jiu Jitsu?",
    a: "El Jiu Jitsu no tiene límite de edad; cualquier persona puede comenzar según sus posibilidades y objetivos. En nuestra academia, las clases están habilitadas para mayores de 16 años.",
  },
  {
    q: "¿Qué días y horarios tienen clases?",
    a: "Actualmente tenemos clases los dias lunes, miercoles y viernes de 20 a 21:15hs.",
  },
];

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      text: "¡Hola! Soy Samu 🥋 y estoy para responder tus preguntas rápidas. ¿En qué te puedo ayudar?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showCta, setShowCta] = useState(true);

  // Alternar la burbuja CTA para que no tape siempre la pantalla
  useEffect(() => {
    if (isOpen) return; // Si el chat está abierto, pausamos el temporizador
    const interval = setInterval(() => {
      setShowCta((prev) => !prev);
    }, 5000); // 5000ms = Alterna cada 5 segundos
    return () => clearInterval(interval);
  }, [isOpen]);

  // Auto-scroll hacia el último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handlePillClick = (q: string, a: string) => {
    // Agrega el mensaje del usuario
    const userMsg: Message = { id: Date.now(), role: "user", text: q };
    setMessages((prev) => [...prev, userMsg]);

    // Simula que el bot está escribiendo
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, role: "bot", text: a };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600); // 600ms de retraso para que se sienta natural
  };

  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 99 }}>
      {/* Ventana del Chatbot */}
      <div
        style={{
          position: "absolute",
          bottom: "calc(100% + 1rem)",
          right: 0,
          width: "calc(100vw - 4rem)",
          maxWidth: "380px",
          height: "550px",
          maxHeight: "calc(100vh - 8rem)",
          background: "#F5F3EF",
          border: "1px solid rgba(139,26,26,0.15)",
          borderRadius: "1rem",
          boxShadow: "0 20px 40px rgba(26,22,21,0.15)",
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          overflow: "hidden",
          transformOrigin: "bottom right",
          animation: "chatOpen 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#8B1A1A",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "1px solid rgba(139,26,26,0.2)",
              }}
            >
              <Bot size={20} color="#8B1A1A" />
              <img
                src="/images/prof-jorge-omar-ledesma.png"
                alt="Avatar de Samu"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-oswald), sans-serif", fontWeight: 600, fontSize: "1.125rem", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "0.04em" }}>
                Samu
              </div>
              <div style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6875rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Asistente Virtual
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: "none", border: "none", color: "#FFFFFF", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem" }}
            aria-label="Cerrar chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Historial de Mensajes */}
        <div style={{ flex: 1, padding: "1.25rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              <div
                style={{
                  maxWidth: "85%",
                  padding: "0.75rem 1rem",
                  borderRadius: "1rem",
                  borderBottomLeftRadius: msg.role === "bot" ? "0.25rem" : "1rem",
                  borderBottomRightRadius: msg.role === "user" ? "0.25rem" : "1rem",
                  background: msg.role === "user" ? "#8B1A1A" : "#FFFFFF",
                  color: msg.role === "user" ? "#FFFFFF" : "#1A1615",
                  border: msg.role === "bot" ? "1px solid #D4D0C8" : "none",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ background: "#FFFFFF", border: "1px solid #D4D0C8", padding: "0.75rem 1rem", borderRadius: "1rem", borderBottomLeftRadius: "0.25rem", display: "flex", gap: "0.25rem", alignItems: "center" }}>
                <span style={{ width: "6px", height: "6px", background: "#9C9890", borderRadius: "50%", animation: "pulseChat 1.5s infinite ease-in-out" }} />
                <span style={{ width: "6px", height: "6px", background: "#9C9890", borderRadius: "50%", animation: "pulseChat 1.5s infinite ease-in-out 0.2s" }} />
                <span style={{ width: "6px", height: "6px", background: "#9C9890", borderRadius: "50%", animation: "pulseChat 1.5s infinite ease-in-out 0.4s" }} />
              </div>
            </div>
          )}

          {/* Opciones Rápidas dentro del flujo de chat */}
          {!isTyping && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
              {QA_DATA.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePillClick(item.q, item.a)}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(139,26,26,0.3)",
                    color: "#8B1A1A",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8125rem",
                    padding: "0.625rem 1rem",
                    borderRadius: "1.5rem",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "#8B1A1A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,26,26,0.3)"; }}
                >
                  {item.q}
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Burbuja CTA (Llamado a la acción) */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "absolute",
            bottom: "calc(100% + 16px)",
            right: "0",
            background: "#FFFFFF",
            color: "#8B1A1A",
            padding: "0.625rem 1rem",
            borderRadius: "1rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(139,26,26,0.15)",
            border: "1px solid rgba(139,26,26,0.2)",
            whiteSpace: "nowrap",
            animation: "bounceTooltip 2s infinite ease-in-out",
            cursor: "pointer",
            opacity: showCta ? 1 : 0,
            pointerEvents: showCta ? "auto" : "none",
            transition: "opacity 0.6s ease-in-out",
          }}
        >
          ¡Hola! ¿Tenés dudas? estoy para ayudarte 🥋
          {/* Triangulito de la burbuja */}
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              right: "24px",
              width: "10px",
              height: "10px",
              background: "#FFFFFF",
              borderRight: "1px solid rgba(139,26,26,0.2)",
              borderBottom: "1px solid rgba(139,26,26,0.2)",
              transform: "rotate(45deg)",
            }}
          />
        </div>
      )}

      {/* Botón flotante para abrir */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#8B1A1A",
          color: "#FFFFFF",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(139,26,26,0.3)",
          transition: "transform 0.2s, background 0.2s",
          transform: isOpen ? "scale(0.9)" : "scale(1)",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#A31919"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1A1A"; }}
        aria-label="Abrir asistente virtual"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      <style>{`
        @keyframes chatOpen {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulseChat {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
        }
        @keyframes bounceTooltip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}