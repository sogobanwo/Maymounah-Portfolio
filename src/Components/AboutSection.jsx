import React from "react";
import "../StyleSheets/mobile.css";
import "../StyleSheets/AboutSection.css";
import setter from "../PortfolioImages/SetterAppPics.png";

const AboutSection = () => {
  return (
    <div>
      <section id="about-me-section">
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Banwo Olorunsogo is a highly resourceful and intelligent Software
            Developer seeking to develop professional competence in the Software
            Engineering field by solving real life problems with his skills.
          </p>
        </div>
        <div id="work-experience">
          <h1> Work Experience</h1>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Junior Developer</p>
            </div>
            <div className="work-experience-bottom">
              <p>Rashotech Web Services</p>
              <p>Aug 2022 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>Rashotech Web Services</p>
              <p>Sept 2021 - Aug, 2022</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>TIIDELab</p>
              <p>June - December, 2022</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Systems Integrator</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>21st Century Evolutions Systems </p>
              <p>Feb - Aug, 2021</p>
            </div>
            <div className="mid-line" />
          </div>
        </div>
        <div>
          <div id="work-experience" className="education">
            <h1>Education</h1>
            <div>
              <div className="work-experience-top">
                <p>Bsc. Mechancal Engineering </p>
                <p className="type">Full Time</p>
              </div>
              <div className="work-experience-bottom">
                <p>Lagos State University</p>
                <p>November 2016 - June 2022</p>
              </div>
            </div>
            <div>
              <div className="work-experience-top">
                <p>NanoDegree, FullStack Development</p>
                <p className="type">Full Time</p>
              </div>
              <div className="work-experience-bottom">
                <p>UDACITY</p>
                <p>May - September 2022</p>
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
            <img className="img-1" src={setter} alt="" />
          </div>
          <div>
            <img className="img-2" src={setter} alt="" />
          </div>
          <div className="tall">
            <img src={setter} alt="" />
          </div>
          <div className="wide">
            <img src={setter} alt="" />
          </div>
          <div className="wide">
            <img src={setter} alt="" />
          </div>
        </div>
      </section>

      {/* demacation of the sections */}
      <div id="middle_line" />
    </div>
  );
};

export default AboutSection;
