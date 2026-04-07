import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Harshith</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Hi, I'm Harshith 👋</h1>
        <p>Full Stack Developer (Angular | Java | Python)</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer passionate about building web applications
          using Angular, Java, and Python. I enjoy creating APIs and solving real-world problems.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Angular</span>
          <span>Java</span>
          <span>Python</span>
          <span>REST APIs</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>Angular + Java Spring Boot CRUD application</p>
        </div>

        <div className="project-card">
          <h3>To-Do API App</h3>
          <p>Frontend + Python Flask backend</p>
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </>
  )
}

export default App