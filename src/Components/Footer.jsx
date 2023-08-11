import React from "react";
import "../StyleSheets/Footer.css";
import "../StyleSheets/mobile.css";

const Footer = () => {
  return (
    <footer>
      <div id="middle_line1"></div>
      <div>
        <div id="footer_bottom">
          <div id="footer_link">
            <a href="#Home" id="footer_left">
              Home
            </a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </div>
          <div>
            <p id="copyright">
              Portfolio | Mogaji Maymounah © 2022, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
