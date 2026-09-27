import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NavCardsRow from '../components/NavCardsRow';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Compact Navbar */}
      <Navbar />

      {/* Hero Section (#me) */}
      <Hero />

      {/* Quick Jump Navigation Row */}
      <NavCardsRow />

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
