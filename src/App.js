import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <h1>Ahammed Sharif M</h1>
        <h2>Frontend Developer | React Developer</h2>
        <p>
          I build modern, responsive web applications using React and JavaScript
          with clean UI and smooth user experience.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>

          <a
            href="/resume.pdf"
            download="Ahammed_Sharif_Resume"
            className="outline"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer focused on building interactive,
          responsive, and user-friendly web applications using React. I enjoy
          converting ideas into real-world products through clean and efficient
          code.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Notes Keeper</h3>
          <p>
            A React-based notes keeping application that allows users to add,
            manage, and organize notes with a clean and responsive interface.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/ahammedsharif1003/keeper-app"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Badminton Court Booking</h3>
          <p>
            A badminton court booking system where users can request slots and
            only admins can confirm bookings, preventing conflicts and double
            bookings.
          </p>

          <div className="project-buttons">
            <a
              href="https://github.com/ahammedsharif1003/Badminton_Court_Booking"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>📞 6374283001</p>
        <p>📧 ahammedsharif1003@gmail.com</p>
        <p>
          🔗{" "}
          <a
            href="https://linkedin.com/in/ahammed-sharif-m-4b36b9390"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Ahammed Sharif M</p>
      </footer>

    </div>
  );
}
