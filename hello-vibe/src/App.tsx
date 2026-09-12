import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#home">
            Hello Vibe
          </a>
          <nav aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#cards">Journey</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">Personal site</p>
          <h1>My First Vibe-Coded Website</h1>
          <p className="hero-subtitle">
            Built with Cursor, Claude Code, GitHub and Cloudflare.
          </p>
        </section>

        <section className="about" id="about">
          <h2>About</h2>
          <p>
            I am learning web development by building a simple one-page site.
            This page is made with React and CSS, then shared with GitHub and
            Cloudflare.
          </p>
        </section>

        <section className="cards-section" id="cards">
          <h2>What I am practicing</h2>
          <div className="cards">
            <article className="card">
              <h3>Build</h3>
              <p>
                Turn an idea into a real page with React components and clear
                layout.
              </p>
            </article>
            <article className="card">
              <h3>Learn</h3>
              <p>
                Practice HTML structure, CSS styling, and how a TypeScript React
                app fits together.
              </p>
            </article>
            <article className="card">
              <h3>Deploy</h3>
              <p>
                Put the site on the internet so anyone can open it from a
                browser.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>My first Cloudflare website</p>
      </footer>
    </div>
  )
}

export default App
