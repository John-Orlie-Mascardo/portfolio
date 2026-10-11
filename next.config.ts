import type { NextConfig } from 'next';

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/#about', permanent: true },
      { source: '/techstack.html', destination: '/#skills', permanent: true },
      { source: '/contact.html', destination: '/#contact', permanent: true },
    ];
  },
};

export default config;
