import React, { useState, useEffect } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar({ darkMode, toggleDarkMode }) {
  const sections = ["home", "about", "education", "skills", "projects", "contact"];
  return (
    <nav className="navbar">
      <div className="nav-left">TALARI NITHIN</div>
      <ul className="nav-links">
        {sections.map(section => (
          <li key={section}>
            <ScrollLink to={section} smooth duration={500} spy activeClass="active">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

function SectionWrapper({ name, children }) {
  return <Element name={name} className="section-wrapper">{children}</Element>;
}

function ProfileHeader() {
  return (
    <section className="profile-header" data-aos="fade-down">
      <img src="Myphoto.jpg.png"  alt="Profile" className="profile-pic" />
      <h2>Hi, I'm Talari Nithin</h2>
      <p>Aspiring Full Stack Developer | Creative Thinker | Fast Learner</p>
      <a href="/resume.pdf" download className="resume-button">Download Resume</a>
    </section>
  );
}

function About() {
  return (
    <SectionWrapper name="about">
      <section className="section" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I’m a curious and motivated engineering student who enjoys transforming ideas into code. With strong fundamentals in web development and a growing knowledge of backend integration, I enjoy learning new technologies and solving problems with creativity and logic.
        </p>
        <p>
          Beyond coding, I love analyzing data, designing interfaces, and sharing knowledge through blogging and open-source projects.
        </p>
      </section>
    </SectionWrapper>
  );
}

function Education() {
  return (
    <SectionWrapper name="education">
      <section className="section" data-aos="zoom-in-up">
        <h2>Education</h2>
        <div className="education-block">
          <h3>B.Tech in Computer Science (Data Science)</h3>
          <p>Sri Venkateswara College of Engineering and Technology, Chittoor</p>
          <p>2022 – 2026 | CGPA: 8.0 / 10</p>
        </div>
        <div className="education-block">
          <h3>Intermediate – MPC</h3>
          <p>Sri Chaitanya Junior College</p>
          <p>2020 – 2022 | Score: 95%</p>
        </div>
      </section>
    </SectionWrapper>
  );
}

function Skills() {
  const skills = [
    { name: "React.js", level: 80 },
    { name: "JavaScript ", level: 85 },
    { name: "CSS / HTML ", level: 80 },
    { name: "MongoDB & MySQL", level: 50 },
    { name: "Git & GitHub", level: 80 },
    { name: "Node.js (Basic)", level: 70 },
    { name: "Python", level: 90 }
  ];

  return (
    <SectionWrapper name="skills">
      <section className="section" data-aos="fade-right">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper name="projects">
      <section className="section" data-aos="fade-left">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h4>College Dashboard</h4>
            <p>A responsive platform for teachers and students to manage classes, submit assignments, and view attendance.</p>
          </div>
          <div className="project-card">
            <h4>Portfolio Website</h4>
            <p>Built using React.js with dark/light mode toggle, scroll animations, and resume downloads.</p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <Element name="contact">
      <section className="section contact-section" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>If you'd like to reach out for collaboration, internship, or freelance opportunities:</p>

        <div className="contact-details">
          <p><strong>Email:</strong> talarinithin@gmail.com</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/NithinTalari" target="_blank" rel="noreferrer">github.com/NithinTalari</a></p>
        </div>
      </section>
    </Element>
  );
}
  
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Talari Nithin. Built with 💻 using React.js</p>
    </footer>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ProfileHeader />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
