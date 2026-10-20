import { GraduationCap, School } from 'lucide-react';

export function About() {
  const education = [
    {
      icon: <School className="w-6 h-6" />,
      title: 'Sekundarstufe A',
      institution: 'Schulhaus Letzi',
      duration: '3 Jahre',
      years: '2021 - 2024',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Informatik Mittelschule',
      institution: 'Kantonsschule Hottingen',
      duration: '4 Jahre',
      years: '2024 - 2028 (Erwartet)',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#1e1e1e] dark:text-white">Über mich</h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed mb-8">
            Als angehender Informatiker bin ich Schüler mit einer ausgeprägten Leidenschaft für Softwareentwicklung 
            und Technologie. Meine Stärke liegt darin, analytisch zu denken und dabei kreative Lösungsansätze zu entwickeln. 
            Ich arbeite strukturiert, bin eigeninitiativ und bringe eine hohe Lernbereitschaft mit. 
            Das kontinuierliche Erweitern meines Wissens durch eigene Projekte ist für mich nicht nur Pflicht, sondern Freude.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl mb-8 text-[#1e1e1e] dark:text-white text-center">Bildungsweg</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#efe1b5] to-[#cdb885] dark:from-[#2d2d2d] dark:to-[#1a1a1a] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5dd3b6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#1e1e1e] dark:text-white mb-2">{item.title}</h4>
                    <p className="text-[#1e1e1e]/90 dark:text-white/90 mb-1">{item.institution}</p>
                    <p className="text-[#1e1e1e]/70 dark:text-white/70 text-sm">{item.duration}</p>
                    <p className="text-[#1e1e1e]/70 dark:text-white/70 text-sm">{item.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 border-l-4 border-[#5dd3b6] p-8 rounded-lg">
          <p className="text-lg text-[#1e1e1e] dark:text-white italic">
            "Mein Ziel ist es, als Informatiker innovative Lösungen zu entwickeln und dabei stetig zu wachsen. 
            Ich suche eine Ausbildung oder Position, in der ich meine Fähigkeiten einbringen und weiter ausbauen kann."
          </p>
        </div>
      </div>
    </section>
  );
}