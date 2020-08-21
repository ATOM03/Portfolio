import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  state = {
    isActive: false,
  };
  mouseMove = () => {
    const nav = document.querySelectorAll(".section-titles li");
    const cursor = document.querySelector(".cursor");
    nav.forEach((link) => {
      cursor.classList.add("link-grow");
    });
  };

  mouseleave = () => {
    const nav = document.querySelectorAll(".section-titles li");
    const cursor = document.querySelector(".cursor");
    nav.forEach((link) => {
      cursor.classList.remove("link-grow");
    });
  };

  menuButton = () => {
    let menu = document.getElementsByClassName("section-titles")[0];
    menu.classList.toggle("active");
    // menu.classList.toggle("active");
    console.log(menu);
  };
  render() {
    return (
      <div className="header-hold">
        <nav className="Header-section">
          <div className="logo">
            <div>
              <a href="/Portfolio/">Priyanshu</a>
            </div>
          </div>{" "}
          <div className="menu-icon" onClick={this.menuButton}>
            =
          </div>
          <ul
            className="section-titles"
            onMouseMove={this.mouseMove}
            onMouseLeave={this.mouseleave}
          >
            <li>
              {" "}
              <a href="/Portfolio/#main" onClick={this.menuButton}>
                Home
              </a>
            </li>
            <li>
              <a href="/Portfolio/#About" onClick={this.menuButton}>
                About
              </a>
            </li>
            <li>
              <a href="/Portfolio/#skills" onClick={this.menuButton}>
                Skills
              </a>
            </li>
            <li>
              {" "}
              <a href="/Portfolio/#project" onClick={this.menuButton}>
                Projects
              </a>
            </li>
            <li>
              {" "}
              <a href="/Portfolio/#contact" onClick={this.menuButton}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* <div className="menu-section" id="click">
          <ul>
            <li>
              <a href="/Portfolio/">Home</a>
            </li>
            <li>
              <a href="/Portfolio/#About">About</a>
            </li>
            <li>
              <a href="/Portfolio/#skills">Skills</a>
            </li>
            <li>
              <a href="/Portfolio/#project">Projects</a>
            </li>
            <li>
              <a href="/Portfolio/#contact">Contact</a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Header;
