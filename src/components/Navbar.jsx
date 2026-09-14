import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Engineering", href: "#engineering" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#050505]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          MG<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop */}

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            download
            className="rounded-full border border-white/15 px-5 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black"
          >
            Download CV
          </a>
        </div>

        {/* Mobile button */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}

      {open && (
        <div className="border-t border-white/10 bg-[#050505] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-cyan-400"
            >
              Download CV →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}