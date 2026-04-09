'use client';

import React from 'react';
import { interests } from '../data/content';

export default function Interests() {
  return (
    <section
      id="interessen"
      className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors scroll-mt-20"
      aria-labelledby="interests-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="interests-heading" className="text-4xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
            Interessen & Ausgleich
          </h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80">
            Neben der Informatik ist mir ein gesunder Ausgleich wichtig. Sport hilft mir,
            fokussiert und ausgeglichen zu bleiben - eine wichtige Voraussetzung fur erfolgreiche Arbeit.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interests.map((interest) => (
            <article
              key={interest.id}
              className="bg-[#efe1b5] dark:bg-[#2d2d2d] p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl mb-3 text-[#1e1e1e] dark:text-white font-semibold">
                {interest.title}
              </h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed text-sm">
                {interest.description}
              </p>
            </article>
          ))}
        </div>

        {/* Work-Life Balance Message */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 border-l-4 border-[#5dd3b6] p-6 rounded-lg">
          <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">
            <strong className="text-[#1e1e1e] dark:text-white">Work-Life-Balance:</strong> Der Ausgleich zwischen
            intensiver geistiger Arbeit und korperlicher Aktivitat hilft mir, langfristig leistungsfahig
            und motiviert zu bleiben. Diese Balance ubertrage ich auch auf meine Arbeitsweise.
          </p>
        </div>
      </div>
    </section>
  );
}
