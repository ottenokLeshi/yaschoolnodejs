import { combineReducers } from "redux";
import ChangedInput from "./reducerChangedInput";
import containerRequest from "./reducerRequest";

const rootReducer = combineReducers({
  inputs: ChangedInput,
  containerValue: containerRequest
});

export default rootReducer;
