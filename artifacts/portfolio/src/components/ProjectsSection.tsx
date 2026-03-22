import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio-data";

export function ProjectsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) { setCurrentSlide(slider.track.details.rel); },
    loop: true, mode: "snap",
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center space-y-4">
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark ? "border-pink-500/40 text-pink-400 bg-pink-500/10" : "border-violet-500/40 text-violet-600 bg-violet-500/10"
          }`}>
            Portfolio
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Featured Projects</h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
            A selection of projects that showcase my skills across algorithms, AI, and web development.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} large />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isDark, large = false }: {
  project: (typeof projects)[0]; isDark: boolean; large?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.01 }} transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-white/5 border-white/10 hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]"
          : "bg-white border-gray-200 hover:border-violet-500/30 hover:shadow-[0_12px_40px_rgba(139,92,246,0.1)]"
      }`}>
      <div className={`relative ${large ? "h-60" : "h-48"} bg-gradient-to-br ${project.imageColor} flex items-center justify-center overflow-hidden`}>
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
        ) : (
          <>
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
            <span className="text-white/90 font-bold text-xl tracking-tight z-10 px-4 text-center leading-tight">
              {project.title}
            </span>
          </>
        )}
      </div>
      <div className="p-5 space-y-3">
        <h3 className={`font-semibold text-base ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
              isDark ? "border-white/10 bg-white/5 text-white/60" : "border-gray-200 bg-gray-50 text-gray-600"
            }`}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isDark ? "text-white/50 hover:text-pink-400" : "text-gray-500 hover:text-violet-600"
              }`}>
              <Github size={14} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isDark ? "text-white/50 hover:text-pink-400" : "text-gray-500 hover:text-violet-600"
              }`}>
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
