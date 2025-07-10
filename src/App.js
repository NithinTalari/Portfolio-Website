import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><ScrollLink to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} spy={true} activeClass="active">About</ScrollLink></li>
        <li><ScrollLink to="education" smooth={true} duration={500} spy={true} activeClass="active">Education</ScrollLink></li>
        <li><ScrollLink to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">Projects</ScrollLink></li>
        <li><ScrollLink to="certifications" smooth={true} duration={500} spy={true} activeClass="active">Certifications</ScrollLink></li>
        <li><ScrollLink to="experience" smooth={true} duration={500} spy={true} activeClass="active">Experience</ScrollLink></li>
        <li><ScrollLink to="achievements" smooth={true} duration={500} spy={true} activeClass="active">Achievements</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</ScrollLink></li>
      </ul>
    </div>
  );
}

function SectionWrapper({ name, children }) {
  return <Element name={name}>{children}</Element>;
}

function Home() {
  return (
    <SectionWrapper name="home">
      <section className="home" data-aos="fade-in" data-aos-delay="100">
        <h2>Hello, I'm Talari Nithin</h2>
        <p>Aspiring Web Developer | Enthusiastic Learner</p>
        <img src="/myphoto.jpg.png" alt="Profile" className="profile-image" />
      </section>
    </SectionWrapper>
  );
}

function About() {
  return (
    <SectionWrapper name="about">
     <section className="about" data-aos="fade-left" data-aos-delay="200">
        <h2>About Me</h2>
        <p>Creative and enthusiastic engineering student with a passion for designing and building innovative solutions.
           I’m eager to explore new opportunities that challenge my skills and help me grow, 
           while also building a strong and authentic personal brand.</p>
        <h4>Career Objective:</h4>
        <p>To obtain a challenging position as a web developer where I can apply my technical and problem-solving skills.
           I aim to contribute to innovative projects while gaining industry experience.
            I am committed to developing quality web solutions and continuously improving my knowledge in modern technologies.</p>
        <h4>Soft Skills:</h4>
        <ul>
           <li>Creative Thinking & Innovation</li>
           <li>Adaptability to New Tools & Tech</li>
           <li>Effective Virtual Communication</li>
           <li>Critical Thinking & Problem Solving</li>
           <li>Time and Priority Management</li>
           <li>Learning Agility & Self-Motivation</li>
        </ul>
      </section>
    </SectionWrapper>
  );
}

function Education() {
  return (
    <SectionWrapper name="education">
      <section className="education" data-aos="zoom-in" data-aos-delay="300">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.Tech in Computer Science (Data Science)</h3>
          <p>Sri Venkateswara College of Engineering and Technology, Chittoor</p>
          <p>Year: 2022 – 2026</p>
          <p>CGPA: 8.0 / 10</p>
          <p><strong>Relevant Coursework:</strong> Data Structures, DBMS, Web Technologies, Machine Learning</p>
          <p><strong>Clubs:</strong> Member of CodeHub | Organizer at Technical Fest</p>
        </div>
      </section>
    </SectionWrapper>
  );
}

function Skills() {
  return (
    <SectionWrapper name="skills">
      <section className="skills" data-aos="fade-right" data-aos-delay="400">
        <h2>Technical Skills</h2>
        <ul className="skill-list">
</ul>
<h4>Frontend & Development:</h4>
<ul>
  <li>React.js, HTML5, CSS3, JavaScript</li>
  <li>Git & GitHub, Responsive Design</li>
</ul>

<h4>Data & Backend Tools:</h4>
<ul>
  <li>Python (NumPy, Pandas), MySQL, MongoDB</li>
  <li>APIs, Firebase, Machine Learning Basics</li>
</ul>

      </section>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper name="projects">
      <section className="projects" data-aos="flip-up" data-aos-delay="500">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Title 1</h3>
          <p>Brief description of the project.</p>
          <p><strong>Tech Used:</strong> React, CSS, API</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="project-item">
          <h3>Project Title 2</h3>
          <p>Brief description of another project.</p>
          <p><strong>Tech Used:</strong> HTML, JavaScript</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </SectionWrapper>
  );
}

function Certifications() {
  return (
    <SectionWrapper name="certifications">
      <section className="certifications" data-aos="zoom-in" data-aos-delay="600">
        <h2>Certifications</h2>
        <ul>
          <li>Front-End Web Development – Coursera</li>
          <il>Power BI – PrepInsta</il>
          <li>Analyzing Data with R – IBM</li>
          <li>Visualizing Data with R– IBM</li>
        </ul>
      </section>
    </SectionWrapper>
  );
}

function Experience() {
  return (
    <SectionWrapper name="experience">
      <section className="experience" data-aos="fade-left" data-aos-delay="700">
        <h2>Internship / Work Experience</h2>
        <div className="experience-item">
          <h3>React Developer Intern – NRKS Skill Development</h3>
          <p>Duration: July 2025 – Present</p>
          <ul>
            <li>Developed responsive UI using React JS</li>
            <li>Collaborated using GitHub</li>
          </ul>
        </div>
      </section>
    </SectionWrapper>
  );
}

function Achievements() {
  return (
    <SectionWrapper name="achievements">
      <section className="achievements" data-aos="fade-up" data-aos-delay="800">
        <h2>Achievements</h2>
        <ul>
          <li>Top 10% in XYZ Coding Contest</li>
          <li>Presented paper at ABC Conference</li>
          <li>Built a college app used by 100+ students</li>
        </ul>
      </section>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper name="contact">
      <section className="contact" data-aos="flip-left" data-aos-delay="900">
        <h2>Contact Me</h2>
        <p>Email: talarinithin12@gmail.com</p>
        <p>Phone: +91 6301331995</p>
        <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">yourusername</a></p>
        
      
      </section>
    </SectionWrapper>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#eee' }}>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <p>Built with using React</p>
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
    document.body.className = !darkMode ? "dark" : "";
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      {/* 🌗 Dark Mode Button */}
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="top-left-label">PORTFOLIO</div>
      <Sidebar />
      <main className="main-content">
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
