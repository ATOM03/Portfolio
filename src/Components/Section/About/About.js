import React from "react";
import Card from "@mui/material/Card";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <Card sx={{ minWidth: 275 }}>
        <div className="About-section">
          <h1>About Me</h1>
          <p>
            Hi.I'm Priyanshu Jhaginia.First of all I would like to Thank you for
            visiting my Website.I am a Full-Stack Web Developer.I have done my
            Enginnering from USICT. I have been Working in React from past 7
            months and Node from about 5 months.I have done my internships in
            React Application from Edtyro Private Limited under Mr.Jevan Pant
            and in Albanero as Software Develpoer Intern .Apart from Web
            Development, I also Know Java and have created a basic Java IDE.Now
            I am learing Redux in Reacts and preparing for Interviews.My Goal is
            to get A Software Developer Job in Amazon Or Google.In my passtime I
            like to play guitar and PC games.
          </p>
        </div>
      </Card>
    </div>
  );
};
export default About;
