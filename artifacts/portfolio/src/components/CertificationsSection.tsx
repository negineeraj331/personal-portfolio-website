import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, ZoomIn } from "lucide-react";
import { certificates } from "../data/portfolio-data";

function CertModal({ pdfPath, title, onClose }: { pdfPath: string; title: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.25)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#0f0f0f] border-b border-white/10">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-pink-400" />
              <span className="text-sm font-medium text-white/80 truncate max-w-xs">{title}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 transition-colors px-3 py-1.5 rounded-lg border border-pink-500/30 hover:bg-pink-500/10"
              >
                <ExternalLink size={12} /> Open Full
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="bg-[#1a1a1a]" style={{ height: "75vh" }}>
            <iframe
              src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full"
              title={title}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function CertificationsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activePdf, setActivePdf] = useState<{ path: string; title: string } | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark
              ? "border-pink-500/40 text-pink-400 bg-pink-500/10"
              : "border-violet-500/40 text-violet-600 bg-violet-500/10"
          }`}>
            Achievements
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Certificates &{" "}
            <span className={isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600"
            }>
              Certifications
            </span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
            Professional certifications from Oracle, Infosys, Google, NPTEL, and MongoDB. Click any card to view the certificate.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActivePdf({ path: cert.pdfPath, title: cert.title })}
              className={`group relative text-left rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                  : "bg-white border-gray-200 hover:border-violet-400/50 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)]"
              }`}
            >
              {/* Certificate Banner */}
              <div className={`relative h-36 bg-gradient-to-br ${cert.gradient} overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 16px)"
                  }}
                />
                {/* Decorative circles */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                {/* Certificate icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award size={40} className="text-white/90 mx-auto drop-shadow-lg" />
                    <p className="text-white/80 text-xs font-semibold mt-2 tracking-widest uppercase">{cert.issuer}</p>
                  </div>
                </div>
                {/* View badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-100 scale-90">
                  <div className="flex items-center gap-1 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-lg text-white text-xs font-medium border border-white/20">
                    <ZoomIn size={11} /> View
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <h3 className={`text-sm font-semibold leading-snug ${isDark ? "text-white" : "text-gray-900"}`}>
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                    isDark ? cert.badgeColor : "bg-gray-100 text-gray-600"
                  }`}>
                    {cert.issuer}
                  </span>
                  <span className={`text-xs ${isDark ? "text-white/40" : "text-gray-400"}`}>
                    {cert.date}
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  isDark
                    ? "text-pink-400/60 group-hover:text-pink-400"
                    : "text-violet-500/60 group-hover:text-violet-600"
                }`}>
                  <ZoomIn size={12} />
                  Click to view certificate
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl border text-center ${
            isDark
              ? "bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-violet-500/10 border-pink-500/20"
              : "bg-gradient-to-br from-pink-50 via-fuchsia-50 to-violet-50 border-violet-200"
          }`}
        >
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "6", label: "Certifications" },
              { value: "3", label: "Platforms" },
              { value: "2025", label: "Latest" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-black ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-violet-400"
                    : "text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-violet-600"
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* PDF Modal */}
      {activePdf && (
        <CertModal
          pdfPath={activePdf.path}
          title={activePdf.title}
          onClose={() => setActivePdf(null)}
        />
      )}
    </section>
  );
}
