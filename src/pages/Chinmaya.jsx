import React, { useEffect, useRef } from "react";
import Helmet from "react-helmet";
const Chinmaya = () => {
  const canvasRef = useRef(null);
 const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chinmaya Kolhe",
    "url": "https://chinmayakolhe.netlify.app",
    "image": "https://chinmayakolhe.netlify.app/Chinmaya.jpg",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Pimpri Chinchwad College of Engineering"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Government Polytechnic, Jalgaon"
      }
    ],
    "description": "Full Stack Developer specializing in MERN stack, Java, Python, and Android development.",
    "knowsAbout": ["JavaScript", "React", "Node.js", "Java", "Python", "Android Development", "MongoDB", "MySQL"],
    "sameAs": [
      "https://github.com/ChinmayaKolhe",
      "https://www.linkedin.com/in/chinmaya-kolhe-34165524a/"
    ]
  };
  // Enhanced technical background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles for background effect
    const particles = [];
    const particleCount = 150;

    // Binary code strings for tech effect
    const binaryStrings = [];
    const binaryCount = 20;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${180 + Math.random() * 60}, 70%, ${
          50 + Math.random() * 30
        }%)`;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        const alpha = (Math.sin(this.pulse) + 1) * 0.5 * 0.8 + 0.2;
        ctx.fillStyle = this.color
          .replace(")", `, ${alpha})`)
          .replace("hsl", "hsla");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class BinaryString {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.speed = Math.random() * 2 + 1;
        this.text = this.generateBinary();
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      generateBinary() {
        let binary = "";
        for (let i = 0; i < 10; i++) {
          binary += Math.random() > 0.5 ? "1" : "0";
        }
        return binary;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 20) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.font = "12px monospace";
        ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Initialize binary strings
    for (let i = 0; i < binaryCount; i++) {
      binaryStrings.push(new BinaryString());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw binary rain
      binaryStrings.forEach((binaryString) => {
        binaryString.update();
        binaryString.draw();
      });

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 - distance / 800})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="chinmaya-portfolio">
      <Helmet>
        <title>
          Chinmaya Kolhe - Full Stack Developer | MERN Stack, Java, Python
        </title>
        <meta
          name="description"
          content="Chinmaya Kolhe is a Full Stack Developer specializing in MERN stack, Java, Python, and Android development. View my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Chinmaya Kolhe, Full Stack Developer, MERN Stack, Java Developer, Python Developer, Android Developer, Web Developer, Portfolio"
        />
        <meta name="author" content="Chinmaya Kolhe" />

        {/* Open Graph tags for social media sharing */}
        <meta
          property="og:title"
          content="Chinmaya Kolhe - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Chinmaya Kolhe, Full Stack Developer specializing in MERN stack, Java, Python, and Android development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chinmayakolhe.netlify.app" />
        <meta
          property="og:image"
          content="https://chinmayakolhe.netlify.com/Chinmaya.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chinmayakolhe" />
        <meta
          name="twitter:title"
          content="Chinmaya Kolhe - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Chinmaya Kolhe, Full Stack Developer specializing in MERN stack, Java, Python, and Android development."
        />
        <meta
          name="twitter:image"
          content="https://chinmayakolhe.netlify.com/Chinmaya.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {/* Canonical URL */}
        <link rel="canonical" href="https://chinmayakolhe.netlify.app" />
      </Helmet>
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="background-canvas" />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <h1 className="nav-logo">CK</h1>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-image-container">
            {/* Profile photo */}
            <div className="profile-image">
              <img src="./Chinmaya.jpg" alt="Chinmaya Kolhe" />
            </div>
          </div>

          <div className="hero-content">
            <h2>Chinmaya Kolhe</h2>
            <h3>Full Stack Developer | Android Developer</h3>
            <p>
              Pre-final year B.Tech in Information Technology student with
              expertise in full-stack web and mobile development. Proficient in
              MERN stack, Java, Python, and Android development.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>

          <div className="education-timeline">
            <div className="education-item">
              <div className="education-year">2024 - Present</div>
              <div className="education-content">
                <h3>B.Tech - Information Technology</h3>
                <h4>Pimpri Chinchwad College of Engineering, Pune</h4>
                <p>CGPA: 8.8</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">2021 - 2024</div>
              <div className="education-content">
                <h3>Diploma - Computer Engineering</h3>
                <h4>Government Polytechnic, Jalgaon</h4>
                <p>93.49%</p>
              </div>
            </div>

            <div className="education-item">
              <div className="education-year">2015 - 2021</div>
              <div className="education-content">
                <h3>SSC (10th Grade)</h3>
                <h4>B.G. Shanbhag Vidyalaya, Jalgaon</h4>
                <p>95%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-header">
                <h3>MERN Stack Developer</h3>
                <div className="company">PCCOE Dean Office, Pune</div>
                <div className="duration">May 2025 – June 2025</div>
              </div>
              <ul className="experience-details">
                <li>
                  Developed a personalized learning platform with quiz modules,
                  assessment workflows, and real-time student-faculty
                  interaction
                </li>
                <li>
                  Enabled seamless internal communication and academic tracking
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Backend Developer</h3>
                <div className="company">CoffeTech Solutions, Mumbai</div>
                <div className="duration">May 2025 – June 2025</div>
              </div>
              <ul className="experience-details">
                <li>
                  Designed backend architecture for a Quiz App including APIs,
                  database schemas, and contest logic
                </li>
                <li>
                  Implemented user registration, secure login, and leaderboard
                  modules using Node.js and MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            {/* Skill items with logos */}
            {[
              {
                name: "Java",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              },
              {
                name: "JavaScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },

              {
                name: "HTML5",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              },
              {
                name: "CSS3",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              },
              {
                name: "Android",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
              },
              {
                name: "MySQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              },
              {
                name: "PHP",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
              {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Express",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                name: "MongoDB",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "Bootstrap",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
              },
              {
                name: "Data Science",
                logo: "https://cdn-icons-png.flaticon.com/512/3037/3037996.png",
              },
            ].map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {/* Project Cards */}
            {[
              {
                title: "AgriNova - Connected Farming with Smart AI Predictions",
                description:
                  "Web-based platform assisting farmers with loan eligibility, AI-driven predictions, and marketplace.",
                tech: "React.js, Node.js, Firebase, TensorFlow, Dialogflow, MongoDB",
                github: "https://github.com/ChinmayaKolhe/AgriNova",
              },
              {
                title: "Personalized Learning Tool – PCCOE",
                description:
                  "Web-based assessment and communication tool for PCCOE's Dean Office.",
                tech: "React.js, Node.js, Express, MongoDB",
                github:
                  "https://github.com/ChinmayaKolhe/Learning-Tool-Frontend",
              },
              {
                title: "RecycleEase – Android E-Waste Management App",
                description:
                  "Android app for responsible e-waste handling with pickup requests and donation services.",
                tech: "Android, Java, Firebase",
                github: "https://github.com/ChinmayaKolhe/RecycleEase-Android",
              },
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">{project.tech}</div>
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <a href="mailto:chinmayakolhe2005@gmail.com">
                <i className="fas fa-envelope"></i> chinmayakolhe2005@gmail.com
              </a>
              <a href="tel:+918999316982">
                <i className="fas fa-phone"></i> +91 8999316982
              </a>
              <a
                href="https://github.com/ChinmayaKolhe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chinmaya-kolhe-34165524a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Chinmaya Kolhe. All rights reserved.</p>
      </footer>

      <style jsx>{`
        /* Include Font Awesome */
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .chinmaya-portfolio {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e293b 50%,
            #0f172a 100%
          );
          color: #f8fafc;
          line-height: 1.6;
          overflow-x: hidden;
          position: relative;
        }

        .background-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          z-index: 100;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(14, 165, 233, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
        }

        .nav-menu a {
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s;
          position: relative;
          font-weight: 500;
        }

        .nav-menu a:hover {
          color: #0ea5e9;
          transform: translateY(-1px);
        }

        .nav-menu a::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          transition: width 0.3s;
        }

        .nav-menu a:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(14, 165, 233, 0.1) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .hero-container {
            flex-direction: row;
            gap: 6rem;
          }
        }

        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .profile-image {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid transparent;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          padding: 4px;
          transition: all 0.3s;
        }

        .profile-image:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(14, 165, 233, 0.4);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .hero-content {
          text-align: center;
          max-width: 600px;
        }

        @media (min-width: 768px) {
          .hero-content {
            text-align: left;
          }
        }

        .hero-content h2 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #f8fafc, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content h3 {
          font-size: 1.8rem;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (min-width: 768px) {
          .hero-buttons {
            justify-content: flex-start;
          }
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          font-size: 1rem;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-primary {
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          color: white;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #0ea5e9;
          border: 2px solid #0ea5e9;
        }

        .btn-secondary:hover {
          background: rgba(14, 165, 233, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
        }

        /* Section Styles */
        .section-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(45deg, #f8fafc, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          border-radius: 2px;
        }

        /* Education Section */
        .education {
          padding: 6rem 0;
          background: rgba(30, 41, 59, 0.3);
        }

        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .education-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding: 2rem;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 15px;
          transition: all 0.3s;
          border: 1px solid rgba(14, 165, 233, 0.1);
          position: relative;
          overflow: hidden;
        }

        .education-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
        }

        .education-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(14, 165, 233, 0.2);
          border-color: rgba(14, 165, 233, 0.3);
        }

        @media (max-width: 768px) {
          .education-item {
            flex-direction: column;
            gap: 1rem;
          }
        }

        .education-year {
          min-width: 150px;
          font-weight: bold;
          color: #0ea5e9;
          font-size: 1rem;
          background: rgba(14, 165, 233, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          text-align: center;
          height: fit-content;
        }

        .education-content h3 {
          color: #f8fafc;
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
        }

        .education-content h4 {
          color: #cbd5e1;
          margin-bottom: 0.8rem;
          font-size: 1rem;
          font-weight: normal;
        }

        .education-content p {
          color: #7c3aed;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* Experience Section */
        .experience {
          padding: 6rem 0;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }
        }

        .experience-card {
          background: rgba(30, 41, 59, 0.6);
          border-radius: 15px;
          padding: 2.5rem;
          transition: all 0.3s;
          border: 1px solid rgba(14, 165, 233, 0.1);
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(14, 165, 233, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(14, 165, 233, 0.15);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .experience-header h3 {
          color: #0ea5e9;
          margin-bottom: 0.8rem;
          font-size: 1.4rem;
        }

        .experience-header .company {
          color: #f8fafc;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .experience-header .duration {
          color: #94a3b8;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          background: rgba(148, 163, 184, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          display: inline-block;
        }

        .experience-details {
          list-style: none;
        }

        .experience-details li {
          color: #cbd5e1;
          margin-bottom: 0.8rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .experience-details li::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: #0ea5e9;
        }

        /* Skills Section */
        .skills {
          padding: 6rem 0;
          background: rgba(30, 41, 59, 0.3);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 2rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 15px;
          transition: all 0.3s;
          border: 1px solid rgba(14, 165, 233, 0.1);
        }

        .skill-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(14, 165, 233, 0.2);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .skill-logo {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
          transition: transform 0.3s;
        }

        .skill-item:hover .skill-logo {
          transform: scale(1.2);
        }

        .skill-name {
          font-weight: 600;
          color: #f8fafc;
        }

        /* Projects Section */
        .projects {
          padding: 6rem 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: rgba(30, 41, 59, 0.6);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s;
          border: 1px solid rgba(14, 165, 233, 0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .project-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(45deg, #0ea5e9, #7c3aed);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(14, 165, 233, 0.15);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .project-card h3 {
          color: #0ea5e9;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .project-card p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech {
          color: #7c3aed;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .project-link {
          color: #0ea5e9;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: color 0.3s;
        }

        .project-link:hover {
          color: #7c3aed;
        }

        /* Contact Section */
        .contact {
          padding: 6rem 0;
          background: rgba(30, 41, 59, 0.3);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: #f8fafc;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #334155;
          background: rgba(30, 41, 59, 0.6);
          color: #f8fafc;
          font-family: inherit;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 15px;
          border: 1px solid rgba(14, 165, 233, 0.1);
        }

        .contact-info a {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s;
          padding: 0.8rem;
          border-radius: 8px;
        }

        .contact-info a:hover {
          color: #0ea5e9;
          background: rgba(14, 165, 233, 0.1);
        }

        .contact-info i {
          font-size: 1.2rem;
          width: 24px;
        }

        /* Footer */
        .footer {
          text-align: center;
          padding: 3rem 0;
          background: rgba(15, 23, 42, 0.9);
          color: #64748b;
          border-top: 1px solid rgba(14, 165, 233, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Chinmaya;
