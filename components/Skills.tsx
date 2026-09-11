import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiSharp,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern and user-friendly web interfaces.",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Developing APIs and server-side applications for full-stack systems.",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "C#",
                icon: SiSharp,
      },
    ],
  },

  {
    title: "Database & Tools",
    description:
      "Working with databases, version control and development tools.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "VS Code",
        icon: FaCode,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            TECHNOLOGIES I WORK WITH
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Technologies and tools I use to design, develop and
            build modern web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl border border-slate-800 bg-[#0B1220]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0B1220]"
            >
              {/* Card Header */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-[#050A14] px-3 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                    >
                      <Icon className="text-base text-blue-400 transition-colors duration-300 group-hover:text-cyan-400" />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Continuously learning and improving my skills through
            projects and real-world development.
          </p>
        </div>

      </div>
    </section>
  );
}