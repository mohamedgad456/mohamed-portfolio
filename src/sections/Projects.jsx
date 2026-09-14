const projects = [
  {
    number: "01",
    year: "2024",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Built and compared Logistic Regression, Decision Tree, and Random Forest classification models to predict customer churn using Python, Pandas, and Scikit-learn.",
    details:
      "Applied data preprocessing, feature engineering, and hyperparameter optimization to improve predictive accuracy and maximize ROC-AUC and F1-score.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
    ],
  },

  {
    number: "02",
    year: "2026",
    title: "AI Text & Image Generator Web App",
    category: "AI · Full Stack",
    description:
      "Developed REST API endpoints using Express.js and created an interactive frontend with React.js and Tailwind CSS.",
    details:
      "Implemented dynamic prompt handling, real-time AI responses, image rendering, and local image storage functionality.",
    technologies: [
      "Express.js",
      "React.js",
      "Tailwind CSS",
      "REST API",
      "AI Integration",
    ],
  },

  {
    number: "03",
    year: "2025",
    title: "GovConnect App",
    category: "Full Stack · Social Platform",
    description:
      "Implemented interactive social features including voting, likes, comments, anonymous commenting, and bilingual Arabic-English translation support.",
    details:
      "Added content moderation features such as inappropriate language filtering, admin-controlled post/comment management, advertisement verification workflows, and dark/light mode UI support.",
    technologies: [
      "Arabic-English Translation",
      "Content Moderation",
      "Social Features",
      "Admin Management",
      "Dark / Light Mode",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full border-t border-white/10 bg-[#050505] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-8">

        <div className="mb-12">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[10px] text-cyan-400">
              04
            </span>

            <span className="h-px w-10 bg-cyan-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Projects
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            Projects across machine learning, AI integration, web development,
            and software engineering.
          </p>

        </div>


        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-[#0a0a0c] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 md:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[10px] text-cyan-400">
                  {project.number}
                </span>

                <span className="font-mono text-[10px] text-gray-700">
                  {project.year}
                </span>

              </div>


              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {project.description}
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {project.details}
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-gray-500"
                  >
                    {technology}
                  </span>
                ))}

              </div>


              <div className="mt-7 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-12" />

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}