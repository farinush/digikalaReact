import { combineReducers } from "redux";
import ReducerHeader from "./Topmenu/ReducerTopmenu";

const rootreducer = combineReducers({
  topmenu: ReducerTopmenu,
});
export default rootreducer;
