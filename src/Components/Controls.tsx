import React from "react";
import { Provider, connect } from 'react-redux'
import store from "../State/Store";
import { decrementTime, reset, startStop } from "../State/Actions";
import "../styles.css";

function ControlsView(props) {
  const handle_click = () => {
    props.decrementTime();
  }

  return (
    <div id="controls">
      <button id="start_stop" onClick={handle_click}>
        <i className="fa fa-play fa-2x"></i>
        <i className="fa fa-pause fa-2x"></i>
      </button>
      <button id="reset">
        <i className="fa fa-refresh fa-2x"></i>
      </button>
    </div>
  );
}

export default function Controls(props) {
  function mapStateToProps(state: iState): object {
    return {
      isCountingDown: state.isCountingDown,
      currTime: state.currTime,
      sessionTime: state.timeLengths.session,
      breakTime: state.timeLengths.break
    };
  }

  function mapDispatchToProps(dispatch: Function) {
    return {
      decrementTime: () => {
        return dispatch(decrementTime())
        },
      reset: () => dispatch(reset()),
      startStop: () => dispatch(startStop())
    };
  }

  const ControlsWrapper = connect(mapStateToProps, mapDispatchToProps)(ControlsView);
  
  return (
    <Provider store={store}>
      <ControlsWrapper />
    </Provider>
  );
}