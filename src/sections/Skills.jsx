const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    skills: [
      "Java",
      "Python",
      "C++",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Dart",
    ],
  },

  {
    number: "02",
    title: "Frameworks & Technologies",
    skills: [
      "React.js",
      "Next.js",
      "NestJS",
      "Express.js",
      "Flutter",
      "Firebase",
      "Node.js",
    ],
  },

  {
    number: "03",
    title: "Databases & Data Tools",
    skills: [
      "MongoDB",
      "Oracle SQL Developer",
      "DBeaver",
      "SSMS",
      "SSIS",
    ],
  },

  {
    number: "04",
    title: "Data Engineering & Analytics",
    skills: [
      "ETL Pipelines",
      "Data Warehousing",
      "Power BI",
      "Report Builder",
      "Data Visualization",
    ],
  },

  {
    number: "05",
    title: "Machine Learning & Deep Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Regression",
      "Classification",
      "NLP",
      "Computer Vision",
      "ANN",
      "Random Forest",
    ],
  },

  {
    number: "06",
    title: "AI & APIs",
    skills: [
      "Hugging Face APIs",
      "AI Image Generation",
      "AI Integration",
      "Whisper ASR",
      "Arabic-English Code-Switching NLP",
      "Dataset Construction & Evaluation",
      "Text Classification",
    ],
  },

  {
    number: "07",
    title: "Tools & Version Control",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full border-t border-white/10 bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="mb-12">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[10px] text-cyan-400">
              05
            </span>

            <span className="h-px w-10 bg-cyan-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Skills
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            My technical toolkit.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            Technologies, frameworks, tools, and concepts from my academic,
            internship, and project experience.
          </p>

        </div>


        <div className="grid gap-4 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="rounded-2xl border border-white/10 bg-[#0a0a0c] p-7 transition-all duration-300 hover:border-cyan-400/30"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>

                <span className="font-mono text-[9px] text-cyan-400">
                  {group.number}
                </span>

              </div>


              <div className="mt-6 flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-500 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>


        {/* LANGUAGES */}

        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0a0a0c] p-7 md:p-8">

          <div className="flex items-center justify-between">

            <h3 className="text-base font-semibold text-white">
              Languages
            </h3>

            <span className="font-mono text-[9px] text-cyan-400">
              08
            </span>

          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">

            <div>
              <p className="text-sm text-white">Arabic</p>
              <p className="mt-1 text-xs text-gray-600">
                Native language
              </p>
            </div>

            <div>
              <p className="text-sm text-white">French</p>
              <p className="mt-1 text-xs text-gray-600">
                Fluent
              </p>
            </div>

            <div>
              <p className="text-sm text-white">English</p>
              <p className="mt-1 text-xs text-gray-600">
                Fluent
              </p>
            </div>

            <div>
              <p className="text-sm text-white">German</p>
              <p className="mt-1 text-xs text-gray-600">
                Beginner
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}