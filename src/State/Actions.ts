const DECREMENT_TIME = 'DECREMENT_TIME';
const RESET = 'RESET';
const INCREMENT_TIME_LENGTH = 'INCREMENT_TIME_LENGTH';
const DECREMENT_TIME_LENGTH = 'DECREMENT_TIME_LENGTH';
const START_STOP = 'START_STOP';

interface Action {
  type: string;
}

function decrementTime(): Action {
  return {
    type: DECREMENT_TIME
  };
}

function reset(): Action {
  return {
    type: RESET
  };
}

type TimeLength = 'session' | 'break';

function incrementTimeLength(timeLength: TimeLength) {
  return {
    type: INCREMENT_TIME_LENGTH,
    timeLength: timeLength
  };
}

function decrementTimeLength(timeLength: TimeLength) {
  return {
    type: DECREMENT_TIME_LENGTH,
    timeLength: timeLength
  };
}

function startStop() {
  return {
    type: START_STOP
  };
}

// export default function mapDispatchToProps(dispatch: Function) {
//   return {
//     decrementTime: () => dispatch(decrementTime),
//     reset: () => dispatch(reset),
//     incrementTimeLength: timeLength => dispatch(incrementTimeLength(timeLength)),
//     decrementTimeLength: timeLength => dispatch(decrementTimeLength(timeLength)),
//     startStop: () => dispatch(startStop)
//   };
// }

export { 
  DECREMENT_TIME, RESET, INCREMENT_TIME_LENGTH, DECREMENT_TIME_LENGTH, START_STOP,
  decrementTime, reset, incrementTimeLength, decrementTimeLength, startStop
};