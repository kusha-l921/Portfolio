import type { Metadata, Viewport } from 'next';
import './globals.css';
import CustomCursor from '../components/CustomCursor';

export const metadata: Metadata = {
  title: 'Kushal Patel — AI/ML Engineer · Systems Builder',
  description:
    'Portfolio of Kushal Patel, AI/ML Engineer based in Mumbai, India. Specializing in Vision Transformers, Edge Computing, and practical intelligent systems.',
  keywords: [
    'Kushal Patel',
    'AI/ML Engineer',
    'Machine Learning',
    'Computer Vision',
    'Vision Transformers',
    'Edge AI',
    'Solar Flare Prediction',
    'FieldSight Lite',
    'FirSeFile',
  ],
  authors: [{ name: 'Kushal Patel' }],
  icons: {
    icon: '/images/character_illustration.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { ThemeProvider } from '../context/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
