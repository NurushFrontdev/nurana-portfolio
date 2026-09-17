import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Layout,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: "Database",
      skills: ["SQL", "MySQL"],
    },
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      icon: Layout,
      title: "Tools & Frameworks",
      skills: ["Vite", "Bootstrap", "SCSS"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-neutral-50">
          Bacarıqlar & İxtisaslar
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-purple-600 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-purple-500" size={24} />
                </div>

                <h3 className="mb-4 text-neutral-50">{category.title}</h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-neutral-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
