'use client';

import React from 'react';
import { siteMeta } from '../data/content';
import useActiveSection from '../lib/useActiveSection';
import { scrollToId } from '../lib/scrollToId';

const NAV_ITEMS = [
  { id: 'start', label: 'Start' },
  { id: 'ueber-mich', label: 'Über mich' },
  { id: 'faehigkeiten', label: 'Fähigkeiten' },
  { id: 'projekte', label: 'Projekte' },
  { id: 'interessen', label: 'Interessen' },
  { id: 'kontakt', label: 'Kontakt' },
];


export default function Navbar() {
  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const handleNavClick = (id: string) => {
    scrollToId(id);
  };

  const [firstName, lastName] = siteMeta.name.split(' ');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-md border-b border-[#cdb885]/50 dark:border-[#5dd3b6]/30 z-50 transition-colors">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => handleNavClick('start')}
          className="flex items-baseline gap-1 text-2xl md:text-3xl font-semibold text-[#1e1e1e] dark:text-white"
          aria-label={`${siteMeta.name} - Zur Startseite`}
        >
          <span className="tracking-tight">{firstName}</span>
          <span className="tracking-tight text-[#6e5034] dark:text-[#cdb885] font-serif">
            {lastName}
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-1 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`text-sm py-2 px-3 rounded-md transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#5dd3b6] font-semibold bg-white/50 dark:bg-[#1a1a1a]/50'
                    : 'text-[#1e1e1e]/80 dark:text-white/80 hover:text-[#5dd3b6]'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Select */}
        <div className="md:hidden">
          <label htmlFor="mobile-nav" className="sr-only">
            Navigation – Sektion auswählen
          </label>
          <select
            id="mobile-nav"
            onChange={(e) => {
              const value = e.target.value;
              handleNavClick(value);
              // Reset select to empty after selection
              e.target.value = '';
            }}
            defaultValue=""
            className="bg-white/70 dark:bg-[#1a1a1a]/70 border border-[#cdb885]/50 dark:border-[#5dd3b6]/30 text-sm rounded-md px-3 py-1 text-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5dd3b6]"
            aria-label="Navigation"
          >
            <option value="">Navigation auswählen</option>
            {NAV_ITEMS.map((n) => (
              <option key={n.id} value={n.id}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
