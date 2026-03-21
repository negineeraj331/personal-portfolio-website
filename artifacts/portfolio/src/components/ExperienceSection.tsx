import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Briefcase, Calendar } from "lucide-react";
import { experiences } from "../data/portfolio-data";

const typeConfig = {
  education: { icon: GraduationCap, label: "Education", gradient: "from-pink-500 to-fuchsia-500" },
  training: { icon: BookOpen, label: "Training", gradient: "from-violet-500 to-purple-500" },
  work: { icon: Briefcase, label: "Work", gradient: "from-fuchsia-500 to-pink-500" },
};

export function ExperienceSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-14">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center space-y-4">
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark ? "border-pink-500/40 text-pink-400 bg-pink-500/10" : "border-violet-500/40 text-violet-600 bg-violet-500/10"
          }`}>
            Journey
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-6 top-0 bottom-0 w-px ${
            isDark
              ? "bg-gradient-to-b from-pink-500/50 via-violet-500/30 to-transparent"
              : "bg-gradient-to-b from-violet-500/50 via-gray-200 to-transparent"
          }`} />
          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;
              return (
                <motion.div key={exp.id}
                  initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative pl-16">
                  <div className={`absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <motion.div whileHover={{ x: 6 }}
                    className={`p-6 rounded-2xl border transition-all ${
                      isDark
                        ? "bg-white/5 border-white/10 hover:border-pink-500/30"
                        : "bg-white border-gray-200 shadow-sm hover:border-violet-500/30"
                    }`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{exp.role}</h3>
                        <p className={`text-sm font-medium ${
                          isDark
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400"
                            : "text-violet-600"
                        }`}>{exp.company}</p>
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${
                        isDark ? "border-white/10 text-white/50" : "border-gray-200 text-gray-500"
                      }`}>
                        <Calendar size={12} /> {exp.duration}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, j) => (
                        <li key={j} className={`text-sm leading-relaxed flex items-start gap-2 ${isDark ? "text-white/60" : "text-gray-600"}`}>
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-pink-400/60" : "bg-violet-400"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl border text-center ${
            isDark
              ? "bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-violet-500/10 border-pink-500/30"
              : "bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-50 border-violet-200"
          }`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Key Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "350+", label: "Problems Solved" },
              { value: "6", label: "Certifications" },
              { value: "1", label: "Patent Filed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-black ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-violet-400"
                    : "text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-violet-600"
                }`}>{stat.value}</div>
                <div className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
