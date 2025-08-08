import { combineReducers } from "redux";
import ReducerTopmenu from "./Topmenu/ReducerTopmenu";

const rootreducer = combineReducers({
  topmenu: ReducerTopmenu,
});
export default rootreducer;
