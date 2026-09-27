import AboutSection from '@/components/about/AboutSection';

export const metadata = {
  title: 'About — Kushal AI/ML Engineer',
  description: 'Background, education, engineering philosophy, and continuous learning trajectory.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
