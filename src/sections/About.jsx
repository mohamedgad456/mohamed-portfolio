const focusAreas = [
  {
    number: "01",
    title: "Data Engineering",
    description:
      "Data pipelines, ETL workflows, data warehousing, and systems that move data from operational sources to analytical environments.",
  },
  {
    number: "02",
    title: "Data Analytics",
    description:
      "SQL, Power BI, reporting, dashboards, and data visualization for turning business data into useful insights.",
  },
  {
    number: "03",
    title: "Machine Learning",
    description:
      "Classification, regression, NLP, computer vision, and machine learning model development using Python.",
  },
  {
    number: "04",
    title: "AI Engineering",
    description:
      "AI integrations, Hugging Face APIs, speech recognition, text classification, and practical AI applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full border-t border-white/10 bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-cyan-400">
                01
              </span>

              <span className="h-px w-10 bg-cyan-400" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                About
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Data, engineering,
              <br />
              analytics, and AI.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-gray-400">
              My background combines Data Science with Software Engineering,
              allowing me to work across data, software development, machine
              learning, and artificial intelligence.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
              I enjoy working on practical problems where data, engineering,
              and intelligent systems come together.
            </p>


            {/* EDUCATION */}

            <div className="mt-10 border-t border-white/10 pt-6">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                Education
              </p>

              <h3 className="mt-3 text-base font-semibold text-white">
                German International University for Applied Sciences
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Cairo · Oct 2022 – Jun 2026
              </p>

              <p className="mt-4 text-sm text-gray-400">
                Computer Science and Informatics
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Major: Data Science · Minor: Software Engineering
              </p>

            </div>


            {/* THESIS */}

            <div className="mt-8 border-l border-cyan-400/30 pl-5">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400">
                Thesis
              </p>

              <h3 className="mt-3 text-base font-semibold text-white">
                "AI Platforms for Healthcare Applications"
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-500">
                Developed a medical Arabic-English code-switched dataset
                (MedCS-TriagE) for triage classification using real-world
                medical audio data.
              </p>

            </div>

          </div>


          {/* RIGHT */}

          <div className="grid gap-4 sm:grid-cols-2">

            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="group rounded-2xl border border-white/10 bg-[#0a0a0c] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 font-mono text-[10px] text-cyan-400">
                    {area.number}
                  </div>

                  <span className="font-mono text-[9px] text-gray-700">
                    {area.number}
                  </span>

                </div>

                <h3 className="mt-8 text-base font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-500">
                  {area.description}
                </p>

                <div className="mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-10" />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}