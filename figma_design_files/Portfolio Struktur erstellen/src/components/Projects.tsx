import { ExternalLink, Code2, Globe, Database, Users as UsersIcon } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Webanwendung mit Flask & React',
      status: 'Abgeschlossen',
      icon: <Globe className="w-12 h-12" />,
      color: '#5dd3b6',
      technologies: ['Python', 'Flask', 'React', 'JavaScript', 'CSS'],
      goal: 'Entwicklung einer vollständigen Webanwendung mit Backend und Frontend, um die Zusammenarbeit zwischen Server und Client zu verstehen.',
      contribution: 'Vollständige Entwicklung von Backend (API-Endpoints, Datenverarbeitung) und Frontend (Benutzeroberfläche, State Management). Implementierung der Kommunikation zwischen beiden Systemen.',
      learnings: 'Vertieftes Verständnis für REST-APIs, asynchrone Programmierung und komponentenbasierte Frontend-Entwicklung. Erfahrung mit der Integration von Backend und Frontend.',
    },
    {
      title: 'Responsive Portfolio-Website',
      status: 'Abgeschlossen',
      icon: <Code2 className="w-12 h-12" />,
      color: '#6e5034',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      goal: 'Erstellung einer professionellen, responsiven Website zur Präsentation meiner Fähigkeiten und Projekte für potenzielle Arbeitgeber und Ausbilder.',
      contribution: 'Konzeption, Design und vollständige Implementierung der Website mit Fokus auf User Experience und mobile Optimierung.',
      learnings: 'Vertiefte Kenntnisse in responsive Design, CSS Grid/Flexbox und modernen Web-Standards. Verständnis für Nutzerführung und Barrierefreiheit.',
    },
    {
      title: 'Aufgabenverwaltung mit Python',
      status: 'In Entwicklung',
      icon: <Database className="w-12 h-12" />,
      color: '#cdb885',
      technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
      goal: 'Entwicklung einer Anwendung zur Verwaltung und Priorisierung von Aufgaben mit Datenbank-Integration.',
      contribution: 'Backend-Entwicklung, Datenbankdesign und -anbindung, Implementierung der Geschäftslogik für Aufgabenverwaltung.',
      learnings: 'Praktische Erfahrung mit Datenbankdesign, SQL-Queries und CRUD-Operationen. Verständnis für Datenmodellierung und persistente Datenspeicherung.',
    },
    {
      title: 'Team-Projekt: Scrum-basierte Entwicklung',
      status: 'Abgeschlossen',
      icon: <UsersIcon className="w-12 h-12" />,
      color: '#5dd3b6',
      technologies: ['Scrum', 'Git', 'JavaScript', 'React'],
      goal: 'Gemeinsame Entwicklung einer Webanwendung im Team nach agilen Methoden zur Simulation realer Arbeitsprozesse.',
      contribution: 'Aktive Teilnahme an Sprints, Implementierung von User Stories, Code Reviews und Zusammenarbeit mit Teammitgliedern über Git.',
      learnings: 'Praktische Anwendung von Scrum-Prinzipien, Teamkommunikation, Versionskontrolle mit Git und Code-Qualitätssicherung durch Reviews.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-6 text-[#1e1e1e] dark:text-white">Projekte</h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80">
            Eine Auswahl meiner abgeschlossenen und laufenden Projekte. Jedes Projekt hat mir geholfen, 
            meine technischen Fähigkeiten zu erweitern und praktische Erfahrungen zu sammeln.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="relative h-48 flex items-center justify-center" style={{ backgroundColor: project.color }}>
                <div className="text-white opacity-80">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      project.status === 'Abgeschlossen' ? 'bg-white/20' : 'bg-black/20'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-3 text-[#1e1e1e] dark:text-white">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#efe1b5] dark:bg-[#5dd3b6]/20 text-[#6e5034] dark:text-[#5dd3b6] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject === index ? (
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-2 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Projektziel
                      </h4>
                      <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">{project.goal}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-2 flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        Mein Beitrag
                      </h4>
                      <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">{project.contribution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1e1e1e] dark:text-white mb-2">Lernerfahrungen</h4>
                      <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">{project.learnings}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-[#1e1e1e]/80 dark:text-white/80 leading-relaxed">{project.goal}</p>
                )}

                <button
                  className="mt-4 text-[#5dd3b6] hover:text-[#4bc4a7] transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(selectedProject === index ? null : index);
                  }}
                >
                  {selectedProject === index ? 'Weniger anzeigen' : 'Mehr erfahren'}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}