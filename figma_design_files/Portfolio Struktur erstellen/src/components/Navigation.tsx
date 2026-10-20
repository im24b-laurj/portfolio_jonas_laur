import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Start' },
    { id: 'about', label: 'Über mich' },
    { id: 'skills', label: 'Fähigkeiten' },
    { id: 'projects', label: 'Projekte' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-[#1e1e1e] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-semibold text-xl text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
            >
              Jonas
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-4 mt-4">
              <button
                onClick={toggleTheme}
                className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1e1e] dark:text-white hover:text-[#5dd3b6] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}