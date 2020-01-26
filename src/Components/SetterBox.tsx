import React from "react";
import "../styles.css";

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function SetterBox(props) {
  return (
    <div id={`${props.setterType}-box`} className="setter-box">
      <h2 id={`${props.setterType}-label`}>{capitalize(props.setterType)} Length</h2>
      <div className="time-setter-box">
        {/* Default 5 for break, 25 for session */}
        <h3 id={`${props.setterType}-length`}>5</h3>
        <button id={`${props.setterType}-increment`}>
          <i className="fas fa-arrow-up fa-2x"></i>
        </button>
        <button id={`${props.setterType}-decrement`}>
          <i className="fas fa-arrow-down fa-2x"></i>
        </button>
      </div>
    </div>
  );
}