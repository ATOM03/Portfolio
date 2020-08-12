import React, { Component } from "react";
import Resume from "./Resume.pdf";
import Button from "react-bootstrap/Button";
import "./Main.css";
class Main extends Component {
  render() {
    return (
      <div className="outerContainer" id="main">
        <div className="innerContainer">
          <p>
            Hello,I'm <span>Priyanshu</span>
            <br></br> I am a Full Stack Developer.
          </p>
          <div className="Resume">
            <Button
              className="Resume-button"
              onMouseMove={this.mouseMove}
              onMouseLeave={this.mouseleave}
              variant="outline-primary"
            >
              {" "}
              <a href={Resume} download="My_Resume.pdf">
                My Resume{" "}
              </a>
            </Button>
            <Button
              className="Resume-button work"
              onMouseMove={this.mouseMove}
              onMouseLeave={this.mouseleave}
              variant="outline-primary"
            >
              {" "}
              <a href="/Portfolio/#project">
                View My Work
                <i class="fa fa-caret-square-o-right arrow"></i>
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
