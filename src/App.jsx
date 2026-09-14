import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Engineering from "./sections/Engineering";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Engineering />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">

          <div>
            <span className="text-xl font-bold tracking-tight">
              MG<span className="text-cyan-400">.</span>
            </span>
          </div>

          <div className="text-xs text-gray-600">
            Data Science · Data Engineering · AI Engineering
          </div>

          <div className="text-xs text-gray-600">
            © 2026 Mohamed Hisham Gad
          </div>

        </div>
      </footer>
    </div>
  );
}