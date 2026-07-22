const projects = [
  {
    index: "01",
    slug: "routefy",
    name: "Routefy",
    type: "Healthcare route intelligence",
    description:
      "A planning workspace for care workers that turns recurring visits, time windows, and travel constraints into a practical day plan.",
    proof: [
      "Time-window route optimization",
      "PHI-safe client architecture",
      "Postgres + Drizzle data model",
    ],
    stack: "React / TypeScript / Next.js / Postgres",
    code: "https://github.com/dnp99/smart-route-planning",
  },
  {
    index: "02",
    slug: "sprout",
    name: "Sprout",
    type: "Personal finance, without the friction",
    description:
      "A mobile-first budgeting product with safe-to-spend guidance, duplicate-safe CSV imports, and expense capture from Siri or WhatsApp.",
    proof: [
      "Natural-language expense capture",
      "Integer-cents money model",
      "AI-assisted CSV categorization",
    ],
    stack: "Next.js / React / Neon / Vitest",
    code: "https://github.com/dnp99/sprout",
    live: "https://www.sprout-money.ca",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Arrow() {
  return <span aria-hidden="true">{"\u2197"}</span>;
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "routefy") {
    return (
      <div className="route-visual" aria-hidden="true">
        <div className="visual-topline"><span>Tomorrow</span><b>6 visits</b></div>
        <div className="route-map">
          <span className="route-line" />
          <span className="map-dot dot-a">A</span>
          <span className="map-dot dot-b">B</span>
          <span className="map-dot dot-c">C</span>
          <span className="map-dot dot-d">D</span>
        </div>
        <div className="route-status"><i /> Schedule looks good <b>4:20 PM</b></div>
      </div>
    );
  }

  return (
    <div className="sprout-visual" aria-hidden="true">
      <div className="visual-topline"><span>July budget</span><b>On track</b></div>
      <div className="money-layout">
        <div className="money-ring"><strong>$842</strong><span>safe to spend</span></div>
        <div className="money-bars">
          <span><i style={{ width: "72%" }} /></span>
          <span><i style={{ width: "46%" }} /></span>
          <span><i style={{ width: "61%" }} /></span>
        </div>
      </div>
      <div className="capture-pill">{' + "coffee five dollars"'}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Deep Patel, home">DP<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={`${basePath}/Deep-Patel-Resume.pdf`} target="_blank">Resume <Arrow /></a>
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
            <a className="button button-primary" href="#work">Explore selected work <span>&darr;</span></a>
            <a className="text-link" href="mailto:pateldeep1001@gmail.com">pateldeep1001@gmail.com <Arrow /></a>
          </div>
        </div>
        <aside className="signal-card" aria-label="Engineering profile">
          <div className="signal-header"><span>ENGINEERING_PROFILE</span><i /></div>
          <p className="code-line"><b>01</b> product-minded backend engineer</p>
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

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Selected work</p>
          <h2>Products with<br /><em>something at stake.</em></h2>
          <p>Personal projects that explore scheduling and money through the lens of reliable engineering.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className={`project project-${project.slug}`} key={project.name}>
              <div className="project-copy">
                <div className="project-kicker"><span>{project.index}</span>{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.proof.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-stack">{project.stack}</div>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <Arrow /></a>}
                  <a href={project.code} target="_blank" rel="noreferrer">View source <Arrow /></a>
                </div>
              </div>
              <ProjectVisual slug={project.slug} />
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

      <section className="experience-section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Experience</p>
          <h2>Production is<br /><em>the real test.</em></h2>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-meta"><span>2021 - Present</span><b>Openlane Inc.</b></div>
            <div><h3>Senior Software Engineer</h3><p>Building high-scale automotive marketplace systems across Java, Spring Boot, React, .NET, and cloud infrastructure.</p><ul><li>Designed and deployed 5+ microservices</li><li>Cut deployments from hours to minutes</li><li>Built APIs serving datasets of 10K-100K+ records</li></ul></div>
          </article>
          <article>
            <div className="timeline-meta"><span>2019 - 2021</span><b>Performance Auto Group</b></div>
            <div><h3>Software Developer</h3><p>Replaced manual operational workflows with web products, Spring Boot services, relational data models, and real-time React dashboards.</p><ul><li>Saved 300+ hours of manual work annually</li><li>Delivered scalable internal tools end to end</li></ul></div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow"><span /> Next chapter</p>
        <h2>Have a hard problem<br />worth <em>solving?</em></h2>
        <p>I&apos;m exploring senior software engineering opportunities where product judgment, backend depth, and dependable delivery matter.</p>
        <div className="contact-links">
          <a className="button button-light" href="mailto:pateldeep1001@gmail.com">Start a conversation <Arrow /></a>
          <a href="https://www.linkedin.com/in/deep-patel4283/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/dnp99" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
        <footer><span>Deep Patel · Toronto, Canada</span><span>Software should earn trust.</span></footer>
      </section>
    </main>
  );
}
