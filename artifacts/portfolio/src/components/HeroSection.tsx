import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import neerajPhoto from "@assets/neeraj_1774112057788.jpg";

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
                ? "border-green-500/40 bg-green-500/10 text-green-400"
                : "border-blue-500/40 bg-blue-500/10 text-blue-600"
            }`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-green-400" : "bg-blue-600"}`} />
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
                    <span className={isDark
                      ? "text-green-400 drop-shadow-[0_0_24px_rgba(0,230,100,0.6)]"
                      : "text-blue-600 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    }>
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
                wrapper="span" speed={50} repeat={Infinity}
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
            className="flex flex-wrap gap-3"
          >
            {/* View My Work */}
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isDark
                  ? "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(0,230,100,0.35)] hover:shadow-[0_0_32px_rgba(0,230,100,0.6)]"
                  : "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              }`}
            >
              View My Work
            </motion.button>

            {/* Hire Me — scrolls to contact */}
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                isDark
                  ? "border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:shadow-[0_0_16px_rgba(0,230,100,0.2)]"
                  : "border-blue-500/40 text-blue-600 hover:bg-blue-500/10 hover:border-blue-500"
              }`}
            >
              Hire Me
            </motion.button>

            {/* Download CV */}
            <motion.a
              href="/NeerajNegi_CV.pdf"
              download="NeerajNegi_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300 ${
                isDark
                  ? "border-white/15 text-white/70 hover:border-green-500/50 hover:text-green-400 hover:bg-green-500/5"
                  : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <Download size={15} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/negineeraj331"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDark
                  ? "border-white/10 text-white/50 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 hover:shadow-[0_0_12px_rgba(0,230,100,0.25)]"
                  : "border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/10"
              }`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/neeraj-negi07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDark
                  ? "border-white/10 text-white/50 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 hover:shadow-[0_0_12px_rgba(0,230,100,0.25)]"
                  : "border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/10"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, y: -2 }}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDark
                  ? "border-white/10 text-white/50 hover:text-green-400 hover:border-green-500/40 hover:bg-green-500/10 hover:shadow-[0_0_12px_rgba(0,230,100,0.25)]"
                  : "border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-500/40 hover:bg-blue-500/10"
              }`}
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo Side — larger */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer glow */}
            <div
              className={`absolute inset-0 rounded-full blur-3xl opacity-40 ${
                isDark ? "bg-green-500" : "bg-blue-500"
              }`}
              style={{ transform: "scale(1.2)" }}
            />
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border-2 border-dashed ${
                isDark ? "border-green-500/50" : "border-blue-500/40"
              }`}
              style={{ inset: "-20px" }}
            />
            {/* Second counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className={`absolute rounded-full border border-dotted ${
                isDark ? "border-green-300/30" : "border-blue-300/50"
              }`}
              style={{ inset: "-36px" }}
            />

            {/* Photo — increased size */}
            <div
              className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 ${
                isDark
                  ? "border-green-500/70 shadow-[0_0_70px_rgba(0,230,100,0.4)]"
                  : "border-blue-500/60 shadow-[0_0_60px_rgba(37,99,235,0.25)]"
              }`}
            >
              <img
                src={neerajPhoto}
                alt="Neeraj Negi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -right-4 top-8 px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                isDark
                  ? "bg-[#0a0a0a] border-green-500/40 text-green-400 shadow-[0_0_12px_rgba(0,230,100,0.25)]"
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
                  ? "bg-[#0a0a0a] border-green-500/40 text-green-400 shadow-[0_0_12px_rgba(0,230,100,0.25)]"
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
