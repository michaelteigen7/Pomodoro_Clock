import React from "react";
import "./styles.css";
import SetterBox from "./Components/SetterBox";
import Timer from "./Components/Timer";
import Controls from "./Components/Controls";

export default function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div id="setters">
        <SetterBox setterType="session"/>
        <SetterBox setterType="break"/>
      </div>
      <div id="main-display">
        <Timer />
        <Controls />
      </div>
    </div>
  );
}
