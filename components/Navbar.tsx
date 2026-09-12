"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050A14]/30 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-2xl">

      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center"
          aria-label="Niluka Dasuni home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-950 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:border-cyan-400/60 group-hover:text-cyan-300">
            ND
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

          <div className="hidden items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 lg:flex">
  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
  <span className="text-xs font-medium text-cyan-300">
    Open to Internship
  </span>
</div>

          <a
            href="/resume/Niluka-Dasuni-IT-Resume4.pdf"
            download
            className="rounded-md border border-blue-500/40 bg-blue-600/10 px-5 py-2.5 text-sm font-medium text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050A14]/70 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6">

            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-slate-800/60 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="/resume/Niluka-Dasuni-IT-Resume4.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-md bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Download Resume
            </a>

          </div>
        </div>
      )}

    </header>
  );
}