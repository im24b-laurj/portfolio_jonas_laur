/**
 * Zentrale Inhaltsdatei für das Portfolio (Deutsch)
 * Alle Inhalte sind datengesteuert und können hier leicht bearbeitet werden.
 */

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  tech: string[];
  repoUrl: string;
  status: 'Abgeschlossen' | 'In Entwicklung';
}

export interface SkillCategory {
  id: string;
  title: string;
  items: Array<{
    name: string;
    logo: string;
  }>;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export interface SiteMeta {
  name: string;
  role: string;
  intro: string;
  description?: string;
}

export interface About {
  heading: string;
  text: string;
  quote?: string;
  education: {
    title: string;
    school: string;
    duration: string;
    emoji: string;
  }[];
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export const siteMeta: SiteMeta = {
  name: 'Jonas Laur',
  role: 'Schüler & angehender Informatiker',
  intro:
    'Ich bin ein motivierter Schüler mit Leidenschaft für Softwareentwicklung. Hier präsentiere ich meine Fähigkeiten, Projekte und meinen Lernweg als angehender Informatiker.',
  description: 'Portfolio von Jonas Laur – Schüler, angehender Informatiker und leidenschaftlicher Developer',
};

export const about: About = {
  heading: 'Über mich',
  text:
    'Als angehender Informatiker bin ich Schüler mit einer ausgeprägten Leidenschaft für Softwareentwicklung und Technologie. Meine Stärke liegt darin, analytisch zu denken und dabei kreative Lösungsansätze zu entwickeln. Ich arbeite strukturiert, bin eigeninitiativ und bringe eine hohe Lernbereitschaft mit. Das kontinuierliche Erweitern meines Wissens durch eigene Projekte ist für mich nicht nur Pflicht, sondern Freude.',
  education: [
    {
      title: 'Sekundarstufe A',
      school: 'Schulhaus Letzi',
      duration: '2021 - 2024',
      emoji: '🏫',
    },
    {
      title: 'Informatik Mittelschule',
      school: 'Kantonsschule Hottingen',
      duration: '2024 - 2028 (Erwartet)',
      emoji: '🎓',
    },
  ],
};

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    items: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'NoSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'WebStorm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg' },
      { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills & Methoden',
    items: [
      { name: 'Teamarbeit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Problemlösung', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Scrum / Agile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg' },
      { name: 'Kommunikation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Webanwendung mit Flask & React',
    shortDescription:
      'Eine Lernprojekt-Webanwendung, die Backend- und Frontend-Konzepte verbindet, um die Zusammenarbeit zwischen Server und Client zu demonstrieren.',
    tech: ['Python', 'Flask', 'React', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/jonaslaurdev/flask-react-app',
    status: 'Abgeschlossen',
  },
  {
    id: 'p2',
    title: 'Responsive Portfolio-Website',
    shortDescription:
      'Dieses Portfolio demonstriert responsives Design, barrierefreie Semantik und moderne Frontend-Workflows mit Next.js und Tailwind CSS.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/jonaslaurdev/responsive-portfolio',
    status: 'Abgeschlossen',
  },
  {
    id: 'p3',
    title: 'Datenbank-Übungsprojekt',
    shortDescription:
      'Ein kleines Projekt zum Entwerfen und Abfragen von Datenbanken zur Übung von SQL- und NoSQL-Konzepten.',
    tech: ['MySQL', 'NoSQL', 'Python'],
    repoUrl: 'https://github.com/jonaslaurdev/db-exercises',
    status: 'In Entwicklung',
  },
];

export const interests: Interest[] = [
  {
    id: 'dev',
    title: 'Softwareentwicklung',
    description: 'Programmieren ist nicht nur meine berufliche Leidenschaft, sondern auch mein Hobby. Ich arbeite regelmäßig an eigenen Projekten und erweitere mein technisches Wissen.',
    emoji: '💻',
  },
  {
    id: 'bike',
    title: 'Biken',
    description: 'Als Ausgleich zur Informatik bin ich gerne auf dem Bike unterwegs. Die Bewegung an der frischen Luft hilft mir, den Kopf frei zu bekommen.',
    emoji: '🚴',
  },
  {
    id: 'fitness',
    title: 'Fitnessstudio',
    description: 'Regelmäßiges Training im Fitnessstudio ist Teil meiner Routine und fördert meine mentale Fitness.',
    emoji: '💪',
  },
  {
    id: 'team',
    title: 'Teamarbeit',
    description: 'Ob im Sport oder in Projekten – ich schätze die Zusammenarbeit mit anderen und gemeinsame Erfolge.',
    emoji: '🤝',
  },
];

export const contact: Contact = {
  email: 'jonas.laur@gmx.ch',
  phone: '+41 77 526 39 90',
  location: 'Schweiz',
  github: 'https://github.com/im24b-laurj',
  linkedin: 'https://www.linkedin.com/in/jonas-laur-5403b6385/',
};
