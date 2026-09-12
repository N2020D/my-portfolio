import Image from "next/image";
import {
  FiAward,
  FiExternalLink,
  FiCalendar,
} from "react-icons/fi";

const certificates = [
  {
    title: "Diploma in Computer Science",
    issuer: "Nenasala Kuliyapitiya",
    date: "2024",
    image: "/Certificates/Diploma in computerscience.jpeg",
    description:
      "Completed a one-year Diploma in Computer Science with an A Pass.",
  },
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    date: "2024",
    image: "/Certificates/solo python.png",
    description:
      "Completed an introductory Python course covering fundamental programming concepts and Python basics.",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "2024",
    image: "/Certificates/image genarative ai.png",
    description:
      "Completed a course introducing the concepts, applications and fundamentals of Generative AI.",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative w-full border-t border-slate-800/60 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            CERTIFICATES
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Certifications and courses that support my continuous learning
            and technical development.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-[#0B1220]/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0B1220]"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-800 bg-[#050A14]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/70 via-transparent to-transparent opacity-60" />
              </div>

              {/* Certificate Details */}
              <div className="flex min-h-[270px] flex-col p-6">
                <div className="flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-lg text-cyan-400">
                    <FiAward />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                    {certificate.title}
                  </h3>

                  <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

                  <p className="mt-4 text-sm font-medium text-blue-400">
                    {certificate.issuer}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <FiCalendar className="text-cyan-400" />
                    <span>{certificate.date}</span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {certificate.description}
                  </p>
                </div>

                {/* View Certificate */}
                <button
                  type="button"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  View Certificate
                  <FiExternalLink />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Continuously learning new technologies and expanding my skills.
          </p>
        </div>
      </div>
    </section>
  );
}