'use client';

import React from 'react';
import { about } from '../data/content';

export default function About() {
  return (
    <section
      id="ueber-mich"
      className="py-20 bg-white dark:bg-[#1e1e1e] transition-colors scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Heading and Text */}
          <div>
            <h2 id="about-heading" className="text-4xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
              {about.heading}
            </h2>
            <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">
              {about.text}
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="text-2xl mb-8 text-[#1e1e1e] dark:text-white font-semibold">
              Bildungsweg
            </h3>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#5dd3b6]" aria-hidden="true" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {about.education.map((edu, index) => (
                  <article key={edu.school} className="relative pl-6">
                    {/* Content */}
                    <div className="bg-[#efe1b5] dark:bg-[#2d2d2d] rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-[#1e1e1e] dark:text-white mb-2">
                        {edu.title}
                      </h4>
                      <p className="text-[#1e1e1e]/90 dark:text-white/90 mb-1 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-[#1e1e1e]/70 dark:text-white/70 text-sm">
                        {edu.duration}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
