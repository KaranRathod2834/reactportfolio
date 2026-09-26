import React, { useEffect, useState } from "react";
import "./app.scss";

const projects = [
  {
    number: "01",
    title: "EEG Digit Detection System",
    type: "Machine Learning · Brain-Computer Interface",
    description:
      "An end-to-end EEG classification pipeline that processes brain-signal data and predicts digits using classical and ensemble ML models.",
    result: "89.83% accuracy",
    stack: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "PCA", "SMOTE"],
    accent: "violet",
  },
  {
    number: "02",
    title: "Real Estate Price Prediction",
    type: "Full-Stack ML Application",
    description:
      "A full-stack prediction application with a preprocessing pipeline, Linear Regression model, Flask API, and interactive web frontend.",
    result: "84% prediction accuracy",
    stack: ["Python", "Flask", "Scikit-learn", "JavaScript", "HTML", "CSS"],
    accent: "cyan",
  },
  {
    number: "03",
    title: "Portfolio Website",
    type: "Frontend Engineering",
    description:
      "A responsive React single-page application focused on modern UI, reusable components, responsive styling, and automated deployment.",
    result: "Live on Netlify",
    stack: ["React.js", "JavaScript", "SCSS", "Git", "GitHub", "Netlify"],
    accent: "green",
  },
];

const skillGroups = [
  ["DevOps & Operations", ["CI/CD Pipelines", "Incident Management", "RCA", "Build & Release", "Change Management", "SLA Operations"]],
  ["Programming", ["Python", "Java", "C", "C++", "SQL", "JavaScript", "HTML", "CSS"]],
  ["Frameworks & Data", ["Flask", "React.js", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM"]],
  ["Engineering", ["Git", "GitHub", "Jupyter", "OOP", "DSA", "Agile Methodology"]],
  ["Machine Learning", ["Regression", "Classification", "Feature Engineering", "PCA", "SMOTE", "GridSearchCV", "K-Fold CV", "Signal Processing"]],
];

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean);
      const current = sections.reduce((best, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - 130);
        return distance < best.distance ? { id: section.id, distance } : best;
      }, { id: "about", distance: Infinity });
      const label = navItems.find(([, id]) => id === current.id)?.[0];
      if (label) setActive(label);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollTo("about")} aria-label="Go to top">
          <span className="brand-mark">KR</span>
          <span>Karan Rathod</span>
        </button>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className={active === label ? "active" : ""}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
          <a
            className="nav-cta"
            href="mailto:karanrathod2834@gmail.com?subject=Portfolio%20Contact"
          >
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for meaningful engineering conversations</div>
            <p className="hero-kicker">SOFTWARE ENGINEER · DEVOPS · PYTHON / ML</p>
            <h1>
              Building reliable
              <span className="gradient-text"> systems</span>
              <br />
              and intelligent products.
            </h1>
            <p className="hero-description">
              I’m Karan Rathod, a Software Engineer at Tata Consultancy Services
              working in enterprise BFSI operations, with a parallel foundation in
              full-stack development and applied machine learning.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                Explore my work <span>↓</span>
              </button>
              <a className="ghost-btn" href="https://github.com/KaranRathod2834" target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
            </div>

            <div className="hero-meta">
              <span>Based in Mumbai, India</span>
              <span className="meta-line" />
              <a href="mailto:karanrathod2834@gmail.com">karanrathod2834@gmail.com</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Engineering profile">
            <div className="visual-grid" />
            <div className="terminal-card">
              <div className="terminal-top">
                <span className="terminal-dots"><i /><i /><i /></span>
                <span>karan@engineering ~</span>
              </div>
              <div className="terminal-body">
                <p><span className="prompt">$</span> whoami</p>
                <h2>Karan Rathod</h2>
                <p><span className="prompt">$</span> focus</p>
                <div className="terminal-tags">
                  <span>CI/CD</span><span>Python</span><span>React</span><span>ML</span>
                </div>
                <p><span className="prompt">$</span> status</p>
                <p className="success">● production-minded engineer</p>
              </div>
            </div>
            <div className="floating-card card-top">
              <span>01</span>
              <strong>DevOps</strong>
              <small>Release · RCA · SLA</small>
            </div>
            <div className="floating-card card-bottom">
              <span>02</span>
              <strong>Machine Learning</strong>
              <small>89.83% EEG classification</small>
            </div>
          </div>
        </section>

        <section className="metrics">
          <div><strong>2025</strong><span>B.Tech Graduate</span></div>
          <div><strong>84%</strong><span>Real Estate Model</span></div>
          <div><strong>89.83%</strong><span>EEG Model</span></div>
          <div><strong>BFSI</strong><span>Enterprise Domain</span></div>
        </section>

        <section id="experience" className="section content-section">
          <div className="section-heading">
            <div><span className="section-number">01 /</span><span className="section-label">Experience</span></div>
            <h2>Where I’m <span className="gradient-text">building.</span></h2>
          </div>

          <div className="experience-card">
            <div className="experience-main">
              <div className="company-row">
                <div className="company-icon">TCS</div>
                <div>
                  <h3>Assistant System Engineer <span>(DevOps)</span></h3>
                  <p>Tata Consultancy Services · BFSI Domain</p>
                </div>
              </div>
              <p className="experience-copy">
                Working on enterprise banking applications in a production,
                SLA-bound environment, combining incident analysis, release
                coordination, root cause analysis, and operational discipline.
              </p>
              <div className="experience-points">
                <div><span>01</span><p>Analyze production incidents and drive resolutions within committed SLAs.</p></div>
                <div><span>02</span><p>Coordinate end-to-end build and release activities across cross-functional teams.</p></div>
                <div><span>03</span><p>Apply CI/CD and incident-management practices to support mission-critical banking systems.</p></div>
                <div><span>04</span><p>Build hands-on expertise in enterprise operations, change management, and real-time application support.</p></div>
              </div>
            </div>
            <div className="experience-side">
              <span className="date-pill">DEC 2025 — PRESENT</span>
              <div className="side-line" />
              <p>Enterprise Banking<br />Mumbai, India</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section content-section projects-section">
          <div className="section-heading">
            <div><span className="section-number">02 /</span><span className="section-label">Selected Work</span></div>
            <h2>Projects with a <span className="gradient-text">purpose.</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-result">{project.result}</span>
                </div>
                <div className="project-icon">
                  {project.number === "01" ? "⌁" : project.number === "02" ? "⌂" : "◈"}
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section content-section">
          <div className="section-heading">
            <div><span className="section-number">03 /</span><span className="section-label">Toolkit</span></div>
            <h2>Tools I use to <span className="gradient-text">solve.</span></h2>
          </div>

          <div className="skills-layout">
            <div className="skills-intro">
              <p>
                My toolkit spans production operations, software development,
                data workflows, and machine learning. I care about understanding
                the system end-to-end—not just writing the code.
              </p>
              <div className="skill-highlight"><span>Core mindset</span><strong>Reliable → Analytical → Adaptable</strong></div>
            </div>
            <div className="skill-groups">
              {skillGroups.map(([title, skills]) => (
                <div className="skill-group" key={title}>
                  <h3>{title}</h3>
                  <div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section content-section education-section">
          <div className="section-heading compact">
            <div><span className="section-number">04 /</span><span className="section-label">Background</span></div>
            <h2>Education & <span className="gradient-text">beyond.</span></h2>
          </div>

          <div className="background-grid">
            <div className="background-card">
              <span className="card-label">EDUCATION</span>
              <h3>B.Tech — Electronics & Telecommunication Engineering</h3>
              <p>Honors in AIML · Dwarkadas J. Sanghvi College of Engineering</p>
              <strong>CGPA 7.5 · 2021 — 2025</strong>
            </div>
            <div className="background-card">
              <span className="card-label">CERTIFICATION</span>
              <h3>C++ Data Structures & Algorithms + LeetCode Exercises</h3>
              <p>Udemy · Completed June 2024 · 9.5 hours</p>
              <strong>DSA · Problem Solving</strong>
            </div>
            <div className="background-card">
              <span className="card-label">ACTIVITIES</span>
              <h3>Hackathons & Technical Community</h3>
              <p>Infosys Hackathon · ZS Associates Hackathon · DJS STRIKE Technical Symposium</p>
              <strong>Workshop Coordinator · 100+ students</strong>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <div>
              <span className="section-label">05 / Contact</span>
              <h2>Let’s build something<br /><span className="gradient-text">worth talking about.</span></h2>
              <p>For engineering opportunities, collaborations, or a conversation about technology, feel free to reach out.</p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:karanrathod2834@gmail.com">Start a conversation <span>↗</span></a>
              <a className="social-link" href="https://www.linkedin.com/in/karan-rathod-29194222a/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a className="social-link" href="https://github.com/KaranRathod2834" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Karan Rathod</span>
        <span>Designed & engineered with React</span>
        <a href="mailto:karanrathod2834@gmail.com">karanrathod2834@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;
