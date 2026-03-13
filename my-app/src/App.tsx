import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    setDarkMode(shouldUseDark);

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(to_bottom,_#f1f5f9,_#e2e8f0)] text-slate-900 transition-colors duration-300 dark:bg-[linear-gradient(to_bottom,_#020617,_#0f172a)] dark:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-180px] h-[480px] w-[480px] rounded-full bg-pink-400/30 blur-[140px] dark:bg-pink-500/24"></div>

        <div className="absolute right-[-180px] top-[40px] h-[420px] w-[420px] rounded-full bg-violet-400/28 blur-[140px] dark:bg-violet-500/22"></div>

        <div className="absolute left-[6%] top-[42%] h-[360px] w-[360px] rounded-full bg-cyan-300/26 blur-[135px] dark:bg-cyan-400/20"></div>

        <div className="absolute bottom-[-160px] left-[12%] h-[420px] w-[420px] rounded-full bg-sky-300/24 blur-[145px] dark:bg-sky-400/18"></div>

        <div className="absolute bottom-[10%] right-[8%] h-[360px] w-[360px] rounded-full bg-fuchsia-300/22 blur-[135px] dark:bg-fuchsia-500/18"></div>

        <div className="absolute right-[22%] top-[58%] h-[280px] w-[280px] rounded-full bg-rose-300/20 blur-[120px] dark:bg-rose-400/16"></div>
      </div>
      

      <div className="relative z-10 pt-16 md:pt-20">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Experience/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;