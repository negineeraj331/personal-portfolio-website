import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";
import { motion } from "framer-motion";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <footer className={`relative py-10 px-4 border-t ${
      isDark ? "border-white/10 bg-black/20" : "border-gray-200 bg-gray-50/80"
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className={`text-sm ${isDark ? "text-white/40" : "text-gray-500"}`}>
          <span className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-pink-400" /> by{" "}
            <span className={`font-medium ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400"
                : "text-violet-600"
            }`}>{personalInfo.name}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/negineeraj331", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/neeraj-negi07", label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className={`transition-colors ${isDark ? "text-white/30 hover:text-pink-400" : "text-gray-400 hover:text-violet-600"}`}
              aria-label={label}>
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className={`text-sm ${isDark ? "text-white/30" : "text-gray-400"}`}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
