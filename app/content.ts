export const skillGroups = [
  { number: '01', title: 'Quality & collaboration', description: 'How I contribute to a team.', items: ['Manual feature testing', 'Expected-result checks', 'Bug reporting', 'Retesting fixes', 'Progress & blocker updates'] },
  { number: '02', title: 'Web development', description: 'Technologies I have worked with.', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Firebase', 'Supabase', 'MongoDB', 'Vercel', 'Render'] },
  { number: '03', title: 'Hardware & IoT', description: 'From components to connected systems.', items: ['ESP32', 'ESP32-S3', 'MQ135', 'MQ136', 'HC-SR04', 'YRM100 RFID', 'UHF RFID tags', 'Arduino IDE', 'PlatformIO'] },
  { number: '04', title: 'More in my toolkit', description: 'Tools and languages from school projects.', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Android Studio', 'Java', 'C', 'Dart', 'Flutter'] },
];

export const certificates = [
  { title: 'HTML and CSS', issuer: 'IT Specialist', date: 'February 2026', file: 'html-css.pdf', note: 'Valid through February 4, 2031', category: 'Development' },
  { title: 'Introduction to IoT and Digital Transformation', issuer: 'Cisco Networking Academy', date: 'February 2026', file: 'introduction-iot.pdf', note: 'Course completion', category: 'Connected systems' },
  { title: 'Getting Started with Cisco Packet Tracer', issuer: 'Cisco Networking Academy', date: 'January 2026', file: 'packet-tracer.pdf', note: 'Course completion', category: 'Networking' },
  { title: 'PowerPoint 2019 Associate', issuer: 'Microsoft Office Specialist', date: 'May 2024', file: 'powerpoint-associate.pdf', note: 'Associate certification', category: 'Productivity' },
  { title: 'Word 2019 Associate', issuer: 'Microsoft Office Specialist', date: 'March 2024', file: 'word-associate.pdf', note: 'Associate certification', category: 'Productivity' },
];

export const gallery = [
  { src: '/images/littersense-dashboard.png', width: 1920, height: 1080, alt: 'LitterSense dashboard with behavior status and odor-monitoring panels in an empty-data state', label: '01 / Monitoring dashboard', caption: 'Behavior and odor overview, shown before session data arrives.' },
  { src: '/images/littersense-hardware.jpg', width: 1208, height: 805, alt: 'Cat inside the assembled LitterSense prototype with mounted sensors', label: '02 / Hardware prototype', caption: 'The assembled prototype during testing with a cat.', hardware: true },
  { src: '/images/littersense-register.png', width: 1920, height: 1080, alt: 'LitterSense cat registration form with profile information and RFID tag association', label: '03 / Cat registration', caption: 'Individual cat profiles linked to RFID tags.' },
  { src: '/images/littersense-reports.png', width: 1920, height: 1080, alt: 'LitterSense report generation page with pet and date-range selectors', label: '04 / Activity reports', caption: 'Report controls for selecting cats and a date range.' },
];
