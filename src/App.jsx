import eloCalcLogo from '/EloCalc.svg'
import baaaLogo from '/BloodborneAAA.svg'
import publicDatabase from '/PublicDatabase.svg'
import './App.css'

const projects = [
  {
    id: 'elo-calc',
    className: 'elo-calc',
    href: 'https://acxing5.github.io/EloCalc/',
    logo: eloCalcLogo,
    alt: 'EloCalc logo',
    title: 'EloCalc',
    description:
      'A competitive Elo rating calculator designed for tracking performance and standings in custom tournaments. Supports head-to-head matchups and ranking visualization.',
    tags: ['Calculator', 'Competitive', 'Rankings', 'Web App'],
  },
  {
    id: 'bloodborne-aaa',
    className: 'bloodborne',
    href: 'https://top.gg/bot/1325883848688533594',
    logo: baaaLogo,
    alt: 'Bloodborne AAA Discord Bot logo',
    title: 'Bloodborne AAA',
    description:
      'A full competitive Pokémon platform — featuring a custom Pokémon Showdown server with modified mechanics, and a Discord bot handling game progression, reward systems, and Elo tracking.',
    tags: ['Discord Bot', 'Pokémon Showdown', 'Node.js', 'Competitive'],
  },
  {
    id: 'public-database',
    className: 'database',
    href: 'https://public-database.vercel.app/',
    logo: publicDatabase,
    alt: 'Public Database logo',
    title: 'Public Database',
    description:
      'An open-access reference database for community data. Browse, search, and explore structured records with a clean, fast interface.',
    tags: ['Database', 'Reference', 'Open Source', 'Search'],
  },
]

/* ---- SVG Icons ---- */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <div className="header-avatar" aria-hidden="true">A</div>
          <span className="header-name">ACXing5</span>
        </div>
        <nav className="header-nav" aria-label="External links">
          <a
            id="github-profile-link"
            href="https://github.com/ACXing5"
            target="_blank"
            rel="noreferrer"
            className="nav-link github"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-badge" aria-hidden="true">
          <span className="hero-badge-dot" />
          Portfolio
        </div>
        <h1 id="hero-heading" className="hero-title">
          Building things{' '}
          <span className="hero-title-gradient">I care about</span>
        </h1>
        <p className="hero-subtitle">
          Full-stack developer crafting competitive tools, Discord bots, and open-source utilities. Passionate about Pokémon, game design, and clean code.
        </p>
        <div className="hero-stats" aria-label="Portfolio highlights">
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Iterations</div>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">Developer</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <main className="section" aria-labelledby="projects-heading">
        <p className="section-label" aria-hidden="true">Featured Work</p>
        <h2 id="projects-heading" className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              id={`project-card-${project.id}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`project-card ${project.className}`}
              aria-label={`Visit ${project.title}`}
            >
              {/* Image */}
              <div className="card-image-wrap">
                <img
                  src={project.logo}
                  alt={project.alt}
                  className="card-logo"
                />
              </div>

              {/* Content */}
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <span className="card-arrow" aria-hidden="true">
                    <ExternalLinkIcon />
                  </span>
                </div>
                <p className="card-description">{project.description}</p>
                <div className="card-tags" aria-label={`Tags for ${project.title}`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>Made with ♥ by</span>
        <a href="https://github.com/ACXing5" target="_blank" rel="noreferrer" id="footer-github-link">
          ACXing5
        </a>
        <span>·</span>
        <a href="https://github.com/ACXing5/acxing5.github.io" target="_blank" rel="noreferrer" id="footer-repo-link">
          View Source
        </a>
      </footer>
    </div>
  )
}

export default App
