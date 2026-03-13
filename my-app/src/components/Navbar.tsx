import { useState } from "react";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/30 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#hero"
          className="group relative text-xl font-extrabold tracking-wide transition-all duration-300"
        >
          <span className="relative z-10 bg-gradient-to-r from-slate-900 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] transition group-hover:drop-shadow-[0_3px_6px_rgba(217,70,239,0.35)] dark:from-white dark:via-fuchsia-400 dark:to-purple-400">
            ZOHAIB
          </span>

          {/* glass reflection */}
          <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white/40 via-white/10 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-60 dark:from-white/30"></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-200 dark:hover:text-fuchsia-400"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/40 text-lg text-slate-700 backdrop-blur-md transition hover:scale-105 hover:bg-white/60 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/40 text-base text-slate-700 backdrop-blur-md transition hover:bg-white/60 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="text-2xl text-slate-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/20 bg-white/30 px-6 py-4 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-slate-900/30">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-fuchsia-600 dark:text-slate-200 dark:hover:text-fuchsia-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;