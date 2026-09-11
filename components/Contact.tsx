import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "dasuniniluka50@gmail.com",
    href: "mailto:dasuniniluka50@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Sri Lanka",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            LET&apos;S CONNECT
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I&apos;m currently open to internship opportunities and would
            love to connect with companies, developers and professionals.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B1220]/70 p-7 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-2xl text-cyan-400">
              <FiSend />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Have an opportunity?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Whether you have an internship opportunity, a project
              collaboration or simply want to connect, feel free to reach
              out.
            </p>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-lg border border-slate-800 bg-[#050A14]/60 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-cyan-400">
                      <Icon />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-slate-800 pt-7">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/N2020D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/niluka-dasuni-b2a227239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  <FiLinkedin />
                </a>

                <a
                  href="mailto:dasuniniluka50@gmail.com"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B1220]/70 p-7 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Send me a message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              I&apos;ll get back to you as soon as possible.
            </p>

            <form className="mt-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity"
                  className="w-full rounded-lg border border-slate-700 bg-[#050A14] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-[#050A14] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Send Message
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}