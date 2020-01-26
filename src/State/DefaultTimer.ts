interface Time {
  minutes: number;
  seconds: number;
};

interface iTimeLengths {
  session: number;
  break: number;
};

export interface iState {
  isCountingDown: boolean;
  currTime: Time;
  timeLengths: iTimeLengths
  sessionActive: boolean
};

export const DefaultState: iState = {
  isCountingDown: true,
  currTime: {
    minutes: 25,
    seconds: 0
  },
  timeLengths: {
    session: 25,
    break: 5
  },
  sessionActive: true
};

// export function mapStateToProps(state: iState): object {
//   return {
//     isCountingDown: state.isCountingDown,
//     currTime: state.currTime,
//     sessionTime: state.timeLengths.session,
//     breakTime: state.timeLengths.break,
//     sessionOrBreak: state.sessionActive ? 'session' : 'break'
//   };
// };