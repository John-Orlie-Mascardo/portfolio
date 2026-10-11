import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'John Orlie Mascardo | Aspiring QA Professional',
  description: 'Fourth-year IT student exploring quality assurance through manual testing, AI-assisted development, and hands-on IoT work. Discover my LitterSense capstone project.',
  openGraph: {
    title: 'John Orlie Mascardo | Aspiring QA Professional',
    description: 'Testing software. Connecting hardware. Learning through real projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
