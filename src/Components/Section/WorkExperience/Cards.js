import React from "react";
import "./Card.css";
function Cards(props) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={props.image}
            alt="Avatar"
            style={{ width: "100%", height: "100%", backgroundColor: "white" }}
          />
        </div>
        <div class="flip-card-back">
          <h1>{props.company}</h1>
          <p>{props.des}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
