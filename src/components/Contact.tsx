'use client';

import React, { useState } from 'react';
import { contact } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <section
      id="kontakt"
      className="py-20 bg-[#efe1b5] dark:bg-[#2d2d2d] transition-colors scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="contact-heading" className="text-4xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
            Kontakt
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
                Kontaktinformationen
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">E-Mail</h4>
                    <a href={`mailto:${contact.email}`} className="text-[#1e1e1e]/80 dark:text-white/80">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#6e5034] dark:bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">Telefon</h4>
                    <a href={`tel:${contact.phone}`} className="text-[#1e1e1e]/80 dark:text-white/80">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#cdb885] dark:bg-[#5dd3b6] rounded-lg flex items-center justify-center text-[#6e5034] dark:text-white flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">Standort</h4>
                    <p className="text-[#1e1e1e]/80 dark:text-white/80">{contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div>
              <h3 className="text-2xl mb-6 text-[#1e1e1e] dark:text-white font-semibold">
                Online-Profile
              </h3>
              <div className="flex gap-4">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-[#1a1a1a] text-[#1e1e1e] dark:text-white rounded-lg flex items-center justify-center shadow"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white dark:bg-[#1a1a1a] text-[#1e1e1e] dark:text-white rounded-lg flex items-center justify-center shadow"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.229-1.663-2.229-1.117 0-1.773.76-2.067 1.484-.106.257-.134.616-.134.976v5.338h-3.545s.047-8.651 0-9.549h3.545v1.351c.42-.647 1.172-1.57 2.851-1.57 2.085 0 3.647 1.357 3.647 4.272v5.496zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.19 0 1.912.753 1.937 1.708 0 .949-.747 1.707-1.985 1.707zm1.582 11.019H3.516V9.903h3.403v10.549zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
              {sent ? (
                <div className="py-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-lg font-semibold text-[#5dd3b6] mb-2">
                    Vielen Dank!
                  </p>
                  <p className="text-[#1e1e1e]/80 dark:text-white/80">
                    Ihre Nachricht wurde erfolgreich gesendet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name */}
                    <label className="block">
                      <span className="text-sm font-medium text-[#1e1e1e] dark:text-white block mb-2">
                        Name <span className="text-red-500">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#efe1b5]/50 dark:bg-[#2d2d2d] border border-[#cdb885] dark:border-[#5dd3b6]/30 rounded-lg px-4 py-2 text-[#1e1e1e] dark:text-white placeholder-[#6e5034]/50 dark:placeholder-white/50 focus:outline-none focus:border-[#5dd3b6] transition-colors"
                        placeholder="Ihr Name"
                      />
                    </label>

                    {/* Email */}
                    <label className="block">
                      <span className="text-sm font-medium text-[#1e1e1e] dark:text-white block mb-2">
                        E-Mail <span className="text-red-500">*</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#efe1b5]/50 dark:bg-[#2d2d2d] border border-[#cdb885] dark:border-[#5dd3b6]/30 rounded-lg px-4 py-2 text-[#1e1e1e] dark:text-white placeholder-[#6e5034]/50 dark:placeholder-white/50 focus:outline-none focus:border-[#5dd3b6] transition-colors"
                        placeholder="Ihre E-Mail"
                      />
                    </label>
                  </div>

                  {/* Subject */}
                  <label className="block">
                    <span className="text-sm font-medium text-[#1e1e1e] dark:text-white block mb-2">
                      Betreff <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#efe1b5]/50 dark:bg-[#2d2d2d] border border-[#cdb885] dark:border-[#5dd3b6]/30 rounded-lg px-4 py-2 text-[#1e1e1e] dark:text-white placeholder-[#6e5034]/50 dark:placeholder-white/50 focus:outline-none focus:border-[#5dd3b6] transition-colors"
                      placeholder="Worum geht es?"
                    />
                  </label>

                  {/* Message */}
                  <label className="block">
                    <span className="text-sm font-medium text-[#1e1e1e] dark:text-white block mb-2">
                      Nachricht <span className="text-red-500">*</span>
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-[#efe1b5]/50 dark:bg-[#2d2d2d] border border-[#cdb885] dark:border-[#5dd3b6]/30 rounded-lg px-4 py-2 text-[#1e1e1e] dark:text-white placeholder-[#6e5034]/50 dark:placeholder-white/50 focus:outline-none focus:border-[#5dd3b6] transition-colors resize-vertical"
                      placeholder="Ihre Nachricht..."
                    />
                  </label>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                      className="w-full bg-[#5dd3b6] hover:bg-[#4bc4a7] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Nachricht senden
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
