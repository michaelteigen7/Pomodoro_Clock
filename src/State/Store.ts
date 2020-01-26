import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import timerReducer from "./TimerReducer";

const store = createStore(timerReducer, applyMiddleware(thunk));

export default store;