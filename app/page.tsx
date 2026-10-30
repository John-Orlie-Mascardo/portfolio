import Image from "next/image";
import MediaPreview from "./MediaPreview";
import { assetPath } from "./asset-path";
import HaloBackground from "./HaloBackground";
import {
  achievements,
  certificates,
  gallery,
  seminars,
  skillGroups,
} from "./content";

const github = "https://github.com/John-Orlie-Mascardo";
const linkedin = "https://www.linkedin.com/in/john-orlie-mascardo";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SectionHeading({
  number,
  eyebrow,
  children,
  id,
}: {
  number: string;
  eyebrow: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> {eyebrow}
      </p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header flex items-center justify-between gap-6 [@media(max-width:760px)]:flex-wrap [@media(max-width:760px)]:gap-[18px]">
        <a
          className="wordmark"
          href="#home"
          aria-label="John Orlie Mascardo, home"
        >
          JOM<span>.</span>
        </a>
        <nav
          className="flex flex-wrap gap-8 [@media(max-width:1050px)]:gap-5 [@media(max-width:760px)]:order-3 [@media(max-width:760px)]:w-full [@media(max-width:760px)]:justify-start [@media(max-width:760px)]:gap-x-[18px] [@media(max-width:760px)]:gap-y-3"
          aria-label="Main navigation"
        >
          <a href="#about">About</a>
          <a href="#project">Capstone</a>
          <a href="#course-projects">Course projects</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#achievements">Achievements</a>
          <a href="#seminars">Seminars</a>
        </nav>
        <a className="header-contact" href="#contact">
          Let’s connect <Arrow diagonal />
        </a>
      </header>

      <main id="main">
        <div className="hero-stage">
          <HaloBackground />
          <section
            className="hero relative grid grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center gap-9 [@media(max-width:1050px)]:gap-6 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-[30px] shell"
            id="home"
            aria-labelledby="hero-title"
          >
            <div className="hero-copy min-w-0">
              <p className="eyebrow">
                <span className="status-dot" /> Fourth-year IT student
              </p>
              <p className="intro-name">Hi, I’m John Orlie Mascardo.</p>
              <h1 id="hero-title">
                Aspiring QA
                <br />
                <span>Professional.</span>
              </h1>
              <p className="hero-description">
                Curious about how things work.
                <br />
                Careful about how they <em>should</em> work.
              </p>
              <p className="hero-detail">
                Exploring quality assurance through hands-on testing, web
                development, and connected hardware.
              </p>
              <div className="hero-actions flex items-center gap-7 mt-[30px] [@media(max-width:1050px)]:gap-4 [@media(max-width:760px)]:gap-5 [@media(max-width:760px)]:flex-wrap">
                <a className="button primary" href="#project">
                  Explore my work <Arrow />
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <Arrow diagonal />
                </a>
              </div>
              <div className="hero-socials flex gap-6 mt-9 [@media(max-width:760px)]:gap-5 [@media(max-width:760px)]:mt-[25px]">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub <Arrow diagonal />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="portrait-composition">
              <div className="portrait-frame">
                <Image
                  src={assetPath("/images/john-orlie.jpg")}
                  alt="John Orlie Mascardo smiling in a collared shirt"
                  width={2730}
                  height={4096}
                  sizes="(max-width: 760px) 90vw, 42vw"
                  preload
                  className="portrait"
                />
              </div>
              <span className="portrait-index" aria-hidden="true">
                01 / THE PERSON BEHIND THE WORK
              </span>
              <div className="portrait-note">
                <span aria-hidden="true">✳</span>
                <p>
                  Build. Test.
                  <br />
                  <strong>Learn. Repeat.</strong>
                </p>
              </div>
            </div>
            <div className="hero-bottom col-span-full flex justify-between">
              <span>Software × hardware × curiosity</span>
              <a href="#about">
                Scroll to discover <span aria-hidden="true">↓</span>
              </a>
            </div>
          </section>
        </div>

        <div className="discipline-strip" aria-hidden="true">
          <div className="shell discipline-row flex items-center justify-between gap-4 [@media(max-width:760px)]:grid [@media(max-width:760px)]:grid-cols-2 [@media(max-width:760px)]:gap-[10px]">
            <span>MANUAL TESTING</span>
            <b>✳</b>
            <span>WEB DEVELOPMENT</span>
            <b>✳</b>
            <span>HARDWARE & IoT</span>
            <b>✳</b>
            <span>CONTINUOUS LEARNING</span>
          </div>
        </div>

        <section
          className="section shell about grid grid-cols-2 gap-[100px] [@media(max-width:1050px)]:gap-[45px] [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-8"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">
              <span>01</span> A little about me
            </p>
            <h2 id="about-title">
              A curious mind.
              <br />
              <span>A testing mindset.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I’m a fourth-year BSIT student at St. Dominic College of Asia,
              currently leaning toward a career in quality assurance.
            </p>
            <p>
              In our capstone project, I try features, compare results with what
              we expect, find problems, share bugs with teammates, and retest
              their fixes. I’m learning how careful observation can improve a
              product.
            </p>
            <p>
              I also build connected hardware and contribute to web development
              with AI assistance. My role includes prompting, reviewing results,
              testing behavior, and iterating with the team.
            </p>
            <div className="about-footnote">
              <span className="small-label">MY APPROACH</span>
              <span>Stay curious. Check the result. Keep improving.</span>
            </div>
          </div>
        </section>

        <section
          className="section project-section"
          id="project"
          aria-labelledby="project-title"
        >
          <div className="shell">
            <SectionHeading number="02" eyebrow="Featured capstone">
              Real project.
              <br />
              <span>Hands-on learning.</span>
            </SectionHeading>
            <div className="project-intro">
              <div>
                <div className="project-tags flex gap-[10px] flex-wrap">
                  <span>IoT + Web application</span>
                  <span className="development-status">
                    In progress · IT expert evaluation
                  </span>
                </div>
                <h3 id="project-title">
                  LitterSense<span>.</span>
                </h3>
                <p>
                  A connected litter-box monitoring system that helps cat owners
                  follow activity, odor, and behavior from a web dashboard.
                </p>
              </div>
              <div className="project-link-block">
                <a
                  className="button button-outline"
                  href="https://litter-sense-csp-web-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit project <Arrow diagonal />
                </a>
                <span>Opens the live app · Sign-in required</span>
              </div>
            </div>
            <div className="project-gallery grid grid-cols-2 gap-x-6 gap-y-[30px] [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-[26px]">
              {gallery.map((item) => (
                <figure
                  key={item.src}
                  className={
                    item.hardware
                      ? "gallery-item hardware-photo"
                      : "gallery-item"
                  }
                >
                  <MediaPreview
                    src={assetPath(item.src)}
                    title={item.label.slice(5)}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="gallery-image"
                  >
                    <Image
                      src={assetPath(item.src)}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 760px) 90vw, 45vw"
                      alt={item.alt}
                    />
                  </MediaPreview>
                  <figcaption>
                    <strong>{item.label}</strong>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="project-details grid grid-cols-2 gap-[70px] [@media(max-width:1050px)]:gap-[30px] [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-7">
              <div>
                <p className="eyebrow">What the system does</p>
                <ul className="feature-list">
                  <li>
                    Records litter-box sessions and flags unusual activity.
                  </li>
                  <li>
                    Monitors odor to help identify when litter needs changing.
                  </li>
                  <li>Offers live viewing and individual cat profiles.</li>
                  <li>
                    Provides activity reports and AI-generated behavior
                    insights.
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow">My contribution</p>
                <ul className="feature-list">
                  <li>
                    Manual feature checks, bug reporting, and retesting fixes.
                  </li>
                  <li>
                    Completed the hardware prototype, assembled from components.
                  </li>
                  <li>
                    AI-assisted frontend, backend, and hardware-to-web
                    integration.
                  </li>
                  <li>
                    Reviewing generated results and testing actual behavior.
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-details grid grid-cols-2 gap-[70px] [@media(max-width:1050px)]:gap-[30px] [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-7">
              <div>
                <h3 className="eyebrow">Project objectives</h3>
                <p>
                  Design, develop, and evaluate an IoT-enabled feline health
                  monitoring system for Filipino cat owners, combining
                  camera-equipped ESP32 hardware, multiple sensors, and a
                  React-based Progressive Web Application (PWA).
                </p>
                <ol className="feature-list">
                  <li>
                    Analyze household monitoring practices and the clinical,
                    infrastructure, and technology limitations of manual
                    observation and global commercial platforms.
                  </li>
                  <li>
                    Integrate a modified litter box, RFID identification,
                    ultrasonic and gas sensors, camera modules, Firebase cloud
                    services, and a React PWA with real-time anomaly alerts and
                    PDF/CSV reports.
                  </li>
                  <li>
                    Evaluate sensor accuracy and reliability, RFID
                    identification, anomaly thresholds, and PWA functionality
                    under simulated Philippine network conditions.
                  </li>
                  <li>
                    Deploy the prototype in a real household and evaluate
                    individual cats’ elimination patterns, report usability, and
                    reliability under Philippine infrastructure constraints.
                  </li>
                </ol>
                <p>
                  These are the study’s objectives; formal evaluation is
                  ongoing.
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Technologies & components</h3>
                <ul className="skill-chips">
                  <li>React PWA</li>
                  <li>Firebase</li>
                  <li>ESP32-S3 Camera</li>
                  <li>ESP32-CAM Wi-Fi/Bluetooth module</li>
                  <li>YRM100 RFID reader</li>
                  <li>UHF RFID tags</li>
                  <li>HC-SR04 ultrasonic sensor</li>
                  <li>MQ-135 gas sensor</li>
                  <li>MQ-136 gas sensor</li>
                  <li>Arduino IDE</li>
                  <li>PlatformIO</li>
                </ul>
                <h3 className="eyebrow project-team-heading">Project team</h3>
                <ul className="feature-list">
                  <li>
                    <strong>Ashton James Caspe</strong>
                    <br />
                    Frontend Development · Documentation
                  </li>
                  <li>
                    <strong>Joshua Austria</strong>
                    <br />
                    Documentation · Frontend Development
                  </li>
                  <li>
                    <strong>Mac Laurenz Cultura</strong>
                    <br />
                    Backend Development
                  </li>
                  <li>
                    <strong>John Orlie Mascardo</strong>
                    <br />
                    Hardware Development & IoT Integration · Manual QA
                  </li>
                </ul>
                <p>
                  Each member’s main role is listed first, followed by their
                  supporting role where applicable.
                </p>
              </div>
            </div>
            <div className="project-stage">
              <span className="status-dot" />
              <p>
                <strong>Currently undergoing IT expert evaluation.</strong> The
                hardware prototype is complete and has been tested with cats.
                Formal evaluation results are still pending.
              </p>
              <span className="small-label">TEAM CAPSTONE</span>
            </div>
          </div>
        </section>

        <section
          className="section shell"
          id="course-projects"
          aria-labelledby="course-projects-title"
        >
          <SectionHeading
            id="course-projects-title"
            number="03"
            eyebrow="Course projects"
          >
            Building skills.
            <br />
            <span>One project at a time.</span>
          </SectionHeading>
          <p className="section-description">
            Team projects from my third- and second-year coursework, with my
            individual contributions identified below.
          </p>
          <div className="skills-grid grid grid-cols-2 gap-5 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-4">
            <article className="skill-card">
              <span className="small-label">Third year · Team project</span>
              <h3>CCONNECT</h3>
              <p>
                Application Development / System Integration and Application
                (SIA1)
              </p>
              <p>
                A shopping application with product browsing, cart and checkout
                screens, order management, and chat.
              </p>
              <h4 className="eyebrow project-team-heading">My contribution</h4>
              <p>
                Contributed to frontend development and project documentation.
              </p>
              <ul className="skill-chips">
                <li>Flutter</li>
                <li>Dart</li>
                <li>Firebase</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Socket.IO</li>
              </ul>
              <div className="course-project-links">
                <a
                  className="text-link"
                  href="https://github.com/John-Orlie-Mascardo/cconnect-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend repository · Private <Arrow diagonal />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/John-Orlie-Mascardo/cconnect-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend repository · Private <Arrow diagonal />
                </a>
              </div>
            </article>
            <article className="skill-card">
              <span className="small-label">
                Second year · Team midterm project
              </span>
              <h3>BYTES</h3>
              <p>Mobile Development</p>
              <p>
                An Android cookbook application for exploring recipes,
                categories, and ingredients.
              </p>
              <h4 className="eyebrow project-team-heading">My contribution</h4>
              <p>
                Contributed to the Android user interface and project
                documentation.
              </p>
              <ul className="skill-chips">
                <li>Java</li>
                <li>Android</li>
                <li>XML layouts</li>
                <li>Android Studio</li>
                <li>Gradle</li>
              </ul>
              <div className="course-project-links">
                <a
                  className="text-link"
                  href="https://github.com/Kscopee/Bytes-Cookbook-Midterm-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project repository · Private <Arrow diagonal />
                </a>
              </div>
            </article>
          </div>
          <p className="section-description course-project-access">
            Source repositories are private and require authorized GitHub
            access.
          </p>
        </section>

        <section
          className="section shell workflow grid grid-cols-2 gap-[100px] [@media(max-width:1050px)]:gap-[45px] [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-8"
          aria-labelledby="workflow-title"
        >
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="workflow-title">
              Small checks.
              <br />
              <span>Better results.</span>
            </h2>
            <p className="workflow-note">
              I also shared Monday, Wednesday, and Friday team updates during
              our third-year second semester: completed work, next steps, and
              blockers.
            </p>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Try & observe</h3>
                <p>
                  Use the feature and compare its behavior with the expected
                  result.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Report & communicate</h3>
                <p>
                  Share the problem with teammates and explain what happened.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Retest & improve</h3>
                <p>Check the fix, review the result, and keep iterating.</p>
              </div>
            </li>
          </ol>
        </section>

        <section
          className="section shell"
          id="skills"
          aria-labelledby="skills-title"
        >
          <SectionHeading
            id="skills-title"
            number="04"
            eyebrow="Skills & tools"
          >
            A growing
            <br />
            <span>toolkit.</span>
          </SectionHeading>
          <p className="section-description">
            Experience from coursework and hands-on projects, with a focus on
            learning through practice.
          </p>
          <div className="skills-grid grid grid-cols-2 gap-5 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-4">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <span className="small-label">{group.number} / EXPERIENCE</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="skill-chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section certificates-section"
          id="certificates"
          aria-labelledby="certificates-title"
        >
          <div className="shell">
            <SectionHeading
              id="certificates-title"
              number="05"
              eyebrow="Learning milestones"
            >
              Keeping the
              <br />
              <span>learning going.</span>
            </SectionHeading>
            <p className="section-description">
              Certifications and completed courses across development, connected
              systems, and productivity. Select a preview to take a closer look.
            </p>
            <div className="certificate-list grid grid-cols-2 gap-7 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-6">
              {certificates.map((certificate) => (
                <article className="certificate-card" key={certificate.file}>
                  <MediaPreview
                    src={assetPath(certificate.preview)}
                    title={certificate.title}
                    alt={`${certificate.title} certificate awarded to John Orlie Mascardo`}
                    width={1400}
                    height={certificate.previewHeight}
                    className="certificate-preview"
                    downloadHref={assetPath(
                      `/certificates/${certificate.file}`,
                    )}
                  >
                    <Image
                      src={assetPath(certificate.preview)}
                      width={1400}
                      height={certificate.previewHeight}
                      sizes="(max-width: 760px) 90vw, 45vw"
                      alt={`${certificate.title} certificate awarded to John Orlie Mascardo`}
                    />
                  </MediaPreview>
                  <div className="certificate-card-info">
                    <span className="small-label">{certificate.issuer}</span>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.note}</p>
                    <div className="certificate-card-meta">
                      <span>{certificate.date}</span>
                      <span>{certificate.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section shell"
          id="achievements"
          aria-labelledby="achievements-title"
        >
          <SectionHeading
            id="achievements-title"
            number="06"
            eyebrow="Achievements & recognition"
          >
            Progress beyond
            <br />
            <span>the classroom.</span>
          </SectionHeading>
          <p className="section-description">
            Academic recognition, scholarship support, language learning, and a
            team competition milestone.
          </p>
          <div className="certificate-list grid grid-cols-2 gap-7 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-6">
            {achievements.map((achievement) => (
              <article className="certificate-card" key={achievement.title}>
                {achievement.image && (
                  <MediaPreview
                    src={assetPath(achievement.image.src)}
                    title={achievement.title}
                    alt={achievement.image.alt}
                    width={achievement.image.width}
                    height={achievement.image.height}
                    className="certificate-preview"
                  >
                    <Image
                      src={assetPath(achievement.image.src)}
                      alt={achievement.image.alt}
                      width={achievement.image.width}
                      height={achievement.image.height}
                      sizes="(max-width: 760px) 90vw, 45vw"
                    />
                  </MediaPreview>
                )}
                <div className="certificate-card-info">
                  <span className="small-label">{achievement.category}</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.issuer}</p>
                  <p>{achievement.description}</p>
                  {achievement.note && <p>{achievement.note}</p>}
                  <div className="certificate-card-meta">
                    <span>{achievement.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section shell"
          id="seminars"
          aria-labelledby="seminars-title"
        >
          <SectionHeading
            id="seminars-title"
            number="07"
            eyebrow="Seminars & conferences"
          >
            Learning from
            <br />
            <span>new perspectives.</span>
          </SectionHeading>
          <p className="section-description">
            Webinars, conferences, and classroom sessions I attended as part of
            my academic and personal development.
          </p>
          <div className="certificate-list grid grid-cols-2 gap-7 [@media(max-width:760px)]:grid-cols-1 [@media(max-width:760px)]:gap-6">
            {seminars.map((seminar) => (
              <article className="certificate-card" key={seminar.file}>
                <MediaPreview
                  src={assetPath(seminar.preview)}
                  title={seminar.title}
                  alt={`Attendance certificate for John Orlie Mascardo: ${seminar.title}`}
                  width={1400}
                  height={seminar.previewHeight}
                  className="certificate-preview"
                  downloadHref={assetPath(`/certificates/${seminar.file}`)}
                >
                  <Image
                    src={assetPath(seminar.preview)}
                    width={1400}
                    height={seminar.previewHeight}
                    sizes="(max-width: 760px) 90vw, 45vw"
                    alt={`Attendance certificate for John Orlie Mascardo: ${seminar.title}`}
                  />
                </MediaPreview>
                <div className="certificate-card-info">
                  <span className="small-label">{seminar.category}</span>
                  <h3>{seminar.title}</h3>
                  <p>{seminar.issuer}</p>
                  <div className="certificate-card-meta">
                    <span>{seminar.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section shell contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">
            <span>08</span> Let’s connect
          </p>
          <h2 id="contact-title">
            Good work starts
            <br />
            with a <span>conversation.</span>
          </h2>
          <p>
            I’m building my skills and exploring a future in QA.
            <br />
            Connect with me or take a closer look at my work.
          </p>
          <div className="contact-links flex justify-center gap-4 mt-[34px] [@media(max-width:760px)]:flex-col [@media(max-width:760px)]:items-stretch">
            <a
              className="button primary"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Arrow diagonal />
            </a>
            <a
              className="button button-outline"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <footer className="shell site-footer flex justify-between items-center gap-6 [@media(max-width:760px)]:flex-wrap [@media(max-width:760px)]:gap-[18px]">
        <a className="wordmark" href="#home">
          JOM<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} John Orlie Mascardo</span>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
