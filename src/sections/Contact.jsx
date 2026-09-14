export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full border-t border-white/10 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="rounded-2xl border border-white/10 bg-[#090909] p-8 md:p-12">

          {/* Label */}

          <div className="flex items-center gap-3">

            <span className="font-mono text-xs font-medium text-cyan-400">
              06
            </span>

            <span className="h-px w-12 bg-cyan-400" />

            <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-gray-400">
              Contact
            </span>

          </div>


          {/* Heading */}

          <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let's build something.
          </h2>


          {/* Description */}

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500">
            Interested in an opportunity, collaboration, or simply
            connecting? I'm open to discussing data, engineering, analytics,
            AI, and interesting projects.
          </p>


          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            {/* EMAIL */}

            <a
              href="mailto:mohamed.h.gad4@gmail.com"
              className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:text-black"
            >
              <span>Email Me</span>
              <span>→</span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/mohamed-gad-624521280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <span>LinkedIn</span>
              <span>→</span>
            </a>

          </div>


          {/* Contact details */}

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                Email
              </p>

              <a
                href="mailto:mohamed.h.gad4@gmail.com"
                className="mt-2 inline-block text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400"
              >
                mohamed.h.gad4@gmail.com
              </a>

            </div>


            <div>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/mohamed-gad-624521280"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-gray-400 transition-colors duration-300 hover:text-cyan-400"
              >
                linkedin.com/in/mohamed-gad-624521280
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}