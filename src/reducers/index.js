import { combineReducers } from "redux";
import ChangedInput from "./reducerChangedInput";
import containerRequest from "./reducerRequest";
import buttonAccess from "./reducerButton";

const rootReducer = combineReducers({
  inputs: ChangedInput,
  containerValue: containerRequest,
  buttonStatus: buttonAccess
});

export default rootReducer;
