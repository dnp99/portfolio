import { ProjectVisual } from "../components/ProjectVisual";
import { portfolio } from "../content/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Arrow() {
  return <span aria-hidden="true">{"\u2197"}</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  const resumeHref = `${basePath}/${portfolio.resume.fileName}`;

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="ambient-glow" aria-hidden="true" />

      <main className="portfolio-shell">
        <header className="intro-panel" id="top">
          <div className="intro-main">
            <a className="wordmark" href="#top" aria-label="Deep Patel, home">
              DP<span>.</span>
            </a>

            <p className="intro-location">{portfolio.profile.location}</p>
            <h1>{portfolio.profile.name}</h1>
            <h2>{portfolio.profile.role}</h2>
            <p className="intro-headline">{portfolio.profile.headline}</p>

            <nav className="section-nav" aria-label="Portfolio sections">
              <a href="#about"><span />About</a>
              <a href="#experience"><span />Experience</a>
              <a href="#projects"><span />Projects</a>
              <a href="#contact"><span />Contact</a>
            </nav>
          </div>

          <div className="intro-footer">
            <p className="availability"><i />{portfolio.profile.availability}</p>
            <div className="profile-links">
              <a href={portfolio.contact.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href={portfolio.contact.linkedIn} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href={resumeHref} target="_blank" rel="noreferrer">
                {portfolio.resume.label} <Arrow />
              </a>
            </div>
          </div>
        </header>

        <div className="content-panel">
          <section className="content-section about-section" id="about">
            <SectionLabel>About</SectionLabel>
            <div className="about-copy">
              {portfolio.profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="impact-grid" aria-label="Career highlights">
              <div><strong>5+</strong><span>years shipping production systems</span></div>
              <div><strong>20-30%</strong><span>fewer incidents through stabilization</span></div>
              <div><strong>300+</strong><span>hours saved yearly through automation</span></div>
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionLabel>Experience</SectionLabel>
            <div className="experience-list">
              {portfolio.experience.map((experience) => (
                <article className="experience-card" key={`${experience.company}-${experience.role}`}>
                  <p className="experience-period">{experience.period}</p>
                  <div className="experience-detail">
                    <h3>{experience.role} <span>· {experience.company}</span></h3>
                    <p className="experience-summary">{experience.summary}</p>
                    <ul className="achievement-list">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="tag-list" aria-label={`${experience.company} technologies`}>
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a className="inline-link" href={resumeHref} target="_blank" rel="noreferrer">
              View full resume <Arrow />
            </a>
          </section>

          <section className="content-section projects-section" id="projects">
            <SectionLabel>Selected projects</SectionLabel>
            <p className="section-intro">{portfolio.projectsIntro}</p>
            <div className="project-list">
              {portfolio.projects.map((project, index) => (
                <article className="project-card" key={project.name}>
                  <ProjectVisual project={project} />
                  <div className="project-content">
                    <p className="project-number">{String(index + 1).padStart(2, "0")} / {project.type}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="project-proof">
                      {project.proof.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="tag-list">
                      {project.stack.split(" / ").map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                          {link.label} <Arrow />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section contact-section" id="contact">
            <SectionLabel>What’s next</SectionLabel>
            <h2>Let’s build something that has to work.</h2>
            <p>
              I’m exploring senior engineering roles where product judgment,
              backend depth, and dependable delivery matter.
            </p>
            <a className="email-link" href={`mailto:${portfolio.contact.email}`}>
              {portfolio.contact.email} <Arrow />
            </a>
          </section>

          <footer className="site-footer">
            <span>Designed and built by Deep Patel.</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
      </main>
    </>
  );
}
