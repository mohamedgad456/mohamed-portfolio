const steps = [
  {
    number: "01",
    title: "Think",
    description: "Understand the problem and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Break the problem down and identify what is needed.",
  },
  {
    number: "03",
    title: "Design",
    description: "Define the architecture, data flow, and approach.",
  },
  {
    number: "04",
    title: "Build",
    description: "Implement the solution step by step.",
  },
  {
    number: "05",
    title: "Test",
    description: "Validate results and investigate issues.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Iterate and make the solution better.",
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="w-full border-t border-white/10 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-cyan-400">
                02
              </span>

              <span className="h-px w-10 bg-cyan-400" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Engineering Approach
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              How I build.
            </h2>

          </div>


          <div className="flex flex-col justify-end">

            <div className="border-l border-cyan-400/40 pl-6">

              <p className="text-lg leading-8 text-gray-300">
                "Discipline turns ideas into progress."
              </p>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                — M.G.
              </p>

            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-500">
              I prefer understanding the problem first, planning the solution,
              and then building and improving it step by step.
            </p>

          </div>

        </div>


        <div className="mt-16 border-t border-white/10">

          <div className="grid md:grid-cols-2 lg:grid-cols-6">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`min-h-[220px] border-b border-white/10 px-6 py-8 lg:border-b-0 ${
                  index !== steps.length - 1 ? "lg:border-r" : ""
                }`}
              >

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] text-cyan-400">
                  {step.number}
                </span>

                <h3 className="mt-7 text-base font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[150px] text-xs leading-6 text-gray-600">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}