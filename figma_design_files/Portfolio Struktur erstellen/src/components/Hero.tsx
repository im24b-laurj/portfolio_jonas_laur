import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#efe1b5] to-[#cdb885] dark:from-[#2d2d2d] dark:to-[#1a1a1a] pt-20 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[#6e5034] dark:text-[#5dd3b6] uppercase tracking-wider text-sm">Schüler & angehender Informatiker</p>
              <h1 className="text-5xl md:text-6xl text-[#1e1e1e] dark:text-white">
                Jonas Laur
              </h1>
              <p className="text-xl text-[#1e1e1e]/80 dark:text-white/80">
                Ich bin ein motivierter Schüler mit Leidenschaft für Softwareentwicklung. 
                Hier präsentiere ich meine Fähigkeiten, Projekte und meinen Lernweg als angehender Informatiker.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={scrollToAbout}
                className="bg-[#5dd3b6] text-white px-8 py-3 rounded-lg hover:bg-[#4bc4a7] transition-colors"
              >
                Mehr erfahren
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#6e5034] dark:bg-[#5dd3b6] text-white px-8 py-3 rounded-lg hover:bg-[#5a4029] dark:hover:bg-[#4bc4a7] transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#5dd3b6] to-[#6e5034] dark:from-[#5dd3b6] dark:to-[#3a8a74] h-96 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-lg rotate-12" />
                <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-white rounded-lg -rotate-6" />
              </div>
              <div className="relative z-10 text-center text-white p-8">
                <div className="text-6xl mb-4">&lt;/&gt;</div>
                <p className="text-2xl font-semibold">Code. Learn. Grow.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#5dd3b6] rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#6e5034] dark:bg-[#5dd3b6] rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#1e1e1e]/60 dark:text-white/60 hover:text-[#1e1e1e] dark:hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}