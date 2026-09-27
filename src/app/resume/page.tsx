import ResumeContent from '@/components/resume/ResumeContent';

export const metadata = {
  title: 'Resume — Kushal AI/ML Engineer',
  description: 'Interactive resume of Kushal, AI/ML Engineering student at DJ Sanghvi College of Engineering, University of Mumbai.',
};

export default function ResumePage() {
  return (
    <div className="pt-20">
      <ResumeContent />
    </div>
  );
}
