import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const config: NextConfig = {
  poweredByHeader: false,
  ...(isGitHubPages ? {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: { unoptimized: true },
  } : {
    async redirects() {
      return [
        { source: '/index.html', destination: '/', permanent: true },
        { source: '/about.html', destination: '/#about', permanent: true },
        { source: '/techstack.html', destination: '/#skills', permanent: true },
        { source: '/contact.html', destination: '/#contact', permanent: true },
      ];
    },
  }),
};

export default config;
