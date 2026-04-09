# 📊 Projektstruktur - Visuelle Übersicht

## 🗂️ Vollständige Verzeichnisstruktur

```
portfolio_jonas_laur/
│
├── 📁 app/                              # Next.js App Router Directory
│   ├── 🎨 globals.css                   # Global Styles + Utilities
│   ├── 📄 layout.tsx                    # Root Layout (lang="de")
│   ├── 🏠 page.tsx                      # Home Page (All Sections)
│   └── 🎯 favicon.ico                   # Browser Icon
│
├── 📁 src/
│   │
│   ├── 📁 components/                   # React Components
│   │   ├── 🧭 Navbar.tsx               # Navigation (Client-Side)
│   │   ├── 🎬 Hero.tsx                 # Hero/Intro Section
│   │   ├── 👤 About.tsx                # About Section
│   │   ├── 💪 Skills.tsx               # Skills Showcase
│   │   ├── 📦 Projects.tsx             # Projects Gallery
│   │   ├── 🎯 Interests.tsx            # Hobbies/Interests
│   │   └── 📧 Contact.tsx              # Contact Form
│   │
│   ├── 📁 data/
│   │   └── 📋 content.ts               # ⭐ All Content (EDIT THIS!)
│   │
│   └── 📁 lib/
│       ├── 🔗 scrollToId.ts            # Smooth Scroll Utility
│       └── 👁️ useActiveSection.ts       # Active Nav Hook
│
├── 📁 public/                           # Static Assets
│   ├── 🖼️ file.svg
│   ├── 🌍 globe.svg
│   ├── ⚡ next.svg
│   └── ✓ vercel.svg
│
├── 📁 figma_design_files/               # (Old Figma Prototype)
│
├── 📄 START_HERE.md                     # ⭐ READ THIS FIRST!
├── 📄 QUICK_START.md                    # Step-by-Step Guide
├── 📄 ARCHITECTURE.md                   # Technical Docs
├── 📄 IMPROVEMENTS.md                   # What Changed
├── 📄 CHANGES.md                        # Final Report
│
├── 📄 package.json                      # Dependencies
├── 📄 package-lock.json                 # Locked Versions
├── 📄 tsconfig.json                     # TypeScript Config
├── 📄 next.config.ts                    # Next.js Config
├── 📄 tailwind.config.cjs               # Tailwind Config
├── 📄 postcss.config.mjs                # PostCSS Config
├── 📄 eslint.config.mjs                 # ESLint Rules
├── 📄 next-env.d.ts                     # Next.js Types
│
└── 📄 README.md                         # (Original Readme)
```

---

## 🎯 Wichtigste Dateien zum Bearbeiten

### 1️⃣ **Deine Inhalte ändern**
```
src/data/content.ts
├── siteMeta          ← Dein Name, Rolle, Intro
├── about             ← Dein About-Text
├── skills            ← Deine Fähigkeiten
├── projects          ← Deine Projekte (Wichtig!)
├── interests         ← Deine Hobbies
└── contact           ← Deine Kontaktdaten
```

### 2️⃣ **Design & Farben**
```
app/globals.css
├── :root {           ← CSS Variablen (Farben)
│   --bg-cream
│   --accent-mint
│   --accent-brown
│   └── ...
└── .section, .card, .btn-*  ← Utility-Klassen
```

### 3️⃣ **Komponenten verstehen**
```
src/components/
├── Navbar.tsx        ← Header & Navigation
├── Hero.tsx          ← Startseite/Titel
├── About.tsx         ← Über Mich Section
├── Skills.tsx        ← Fähigkeiten
├── Projects.tsx      ← Deine Projekte (wichtig!)
├── Interests.tsx     ← Hobbies & Ausgleich
└── Contact.tsx       ← Kontakt & Form
```

---

## 🔄 Datenfluss

```
┌──────────────────────────────────┐
│   src/data/content.ts            │
│   (Zentrale Daten)               │
└──────────────┬───────────────────┘
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
    ┌────────────────────────┐
    │  React Components      │
    │  (src/components/)     │
    └──────────┬─────────────┘
               │
               ▼
    ┌──────────────────────┐
    │  Tailwind CSS        │
    │  + Framer Motion     │
    │  (Styling)           │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  Browser            │
    │  (Rendered Output)  │
    └──────────────────────┘
```

---

## 📌 Komponenten-Übersicht

### Navbar.tsx
```tsx
'use client'
├── Navigation Items (6 Sektionen)
├── Active Section Highlighting
├── Desktop: Navlinks | Mobile: Select
└── Smooth Scroll Handler
```

### Hero.tsx
```tsx
'use client'
├── Framer Motion Container Animation
├── Title + Intro Text
├── CTA Buttons (Mehr erfahren / Kontakt)
└── Visual Gradient Box
```

### About.tsx
```tsx
'use client'
├── About Text
├── Education Cards (aus content.ts)
├── Personal Quote/Statement
└── Alle mit Animationen
```

### Skills.tsx
```tsx
'use client'
├── Skill Categories Grid
├── 2-Spalten Layout
├── Staggered Card Animations
└── Bullet-List Items
```

### Projects.tsx
```tsx
'use client'
├── 3-Spalten Grid (Desktop)
├── Project Cards mit Header
├── Tech-Stack Badges
├── GitHub Links
└── Status (Abgeschlossen/In Entwicklung)
```

### Interests.tsx
```tsx
'use client'
├── 4-Spalten Grid
├── Emoji-Icons
├── Daten aus content.ts
└── Work-Life Balance Message
```

### Contact.tsx
```tsx
'use client'
├── Contact Info (Email, Phone, Location)
├── Social Links (GitHub, LinkedIn)
├── Contact Form (mit Validierung)
└── Success Message Animation
```

---

## 🎨 Styling-Hierarchie

```
app/globals.css
├── @import tailwindcss (Base + Components + Utilities)
├── CSS Variables (--bg-cream, --accent-mint, etc.)
├── Base Styles (html, body, a, button)
├── Utility Classes
│   ├── .section      ← Container für Sektionen
│   ├── .card         ← Card-Container
│   ├── .btn-primary  ← Primary Button
│   ├── .btn-secondary
│   ├── .section-heading
│   └── .section-subtitle
├── Accessibility (focus-visible, prefers-reduced-motion)
└── Responsive (@media queries)

Tailwind Config
├── tailwind.config.cjs
└── Nutzt CSS Variables für Farben
```

---

## 🔗 Data Flow Beispiel: Projects

```
content.ts
│
├── export const projects = [
│   ├── { id: 'p1', title: '...', tech: [...], ... }
│   ├── { id: 'p2', title: '...', tech: [...], ... }
│   └── { id: 'p3', title: '...', tech: [...], ... }
│
Projects.tsx
│
├── import { projects } from '../data/content'
├── projects.map(project => <ProjectCard {...project} />)
│
Browser
│
└── <div className="grid grid-cols-3">
    ├── <article>Project 1</article>
    ├── <article>Project 2</article>
    └── <article>Project 3</article>
```

---

## 🚀 Build & Deploy Flow

```
Local Development
│
npm run dev
│
└─→ http://localhost:3000 (Hot Reload)

Testing
│
npm run lint    (Check Code Quality)
npm run build   (Check for Errors)

Production Build
│
npm run build   (Create .next folder)
npm start       (Start Production Server)

Deploy to Vercel
│
npm install -g vercel
vercel          (Push to Vercel)

└─→ Your Portfolio is Live! 🎉
```

---

## 📊 File Size Overview

```
app/globals.css           ~3 KB   ✅ Optimiert
src/data/content.ts       ~5 KB   ✅ Lean & Mean
src/components/*.tsx      ~2 KB each
package.json              ~1 KB
next.config.ts            ~0.1 KB

Total: ~25 KB (gzipped) ✅ Sehr schnell!
```

---

## 🔑 Key Concepts

### `'use client'`
```typescript
'use client'  // ← Macht Komponente zu Client-Side
// Brauchen für:
// - useActiveSection Hook
// - Framer Motion Animationen
// - Event Listener (onClick)
```

### Framer Motion Pattern
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Scroll Navigation
```typescript
// In Navbar:
onClick={() => scrollToId('section-id')}

// In scrollToId.ts:
document.getElementById(id).scrollIntoView({ 
  behavior: 'smooth' 
})
```

### Active Section Hook
```typescript
const activeSection = useActiveSection(['id1', 'id2', ...])
// Returns: 'id1' (wenn Viewport bei id1 ist)
```

---

## 🎓 Next Steps

```
1. START_HERE.md lesen
        ↓
2. QUICK_START.md folgen (30 min)
        ↓
3. Inhalte in content.ts ändern
        ↓
4. npm run dev & testen
        ↓
5. Deploy zu Vercel
        ↓
6. Erfolg! 🎉
```

---

## 📚 Datei-Referenz Tabelle

| Datei | Typ | Zweck | Edit? |
|-------|-----|-------|-------|
| `src/data/content.ts` | TypeScript | **Deine Inhalte** | ✅ JA! |
| `app/globals.css` | CSS | Design & Farben | ✅ JA! |
| `src/components/*.tsx` | React | UI Components | ⚠️ Vorsicht |
| `app/layout.tsx` | React | Root Layout | ⚠️ Vorsicht |
| `app/page.tsx` | React | Home Page | ⚠️ Vorsicht |
| `next.config.ts` | Config | Build Settings | ❌ Nein |
| `tailwind.config.cjs` | Config | Tailwind Settings | ⚠️ Vorsicht |
| `tsconfig.json` | Config | TypeScript Settings | ❌ Nein |

---

**⭐ Wichtigste Datei zum Bearbeiten: `src/data/content.ts`**

Alles andere brauchst du nicht zu ändern (es sei denn, du weißt was du tust!)

