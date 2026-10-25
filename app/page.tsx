import Image from 'next/image';
import MediaPreview from './MediaPreview';
import { assetPath } from './asset-path';
import HaloBackground from './HaloBackground';
import { certificates, gallery, skillGroups } from './content';

const github = 'https://github.com/John-Orlie-Mascardo';
const linkedin = 'https://www.linkedin.com/in/john-orlie-mascardo';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function SectionHeading({ number, eyebrow, children, id }: { number: string; eyebrow: string; children: React.ReactNode; id?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> {eyebrow}</p><h2 id={id}>{children}</h2></div>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="John Orlie Mascardo, home">JOM<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#project">Project</a><a href="#skills">Skills</a><a href="#certificates">Certificates</a></nav>
      <a className="header-contact" href="#contact">Let’s connect <Arrow diagonal /></a>
    </header>

    <main id="main">
      <div className="hero-stage"><HaloBackground /><section className="hero shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Fourth-year IT student</p>
          <p className="intro-name">Hi, I’m John Orlie Mascardo.</p>
          <h1 id="hero-title">Aspiring QA<br /><span>Professional.</span></h1>
          <p className="hero-description">Curious about how things work.<br />Careful about how they <em>should</em> work.</p>
          <p className="hero-detail">Exploring quality assurance through hands-on testing, web development, and connected hardware.</p>
          <div className="hero-actions"><a className="button primary" href="#project">Explore my work <Arrow /></a><a className="text-link" href="#contact">Get in touch <Arrow diagonal /></a></div>
          <div className="hero-socials"><a href={github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a></div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-frame"><Image src={assetPath('/images/john-orlie.jpg')} alt="John Orlie Mascardo smiling in a collared shirt" width={2730} height={4096} sizes="(max-width: 760px) 90vw, 42vw" preload className="portrait" /></div>
          <span className="portrait-index" aria-hidden="true">01 / THE PERSON BEHIND THE WORK</span>
          <div className="portrait-note"><span aria-hidden="true">✳</span><p>Build. Test.<br /><strong>Learn. Repeat.</strong></p></div>
        </div>
        <div className="hero-bottom"><span>Software × hardware × curiosity</span><a href="#about">Scroll to discover <span aria-hidden="true">↓</span></a></div>
      </section></div>

      <div className="discipline-strip" aria-hidden="true"><div className="shell"><span>MANUAL TESTING</span><b>✳</b><span>WEB DEVELOPMENT</span><b>✳</b><span>HARDWARE & IoT</span><b>✳</b><span>CONTINUOUS LEARNING</span></div></div>

      <section className="section shell about" id="about" aria-labelledby="about-title">
        <div><p className="eyebrow"><span>01</span> A little about me</p><h2 id="about-title">A curious mind.<br /><span>A testing mindset.</span></h2></div>
        <div className="about-copy"><p className="lead">I’m a fourth-year BSIT student at St. Dominic College of Asia, currently leaning toward a career in quality assurance.</p><p>In our capstone project, I try features, compare results with what we expect, find problems, share bugs with teammates, and retest their fixes. I’m learning how careful observation can improve a product.</p><p>I also build connected hardware and contribute to web development with AI assistance. My role includes prompting, reviewing results, testing behavior, and iterating with the team.</p><div className="about-footnote"><span className="small-label">MY APPROACH</span><span>Stay curious. Check the result. Keep improving.</span></div></div>
      </section>

      <section className="section project-section" id="project" aria-labelledby="project-title">
        <div className="shell">
          <SectionHeading number="02" eyebrow="Featured capstone">Real project.<br /><span>Hands-on learning.</span></SectionHeading>
          <div className="project-intro"><div><div className="project-tags"><span>IoT + Web application</span><span className="development-status">In development</span></div><h3 id="project-title">LitterSense<span>.</span></h3><p>A connected litter-box monitoring system that helps cat owners follow activity, odor, and behavior from a web dashboard.</p></div><div className="project-link-block"><a className="button outline" href="https://litter-sense-csp-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">Visit project <Arrow diagonal /></a><span>Opens the live app · Sign-in required</span></div></div>
          <div className="project-gallery">{gallery.map(item => <figure key={item.src} className={item.hardware ? 'gallery-item hardware-photo' : 'gallery-item'}>
            <MediaPreview src={assetPath(item.src)} title={item.label.slice(5)} alt={item.alt} width={item.width} height={item.height} className="gallery-image">
              <Image src={assetPath(item.src)} width={item.width} height={item.height} sizes="(max-width: 760px) 90vw, 45vw" alt={item.alt} />
            </MediaPreview>
            <figcaption><strong>{item.label}</strong><span>{item.caption}</span></figcaption>
          </figure>)}</div>
          <div className="project-details"><div><p className="eyebrow">What the system does</p><ul className="feature-list"><li>Records litter-box sessions and flags unusual activity.</li><li>Monitors odor to help identify when litter needs changing.</li><li>Offers live viewing and individual cat profiles.</li><li>Provides activity reports and AI-generated behavior insights.</li></ul></div><div><p className="eyebrow">My contribution</p><ul className="feature-list"><li>Manual feature checks, bug reporting, and retesting fixes.</li><li>Assembling the hardware prototype from components.</li><li>AI-assisted frontend, backend, and hardware-to-web integration.</li><li>Reviewing generated results and testing actual behavior.</li></ul></div></div>
          <div className="project-stage"><span className="status-dot" /><p><strong>Tested with cats. Still improving.</strong> Our team is preparing for IT expert evaluation and refining the system toward the final defense.</p><span className="small-label">TEAM CAPSTONE</span></div>
        </div>
      </section>

      <section className="section shell workflow" aria-labelledby="workflow-title"><div><p className="eyebrow">How I work</p><h2 id="workflow-title">Small checks.<br /><span>Better results.</span></h2><p className="workflow-note">I also shared Monday, Wednesday, and Friday team updates during our third-year second semester: completed work, next steps, and blockers.</p></div><ol className="process-list"><li><span>01</span><div><h3>Try & observe</h3><p>Use the feature and compare its behavior with the expected result.</p></div></li><li><span>02</span><div><h3>Report & communicate</h3><p>Share the problem with teammates and explain what happened.</p></div></li><li><span>03</span><div><h3>Retest & improve</h3><p>Check the fix, review the result, and keep iterating.</p></div></li></ol></section>

      <section className="section shell" id="skills" aria-labelledby="skills-title"><SectionHeading id="skills-title" number="03" eyebrow="Skills & tools">A growing<br /><span>toolkit.</span></SectionHeading><p className="section-description">Experience from coursework and hands-on projects, with a focus on learning through practice.</p><div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.title}><span className="small-label">{group.number} / EXPERIENCE</span><h3>{group.title}</h3><p>{group.description}</p><ul className="skill-chips">{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section className="section certificates-section" id="certificates" aria-labelledby="certificates-title"><div className="shell">
        <SectionHeading id="certificates-title" number="04" eyebrow="Learning milestones">Keeping the<br /><span>learning going.</span></SectionHeading>
        <p className="section-description">Certifications and completed courses across development, connected systems, and productivity. Select a preview to take a closer look.</p>
        <div className="certificate-list">{certificates.map(certificate => <article className="certificate-card" key={certificate.file}>
          <MediaPreview src={assetPath(certificate.preview)} title={certificate.title} alt={`${certificate.title} certificate awarded to John Orlie Mascardo`} width={1400} height={certificate.previewHeight} className="certificate-preview" downloadHref={assetPath(`/certificates/${certificate.file}`)}>
            <Image src={assetPath(certificate.preview)} width={1400} height={certificate.previewHeight} sizes="(max-width: 760px) 90vw, 45vw" alt={`${certificate.title} certificate awarded to John Orlie Mascardo`} />
          </MediaPreview>
          <div className="certificate-card-info"><span className="small-label">{certificate.issuer}</span><h3>{certificate.title}</h3><p>{certificate.note}</p><div className="certificate-card-meta"><span>{certificate.date}</span><span>{certificate.category}</span></div></div>
        </article>)}</div>
      </div></section>

      <section className="section shell contact" id="contact" aria-labelledby="contact-title"><p className="eyebrow"><span>05</span> Let’s connect</p><h2 id="contact-title">Good work starts<br />with a <span>conversation.</span></h2><p>I’m building my skills and exploring a future in QA.<br />Connect with me or take a closer look at my work.</p><div className="contact-links"><a className="button primary" href={linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <Arrow diagonal /></a><a className="button outline" href={github} target="_blank" rel="noopener noreferrer">Explore my GitHub <Arrow diagonal /></a></div></section>
    </main>
    <footer className="shell site-footer"><a className="wordmark" href="#home">JOM<span>.</span></a><span>© {new Date().getFullYear()} John Orlie Mascardo</span><a href="#home">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}
