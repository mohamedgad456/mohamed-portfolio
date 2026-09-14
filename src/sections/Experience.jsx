const experiences = [
  {
    number: "01",
    company: "Tanmeyah",
    role: "Data Science Intern",
    period: "Feb 2026 – Jun 2026",
    description: [
      "Assist in real business cases by building SQL queries.",
      "Build loan officer's reports using Microsoft Report Builder.",
      "Build a dashboard for loan officers using Power BI.",
    ],
    technologies: ["SQL", "Microsoft Report Builder", "Power BI"],
  },

  {
    number: "02",
    company: "Tanmeyah",
    role: "Quality Control Intern",
    period: "Sep 2025 – Nov 2025",
    description: [
      "Studied software testing theory using the official ISTQB textbook.",
      "Practiced manual testing through hands-on projects, including GURU99.",
      "Assisted in testing Tanmeyah's new project.",
    ],
    technologies: ["ISTQB", "Manual Testing", "GURU99"],
  },

  {
    number: "03",
    company: "Ejada",
    role: "Data Engineering Analyst Intern",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Designed and implemented a data pipeline from OLTP to OLAP using SSIS.",
      "Developed and integrated ETL workflows to populate the data warehouse.",
      "Created an interactive Power BI dashboard to analyze and visualize warehouse data.",
    ],
    technologies: ["SSIS", "ETL", "OLTP", "OLAP", "Power BI"],
  },

  {
    number: "04",
    company: "German International University",
    role: "Junior TA, Programming 2 (Java)",
    period: "Feb 2025 – Jun 2025",
    description: [],
    technologies: ["Java"],
  },

  {
    number: "05",
    company: "German International University",
    role: "Junior TA, Programming 3 (C++)",
    period: "Oct 2024 – Jan 2025",
    description: [],
    technologies: ["C++"],
  },

  {
    number: "06",
    company: "German International University",
    role: "Junior TA, Programming 1 (Python)",
    period: "Oct 2023 – Jan 2024",
    description: [],
    technologies: ["Python"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full border-t border-white/10 bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="mb-12">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[10px] text-cyan-400">
              03
            </span>

            <span className="h-px w-10 bg-cyan-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Experience
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Where I've worked.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            Experience across data science, data engineering, software
            testing, analytics, and programming education.
          </p>

        </div>


        <div className="space-y-4">

          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="rounded-2xl border border-white/10 bg-[#0a0a0c] p-6 transition-all duration-300 hover:border-cyan-400/30 md:p-8"
            >

              <div className="grid gap-6 md:grid-cols-[90px_1fr]">

                <div>

                  <span className="font-mono text-[10px] text-cyan-400">
                    {experience.number}
                  </span>

                </div>


                <div>

                  <div className="flex flex-col justify-between gap-2 md:flex-row">

                    <div>

                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-cyan-400">
                        {experience.company}
                      </p>

                    </div>

                    <p className="font-mono text-[10px] text-gray-600">
                      {experience.period}
                    </p>

                  </div>


                  {experience.description.length > 0 && (
                    <ul className="mt-5 space-y-2">

                      {experience.description.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-gray-500"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  )}


                  <div className="mt-5 flex flex-wrap gap-2">

                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-gray-500"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}