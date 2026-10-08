import AmbientBackground from '../components/AmbientBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AtmosphericPFP from '../components/AtmosphericPFP';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import AchievementsSection from '../components/AchievementsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PortfolioTerminal from '../components/PortfolioTerminal';
import CardPointerLighting from '../components/CardPointerLighting';
import AppWorkspaceShell from '../components/AppWorkspaceShell';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <AppWorkspaceShell>
        {/* Global Card Cursor-Following Lighting Effect */}
        <CardPointerLighting />

        {/* Global Ambient Moving Blue Light (Behind PFP Artwork & Content) */}
        <AmbientBackground />

        {/* Integrated Atmospheric PFP Background Artwork (Dark & Light) */}
        <AtmosphericPFP />

        {/* Sticky Compact Navbar */}
        <Navbar />

        {/* Hero Section (#me) */}
        <Hero />

        {/* About Section (#about) */}
        <AboutSection />

        {/* Education & Academic Honors (#education) */}
        <EducationSection />

        {/* Experience & Professional Internship (#experience) */}
        <ExperienceSection />

        {/* Selected Work (#projects) */}
        <ProjectsSection />

        {/* Engineering Achievements (#achievements) */}
        <AchievementsSection />

        {/* Skills & Technologies (#skills) */}
        <SkillsSection />

        {/* Contact Section (#contact) */}
        <ContactSection />

        {/* Minimal Footer */}
        <Footer />
      </AppWorkspaceShell>

      {/* Workspace Terminal (Floating / Resizable / Dockable) */}
      <PortfolioTerminal />
    </main>
  );
}
