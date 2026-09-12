"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const roles = [
    "Aspiring Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed =
      !isDeleting && text === currentRole
        ? 1500
        : isDeleting
          ? 50
          : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));

        if (text.length === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, roleIndex, isDeleting]);

  return (
    <section id="home" className="relative w-full">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10">

        {/* Left Side */}
        <div className="flex flex-col items-start">

          {/* Availability */}
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-cyan-400 sm:text-sm">
            AVAILABLE FOR INTERNSHIP OPPORTUNITIES
          </p>

          {/* Greeting */}
          <p className="text-lg text-slate-300 sm:text-xl">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="mt-2 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Niluka
            <br />
            Dasuni
          </h1>

          {/* Education */}
          <p className="mt-4 text-base font-medium text-slate-400 sm:text-lg">
            HNDIT Graduate
          </p>

          {/* Typing Animation */}
          <h2 className="mt-2 text-2xl font-semibold text-blue-500 sm:text-3xl">
            {text}
            <span className="ml-1 animate-pulse text-cyan-400">
              |
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            I build modern, responsive web applications and enjoy
            solving real-world problems through technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Projects */}
            <a
              href="#projects"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              View my Projects
            </a>

            {/* CV */}
            <a
              href="/resume/Niluka-Dasuni-IT-Resume4.pdf"
              download
              className="rounded-md border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/N2020D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-slate-400 transition-colors duration-300 hover:text-white"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/niluka-dasuni-b2a227239/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:dasuniniluka50@gmail.com"
              aria-label="Email"
              className="text-xl text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              <MdEmail />
            </a>

          </div>

          {/* Scroll Indicator */}
          <a
            href="#about"
            className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-700 p-1 transition-colors duration-300 group-hover:border-cyan-400/60">
              <span className="h-2 w-1 animate-bounce rounded-full bg-cyan-400" />
            </span>
          </a>

        </div>

        {/* Right Side */}
        <div className="relative flex min-h-[350px] items-center justify-center lg:min-h-[500px]">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}