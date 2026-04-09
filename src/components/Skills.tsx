'use client';

import React from 'react';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <section
      id="faehigkeiten"
      className="py-20 bg-[#efe1b5] dark:bg-[#2d2d2d] transition-colors scroll-mt-20"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="skills-heading" className="text-4xl mb-4 text-[#1e1e1e] dark:text-white font-semibold">
            Fähigkeiten & Kompetenzen
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skills.map((category) => (
            <article
              key={category.id}
              className="bg-white dark:bg-[#1a1a1a] border border-[#cdb885]/50 dark:border-[#5dd3b6]/30 rounded-xl p-8"
            >
              <h3 className="text-xl text-[#1e1e1e] dark:text-white font-semibold mb-6">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 text-[#1e1e1e]/80 dark:text-white/80">
                    <img
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <p className="mt-12 text-center text-[#1e1e1e]/80 dark:text-white/80 max-w-3xl mx-auto text-lg">
          Diese Kompetenzen habe ich mir durch schulische Projekte, Selbststudium und eigene Praxisprojekte
          angeeignet. Ich bin motiviert, mein Wissen in einem professionellen Umfeld anzuwenden und zu erweitern.
        </p>
      </div>
    </section>
  );
}
