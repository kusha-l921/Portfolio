import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AtmosphericPFP from '../components/AtmosphericPFP';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
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

      {/* Selected Work (#projects) */}
      <ProjectsSection />

      {/* Skills & Technologies (#skills) */}
      <SkillsSection />

      {/* Contact Section (#contact) */}
      <ContactSection />

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}
