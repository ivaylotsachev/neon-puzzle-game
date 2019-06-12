import React from "react";
import "./Rules.css";

const Rules = props => (
  <div className={props.show ? "Rules" : "Rules hidden"}>
    <h1 className="Rules_title">Game Rules</h1>
    <p className="Rules_text">
      <span>Lights Out </span>
      is a logic/puzzle game, played on a grid of individual lights, witch can
      either be a lit ot unlit.
    </p>
    <p className="Rules_text">
      The puzzle is won when all of the lights are turned off.
    </p>
    <p className="Rules_text">
      You can click on a cell to toggle light - but it also toggles the light
      above it, to the left, to the right and below it.
    </p>
    <p className="Rules_text">
      Cell on an edge or in the corner wont flip as many lights, since they are
      missing some neighbors. Good luck and enjoy the game!
    </p>
    <button onClick={() => props.toggleRules(false)} className="btn">
      close
    </button>
  </div>
);

export default Rules;
