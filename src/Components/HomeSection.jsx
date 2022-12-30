import React from "react";
import "../StyleSheets/HomeSection.css"
import "../StyleSheets/mobile.css"
import html from "../PortfolioImages/htmlpics.png"
import css from "../PortfolioImages/csspics.png"
import JS from "../PortfolioImages/javascriptpics.png"
import git from "../PortfolioImages/gitpics.png"
import github from "../PortfolioImages/githubpics.png"
import react from "../PortfolioImages/Reactpics.png"
import setter from "../PortfolioImages/SetterAppPics.png"


const HomeSection =()=>{
  return(
    <>
   <div>
  <section className="intro">
    <div id="text-wrapper">
      <div id="big-text">
        <h1>Hi👋,</h1>
        <h1>I'm Mogaji Maymounah.</h1>
        <h1>I build things for the web.</h1>
      </div>
      <p>Banwo Olorunsogo is a highly resourceful and intelligent Software Developer seeking to develop professional competence in the Software Engineering field by solving real life problems with his skills.</p>
    </div>
    <div id="right-anime">
      <img src={setter} alt="Olorunsogo-Banwo" width="200px" height="200px" />
    </div>
  </section>
  {/* demacation of the sections */} 
  <div id="middle_line" />
   {/* second section */} 
  <section id="tech-stack">
    <div className="tech-stack-header">
      <h1>My Tech Stack</h1>
      <p>Technologies i have been working with recently.</p>
    </div>
    <div className="tech-images">
      <img src={html} alt="html" width={50} height={50} />
      <img src={css} alt="css" width={50} height={50} />
      <img src={JS} alt="javascript" width={50} height={50} />
      <img src={react} alt="vscode" width={50} height={50} />
      <img src={git} alt="git" width={50} height={50} />
      <img src={github} alt="github" width={50} height={50} />
    </div>
  </section>

   {/* demacation of the sections */} 
  <div id="middle_line" />

  </div>
  </>
  )
}

export default HomeSection

