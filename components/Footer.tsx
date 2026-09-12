import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/70 bg-[#050A14]">
      {/* Cyan accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 lg:px-8 xl:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-950 text-sm font-bold text-white transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300">
                ND
              </span>

              <span className="text-lg font-semibold text-white">
                Niluka Dasuni
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Aspiring Full Stack Developer focused on building modern,
              responsive and user-friendly web applications.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">

              <a
                href="https://github.com/N2020D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/niluka-dasuni-b2a227239/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:dasuniniluka50@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                <FiMail />
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Interested in working together or discussing an internship
              opportunity?
            </p>

            <a
              href="mailto:dasuniniluka50@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
            >
              <FiMail />
              Contact Me
            </a>

            <div className="mt-5">
              <a
                href="/resume/Niluka-Dasuni-IT-Resume4.pdf"
                download
                className="inline-flex rounded-md border border-blue-500/40 bg-blue-600/10 px-4 py-2.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
              >
                Download Resume
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
<div className="mt-12 border-t border-slate-800/70 pt-6">

  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

    <p className="text-xs text-slate-500">
      © {new Date().getFullYear()} Niluka Dasuni. All rights reserved.
    </p>

    <a
      href="#home"
      aria-label="Back to top"
      className="flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors duration-300 hover:text-cyan-300"
    >
      Back to top
      <FiArrowUp />
    </a>

  </div>

  {/* Made by */}
  <div className="mt-6 flex flex-col items-center justify-center gap-2 text-center">

    <p className="text-xs text-slate-500">
      Made with <span className="text-cyan-400">♥</span> by{" "}
      <span className="font-medium text-slate-300">
        Niluka Dasuni
      </span>
    </p>

    <p className="text-xs text-slate-600">
      Using{" "}
      <span className="text-slate-400">Next.js</span>
      {" · "}
      <span className="text-slate-400">TypeScript</span>
      {" · "}
      <span className="text-slate-400">Tailwind CSS</span>
      {" · "}
      <span className="text-slate-400">Three.js</span>
    </p>

  </div>

</div>

      </div>
    </footer>
  );
}