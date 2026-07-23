import { ProjectVisual } from "../components/ProjectVisual";
import { portfolio } from "../content/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Arrow() {
  return <span aria-hidden="true">{"\u2197"}</span>;
}

export default function Home() {
  const resumeHref = `${basePath}/${portfolio.resume.fileName}`;

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Deep Patel, home">DP<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={resumeHref} target="_blank">{portfolio.resume.label} <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Senior software engineer · Toronto</p>
          <h1>I build software that holds up in the <em>real world.</em></h1>
          <p className="hero-intro">
            From distributed systems and cloud infrastructure to polished products,
            I turn complex constraints into software people can trust.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore experience <span>&darr;</span></a>
            <a className="text-link" href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email} <Arrow /></a>
          </div>
        </div>
        <aside className="signal-card" aria-label="Engineering profile">
          <div className="signal-header"><span>ENGINEERING_PROFILE</span><i /></div>
          <p className="code-line"><b>01</b> product-minded full stack engineer</p>
          <p className="code-line"><b>02</b> distributed systems + APIs</p>
          <p className="code-line"><b>03</b> cloud delivery + reliability</p>
          <div className="signal-grid">
            <span><small>PRIMARY</small>Java · TypeScript</span>
            <span><small>CLOUD</small>AWS · Azure</span>
            <span><small>SYSTEMS</small>Microservices</span>
            <span><small>STATUS</small><i /> Open to roles</span>
          </div>
        </aside>
        <div className="metrics" aria-label="Career highlights">
          <div><strong>5+</strong><span>years building<br />production systems</span></div>
          <div><strong>20-30%</strong><span>fewer incidents<br />through stabilization</span></div>
          <div><strong>300+</strong><span>hours saved yearly<br />through automation</span></div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Experience</p>
          <h2>Engineering with<br /><em>measurable impact.</em></h2>
        </div>
        <div className="timeline">
          {portfolio.experience.map((experience) => (
            <article key={`${experience.company}-${experience.role}`}>
              <div className="timeline-meta"><span>{experience.period}</span><b>{experience.company}</b></div>
              <div className="timeline-detail">
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                <h4>Selected impact</h4>
                <ul>
                  {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Selected work</p>
          <h2>Products with<br /><em>something at stake.</em></h2>
          <p>{portfolio.projectsIntro}</p>
        </div>
        <div className="projects">
          {portfolio.projects.map((project, index) => (
            <article className={`project project-${project.slug}`} key={project.name}>
              <div className="project-copy">
                <div className="project-kicker"><span>{String(index + 1).padStart(2, "0")}</span>{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.proof.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-stack">{project.stack}</div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow /></a>
                  ))}
                </div>
              </div>
              <ProjectVisual project={project} />
            </article>
          ))}
        </div>
      </section>

      <section className="practice-section">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> How I work</p>
          <h2>Built beyond<br /><em>the happy path.</em></h2>
        </div>
        <div className="practice-grid">
          <article><span>01</span><h3>Own the outcome</h3><p>I take features from design and architecture through production, observation, and iteration.</p></article>
          <article><span>02</span><h3>Design for failure</h3><p>Validation, graceful degradation, safe data boundaries, and operational clarity are part of the product.</p></article>
          <article><span>03</span><h3>Make complexity legible</h3><p>I turn domain constraints into focused interfaces and maintainable systems teams can extend.</p></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow"><span /> Next chapter</p>
        <h2>Have a hard problem<br />worth <em>solving?</em></h2>
        <p>I&apos;m exploring senior software engineering opportunities where product judgment, backend depth, and dependable delivery matter.</p>
        <div className="contact-links">
          <a className="button button-light" href={`mailto:${portfolio.contact.email}`}>Start a conversation <Arrow /></a>
          <a href={portfolio.contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
        <footer><span>Deep Patel · Toronto, Canada</span><span>Software should earn trust.</span></footer>
      </section>
    </main>
  );
}
