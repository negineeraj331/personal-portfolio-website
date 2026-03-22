import { ThemeProvider, useTheme } from "next-themes";
import { ParticleBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import { AchievementsSection } from "../components/AchievementsSection";

function PortfolioContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="relative min-h-screen transition-colors duration-500"
      style={{ backgroundColor: isDark ? "#0a0a0a" : "#f8f9fa", color: isDark ? "#ffffff" : "#1a1a1a" }}
    >
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <AchievementsSection />
          <ProjectsSection />
          <CertificationsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <PortfolioContent />
    </ThemeProvider>
  );
}
