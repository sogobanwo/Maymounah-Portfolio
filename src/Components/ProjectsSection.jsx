import React from "react";
import { FaGlobe } from "react-icons/fa";
import "../StyleSheets/ProjectsSection.css";
import "../StyleSheets/mobile.css";
import setter from "../PortfolioImages/SetterAppPics.png";
import aya from "../PortfolioImages/aya.PNG";
import nerve from "../PortfolioImages/Nerve.webp";

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
            <img src={setter} width="120px" height="120px" alt="Sogo" />
            <h1>SETTERAPP</h1>
            <p>
              A social media management application which enables users to make
              post on different their various social media account from one
              platform.
            </p>
            <p>Tech Stack: NodeJs, ExpressJs, MySQL</p>
            <a
              rel="noreferrer"
              href="https://setterapp.vercel.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={nerve} width="120px" height="120px" alt="Sogo" />
            <h1>Nerve</h1>
            <p>
              A seamless platform that connects hospitals to vendors for easy
              purchase of daily consumables and duty equipments.
            </p>
            <p>Tech Stack: Php, MySQL, docker, redbean </p>
            <a
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.lifebankdevs.nerve"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={aya} width="120px" height="120px" alt="Sogo" />
            <h1>Ayalabs</h1>
            <p>
              A platform that connects you to a community of skilled developers,
              innovators and entrepreneurs to propel your growth.
            </p>
            <p>Tech Stack: Node.js, express.js, MySQL.</p>
            <a rel="noreferrer" href="https://www.ayalab.xyz/" target="_blank">
              <FaGlobe size="25px" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
