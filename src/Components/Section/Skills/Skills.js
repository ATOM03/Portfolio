import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Skills.css";
class Skills extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>
        <div className="Skills">
          <p>HTML</p>
          <ProgressBar now={90} label={"90%"} animated="true" />
          <p>CSS</p>
          <ProgressBar now={85} label={"85%"} animated="true" />
          <p>REACT</p>
          <ProgressBar now={75} label={"75%"} animated="true" />
          <p>NODE</p>
          <ProgressBar now={60} label={"60%"} animated="true" />
          <p>JAVASCRIPT</p>
          <ProgressBar now={60} label={"60%"} animated="true" />
          <p>MONGODB</p>
          <ProgressBar now={50} label={"50%"} animated="true" />
          <p>EXPRESS</p>
          <ProgressBar now={65} label={"65%"} animated="true" />
        </div>
      </div>
    );
  }
}
export default Skills;
