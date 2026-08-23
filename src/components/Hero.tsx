'use client';

import React from 'react';
import { siteMeta } from '../data/content';
import { scrollToId } from '../lib/scrollToId';

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#efe1b5] to-[#cdb885] dark:from-[#2d2d2d] dark:to-[#1a1a1a] pt-20 transition-colors scroll-mt-20"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[#6e5034] dark:text-[#5dd3b6] uppercase tracking-wider text-sm font-semibold">
                {siteMeta.role}
              </p>
              <h1
                id="hero-heading"
                className="text-5xl md:text-6xl text-[#1e1e1e] dark:text-white font-light"
              >
                {siteMeta.name}
              </h1>
              <p className="text-xl text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">
                {siteMeta.intro}
              </p>
            </div>


          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 h-96 flex flex-col items-center justify-center gap-4">
              <img
                src="/Jonas-1.jpg"
                alt="Jonas Laur"
                className="min-h-0 flex-1 w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              />
              <p className="text-2xl font-semibold text-[#1e1e1e] dark:text-white">
                Code. Learn. Grow.
              </p>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#5dd3b6] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#6e5034] dark:bg-[#5dd3b6] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
