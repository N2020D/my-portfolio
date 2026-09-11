import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "AI-Powered Internship & Job Matching Platform",
    description:
      "An AI-powered platform designed to help students and job seekers discover suitable internship and job opportunities based on their skills and profiles.",
    technologies: ["MERN Stack", "Python", "NLP", "Machine Learning"],
    image: "/projects/internship.png",
    github: "https://github.com/N2020D/AI-Internship-Job-Matching-Platform",
    live: "#",
  },
  {
    number: "02",
    title: "Hospital Management System",
    description:
      "A web-based hospital management system developed as a group project to manage hospital-related information and streamline different user activities.",
    technologies: ["MERN Stack", "MongoDB", "React", "Node.js"],
    image: "/projects/hms2.png",
    github: "https://github.com/Sha-jpg-star/MERN-Group-ProjectEdu",
    live: "#",
  },
  {
    number: "03",
    title: "EduPathwayHub",
    description:
      "A web platform created to help Sri Lankan students find information about higher education, universities, scholarships, vocational institutes and online learning opportunities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/edupathway.png",
    github: "https://github.com/N2020D/EduPathwayHub",
    live: "https://n2020d.github.io/EduPathwayHub/",
  },
  {
    number: "04",
    title: "OrbitEye – Satellite Pass Tracker",
    description:
      "A Java desktop application for tracking satellite pass information using API integration, OOP concepts, JDBC and database connectivity.",
    technologies: ["Java", "Java Swing", "OOP", "API", "JDBC"],
    image: "/projects/orbit.png",
    github: "#",
    live: "#",
  },
  {
    number: "05",
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio website designed to showcase my technical skills, education, certifications and software development projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
    image: "/projects/portfolio.jpg",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            PROJECTS
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of projects I have developed while learning and
            improving my software development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-[#0B1220]/70 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-[#0B1220]"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800 bg-[#050A14]">

                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Project Number */}
                <div className="absolute left-4 top-4 z-10 rounded-md border border-cyan-400/30 bg-[#050A14]/90 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {project.number}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h3>

                {/* Accent Line */}
                <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}