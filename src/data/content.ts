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
  repoUrl?: string;
  liveUrl?: string | null;
  repos?: Array<{ name: string; url: string }>;
  previewImage?: string;
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
    title: 'Ultimate Ship Shooter',
    shortDescription:
      'Ein interaktives Weltraum-Shooter-Spiel mit WebSocket-Kommunikation in Echtzeit. Spieler steuern ein Raumschiff und schießen auf Asteroiden. Backend mit Spring Boot und Java, Frontend mit moderner Web-Technologie.',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'JavaScript', 'HTML5', 'CSS'],
    repos: [
      { name: 'Backend', url: 'https://github.com/Kevin-Rechsteiner/UltimateShipShooter' },
      { name: 'Frontend', url: 'https://github.com/Kevin-Rechsteiner/frontend_for_asteroid' },
    ],
    previewImage: '/shipshooter-preview.png',
    status: 'Abgeschlossen',
  },
  {
    id: 'p2',
    title: 'Jonify Pro',
    shortDescription:
      'Eigener Web-Musikplayer mit Express-Backend und MySQL-Datenbank. MP3-Dateien werden automatisch eingescannt, Metadaten ausgelesen und über eine REST-API bereitgestellt. Features umfassen Audio-Streaming, Playlist-Verwaltung und eine moderne Web-Oberfläche.',
    tech: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'HTML5', 'CSS'],
    liveUrl: null,
    repos: [{ name: 'Backend', url: 'https://github.com/im24b-laurj/jonify-pro' }],
    previewImage: '/jonify_pro.png',
    status: 'In Entwicklung',
  },
  {
    id: 'p3',
    title: 'Silbenbombe',
    shortDescription:
      'Ein Echtzeit-Multiplayer-Wortspiel im Browser: Eine Bombe wandert von Spieler zu Spieler und wer sie hält, muss ein deutsches Wort mit der angezeigten Silbe eintippen, bevor die Zündschnur abbrennt. Wer schnell entschärft, verdient Sabotage-Token für kürzere Zündschnüre oder gesperrte Buchstaben beim Gegner. Backend mit Node.js und WebSockets, Highscores in einer PostgreSQL-Datenbank, Frontend bewusst ohne Framework.',
    tech: ['Node.js', 'WebSocket', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS'],
    liveUrl: 'https://silbenbombe.4819909.deploio.app/?r=',
    repos: [{ name: 'GitHub', url: 'https://github.com/im24b-huengerlee/OuShi' }],
    previewImage: '/silbengame.png',
    status: 'Abgeschlossen',
  },
];

export const interests: Interest[] = [
  {
    id: 'dev',
    title: 'Softwareentwicklung',
    description: 'Programmieren ist nicht nur meine Leidenschaft, sondern auch mein Hobby. Ich arbeite regelmässig an eigenen Projekten und erweitere mein technisches Wissen laufend.',
    emoji: '💻',
  },
  {
    id: 'bike',
    title: 'Biken',
    description: 'Ich bin gerne auf dem Bike unterwegs. Die Bewegung an der frischen Luft tut mir gut und hilft mir, den Kopf freizubekommen.',
    emoji: '🚴',
  },
  {
    id: 'fitness',
    title: 'Fitnessstudio',
    description: 'Regelmässiges Training im Fintessstudion macht mir Spass und gibt mir ein gutes Körpergefühl.',
    emoji: '💪',
  },
  {
    id: 'team',
    title: 'Teamarbeit',
    description: 'In Projekten, in der Freizeit, beim Sport. Ich schätze den Austausch und die Zusammenarbeit mit anderen und bringe gerne meine Ideen ein.',
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
