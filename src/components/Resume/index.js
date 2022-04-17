import React from "react";
import resimg from "../../assets/images/resimg.png";
import resfile from "../../assets/downloads/Rhea2022Resume.pdf";
import './index.scss'
function Resume() {
  return (
    <div className="res">
      <h1> Resume and Tech-Stack </h1>
      <div className="resume">
        <img src={resimg} className="resFile" alt="Resume screenshot" />
        <div className="download">
        <a href={resfile}>
          <h2>Click to Download my Resume</h2>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
