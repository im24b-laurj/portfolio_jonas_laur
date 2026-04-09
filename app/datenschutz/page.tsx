import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung und Datenschutzrichtlinien',
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors pt-24">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold mb-8 text-[#1e1e1e] dark:text-white">Datenschutzerklärung</h1>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold mb-2 text-[#1e1e1e] dark:text-white">Allgemeine Hinweise</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text aufgelisteten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">2. Datenerfassung auf dieser Website</h2>

              <h3 className="text-lg font-semibold mb-2 text-[#1e1e1e] dark:text-white">Wer ist verantwortlich für die Datenerfassung?</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Webseitenbetreiber.
              </p>

              <h3 className="text-lg font-semibold mb-2 text-[#1e1e1e] dark:text-white">Kontaktdaten des Verantwortlichen:</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Jonas Laur
                <br />
                [Deine Adresse]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
                <br />
                E-Mail: [Deine E-Mail-Adresse]
              </p>

              <h3 className="text-lg font-semibold mb-2 text-[#1e1e1e] dark:text-white">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Die Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
                ein Kontaktformular eingeben. Andere Daten werden von unseren IT-Systemen automatisch erfasst, wenn Sie die Website besuchen. Das sind
                vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenabrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">3. Ihre Rechte</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Sie haben das Recht, jederzeit Auskunft über die bezüglich Ihrer Person gespeicherten Daten zu erhalten, sowie das Recht auf Berichtigung
                oder Löschung dieser Daten. Falls Sie einen Vertrag mit uns geschlossen haben, haben Sie zusätzlich das Recht auf Einschränkung der
                Verarbeitung der Sie betreffenden personenbezogenen Daten oder das Recht, sich der Verarbeitung zu widersetzen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei einer Aufsichtsbehörde zu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">4. Analyse-Tools und Dienste von Drittanbietern</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Diese Website kann Dienste von Drittanbietern nutzen. Diese Dienstanbieter erhalten möglicherweise personenbezogene Daten über Sie.
                Diese Anbieter setzen diese Informationen nach eigenen Datenschutzrichtlinien ein. Für die Verarbeitung durch diese Anbieter sind wir
                nicht verantwortlich. Sollten Sie Fragen zu den Datenschutzrichtlinien dieser Dienstanbieter haben, kontaktieren Sie diese bitte direkt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">5. Kontaktformular</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden die eingegebenen Daten zu dem Zwecke der Bearbeitung Ihrer Anfrage
                und für mögliche Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">6. Speicherdauer von Daten</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Personenbezogene Daten, die Sie uns über die Website mitteilen, werden nur so lange gespeichert, wie dies für den Zweck der
                Verarbeitung notwendig ist. Sollten Sie um Löschung ersuchen und es besteht kein gesetzlicher Grund für eine weitere Speicherung,
                werden Ihre Daten unverzüglich gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">7. Sicherheit Ihrer Daten</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Wir haben geeignete technische und organisatorische Sicherheitsmaßnahmen getroffen, um Ihre Daten vor Zerstörung, Verlust, Änderung,
                unbefugtem Zugriff, unbefugter Offenlegung oder unbefugter Zerstörung zu schützen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 mb-4">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand vom März 2026. Aufgrund von Änderungen unserer Website und der
                eingesetzten Tools oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig sein, diese
                Datenschutzerklärung zu ändern. Diese Datenschutzerklärung wird regelmäßig überprüft. Die aktuelle Version ist jederzeit auf dieser
                Website verfügbar.
              </p>
            </div>

            <div className="bg-[#efe1b5]/20 dark:bg-[#5dd3b6]/10 border-l-4 border-[#5dd3b6] p-6 rounded">
              <h3 className="text-lg font-semibold mb-2 text-[#1e1e1e] dark:text-white">Fragen zum Datenschutz?</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                Falls Sie Fragen zum Datenschutz haben, kontaktieren Sie uns unter der im Impressum angegebenen E-Mail-Adresse oder Telefonnummer.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-[#cdb885]/50 dark:border-[#5dd3b6]/30">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#5dd3b6] hover:text-[#5dd3b6]/80 transition-colors"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}


