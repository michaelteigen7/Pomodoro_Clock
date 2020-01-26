import { 
  DECREMENT_TIME, RESET, INCREMENT_TIME_LENGTH, DECREMENT_TIME_LENGTH, 
  START_STOP } from "./Actions";
import { DefaultState, iState } from "./DefaultTimer";

const timerReducer = (state: iState = DefaultState, action: Action): iState => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case DECREMENT_TIME:
      if (!newState.isCountingDown) return state;
      if (newState.currTime.minutes <= 0 && newState.currTime.seconds <= 0) {
        if (newState.sessionActive) {
          newState.sessionActive = false;
          newState.currTime.minutes = newState.timeLengths.break;
          newState.currTime.seconds = 0;
        } 
        else {
          this.isCountingDown = false;
          newState.sessionActive = true;
        }
      }
      else if (newState.currTime.seconds <= 0) {
        newState.currTime.minutes--;
        newState.currTime.seconds = 59;
      }
      else {
        newState.currTime.seconds--;
      }
      return newState;
    
    case RESET:
      newState = DefaultState;
      return newState

    case INCREMENT_TIME_LENGTH:
      newState.timeLengths[action.minutes]++;
      return newState;

    case DECREMENT_TIME_LENGTH:
      newState.timeLengths[action.minutes]--;
      return newState;

    case START_STOP:
      newState.isCountingDown = !newState.isCountingDown;
      return newState;

    default:
      return state;
  }
}

export default timerReducer;