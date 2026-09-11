const journeyItems = [
  {
    year: "2024",
    title: "Started My IT Journey",
    description:
      "Started building my foundation in information technology, programming and software development.",
  },
  {
    year: "2025",
    title: "HNDIT & Software Development",
    description:
      "Continued my HNDIT studies while developing practical skills in web development, databases, software engineering and programming.",
  },
  {
    year: "2026",
    title: "Full-Stack Development",
    description:
      "Focused on modern full-stack development using React, Node.js, Express.js and MongoDB while building practical projects.",
  },
  {
    year: "2026",
    title: "AI-Powered Project",
    description:
      "Started developing an AI-Powered Internship & Job Matching Platform combining full-stack development with Python-based AI technologies.",
  },
  {
    year: "2026 → 2027",
    title: "Internship & Career Growth",
    description:
      "Looking for an internship opportunity to gain real-world experience, contribute to professional projects and grow as a software developer.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            MY DEVELOPMENT JOURNEY
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A timeline of my learning, projects and growth in technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-slate-800 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative grid grid-cols-1 sm:grid-cols-2"
              >
                {/* Timeline Point */}
                <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#050A14] shadow-[0_0_12px_rgba(34,211,238,0.5)] sm:left-1/2" />

                {/* Left Side */}
                <div
                  className={`pl-10 sm:pr-12 ${
                    index % 2 === 0
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2 sm:row-start-1 sm:pl-12 sm:text-left"
                  }`}
                >
                  <span className="text-sm font-semibold tracking-wider text-cyan-400">
                    {item.year}
                  </span>

                  <div className="mt-3 rounded-xl border border-slate-800 bg-[#0B1220]/70 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0B1220]">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}