'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1e1e1e] border-t border-[#cdb885]/50 dark:border-[#5dd3b6]/30 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-[#1e1e1e]/60 dark:text-white/60">
            © {new Date().getFullYear()} Jonas Laur. Alle Rechte vorbehalten.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-[#1e1e1e]/80 dark:text-white/80"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-[#1e1e1e]/80 dark:text-white/80"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

