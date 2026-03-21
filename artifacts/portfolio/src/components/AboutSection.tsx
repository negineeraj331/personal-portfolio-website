import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills, personalInfo, certificates } from "../data/portfolio-data";
import { Code2, Palette, GitBranch, Award, Trophy, Lightbulb } from "lucide-react";

const interestCards = [
  {
    icon: Code2,
    title: "Competitive Coding",
    desc: "350+ problems solved across LeetCode and other platforms with strong algorithmic focus.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Building modern, responsive interfaces with clean aesthetics using Figma and Tailwind CSS.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: GitBranch,
    title: "Open Source",
    desc: "Contributing to the developer community through GitHub and collaborative projects.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Patents",
    desc: "Filed a patent for AI-Powered Adaptive Exosuits for deep-sea exploration and research.",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    icon: Trophy,
    title: "Achievements",
    desc: "150+ LeetCode problems, Oracle AI Certified, multiple Infosys Springboard certifications.",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    desc: "6 professional certificates including Cloud Computing, Networking, MongoDB, and Generative AI.",
    gradient: "from-pink-500 to-red-600",
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <AnimatedSection className="text-center space-y-4">
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10" : "border-blue-500/40 text-blue-600 bg-blue-500/10"
          }`}>
            About Me
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Who I Am
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
            {personalInfo.bio}
          </p>
        </AnimatedSection>

        {/* Interests Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interestCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                      : "bg-white border-gray-200 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection>
          <h3 className={`text-3xl font-bold mb-10 text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <h4 className={`text-sm font-semibold tracking-widest uppercase mb-4 ${
                  isDark ? "text-cyan-400" : "text-blue-600"
                }`}>
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 text-white/80 hover:border-cyan-500/40 hover:text-cyan-400"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-500/40 hover:text-blue-600"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certificates */}
        <AnimatedSection>
          <h3 className={`text-3xl font-bold mb-10 text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            Certificates & Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10 hover:border-cyan-500/30"
                    : "bg-white border-gray-200 hover:border-blue-500/30 shadow-sm"
                }`}
              >
                <div className={`mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${
                  isDark ? "bg-cyan-500/20 text-cyan-400" : "bg-blue-500/10 text-blue-600"
                }`}>
                  <Award size={16} />
                </div>
                <div>
                  <p className={`text-sm font-semibold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    {cert.title}
                  </p>
                  <p className={`text-xs mt-1 ${isDark ? "text-white/40" : "text-gray-500"}`}>
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
