import { useForm, ValidationError } from "@formspree/react";
import Reveal from "./Reveal";

function Contact() {
  const [state, handleSubmit] = useForm("xdawdekq");

  return (
    <section id="contact" className="scroll-mt-28 px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Contact
            </h2>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-slate-200/60 bg-white/35 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Let&apos;s Connect
                </h3>

                <p className="mt-5 text-justify text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                  Whether it is a software project, QA opportunity, research
                  collaboration, or freelance work, feel free to send me a message.
                  I will get back to you through email.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-600 dark:text-fuchsia-400">
                      Email
                    </p>
                    <a
                      href="mailto:zohaibzeeshan999@gmail.com"
                      className="mt-1 inline-block text-base text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-300 dark:hover:text-fuchsia-400"
                    >
                      zohaibzeeshan999@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-600 dark:text-fuchsia-400">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/WE3B"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-base text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-300 dark:hover:text-fuchsia-400"
                    >
                      github.com/WE3B
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-600 dark:text-fuchsia-400">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/zohaib-zeeshan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-base text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-300 dark:hover:text-fuchsia-400"
                    >
                      linkedin.com/in/zohaib-zeeshan/
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/60 bg-white/35 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10 md:p-8">
                {state.succeeded ? (
                  <div className="rounded-2xl border border-emerald-300/40 bg-emerald-100/60 p-5 text-slate-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-100">
                    Thanks — your message has been sent successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
                        placeholder="Your full name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
                        placeholder="you@example.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full rounded-2xl border border-slate-300/70 bg-white/70 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-400/30 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
                        placeholder="Write your message here..."
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="mt-2 text-sm text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-105 hover:bg-fuchsia-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;