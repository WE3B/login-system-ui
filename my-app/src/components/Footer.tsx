function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200/60 bg-white/35 px-6 py-5 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/10">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Zohaib Zeeshan. All rights reserved.
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-500">
              Built with React, Vite, Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;