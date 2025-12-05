import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LETSCODE | Vibe Coding Platform',
  description: 'Prompt-driven full-stack IDE that pairs you with AI to build and deploy production-grade SaaS apps.',
  metadataBase: new URL('https://letscode.local'),
  openGraph: {
    title: 'LETSCODE | Vibe Coding Platform',
    description: 'Prompt-driven full-stack IDE that pairs you with AI to build and deploy production-grade SaaS apps.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LETSCODE | Vibe Coding Platform',
    description: 'Prompt-driven full-stack IDE that pairs you with AI to build and deploy production-grade SaaS apps.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
