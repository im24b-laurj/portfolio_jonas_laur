import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Interests />
          <Contact />
        </main>
        <footer className="bg-[#1e1e1e] dark:bg-black text-white py-8 text-center">
          <p className="text-sm">© 2026 Jonas Laur. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}