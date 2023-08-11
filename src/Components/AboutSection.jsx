import React from "react";
import "../StyleSheets/mobile.css";
import "../StyleSheets/AboutSection.css";
import cop from "../PortfolioImages/Certificate of Proficiency.jpg"
import Volunteer from "../PortfolioImages/Volunteer.jpg"
import Honor from "../PortfolioImages/Honor Award.jpg"

const AboutSection = () => {
  return (
    <div id="About">
      <section id="about-me-section">
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Memunat is a Logical, smart and resourceful software developer with
            a user-centric mindset and she is dedicated to enhancing her
            professional competence by actively contributing to and
            collaborating within a high-performing team and leveraging them to
            provide technical solutions that address tangible
            day-to-day challenges.
          </p>
        </div>
        <div id="work-experience">
          <h1> Work Experience</h1>
          <div>
            <div className="work-experience-top">
              <p>Backend Engineer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>LifeBank Technologies</p>
              <p>June 2022 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Project Manager</p>
              <p className="type">Full Time</p>
            </div>
            <div className="work-experience-bottom">
              <p>Tech Foodie Hub</p>
              <p>May, 2023 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Backend Engineer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>AYA</p>
              <p>January, 2023 - March, 2023</p>
            </div>
            <div className="mid-line" />
          </div>

          <div>
            <div className="work-experience-top">
              <p>Backend Engineer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>TIIDELab</p>
              <p>June - December, 2022</p>
            </div>
            <div className="mid-line" />
          </div>
        </div>
        <div>
          <div id="work-experience" className="education">
            <h1>Education</h1>
            <div>
              <div className="work-experience-top">
                <p>Bsc. Agricultural Science</p>
                <p className="type">Full Time</p>
              </div>
              <div className="work-experience-bottom">
                <p>University of Ilorin</p>
                <p>November 2016 - June 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mid-line" />
      <h1 id="sogo">Certifications & Awards</h1>
      <section>
        <div className="grid-wrapper">
          <div>
            <img className="img-1" src={Honor} alt="" />
          </div>
          <div>
            <img className="img-2" src={Volunteer} alt="" />
          </div>
          <div className="wide">
            <img src={cop} alt="" />
          </div>
        </div>
      </section>

      {/* demacation of the sections */}
      <div id="middle_line" />
    </div>
  );
};

export default AboutSection;
