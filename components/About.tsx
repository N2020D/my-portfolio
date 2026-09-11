import Image from "next/image";
import {
  FiMapPin,
  FiDownload,
  FiMail,
} from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ABOUT ME
          </h2>

          <p className="mt-3 text-base text-slate-400 sm:text-lg">
            Get to know me
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[300px_1fr] lg:gap-20">

          {/* =========================================
              LEFT SIDE
          ========================================== */}
          <div className="flex flex-col items-center">

            {/* Profile Image */}
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-cyan-400 bg-slate-900 shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,0.22)] sm:h-64 sm:w-64">
              <Image
                src="/images/my face 3.png"
                alt="Niluka Dasuni"
                fill
                priority
                className="object-cover"
                sizes="256px"
              />
            </div>

            {/* Availability */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Open to opportunities
            </div>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              <FiMapPin className="text-cyan-400" />
              <span>Udubaddawa, Sri Lanka</span>
            </div>

          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================== */}
          <div>

            {/* Heading */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                HNDIT Graduate
              </h3>

              <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>

            {/* Description */}
            <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-slate-400 sm:text-base">

              <p>
                I'm Niluka Dasuni, an HNDIT graduate passionate about
                building modern and user-friendly web applications.
                I enjoy turning ideas into practical digital solutions
                and continuously improving my skills in frontend and
                backend development.
              </p>

              <p>
                My current focus is on building full-stack applications
                using the MERN stack. I enjoy learning new technologies,
                solving real-world problems, and creating clean and
                responsive user experiences.
              </p>

              <p>
                I'm looking for an internship opportunity where I can
                apply my technical knowledge, work on real-world
                projects, learn from experienced developers, and grow
                as a software developer.
              </p>

            </div>

            {/* Quick Information */}
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">

              {/* Education */}
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition duration-300 hover:border-blue-500/40">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Education
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  HNDIT Graduate
                </p>
              </div>

              {/* Focus */}
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition duration-300 hover:border-cyan-400/40">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Full Stack
                </p>
              </div>

              {/* Stack */}
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition duration-300 hover:border-blue-500/40">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Stack
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  MERN
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Download CV */}
              <a
                href="/resume/Niluka-Dasuni-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                <FiDownload />
                Download CV
              </a>

              {/* Hire Me */}
              <a
                href="mailto:dasuniniluka50@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/5 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                <FiMail />
                Hire Me
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}