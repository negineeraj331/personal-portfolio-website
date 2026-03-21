import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

export function ContactSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
    isDark
      ? "bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-pink-500/60 focus:shadow-[0_0_0_3px_rgba(236,72,153,0.1)]"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)]"
  }`;

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-14">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center space-y-4">
          <div className={`inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1 rounded-full border ${
            isDark ? "border-pink-500/40 text-pink-400 bg-pink-500/10" : "border-violet-500/40 text-violet-600 bg-violet-500/10"
          }`}>
            Contact
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Let's Work Together</h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: "Phone", value: personalInfo.mobile, href: `tel:${personalInfo.mobile}` },
              { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
              { icon: Github, label: "GitHub", value: "negineeraj331", href: "https://github.com/negineeraj331" },
              { icon: Linkedin, label: "LinkedIn", value: "neeraj-negi07", href: "https://www.linkedin.com/in/neeraj-negi07" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a key={label} href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all group ${
                  isDark
                    ? "border-white/10 hover:border-pink-500/40 hover:bg-pink-500/5"
                    : "border-gray-200 hover:border-violet-500/30 hover:bg-violet-500/5"
                }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isDark ? "bg-pink-500/20 text-pink-400" : "bg-violet-500/10 text-violet-600"
                }`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-xs font-medium uppercase tracking-wider ${isDark ? "text-white/40" : "text-gray-400"}`}>{label}</p>
                  <p className={`text-sm font-medium ${isDark ? "text-white/80 group-hover:text-pink-400" : "text-gray-700 group-hover:text-violet-600"} transition-colors`}>
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className={`h-full flex flex-col items-center justify-center gap-6 p-10 rounded-2xl border text-center ${
                    isDark
                      ? "bg-gradient-to-br from-pink-500/10 to-violet-500/10 border-pink-500/40"
                      : "bg-gradient-to-br from-pink-50 to-violet-50 border-violet-200"
                  }`}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className={isDark ? "text-pink-400" : "text-violet-600"}>
                    <CheckCircle size={64} />
                  </motion.div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Message Sent!</h3>
                    <p className={`mt-2 ${isDark ? "text-white/60" : "text-gray-600"}`}>Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                    className={`px-6 py-2 rounded-xl text-sm font-medium border transition-all ${
                      isDark ? "border-pink-500/40 text-pink-400 hover:bg-pink-500/10" : "border-violet-500/40 text-violet-600 hover:bg-violet-500/10"
                    }`}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  className={`p-8 rounded-2xl border space-y-5 ${
                    isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"
                  }`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {["name", "email"].map((field) => (
                    <div key={field} className="space-y-1">
                      <label className={`text-sm font-medium ${isDark ? "text-white/70" : "text-gray-700"}`}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input type={field === "email" ? "email" : "text"}
                        placeholder={field === "email" ? "your@email.com" : "Your full name"}
                        value={form[field as "name" | "email"]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className={inputClass} />
                      {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
                    </div>
                  ))}
                  <div className="space-y-1">
                    <label className={`text-sm font-medium ${isDark ? "text-white/70" : "text-gray-700"}`}>Message</label>
                    <textarea placeholder="Tell me about your project or opportunity..." rows={5}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button type="submit" disabled={loading}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-70 text-white bg-gradient-to-r from-pink-500 to-violet-600 ${
                      isDark
                        ? "shadow-[0_0_24px_rgba(236,72,153,0.4)] hover:shadow-[0_0_36px_rgba(236,72,153,0.6)]"
                        : "shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                    }`}>
                    {loading ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
