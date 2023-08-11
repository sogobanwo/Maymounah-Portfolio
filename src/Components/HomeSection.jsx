import React from "react";
import "../StyleSheets/HomeSection.css";
import "../StyleSheets/mobile.css";
import html from "../PortfolioImages/htmlpics.png";
import css from "../PortfolioImages/csspics.png";
import JS from "../PortfolioImages/javascriptpics.png";
import github from "../PortfolioImages/githubpics.png";
import express from "../PortfolioImages/ExpressJs.jpeg";
import gitlab from "../PortfolioImages/GitLab.png";
import mongo from "../PortfolioImages/Mongo DB.png";
import mySQL from "../PortfolioImages/mySQL.png";
import node from "../PortfolioImages/NodeJs.jpeg";
import postman from "../PortfolioImages/Postman.png";
import redmean from "../PortfolioImages/RedMean.png";
import sequelize from "../PortfolioImages/Sequelize.png";
import php from "../PortfolioImages/slimPhp.png";
import maymounah from "../PortfolioImages/Maymounah.png"

const HomeSection = () => {
  return (
    <>
      <div>
        <section className="intro" id="Home">
          <div id="text-wrapper">
            <div id="big-text">
              <h1>Welcome to my little coven.</h1>
              <h1>
                I build GRAPH and RESTFUL Apis for web and mobile applications.
              </h1>
            </div>
          </div>
          <div id="right-anime">
            <img
              src={maymounah}
              alt="Olorunsogo-Banwo"
              width="170px"
              height="170px"
            />
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
            <img src={github} alt="github" width={50} height={50} />
            <img src={express} alt="express" width={50} height={50} />
            <img src={gitlab} alt="gitlab" width={50} height={50} />
            <img src={mongo} alt="mongo" width={50} height={50} />
            <img src={mySQL} alt="mySQL" width={50} height={50} />
            <img src={node} alt="node" width={50} height={50} />
            <img src={postman} alt="postman" width={50} height={50} />
            <img src={redmean} alt="redmean" width={50} height={50} />
            <img src={sequelize} alt="sequelize" width={50} height={50} />
            <img src={php} alt="php" width={50} height={50} />
          </div>
        </section>

        {/* demacation of the sections */}
        <div id="middle_line" />
      </div>
    </>
  );
};

export default HomeSection;
