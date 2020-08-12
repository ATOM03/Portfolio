import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";

class App extends Component {
  cursor(e) {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
  }
  render() {
    return (
      <div onMouseMove={this.cursor}>
        <div className="cursor"></div>
        <Main></Main>
        <Header></Header>
        <Section></Section>
      </div>
    );
  }
}

export default App;
