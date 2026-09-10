"use client";
import { useState } from "react";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Logo */}
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-black text-sm font-bold text-white transition-transform hover:scale-105">
            ND
          </span>
        </div>

        {/* Navigation links */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#home"
            className="text-sm text-white/70 transition-colors hover:text-white"
        >
        Home
        </a>
          <a
  href="#about"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  About
</a>
          <a
  href="#home"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Home
</a>
          <a
  href="#projects"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Projects
</a>
          <a
  href="#journey"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Journey
</a>
          <a
  href="#education"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Education
</a>
          <a
  href="#certificates"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Certificates
</a>
          <a
  href="#contact"
  className="text-sm text-white/70 transition-colors hover:text-white"
>
  Contact
</a>
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
  aria-label="Toggle theme"
  className="text-white/70 transition-colors hover:text-white"
>
  ☀
</button>

          <a
            href="/resume/Niluka-Dasuni-CV.pdf"
            download
            className="rounded-md border border-white/20 px-5 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Resume
          </a>
        </div>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-2xl text-white"
  aria-label="Toggle navigation menu"
>
  ☰
</button>

      </div>
      
      {menuOpen && (
        <div className="lg:hidden">
          <a
            href="#home"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Projects
          </a>
          <a
            href="#journey"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Journey
          </a>
          <a
            href="#education"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Education
          </a>
          <a
            href="#certificates"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="block py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}