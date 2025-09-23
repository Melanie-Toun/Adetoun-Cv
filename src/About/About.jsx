import React, { useState } from 'react';
import './About.css';

function About() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('skills');

  // Function to open a tab
  const openTab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/toun2.png" alt="Adetoun Omotolani Goodluck" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p className="me">Full Stack Software Developer proficient in building dynamic and responsive web applications using a versatile tech stack. Skilled in both frontend and backend development, with expertise in HTML, CSS, JavaScript, React, Node.js, Styled Components and Next.js, Passionate about creating seamless user experiences and writing clean, efficient code to bring innovative ideas to life.</p>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => openTab('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'technologies' ? 'active-link' : ''}`}
                onClick={() => openTab('technologies')}
              >
                Tech Savy
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => openTab('experience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => openTab('education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                <li><span>Web Development</span><br />Web app Development</li>
                <li><span>App Development</span><br />Building Android/iOS apps</li>                
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'technologies' ? 'active-tab' : ''}`} id="technologies">
              <ul>
                <li><span>JavaScript</span><br />80% Proficiency and inproving</li>
                <li><span>React Js</span><br />85% Profieciency</li>
                <li><span>App Development</span><br />Building Android/iOS apps</li>                
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>2025 - Current</span><br />Freelance Full stack Developer</li>
                <li><span>2024 - 2025</span><br />Contract Full stack Developer</li>
                
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>Ongoing - 2026</span><br /> MSc. Artificial Intelligence and Data Science- University of Hull, Hull city, United Kingdom</li>
                <li><span>2024</span><br />Full Stack Web Development Training at Anchorsoft Academy</li>
                <li><span>2023</span><br />BSc (Hons) Business Admin- First Class- Benson Idahosa University, Benin, Nigeria.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
