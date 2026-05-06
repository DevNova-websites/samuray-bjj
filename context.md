# Contexto del Proyecto — JL Samuray BJJ Academy

## Descripción general

Sitio web institucional de la **J.L. Samuray BJJ Academy**, academia de Brazilian Jiu-Jitsu dirigida por el **Prof. Jorge Omar Ledesma** (Faixa Preta 4º Grado), alumno del maestro **Frederico Peixoto Sukata**. La academia pertenece a la red **Sukata Internacional**.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.2.4 | Framework principal |
| React | 19.2.4 | UI |
| TypeScript | ^5 | Tipado |
| Tailwind CSS | ^4 | Estilos utilitarios |
| Lucide React | ^1.14.0 | Íconos |
| Framer Motion | ^12.38.0 | Animaciones (instalado, no usado aún) |
| React Hook Form | ^7.75.0 | Formularios (instalado, no usado aún) |
| Zod | ^4.4.3 | Validación (instalado, no usado aún) |

### Configuración de build
- **Modo**: Static export (`output: "export"` en `next.config.ts`)
- **Output**: carpeta `/out`
- **Imágenes**: `unoptimized: true` (requerido por static export)
- **Deploy**: Netlify — configurado via `netlify.toml` (`publish = "out"`)

---

## Estructura de archivos

```
samuray-bjj/
├── public/
│   ├── images/
│   │   ├── logo.jpeg          # Logo circular (Sukata Brothers / JL Samuray BJJ Academy)
│   │   ├── hero-bg.jpg        # Fondo del hero
│   │   └── instructor.jpg     # Foto del profesor (pendiente de agregar)
│   └── data/
│       └── manual-alumno.JSON # Reglamento y filosofía de la academia
├── src/
│   ├── app/
│   │   ├── globals.css        # Variables CSS, estilos globales
│   │   ├── layout.tsx         # Layout raíz (fuentes Oswald + Inter)
│   │   └── page.tsx           # Página principal (ensambla todos los componentes)
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Nosotros.tsx
│       ├── Servicios.tsx
│       ├── Timeline.tsx
│       ├── Credenciales.tsx
│       ├── Contacto.tsx
│       └── Footer.tsx
├── next.config.ts
├── netlify.toml
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── context.md                 # Este archivo
```

---

## Paleta de colores

Extraída del logo oficial (fondo negro, bulldog samurái en teal, banner rojo).

| Variable | Hex | Uso |
|---|---|---|
| `--teal` | `#00B4B4` | Acento primario (textos destacados, bordes, íconos) |
| `--teal-light` | `#00CCCC` | Hover de botones principales |
| `--crimson` | `#CC0000` | Acento secundario (tarjeta Avanzados, detalles rojos) |
| `--bg` | `#0a0a0a` | Fondo principal |
| `--surface` | `#111111` | Fondo de secciones alternadas y cards |
| `--surface2` | `#1a1a1a` | Hover de cards |
| `--border` | `#2a2a2a` | Bordes sutiles |
| `--text` | `#F5F5F5` | Texto principal |
| `--muted` | `#737373` | Texto secundario |

**Fuentes**: `Oswald` (títulos, uppercase) + `Inter` (cuerpo, labels).

---

## Componentes

### `Navbar`
- Fixed, se vuelve opaco al hacer scroll (`backdrop-filter: blur`)
- Logo: imagen circular (`logo.jpeg`) + texto "JL SAMURAY / BJJ ACADEMY"
- Links de navegación con indicador activo (underline teal)
- Botón CTA "Inscribirse" → scroll a `#contacto`
- Responsive: hamburger en mobile

### `Hero`
- Fondo: `hero-bg.jpg` con overlay degradado
- Headline: "Bienvenido / JL Samuray BJJ Academy"
- Subheadline: "Disciplina. Respeto. Hermandad." + IBJJF/Sukata
- CTAs: "Contactanos" + "Conocer Más"
- Fila de valores: Disciplina · Respeto · Honor · Humildad · Lealtad · Hermandad
- Motto al pie: *"Sé fuerte. Sé parte. Seguí el código. OSS."*
- Líneas decorativas SVG en esquinas (teal)

### `Nosotros`
- Foto del instructor (placeholder si no existe `instructor.jpg`)
- Badge "+50 Años en Artes Marciales"
- Bio: Prof. Jorge Omar Ledesma, Faixa Preta 4° Grado, alumno de Sukata
- Mención al origen japonés del BJJ y adaptación Gracie
- 3 pilares (cards): **Disciplina y Respeto** · **Honor y Humildad** · **Lealtad y Hermandad**

### `Servicios`
- 6 tarjetas de clases:
  - Principiantes (Fundamentos)
  - Intermedios (Desarrollo)
  - Avanzados (Alto Rendimiento) — acento rojo, menciona reglamento IBJJF
  - Niños y Jóvenes (Familia)
  - Defensa Personal (Especialización)
  - Open Mat (Comunidad)
- Bloque de horario al pie con colores de gi por día:
  - **Lunes** 20:00–21:15 · Gi Blanco
  - **Miércoles** 20:00–21:15 · Gi Negro
  - **Viernes** 20:00–21:15 · Gi Blanco

### `Timeline`
- Línea de tiempo interactiva con eventos del 1975 al 2025
- Layout: columna izquierda / nodo central / columna derecha (alternado)
- Click en nodo o card abre modal con detalle + navegación prev/next
- Eventos: inicio marcial (1975), expansión (1990), encuentro con BJJ (2000), fundación academia (2010), IBJJF (2012), Sukata (2015), CBJJE (2018), legado 10 años (2025)

### `Credenciales`
- Barra de stats: +50 años · +10 años academia · 5 afiliaciones · OSS
- 6 tarjetas de credenciales: IBJJF #32285 · CBJJE #1080 · Academia IBJJF #10580 · Sukata Internacional · CAJJ · +50 años desde 1975
- Quote final: *"Sé fuerte. Sé parte. Seguí el código."* + explicación del OSS + firma del profesor

### `Contacto`
- Bloque de horario (Lun/Mié/Vie 20:00–21:15 con gi por día)
- Nota de pago: cuota hasta el día 10, presencial o transferencia bancaria
- Datos de contacto: teléfono +54 11 6178-1198 / samurayledesma@gmail.com
- Links a Instagram, Facebook, TikTok (@samurayledesma)
- Botón WhatsApp directo
- Formulario: nombre, email, teléfono, nivel de experiencia, mensaje

### `Footer`
- Logo + tagline de fundación
- "OSS" en teal como marca
- Navegación, afiliaciones, contacto en grid
- Tagline final: *"Sé fuerte · Sé parte · Seguí el código · OSS"*

---

## Datos de la academia (manual-alumno.JSON)

### Información institucional
- **Nombre**: J.L. Samuray BJJ Academy
- **Director**: Jorge Omar Ledesma — Faixa Preta 4º Grado
- **Maestro**: Frederico Peixoto Sukata
- **Equipo**: Sukata Internacional

### Valores del código
Disciplina · Respeto · Honor · Humildad · Lealtad · Hermandad

### OSS
Expresión de respeto, perseverancia y determinación. Se usa como saludo, confirmación, motivación y despedida.

### Uniforme
- Colores permitidos: blanco y negro
- Lunes → Gi blanco | Miércoles → Gi negro | Viernes → Gi blanco
- Kimono lavado después de cada entrenamiento, uñas cortas, sandalias fuera del tatami

### Parches oficiales
- Chaqueta frente: lado izquierdo del pecho
- Chaqueta espalda: centro debajo del cuello
- Pantalón: pierna derecha sobre rodilla

### Reglas del tatami
- Saludar al entrar y salir
- No usar calzado en el tatami
- No celulares
- Puntualidad
- Obedecer al profesor
- Humildad en victoria y derrota
- Aplicar sumisiones con control

### Sanciones
Advertencia verbal → expulsión del entrenamiento → suspensión temporal → expulsión definitiva

### Tolerancia cero
Acoso · Bullying · Agresión intencional · Drogas o alcohol

### Graduaciones (tiempo mínimo)
| Cinturón | Tiempo |
|---|---|
| Azul | 1.5 años |
| Roxa | 2 años |
| Marrón | 2 años |
| Preta | 2 años |

Requisitos: asistencia · tiempo mínimo · evolución técnica · comportamiento ejemplar

### Competición
Organismo: IBJJF — reglas en https://ibjjf.com/rules/

### Administración
- **Horario adultos**: Lunes, Miércoles y Viernes de 20:00 a 21:15
- **Vencimiento cuota**: día 10 de cada mes
- **Métodos de pago**: presencial o transferencia bancaria

### Mensaje final
> *"Sé fuerte. Sé parte. Sigue el código. OSS."*

---

## Deploy

- **Repositorio**: `https://github.com/MercedesUbeira/samuray-bjj`
- **Plataforma**: Netlify
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Rama**: `main`

---

## Pendientes / notas

- `instructor.jpg` no existe aún — el componente Nosotros tiene un placeholder con emoji 🥋
- Fotos de timeline (`timeline-1975.jpg`, etc.) no existen — los modales muestran el año en grande como fondo
- Framer Motion, React Hook Form y Zod están instalados pero no se usan todavía
- El formulario de contacto simula el envío (setTimeout) — no está conectado a ningún backend real
