import Reveal from "./Reveal";

function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-28 flex min-h-[92vh] items-center px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
              Zohaib Zeeshan
            </h1>

            <h2 className="mt-6 text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl md:text-2xl dark:text-slate-300">
              Software Developer | Quality Assurance Analyst | AI Researcher
            </h2>

            <p className="mt-8 max-w-3xl text-justify text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              Computer Science graduate from the University of Windsor with
              experience in full-stack development, software testing, and machine
              learning research. Passionate about building reliable, scalable, and
              user-focused applications.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-700"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-300/70 bg-white/40 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/60 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;