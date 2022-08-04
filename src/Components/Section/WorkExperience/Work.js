import React from "react";
import Cards from "./Cards";
import tcs from "./TCS.webp";
import albanero from "./albanero.jpg";
import edtyro from "./edtyro.png";

import "./Work.css";

function Work(props) {
  return (
    <div>
      <h1>Work Experience</h1>
      <div className="Work" id="work">
        <Cards company="TCS" image={tcs} des="Working in TCS as a Developer" />
        <Cards
          company="Albanero"
          image={albanero}
          des="Worked with IAM(Identity Access Management).I used to build Webpages for albanero. I have also worked with the IAM team. I have also worked on the writing the script and testing the API.Also, Tested some of the API using Postman and learned about load balancing."
        />
        <Cards
          company="Edtryo"
          image={edtyro}
          des="I have learned Reactjs under the supervision of Mr.Jevan Pant. Also, I have built the Chatty-application under his guidance"
        />
      </div>
    </div>
  );
}

export default Work;
