import React, { Component } from "react";
import "./Section.css";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
class Section extends Component {
  mouseMove = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("background");
  };
  mouseleave = () => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("background");
  };
  render() {
    return (
      <div
        className="Main-section"
        onMouseMove={this.mouseMove}
        onMouseLeave={this.mouseleave}
        id="About"
      >
        <section id="About">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="project">
          <Projects />
        </section>
        <footer id="contact">
          <Contact />
        </footer>
      </div>
    );
  }
}

export default Section;
