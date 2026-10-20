import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In einer echten Anwendung würde hier die E-Mail-Funktionalität implementiert werden
    alert('Vielen Dank für Ihre Nachricht! Dies ist eine Demo-Version. In der finalen Version würde die Nachricht versendet werden.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#efe1b5] to-[#cdb885] dark:from-[#2d2d2d] dark:to-[#1a1a1a] transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#1e1e1e] dark:text-white">Kontakt</h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80">
            Sie haben Interesse an meinem Profil oder möchten mehr erfahren? 
            Ich freue mich auf Ihre Nachricht und stehe für Fragen gerne zur Verfügung.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-[#1e1e1e] dark:text-white">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">E-Mail</h4>
                    <p className="text-[#1e1e1e]/80 dark:text-white/80">jonas.laur@gmx.ch</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#6e5034] dark:bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">Telefon</h4>
                    <p className="text-[#1e1e1e]/80 dark:text-white/80">+41 77 526 39 90</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white dark:bg-[#1a1a1a] p-4 rounded-lg shadow">
                  <div className="w-10 h-10 bg-[#cdb885] dark:bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-1">Standort</h4>
                    <p className="text-[#1e1e1e]/80 dark:text-white/80">Schweiz</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-[#1e1e1e] dark:text-white">Online-Profile</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white dark:bg-[#1a1a1a] hover:bg-[#5dd3b6] hover:text-white text-[#1e1e1e] dark:text-white rounded-lg flex items-center justify-center transition-colors shadow"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white dark:bg-[#1a1a1a] hover:bg-[#5dd3b6] hover:text-white text-[#1e1e1e] dark:text-white rounded-lg flex items-center justify-center transition-colors shadow"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow">
              <h3 className="text-xl mb-3 text-[#1e1e1e] dark:text-white">Verfügbarkeit</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">
                Ich bin auf der Suche nach einer Ausbildung im Bereich Informatik / Softwareentwicklung 
                und stehe für ein Vorstellungsgespräch oder Praktikum zur Verfügung.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl mb-6 text-[#1e1e1e] dark:text-white">Nachricht senden</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#1e1e1e] dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0f0f0f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5dd3b6] text-[#1e1e1e] dark:text-white"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1e1e1e] dark:text-white mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0f0f0f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5dd3b6] text-[#1e1e1e] dark:text-white"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#1e1e1e] dark:text-white mb-2">
                  Betreff *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0f0f0f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5dd3b6] text-[#1e1e1e] dark:text-white"
                  placeholder="Worum geht es?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#1e1e1e] dark:text-white mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0f0f0f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5dd3b6] text-[#1e1e1e] dark:text-white resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5dd3b6] text-white py-3 rounded-lg hover:bg-[#4bc4a7] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Nachricht senden
              </button>

              <p className="text-sm text-[#1e1e1e]/60 dark:text-white/60 text-center">
                * Pflichtfelder
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl mb-4 text-[#1e1e1e] dark:text-white">Bereit für den nächsten Schritt</h3>
          <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed mb-6">
            Ich freue mich darauf, meine Fähigkeiten in einem professionellen Umfeld einzubringen und 
            kontinuierlich weiterzuentwickeln. Lassen Sie uns gemeinsam herausfinden, wie ich Ihr Team 
            bereichern kann.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 text-[#1e1e1e] dark:text-white rounded-full">
              Motiviert
            </span>
            <span className="px-4 py-2 bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 text-[#1e1e1e] dark:text-white rounded-full">
              Strukturiert
            </span>
            <span className="px-4 py-2 bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 text-[#1e1e1e] dark:text-white rounded-full">
              Teamorientiert
            </span>
            <span className="px-4 py-2 bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 text-[#1e1e1e] dark:text-white rounded-full">
              Großes Potenzial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}