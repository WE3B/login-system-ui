import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      role: "Quality Assurance Analyst",
      company: "Devntion",
      period: "Jul 2025 – Present",
      description:
        "Perform end-to-end manual testing across multiple software projects by designing test cases, executing regression tests, identifying defects, and collaborating with developers to improve software reliability and release quality.",
    },
    {
      role: "Graduate Teaching Assistant",
      company: "University of Windsor",
      period: "Sep 2023 – Apr 2025",
      description:
        "Assisted in teaching undergraduate computer science courses by guiding students through programming concepts, evaluating assignments, supporting lab sessions, and helping improve student understanding of software development principles.",
    },
    {
      role: "Graduate Research Assistant",
      company: "University of Windsor",
      period: "Sep 2023 – Apr 2025",
      description:
        "Conducted research on cross-domain recommendation systems using large language models, including dataset preparation, model experimentation, evaluation, and performance analysis for intelligent recommendation systems.",
    },
    {
      role: "Junior Software Engineer",
      company: "Devntion",
      period: "Nov 2022 – Jul 2023",
      description:
        "Developed and maintained web applications by implementing new features, integrating APIs, debugging issues, and collaborating with cross-functional teams to deliver scalable and user-focused software solutions.",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Experience
            </h2>

            <div className="space-y-6">
              {experiences.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-3xl border border-slate-200/60 bg-white/35 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-8"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-base font-medium text-fuchsia-600 dark:text-fuchsia-400">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 md:text-base">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-5 text-justify text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;