import { Bike, Dumbbell, Code2, Users } from 'lucide-react';

export function Interests() {
  const interests = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Softwareentwicklung',
      description: 'Programmieren ist nicht nur meine berufliche Leidenschaft, sondern auch mein Hobby. Ich arbeite regelmäßig an eigenen Projekten und erweitere mein technisches Wissen.',
      color: '#5dd3b6',
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: 'Biken',
      description: 'Als Ausgleich zur Informatik bin ich gerne auf dem Bike unterwegs. Die Bewegung an der frischen Luft hilft mir, den Kopf frei zu bekommen und neue Energie zu tanken.',
      color: '#6e5034',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitnessstudio',
      description: 'Regelmäßiges Training im Fitnessstudio ist Teil meiner Routine. Sport fördert nicht nur meine körperliche, sondern auch meine mentale Fitness und Konzentrationsfähigkeit.',
      color: '#cdb885',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Teamarbeit',
      description: 'Ob im Sport oder in Projekten – ich schätze die Zusammenarbeit mit anderen. Der Austausch und gemeinsame Erfolge motivieren mich besonders.',
      color: '#5dd3b6',
    },
  ];

  return (
    <section id="interests" className="py-20 bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#1e1e1e] dark:text-white">Interessen & Ausgleich</h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80">
            Neben der Informatik ist mir ein gesunder Ausgleich wichtig. Sport hilft mir, 
            fokussiert und ausgeglichen zu bleiben – eine wichtige Voraussetzung für erfolgreiche Arbeit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#efe1b5] to-white dark:from-[#2d2d2d] dark:to-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: interest.color }}
              >
                {interest.icon}
              </div>
              <h3 className="text-xl mb-3 text-[#1e1e1e] dark:text-white">{interest.title}</h3>
              <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center bg-[#5dd3b6]/10 dark:bg-[#5dd3b6]/20 border-l-4 border-[#5dd3b6] p-6 rounded-lg">
          <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">
            <strong className="text-[#1e1e1e] dark:text-white">Work-Life-Balance:</strong> Der Ausgleich zwischen 
            intensiver geistiger Arbeit und körperlicher Aktivität hilft mir, langfristig leistungsfähig 
            und motiviert zu bleiben. Diese Balance übertrage ich auch auf meine Arbeitsweise.
          </p>
        </div>
      </div>
    </section>
  );
}