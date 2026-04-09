# Portfolio Architecture

## 📁 Projektstruktur

```
portfolio_jonas_laur/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root Layout
│   ├── page.tsx                 # Home Page
│   ├── globals.css              # Global Styles
│   └── favicon.ico
├── src/
│   ├── components/              # React Components
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero Section
│   │   ├── About.tsx           # About Section
│   │   ├── Skills.tsx          # Skills Section
│   │   ├── Projects.tsx        # Projects Section
│   │   ├── Interests.tsx       # Interests Section
│   │   └── Contact.tsx         # Contact Section
│   ├── data/
│   │   └── content.ts          # Centralized Content & Data
│   └── lib/
│       ├── scrollToId.ts       # Scroll Navigation Utility
│       └── useActiveSection.ts # Active Section Hook
├── public/                       # Static Assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.cjs
├── postcss.config.mjs
└── eslint.config.mjs
```

## 🎨 Design Principles

- **Mobile-First**: Responsive Design für alle Geräte
- **Accessibility**: Semantisches HTML, ARIA-Labels, Keyboard Navigation
- **Performance**: Client-side Rendering mit Framer Motion für leichte Animationen
- **Data-Driven**: Alle Inhalte in `src/data/content.ts` zentralisiert
- **Type Safety**: Full TypeScript für bessere Developer Experience

## 🚀 Tech Stack

- **Next.js 14** - React Framework mit App Router
- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS 4** - Utility-First CSS
- **Framer Motion** - Animation Library (optional, leichte Animationen)

## 📝 Content Management

Alle Inhalte sind in `src/data/content.ts` zentralisiert:

```typescript
// Einfach bearbeiten:
export const siteMeta = { ... }
export const about = { ... }
export const skills = [ ... ]
export const projects = [ ... ]
export const interests = [ ... ]
export const contact = { ... }
```

### Schnittstellen (Interfaces)

```typescript
// Projekte einfach hinzufügen:
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  repoUrl: string;
  status: 'Abgeschlossen' | 'In Entwicklung';
}
```

## 🧭 Navigation

### Scroll-Navigation
- Smooth Scroll zu Sektionen
- Active Section Highlighting in der Navbar
- Mobile: Select-Dropdown statt Navlinks
- Intersection Observer Hook für Performance

### Seiten-Struktur
1. **Startseite** - Hero Section mit CTA
2. **Über mich** - About Section mit Bildung
3. **Fähigkeiten** - Skills Categories
4. **Projekte** - Project Showcase (3 Placeholder)
5. **Interessen & Ausgleich** - Personal Interests
6. **Kontakt** - Contact Form + Information

## 🎬 Animationen

Leichte, subtile Animationen mit Framer Motion:
- `whileInView` - Animationen beim Scrolling in den Viewport
- `staggerChildren` - Gestaffelte Animationen für Listen
- `once: true` - Animation nur einmal abspielen

## 🎯 Best Practices

### Component Structure
- Jede Sektion als eigene Komponente
- `'use client'` Directive für Client-Side Features
- Semantic HTML (`<section>`, `<article>`, `<nav>`)

### Styling
- Tailwind für responsive Design
- CSS Variables für Farben (siehe `globals.css`)
- Utility-Klassen für konsistente Styles

### Accessibility
- ARIA-Labels für interaktive Elemente
- `aria-labelledby` für Sektionen
- Keyboard Navigation Support
- `prefers-reduced-motion` respektieren

## 🔧 Customization Guide

### 1. Persönliche Informationen ändern
Edit `src/data/content.ts`:
```typescript
export const siteMeta = {
  name: 'Your Name',
  role: 'Your Role',
  intro: 'Your Intro Text',
};
```

### 2. Projekte hinzufügen/ändern
```typescript
export const projects: Project[] = [
  {
    id: 'p4',
    title: 'My New Project',
    shortDescription: 'Description...',
    tech: ['Next.js', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/user/project',
    status: 'Abgeschlossen',
  },
  // ...
];
```

### 3. Farben anpassen
Edit `app/globals.css`:
```css
:root {
  --bg-cream: #efe1b3;
  --accent-mint: #7dd3c9;
  --accent-brown: #6b4f39;
}
```

### 4. Neue Sektion hinzufügen
1. Erstelle neue Komponente in `src/components/`
2. Importiere in `app/page.tsx`
3. Ergänze Navigation in `Navbar.tsx`
4. Füge Daten in `content.ts` hinzu

## 📦 Dependencies

```json
{
  "next": "16.1.2",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "framer-motion": "^11.0.0",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4"
}
```

## 🚀 Deployment

```bash
# Build für Production
npm run build

# Start Production Server
npm start

# Entwicklung
npm run dev
```

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Touch-friendly interactions

## ♿ Accessibility Checklist

- [x] Semantic HTML
- [x] ARIA Labels
- [x] Keyboard Navigation
- [x] Color Contrast
- [x] Focus Indicators
- [x] Reduced Motion Support

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Web Accessibility](https://www.w3.org/WAI/)

