import React from "react";
import "./Project.css";
import chat from "./Screenshot from 2020-07-27 19-28-44.png";
import covid from "./Screenshot from 2020-07-27 20-59-48.png";
// import Overlay from "react-bootstrap/Overlay";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <div>
          <a href="http://floating-depths-61749.herokuapp.com/" target="_blank">
            <img src={chat} alt="Chat-Application"></img>
          </a>
          {/* <div className="overlap">
            <div className="title">Chat-App</div>
          </div> */}
        </div>
        <div>
          <a href="https://atom03.github.io/covid19-tracker/" target="_blank">
            <img src={covid} alt="covid-19 Tracker"></img>
          </a>
        </div>
        {/* <a href="/">Blog-Post</a>
        <a href="/">Instagram-Clone</a> */}
      </div>
    </div>
  );
};

export default Projects;
