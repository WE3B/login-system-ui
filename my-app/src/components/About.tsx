import Reveal from "./Reveal";

function About() {
  const skills = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Manual Testing",
    "Test Case Design",
    "Regression Testing",
    "Unit Testing",
    "Git",
    "Jira",
    "REST APIs",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
  ];

  return (
    <section id="about" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <>
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
                About Me
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-3xl border border-slate-200/60 bg-white/35 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-8">
                <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">
                  Who I Am
                </h3>

                <p className="text-justify text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                  I am a Computer Science graduate from the University of Windsor
                  with experience in software development, quality assurance, and
                  artificial intelligence research. My work focuses on building
                  reliable applications, testing systems for performance and
                  stability, and exploring machine learning solutions to real-world
                  problems.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200/60 bg-white/30 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-8">
                <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-fuchsia-300/40 bg-fuchsia-200/40 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-200/60 dark:border-fuchsia-400/20 dark:bg-fuchsia-500/15 dark:text-white dark:hover:bg-fuchsia-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}

export default About;