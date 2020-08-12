import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
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
    let menu = document.getElementById("click");
    if (menu.style.display === "") {
      menu.style.display = "block";
    } else if (menu.style.display === "block") {
      menu.style.display = "none";
    } else if (menu.style.display === "none") {
      menu.style.display = "block";
    }
  };
  render() {
    return (
      <div className="header-hold">
        <nav className="Header-section">
          <div className="logo">
            <div>
              <a href="/Portfolio/">Logo</a>
            </div>
          </div>
          <ul
            className="section-titles"
            onMouseMove={this.mouseMove}
            onMouseLeave={this.mouseleave}
          >
            <li>
              {" "}
              <a href="/Portfolio/#main">Home</a>
            </li>
            <li>
              <a href="/Portfolio/#About">About</a>
            </li>
            <li>
              <a href="/Portfolio/#skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="/Portfolio/#project">Projects</a>
            </li>
            <li>
              {" "}
              <a href="/Portfolio/#contact">Contact</a>
            </li>
          </ul>
          <div className="menu" onClick={this.menuButton}>
            =
          </div>
        </nav>
        <div className="menu-section" id="click">
          <ul>
            <li>Home</li>
            <li>
              <a href="/Portfolio/#About">About</a>
            </li>
            <li>
              <a href="/Portfolio/#skills">Skills</a>
            </li>
            <li>Contact</li>
            <li>Work</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
