import React from "react";
import "../StyleSheets/Header.css"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import "../StyleSheets/mobile.css"

export const Header = () =>{
  return (
    <header>
  <div className="header-2">
    <div>
      <h1 className="my_logo">Mogaji Memunat</h1>
    </div>
    <div id="navbar">
      <div id="header_link">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>

      </div>
      <div id="header_icon">
        <a href="https://twitter.com/MaymounahMogaji?t=Zk65wGeSihNiLq5GFklYZg&s=09" target="_blank" rel="noreferrer noopener">
          <FaTwitter size="20px" />
        </a>
        <a href="https://github.com/Maymounah01" target="_blank" rel="noreferrer noopener">
           <FaGithub size="20px" />
        </a>
        <a href="https://www.linkedin.com/in/maymounah-mogaji-15699223a" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn size="20px" />
        </a>
      </div>
    </div>
  </div>
  <div id="middle_line"></div>
</header>


  )
}