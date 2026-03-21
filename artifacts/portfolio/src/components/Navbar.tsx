import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function NNLogo({ isDark }: { isDark: boolean }) {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isDark ? "#00ffff" : "#2563eb"} />
          <stop offset="100%" stopColor={isDark ? "#7c3aed" : "#7c3aed"} />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Hexagon background */}
      <path
        d="M21 2L37.5 11.5V30.5L21 40L4.5 30.5V11.5L21 2Z"
        fill={isDark ? "rgba(0,255,255,0.08)" : "rgba(37,99,235,0.08)"}
        stroke="url(#logoGrad)"
        strokeWidth="1.5"
        filter="url(#logoGlow)"
      />
      {/* N N letters */}
      <text
        x="21"
        y="26"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fontFamily="'Inter', system-ui, sans-serif"
        fill="url(#logoGrad)"
        letterSpacing="-1"
        filter="url(#logoGlow)"
      >
        NN
      </text>
    </svg>
  );
}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = resolvedTheme === "dark";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0a0a0a]/90 border-b border-cyan-500/20 backdrop-blur-md shadow-lg shadow-cyan-500/5"
            : "bg-[#f8f9fa]/90 border-b border-blue-500/20 backdrop-blur-md shadow-lg shadow-blue-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-2.5 group"
          >
            <NNLogo isDark={isDark} />
            <span
              className={`text-sm font-bold tracking-wide hidden sm:block ${
                isDark
                  ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
                  : "text-blue-600"
              }`}
            >
              Neeraj Negi
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "text-white/70 hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                    : "text-gray-600 hover:text-blue-600 hover:drop-shadow-[0_0_6px_rgba(37,99,235,0.4)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-2 rounded-full border transition-all duration-300 ${
                  isDark
                    ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]"
                    : "border-blue-500/40 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.span
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg ${
                isDark ? "text-white/80" : "text-gray-700"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              isDark
                ? "bg-[#0a0a0a]/95 border-cyan-500/20"
                : "bg-[#f8f9fa]/95 border-blue-500/20"
            } backdrop-blur-md`}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-sm font-medium py-2 ${
                    isDark ? "text-white/70 hover:text-cyan-400" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
