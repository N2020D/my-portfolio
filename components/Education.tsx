import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

const education = [
  {
    period: "2024 – 2026",
    title: "Higher National Diploma in Information Technology",
    institution:
      "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    location: "Sri Lanka",
    description:
      "Studying information technology with a focus on software development, web technologies, databases, software engineering, business analysis and machine learning.",
    status: "Currently Reading",
    icon: FiBookOpen,
  },
  {
    period: "2023 - 2024",
    title: "Diploma in Computer Science",
    institution: "Nenasala Kuliyapitiya",
    location: "Sri Lanka",
    description:
      "Completed a one-year Diploma in Computer Science and gained foundational knowledge in computer science and information technology.",
    status: "A Pass",
    icon: FiAward,
  },
  {
    period: "2020",
    title: "G.C.E. Advanced Level – Mathematics Stream",
    institution: "G.C.E. Advanced Level",
    location: "Sri Lanka",
    description:
      "Completed Advanced Level studies in the Mathematics stream, developing a foundation in mathematical thinking, problem solving and analytical skills.",
    status: "Completed",
    icon: FiBookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            MY EDUCATION
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My academic background and educational journey in
            information technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-slate-800 sm:left-8" />

          <div className="space-y-8">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative pl-12 sm:pl-20">
                  {/* Timeline Point */}
                  <div className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/50 bg-[#050A14] text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] sm:left-8">
                    <Icon size={15} />
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-slate-800 bg-[#0B1220]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0B1220] sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                          {item.period}
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-blue-400">
                          {item.institution}
                        </p>
                      </div>

                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                        <FiAward />
                        {item.status}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-cyan-400" />
                        <span>{item.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-cyan-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="mt-5 h-px w-full bg-slate-800" />

                    <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Building my knowledge through education, projects and continuous
            learning.
          </p>
        </div>
      </div>
    </section>
  );
}