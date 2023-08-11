import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "../StyleSheets/ProjectsSection.css";
import "../StyleSheets/mobile.css";
import setter from "../PortfolioImages/SetterAppPics.png"


const ProjectsSection = () => {
  return (
    <section id="Projects">
      <div className="above-cards">
        <h1>Projects</h1>
        <p>Some of the projects i have worked on.</p>
      </div>
      <div className="card">
        <div className="each-card-wrapper">
          <div className="each-card">
            <img
              src={setter}
              width="120px"
              height="120px"
              alt="Sogo"
            />
            <h1>SETTERAPP</h1>
            <p>
              A social media management application which enables users to make
              post on different their various social media account from one
              platform.
            </p>
            <p>Tech Stack: ReactJs & CSS</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/SetterApp"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://setterapp.vercel.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img
              src={setter}
              width="120px"
              height="120px"
              alt="Sogo"
            />
            <h1>TASK MANAGER</h1>
            <p>
            A social media management application which enables users to make
              post on different their various social media account from one
              platform.
            </p>
            <p>Tech Stack: ReactJS & CSS</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/Task-Management-App"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://banwo-task-manager.netlify.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img
              src={setter}
              width="120px"
              height="120px"
              alt="Sogo"
            />
            <h1>PROJECT BLOOMART</h1>
            <p>
            A social media management application which enables users to make
              post on different their various social media account from one
              platform.
            </p>
            <p>Tech Stack: HTML,CSS & JavaScript</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/PROJECT-BLOOMART"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://bloomartproject.netlify.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProjectsSection