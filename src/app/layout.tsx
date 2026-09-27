import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/layout/AppShell';

export const viewport = {
  themeColor: '#05070B',
};

export const metadata: Metadata = {
  title: 'Kushal — AI/ML Engineer & Systems Builder',
  description:
    'Digital environment of Kushal, AI/ML engineering student and developer at DJ Sanghvi College of Engineering, University of Mumbai. Building intelligent systems, deep learning architectures, and distributed computer vision.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'PyTorch',
    'Kushal',
    'Solar Flare Prediction',
    'DJ Sanghvi',
    'Autonomous Systems',
    '3D WebGL Portfolio',
  ],
  authors: [{ name: 'Kushal' }],
  openGraph: {
    title: 'Kushal — AI/ML Engineer & Systems Builder',
    description:
      'Digital environment and 3D scientific portfolio exploring intelligent systems, computer vision, and distributed ML pipelines.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-primary-text antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
