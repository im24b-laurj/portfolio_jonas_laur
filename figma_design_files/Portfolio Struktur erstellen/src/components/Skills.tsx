import { Code2, Palette, Wrench, Users, Database, Github, Terminal } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      iconColor: '#5dd3b6',
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: <Code2 className="w-4 h-4" /> },
        { name: 'CSS', icon: <Palette className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Code2 className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      iconColor: '#5dd3b6',
      title: 'Backend Development',
      skills: [
        { name: 'Python', icon: <Code2 className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <Code2 className="w-4 h-4" /> },
        { name: 'Flask', icon: <Wrench className="w-4 h-4" /> },
        { name: 'React', icon: <Wrench className="w-4 h-4" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
        { name: 'NoSQL', icon: <Database className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      iconColor: '#5dd3b6',
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <Github className="w-4 h-4" /> },
        { name: 'GitHub', icon: <Github className="w-4 h-4" /> },
        { name: 'VS Code', icon: <Terminal className="w-4 h-4" /> },
        { name: 'PyCharm', icon: <Terminal className="w-4 h-4" /> },
        { name: 'WebStorm', icon: <Terminal className="w-4 h-4" /> },
        { name: 'Bash', icon: <Terminal className="w-4 h-4" /> },
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      iconColor: '#5dd3b6',
      title: 'Soft Skills & Methoden',
      skills: [
        { name: 'Scrum / Agile', icon: <Users className="w-4 h-4" /> },
        { name: 'Teamarbeit', icon: <Users className="w-4 h-4" /> },
        { name: 'Problemlösung', icon: <Users className="w-4 h-4" /> },
        { name: 'Kommunikation', icon: <Users className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#efe1b5] to-white dark:from-[#2d2d2d] dark:to-[#0f0f0f] transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#1e1e1e] dark:text-white">Fähigkeiten & Kompetenzen</h2>
          <p className="text-lg text-[#1e1e1e]/80 dark:text-white/80">
            Ein Überblick über meine Technologien und Fähigkeiten.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#1a1a1a] border border-[#cdb885]/30 dark:border-[#5dd3b6]/30 rounded-xl p-8 hover:border-[#5dd3b6] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ color: category.iconColor }}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl text-[#1e1e1e] dark:text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-[#1e1e1e]/80 dark:text-white/80">
                    <span style={{ color: category.iconColor }}>{skill.icon}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-[#1e1e1e]/80 dark:text-white/80">
            Diese Kompetenzen habe ich mir durch schulische Projekte, Selbststudium und eigene Praxisprojekte angeeignet. 
            Ich bin motiviert, mein Wissen in einem professionellen Umfeld anzuwenden und zu erweitern.
          </p>
        </div>
      </div>
    </section>
  );
}