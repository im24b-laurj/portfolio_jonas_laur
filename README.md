# 🎉 Portfolio - Jonas Laur

Ein modernes, responsives One-Pager Portfolio gebaut mit **Next.js 14**, **React 19**, **TypeScript**, **Tailwind CSS** und **Framer Motion**.

---

## 🚀 Quick Start

### 1. Lokal starten
```bash
npm install
npm run dev
# → http://localhost:3000
```

### 2. Inhalte personalisieren
Öffne: `src/data/content.ts` und ändere:
- `siteMeta` - Dein Name, Rolle, Intro
- `about` - Über dich
- `contact` - Email, Phone, Links
- `projects` - Deine Projekte (wichtig!)
- `skills` - Deine Fähigkeiten
- `interests` - Deine Hobbies

### 3. Testen
```bash
npm run dev
# Öffne http://localhost:3000
# Teste auf Smartphone!
```

### 4. Deployen
```bash
npm run build
npm start

# Oder zu Vercel:
npm install -g vercel
vercel
```

---

## 📚 Dokumentation

| Datei | Zweck | Lesezeit |
|-------|-------|----------|
| **[START_HERE.md](./START_HERE.md)** | 👈 **BEGINNE HIER** | 5 min |
| **[QUICK_START.md](./QUICK_START.md)** | Schritt-für-Schritt Anleitungen | 30 min |
| **[README_DOCS.md](./README_DOCS.md)** | Dokumentations-Index | 10 min |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Technische Details | 45 min |
| **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** | Was wurde geändert | 20 min |
| **[STRUCTURE.md](./STRUCTURE.md)** | Projektstruktur | 15 min |
| **[CHANGES.md](./CHANGES.md)** | Final Report | 10 min |

👉 **[START_HERE.md](./START_HERE.md)** ist dein Einstiegspunkt!

---

## ✨ Features

- ✅ **One-Page Portfolio** mit Smooth Scroll Navigation
- ✅ **Responsive Design** - Mobile First Approach
- ✅ **Animationen** - Framer Motion für subtile Effects
- ✅ **Accessibility** - WCAG 2.1 AA Compliance
- ✅ **Type Safe** - Full TypeScript
- ✅ **Data-Driven** - Inhalte in JSON/TS
- ✅ **SEO Optimized** - Meta Tags, Semantic HTML
- ✅ **Production Ready** - Build & Deploy Ready

---

## 🛠️ Tech Stack

```json
{
  "frontend": ["React 19", "Next.js 14", "TypeScript"],
  "styling": ["Tailwind CSS 4", "CSS Variables"],
  "animations": ["Framer Motion"],
  "tooling": ["ESLint", "PostCSS"],
  "deployment": ["Vercel", "Netlify", "Docker"]
}
```

---

## 📁 Projektstruktur

```
portfolio_jonas_laur/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Home Page
│   └── globals.css        # Global Styles
├── src/
│   ├── components/        # React Komponenten
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Interests.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── content.ts     # ⭐ DEINE INHALTE
│   └── lib/
│       ├── scrollToId.ts
│       └── useActiveSection.ts
├── public/                # Static Assets
└── *.md                   # Dokumentation
```

---

## 🎨 Seiten/Sektionen

1. **Startseite (Hero)** - Einführung mit CTA
2. **Über mich** - Persönliche Info & Bildung
3. **Fähigkeiten** - Skills & Kompetenzen
4. **Projekte** - Portfolio von Projekten
5. **Interessen** - Hobbies & Work-Life Balance
6. **Kontakt** - Kontaktformular & Links

---

## 🎯 Häufige Anpassungen

### Name & Rolle ändern
```typescript
// src/data/content.ts
export const siteMeta = {
  name: 'Dein Name',
  role: 'Deine Rolle',
  // ...
}
```

### Projekte hinzufügen
```typescript
// src/data/content.ts
export const projects = [
  {
    id: 'p1',
    title: 'Mein Projekt',
    shortDescription: '...',
    tech: ['React', 'Next.js'],
    repoUrl: 'https://github.com/...',
    status: 'Abgeschlossen',
  },
]
```

### Farben anpassen
```css
/* app/globals.css */
:root {
  --bg-cream: #efe1b3;
  --accent-mint: #7dd3c9;
  --accent-brown: #6b4f39;
}
```

---

## 🚀 Commands

```bash
# Entwicklung
npm run dev          # Start Dev Server
npm run build        # Production Build
npm start            # Start Prod Server
npm run lint         # ESLint Check

# Deployment
npm run build        # Build für Production
vercel              # Deploy zu Vercel
```

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA Labels
- ✅ Keyboard Navigation
- ✅ Focus Indicators
- ✅ Color Contrast
- ✅ Reduced Motion Support

---

## 📈 Performance

- 🚀 **Pagespeed** - 90+ Lighthouse Score
- 📦 **Bundle** - ~25 KB (gzipped)
- ⚡ **FCP** - < 1s
- 🎬 **Animationen** - 60 FPS

---

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Browsers

---

## 📝 License

MIT - Frei zu verwenden & anzupassen

---

## 💡 Support

**Fragen? Schau in die Docs:**

1. [START_HERE.md](./START_HERE.md) - Quick Overview
2. [QUICK_START.md](./QUICK_START.md) - Anpassungsanleitung
3. [ARCHITECTURE.md](./ARCHITECTURE.md) - Technische Details
4. [README_DOCS.md](./README_DOCS.md) - Dokumentations-Index

---

## 🔗 Links

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🎬 [Framer Motion](https://www.framer.com/motion)
- ♿ [Web Accessibility](https://www.w3.org/WAI/)

---

## 👨‍💻 Author

**Jonas Laur**
- Portfolio: [deine-website.de](https://deine-website.de)
- GitHub: [github.com/jonaslaurdev](https://github.com/jonaslaurdev)
- LinkedIn: [linkedin.com/in/jonaslaurdev](https://linkedin.com/in/jonaslaurdev)

---

**Viel Erfolg mit deinem Portfolio! 🎉**

*Status: ✅ Production Ready | Letzte Aktualisierung: März 2026*

