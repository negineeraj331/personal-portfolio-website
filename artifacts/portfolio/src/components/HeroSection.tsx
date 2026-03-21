import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border w-fit ${
              isDark
                ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400"
                : "border-blue-500/40 bg-blue-500/10 text-blue-600"
            }`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-cyan-400" : "bg-blue-600"}`} />
            Available for opportunities
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {personalInfo.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span
                      className={isDark
                        ? "text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                        : "text-blue-600 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      }
                    >
                      {word}
                    </span>
                  ) : word}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`text-xl md:text-2xl font-semibold mt-3 h-8 ${
                isDark ? "text-white/60" : "text-gray-500"
              }`}
            >
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-base md:text-lg max-w-lg leading-relaxed ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isDark
                  ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
                  : "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              }`}
            >
              View My Work
            </motion.button>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                isDark
                  ? "border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                  : "border-blue-500/40 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500"
              }`}
            >
              Hire Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className={`p-2.5 rounded-xl border transition-all duration-200 ${
                  isDark
                    ? "border-white/10 text-white/50 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_12px_rgba(0,255,255,0.2)]"
                    : "border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                }`}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar / Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-30 ${
                isDark ? "bg-cyan-500" : "bg-blue-500"
              }`}
              style={{ transform: "scale(1.2)" }}
            />
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 rounded-full border-2 border-dashed ${
                isDark ? "border-cyan-500/40" : "border-blue-500/30"
              }`}
              style={{ transform: "scale(1.15)" }}
            />
            {/* Avatar container */}
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                isDark
                  ? "border-cyan-500/60 shadow-[0_0_50px_rgba(0,255,255,0.3)]"
                  : "border-blue-500/60 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
              }`}
            >
              {/* Placeholder headshot with gradient */}
              <div
                className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                  isDark
                    ? "from-gray-800 to-gray-900"
                    : "from-gray-100 to-gray-200"
                }`}
              >
                {/* Silhouette placeholder */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={isDark ? "#06b6d4" : "#2563eb"} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={isDark ? "#0891b2" : "#1d4ed8"} stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill={isDark ? "#111827" : "#f3f4f6"} />
                  <circle cx="100" cy="72" r="40" fill="url(#avatarGrad)" />
                  <ellipse cx="100" cy="175" rx="65" ry="45" fill="url(#avatarGrad)" />
                  <text
                    x="100"
                    y="78"
                    textAnchor="middle"
                    fontSize="36"
                    fontWeight="bold"
                    fill={isDark ? "#0a0a0a" : "#ffffff"}
                    fontFamily="sans-serif"
                  >
                    NN
                  </text>
                </svg>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -right-4 top-8 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                isDark
                  ? "bg-[#0a0a0a] border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.2)]"
                  : "bg-white border-blue-500/30 text-blue-600 shadow-lg"
              }`}
            >
              350+ Problems
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -left-4 bottom-16 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                isDark
                  ? "bg-[#0a0a0a] border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.2)]"
                  : "bg-white border-blue-500/30 text-blue-600 shadow-lg"
              }`}
            >
              Patent Filed 🚀
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ${
          isDark ? "text-white/30" : "text-gray-400"
        }`}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
