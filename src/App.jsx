import React, { useEffect, useState } from "react";
import "./index.css";
import profileImg from "./assets/adi.jpeg";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiMysql, SiC, SiTailwindcss, SiNetlify } from "react-icons/si";


 function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  useEffect(() => {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);


  return (
    <div className="app">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const Navbar = ({ dark, setDark }) => (
  <nav className="navbar">
  <h2>Aditya</h2>

  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

    <button className="dark-btn" onClick={() => setDark(!dark)}>
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  </nav>
);

const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 15;
  const rotateY = (x - centerX) / 15;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetTilt = (e) => {
  e.currentTarget.style.transform = "rotateX(0) rotateY(0)";
};


const Hero = () => (

  <section className="hero animate" id="home">
  <div className="hero-card glass">
    <div
      className="image-wrapper"
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      <img
        src={profileImg}
        alt="Aditya"
        className="hero-img reveal"
      />
    </div>

    <h1>Hi, I'm Aditya 👋</h1>
    <h3>Frontend / React Developer</h3>
    <p>I build responsive and modern web applications.</p>
  </div>
</section>
);


const About = () => (
  <section className="section about animate" id="about">
    <div className="about-container">
      <img src={profileImg} alt="Aditya" className="about-img" />

      <div>
        <h2>About Me</h2>
        <p>
          I am a BSc IT graduate passionate about frontend development.
          I enjoy building clean UI, responsive layouts, and solving
          real-world problems using React and JavaScript.
        </p>
      </div>
    </div>
  </section>
);


const Skills = () => (
    <section className="section skills animate" id="skills">
    <h2>Skills</h2>

    <div className="skill-grid">
      <div className="skill-card">
        <FaHtml5 className="icon html" />
        <span>HTML</span>
      </div>

      <div className="skill-card">
        <FaCss3Alt className="icon css" />
        <span>CSS</span>
      </div>

      <div className="skill-card">
        <FaJsSquare className="icon js" />
        <span>JavaScript</span>
      </div>

      <div className="skill-card">
        <FaReact className="icon react" />
        <span>React</span>
      </div>

      <div className="skill-card">
        <FaGitAlt className="icon git" />
        <span>Git</span>
      </div>

      <div className="skill-card">
        <FaGithub className="icon github" />
        <span>GitHub</span>
      </div>

          <div className="skill-card">
        <SiTailwindcss className="icon tailwind" />
        <span>Tailwind CSS</span>
      </div>

      <div className="skill-card">
        <SiC className="icon c" />
        <span>C Programming</span>
      </div>

      <div className="skill-card">
        <SiMysql className="icon sql" />
        <span>SQL</span>
      </div>

       <div className="skill-card">
        <SiNetlify className="icon netlify" />
        <span>Netlify</span>
      </div>
    </div>
  </section>
);


// Project section

const projects = [
   {
    id: 1,
    title: "Car Showroom Website",
    description: "Search and filter cars using React.",
    tech: ["React", "CSS"],
    image: "https://i.ytimg.com/vi/mRE5nUWiNaY/maxresdefault.jpg",
    live: "https://your-car-project.netlify.app",
    github: "https://github.com/username/car-showroom",
  },
  
 {
    id: 2,
    title: "E-commerce Website",
    description: "Product listing and cart functionality.",
    tech: ["React", "CSS"],
    image: "https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg",
    live: "https://your-ecommerce.netlify.app",
    github: "https://github.com/username/ecommerce",
  },
    {
    id: 3,
    title: "Stopwatch App",
    description: "Start, stop, reset stopwatch using hooks.",
    tech: ["React", "JavaScript"],
    image: "https://c.tadst.com/gfx/600x337/stopwatch-screenshot.png?1",
    live: "https://your-stopwatch.netlify.app",
    github: "https://github.com/username/stopwatch",
  },
  {
    id: 4,
    title: "To-Do List App",
    description: "Add, edit, delete tasks with LocalStorage.",
    tech: ["React", "JavaScript"],
    image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png",
    live: "https://your-todo.netlify.app",
    github: "https://github.com/username/todo-app",
  },
 
];




const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="section animate" id="projects">
      <h2>Projects</h2>

      <div className="filter-btns">
        {["All", "React", "CSS", "JavaScript", "API"].map((tech) => (
          <button
            key={tech}
            className={filter === tech ? "active" : ""}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

   
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div className="project-card animate" key={project.id}>
            <a href={project.live} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </a>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank">Live</a>
              <a href={project.github} target="_blank">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};





const Project = ({ title, desc }) => (
  <div className="card animate">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const Contact = () => (
  <section className="section animate" id="contact">
    <h2>Contact</h2>
    <a href="#" style={{textDecoration:"none",color:"orangered"}}><p>Email: Chavanaditya5858@gmail.com</p></a>
    <a href="https://github.com/Aditya22-ux" style={{textDecoration:"none",color:"orangered"}}> <p>GitHub: github.com/Aditya22-ux</p></a>
    <a href="https://www.linkedin.com/in/aditya-chavan-0702792a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{textDecoration:"none",color:"orangered"}}><p>LinkedIn: linkedin.com/in/Aditya-Chavan</p></a>
  </section>
);

const Footer = () => (
  <footer className="footer">© 2026 Aditya Chavan. All rights reserved.</footer>
);

export default App;