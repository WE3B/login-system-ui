import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "Aspect Opinion Mining for Product Recommendation",
      subtitle: "Master’s Thesis",
      description:
        "Developed a recommendation framework that extracts aspect-level opinions from product reviews to improve cross-domain recommendation quality using natural language processing and sentiment analysis techniques.",
      tech: ["Python", "NLP", "Machine Learning", "BERT"],
      github: "#",
      demo: "#",
    },
    {
      title: "Cross-Domain Recommendation Research",
      subtitle: "Graduate Research Project",
      description:
        "Conducted research on cross-domain recommendation systems using large language models and representation learning techniques, including dataset preparation, experimentation, and model evaluation.",
      tech: ["Python", "LLMs", "Deep Learning", "Data Analysis"],
      github: "#",
      demo: "#",
    },
    {
      title: "Full-Stack Web Application Development",
      subtitle: "Software Engineering Project",
      description:
        "Built modern web applications with responsive UI, API integration, and backend services while focusing on performance, scalability, and maintainable software architecture.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Projects
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-200/60 bg-white/35 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600 dark:text-fuchsia-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 flex-1 text-justify text-base leading-8 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-fuchsia-300/40 bg-fuchsia-200/40 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur-md dark:border-fuchsia-400/20 dark:bg-fuchsia-500/15 dark:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100 dark:border-white/20 dark:hover:bg-white/10"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-700"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;