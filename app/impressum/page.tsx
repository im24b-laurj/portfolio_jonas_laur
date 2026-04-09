import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen',
};

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors pt-24">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold mb-8 text-[#1e1e1e] dark:text-white">Impressum</h1>

          <section className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Angaben gemäß § 5 TMG</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                <strong>Jonas Laur</strong>
                <br />
                [Deine Adresse]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Kontaktinformationen</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                <strong>Telefon:</strong> [Deine Telefonnummer]
                <br />
                <strong>E-Mail:</strong> [Deine E-Mail-Adresse]
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                Jonas Laur
                <br />
                [Deine Adresse]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Disclaimer – Haftung für Inhalte</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
                Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Haftung für Links</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#1e1e1e] dark:text-white">Urheberrecht</h2>
              <p className="text-[#1e1e1e]/80 dark:text-white/80">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
                als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
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

