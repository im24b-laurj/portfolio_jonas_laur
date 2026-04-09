# 🎯 Quick-Start: Häufige Anpassungen

## 1️⃣ Persönliche Daten ändern

**Datei:** `src/data/content.ts`

```typescript
export const siteMeta: SiteMeta = {
  name: 'Dein Name',                              // ← Ändere hier
  role: 'Deine Rolle',                           // ← Ändere hier
  intro: 'Deine Intro-Text...',                  // ← Ändere hier
  description: 'SEO Description',                 // ← Ändere hier
};
```

## 2️⃣ Kontaktinformationen aktualisieren

**Datei:** `src/data/content.ts`

```typescript
export const contact: Contact = {
  email: 'deine.email@example.de',              // ← Ändere hier
  phone: '+49 123 456789',                       // ← Ändere hier
  location: 'Deine Stadt, Land',                // ← Ändere hier
  github: 'https://github.com/dein-username',   // ← Ändere hier
  linkedin: 'https://linkedin.com/in/dein-profil', // ← Ändere hier
};
```

## 3️⃣ Über mich ändern

**Datei:** `src/data/content.ts`

```typescript
export const about: About = {
  heading: 'Über mich',
  text: 'Dein About-Text hier...',               // ← Ändere hier
  quote: 'Dein Zitat hier...',                   // ← Ändere hier
  education: [
    {
      title: 'Dein Schulname',                   // ← Ändere hier
      school: 'Schule/Uni',                      // ← Ändere hier
      duration: '2020 - 2024',                   // ← Ändere hier
      emoji: '🏫',                               // ← Ändere hier
    },
    // Mehr Einträge hinzufügen...
  ],
};
```

## 4️⃣ Skills aktualisieren

**Datei:** `src/data/content.ts`

```typescript
export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'React',
      'Next.js',
      'TypeScript',
      // Mehr hinzufügen...
    ],
  },
  // Weitere Kategorien...
];
```

## 5️⃣ Projekte hinzufügen/ändern

**Datei:** `src/data/content.ts`

```typescript
export const projects: Project[] = [
  {
    id: 'p1',                                     // Eindeutige ID
    title: 'Projektname',                         // ← Ändere hier
    shortDescription: 'Kurze Beschreibung...',   // ← Ändere hier
    tech: ['React', 'TypeScript', 'Tailwind'],   // ← Ändere hier
    repoUrl: 'https://github.com/user/repo',    // ← Ändere hier
    status: 'Abgeschlossen',                     // oder 'In Entwicklung'
  },
  // Mehr Projekte hinzufügen...
];
```

**Schema für neues Projekt:**
```typescript
{
  id: 'pX',                           // Eindeutig! (p1, p2, p3, p4...)
  title: 'Projektname',
  shortDescription: 'Kurze Beschreibung (1-2 Sätze)',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  repoUrl: 'https://github.com/username/project-name',
  status: 'Abgeschlossen' | 'In Entwicklung',
}
```

## 6️⃣ Interessen ändern

**Datei:** `src/data/content.ts`

```typescript
export const interests: Interest[] = [
  {
    id: 'dev',
    title: 'Softwareentwicklung',                 // ← Ändere hier
    description: 'Deine Beschreibung...',        // ← Ändere hier
    emoji: '💻',                                 // ← Ändere hier
  },
  // Mehr Einträge...
];
```

## 7️⃣ Farben anpassen

**Datei:** `app/globals.css`

```css
:root {
  --bg-cream: #efe1b3;          /* Hintergrund */     /* ← Ändere hier */
  --accent-mint: #7dd3c9;       /* Primär-Farbe */   /* ← Ändere hier */
  --accent-brown: #6b4f39;      /* Sekundär-Farbe */ /* ← Ändere hier */
  --card: #ffffff;              /* Card-Hintergrund */ /* ← Ändere hier */
  --text: #1b1b1b;              /* Text-Farbe */     /* ← Ändere hier */
}
```

**Farbwerkzeuge:**
- [Tailwind Color Generator](https://www.tints.dev)
- [Coolors](https://coolors.co)
- [Accessibility Checker](https://www.tota11y.com)

## 8️⃣ Font ändern

**Datei:** `app/layout.tsx`

```typescript
// Andere Font importieren von google fonts:
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});

// In body className:
className={`${yourFont.variable} ... antialiased`}
```

## 9️⃣ Neue Sektion hinzufügen

1. **Komponente erstellen:**
```typescript
// src/components/MySection.tsx
'use client';

export default function MySection() {
  return (
    <section id="my-section" className="section" aria-labelledby="my-heading">
      <h2 id="my-heading" className="section-heading">
        Überschrift
      </h2>
      {/* Content */}
    </section>
  );
}
```

2. **In page.tsx importieren:**
```typescript
import MySection from '../src/components/MySection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* ... andere */}
        <MySection />  {/* ← Hier hinzufügen */}
        <Contact />
      </main>
    </>
  );
}
```

3. **In Navbar hinzufügen:**
```typescript
const NAV_ITEMS = [
  { id: 'start', label: 'Start' },
  // ...
  { id: 'my-section', label: 'Meine Sektion' }, // ← Hinzufügen
  { id: 'kontakt', label: 'Kontakt' },
];
```

4. **Daten in content.ts ergänzen:**
```typescript
export const mySection = {
  heading: 'Überschrift',
  items: [/* ... */],
};
```

## 🔟 SEO Titel & Beschreibung

**Datei:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: `Portfolio - ${siteMeta.name}`,                     // ← Ändere hier
  description: siteMeta.description || "Default Description",// ← Ändere hier
  keywords: ["Portfolio", "Developer", "Deine-Keywords"],   // ← Ändere hier
};
```

---

## 📋 Vor dem Deployment Checklist

- [ ] Name & Rolle aktualisiert
- [ ] Alle Kontaktinfos korrekt
- [ ] Echte Projekte hinzugefügt (oder Placeholder aktualisiert)
- [ ] Farben an dein Design angepasst
- [ ] About-Text personalisiert
- [ ] GitHub & LinkedIn Links aktualisiert
- [ ] Skills aktualisiert
- [ ] Mobile auf Smartphone getestet
- [ ] Alle Links funktionieren
- [ ] Kein Console-Fehler (F12)

## 🚀 Starten & Deployment

```bash
# Lokal entwickeln
npm run dev
# → http://localhost:3000

# Production Build
npm run build

# Production starten
npm start

# Zu Vercel deployen
npm install -g vercel
vercel
```

## 💡 Tipps & Tricks

### Emoji in Interest hinzufügen
Einfach Unicode-Emoji kopieren:
```typescript
emoji: '🚀'  // Rocket
emoji: '💻'  // Laptop
emoji: '🎓'  // Graduation Cap
emoji: '🤝'  // Handshake
```

### Neue Skill-Kategorie
```typescript
{
  id: 'cloud',
  title: 'Cloud & DevOps',
  items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
}
```

### Link zu externe Seite
```typescript
repoUrl: 'https://deine-website.de'  // Nicht nur GitHub!
```

### In Entwicklung markieren
```typescript
status: 'In Entwicklung'  // Wird mit 🔧 gekennzeichnet
```

---

**Fragen? Siehe `ARCHITECTURE.md` für technische Details!**

