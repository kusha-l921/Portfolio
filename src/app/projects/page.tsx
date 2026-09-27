import ProjectsSection from '@/components/projects/ProjectsSection';

export const metadata = {
  title: 'Projects — Kushal AI/ML Engineer',
  description: 'Selected intelligent systems, computer vision models, and distributed ML pipelines.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsSection />
    </div>
  );
}
