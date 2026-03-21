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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10" : "border-blue-500/40 text-blue-600 bg-blue-500/10"
          }`}>
            Portfolio
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Featured Projects
          </h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
            A selection of projects that showcase my skills across algorithms, AI, and web development.
          </p>
        </motion.div>

        {/* Featured Projects - Bento Grid (first 2) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} large />
          ))}
        </motion.div>

        {/* More Projects - Slider */}
        <div className="relative">
          <h3 className={`text-2xl font-semibold mb-6 ${isDark ? "text-white/80" : "text-gray-800"}`}>
            More Projects
          </h3>
          <div ref={sliderRef} className="keen-slider">
            {projects.slice(2).map((project) => (
              <div key={project.id} className="keen-slider__slide">
                <ProjectCard project={project} isDark={isDark} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => instanceRef.current?.prev()}
              className={`p-2 rounded-xl border transition-all ${
                isDark
                  ? "border-white/10 text-white/60 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/10"
                  : "border-gray-200 text-gray-500 hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-500/10"
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className={`p-2 rounded-xl border transition-all ${
                isDark
                  ? "border-white/10 text-white/60 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/10"
                  : "border-gray-200 text-gray-500 hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-500/10"
              }`}
            >
              <ChevronRight size={18} />
            </button>
            <div className="flex gap-2">
              {projects.slice(2).map((_, i) => (
                <button
                  key={i}
                  onClick={() => instanceRef.current?.moveToIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === i
                      ? isDark ? "bg-cyan-400 w-6" : "bg-blue-600 w-6"
                      : isDark ? "bg-white/20 w-2" : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  isDark,
  large = false,
}: {
  project: (typeof projects)[0];
  isDark: boolean;
  large?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-white/5 border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          : "bg-white border-gray-200 hover:border-blue-500/30 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]"
      }`}
    >
      {/* Project image placeholder */}
      <div
        className={`relative ${large ? "h-52" : "h-40"} bg-gradient-to-br ${project.imageColor} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]" />
        <span className="text-white/90 font-bold text-xl tracking-tight z-10 px-4 text-center leading-tight">
          {project.title}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className={`font-semibold text-base ${isDark ? "text-white" : "text-gray-900"}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-md text-xs font-medium border ${
                isDark
                  ? "border-white/10 bg-white/5 text-white/60"
                  : "border-gray-200 bg-gray-50 text-gray-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isDark
                  ? "text-white/50 hover:text-cyan-400"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isDark
                  ? "text-white/50 hover:text-cyan-400"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
