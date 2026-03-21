import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import { motion } from "framer-motion";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer
      className={`relative py-10 px-4 border-t ${
        isDark ? "border-white/10 bg-black/20" : "border-gray-200 bg-gray-50/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className={`text-sm ${isDark ? "text-white/40" : "text-gray-500"}`}>
          <span className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-red-400" /> by{" "}
            <span className={isDark ? "text-cyan-400" : "text-blue-600"}>{personalInfo.name}</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/negineeraj331"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className={`transition-colors ${
              isDark ? "text-white/30 hover:text-cyan-400" : "text-gray-400 hover:text-blue-600"
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
            className={`transition-colors ${
              isDark ? "text-white/30 hover:text-cyan-400" : "text-gray-400 hover:text-blue-600"
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.2, y: -2 }}
            className={`transition-colors ${
              isDark ? "text-white/30 hover:text-cyan-400" : "text-gray-400 hover:text-blue-600"
            }`}
            aria-label="Email"
          >
            <Mail size={18} />
          </motion.a>
        </div>

        <p className={`text-sm ${isDark ? "text-white/30" : "text-gray-400"}`}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
