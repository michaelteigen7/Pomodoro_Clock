import React, { useEffect, useState } from "react";
import { Provider, connect } from 'react-redux'
import store from "../State/Store";
import "../styles.css";

function Presentational(props) {
  const formatTime = (time: object): string => {
    const timeArr: string[] = (
      [time.minutes, time.seconds].map(num => {
        return num >= 10 ? num : "0" + num;
      })
    );
    return `${timeArr[0]}:${timeArr[1]}`;
  }

  const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const time, setTime = useState(props.currTime);

  useEffect(() => {
    if (props.currTime !== time) {
      setTime(props.currTime);
    }
  })
  
  return (
    <div id="timer-box">
      <h2 id="timer-label">{capitalize(props.sessionOrBreak)}</h2>
      <h3 id="time-left">{formatTime(props.currTime)}</h3>
    </div>
  );
}

export default function Time() {
  function mapStateToProps(state: iState): object {
    return {
      currTime: state.currTime,
      sessionOrBreak: state.sessionActive ? 'session' : 'break'
    };
  }

  function mapDispatchToProps(dispatch: Function) {
    return {};
  }

  const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
  
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}