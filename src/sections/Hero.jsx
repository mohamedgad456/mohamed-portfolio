export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#050505] pt-24"
    >

      {/* Background grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Cyan glow */}

      <div className="pointer-events-none absolute right-[-250px] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.025] blur-[140px]" />


      <div className="relative mx-auto w-full max-w-[1180px] px-6 md:px-8">

        {/* Label */}

        <div className="mb-8 flex items-center gap-4">

          <span className="h-px w-10 bg-cyan-400" />

          <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            Data × AI × Engineering
          </span>

        </div>


        {/* Name */}

        <h1 className="text-[17vw] font-black leading-[0.8] tracking-[-0.07em] text-white sm:text-[13vw] md:text-[10vw] lg:text-[8rem]">
          Mohamed
        </h1>

        <h1 className="text-[17vw] font-black leading-[0.8] tracking-[-0.07em] text-gray-500 sm:text-[13vw] md:text-[10vw] lg:text-[8rem]">
          Hisham Gad<span className="text-cyan-400">.</span>
        </h1>


        {/* Professional title */}

        <h2 className="mt-10 text-lg font-medium text-gray-200 md:text-2xl">
          Data Engineer · Data Analyst · AI Engineer
        </h2>


        {/* Objective */}

        <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
          Aspiring Data Engineer, Data Analyst, and AI Engineer driven by a
          passion for building scalable data systems, uncovering meaningful
          insights, and developing AI solutions that solve real-world
          problems.
        </p>


        {/* Buttons */}

        <div className="mt-9 flex flex-wrap gap-4">

          {/* Explore */}

          <a
            href="#projects"
            className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-300 hover:text-black"
          >
            <span>Explore My Work</span>
            <span>→</span>
          </a>


          {/* CV */}

          <a
            href="/cv.pdf"
            download
            className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
          >
            <span>Download CV</span>
            <span>↗</span>
          </a>

        </div>


        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/mohamed-gad-624521280"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-fit items-center gap-3 text-sm text-gray-500 transition-colors duration-300 hover:text-cyan-400"
        >

          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a66c2] text-xs font-bold text-white">
            in
          </span>

          <span>Connect on LinkedIn</span>

          <span>→</span>

        </a>


        {/* Info */}

        <div className="mt-20 grid max-w-3xl border-t border-white/10 pt-6 sm:grid-cols-3">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
              Major
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Data Science
            </p>

          </div>


          <div className="mt-5 sm:mt-0">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
              Minor
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Software Engineering
            </p>

          </div>


          <div className="mt-5 sm:mt-0">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
              Languages
            </p>

            <p className="mt-2 text-sm text-gray-400">
              English · French
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}