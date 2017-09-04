import { INITIAL_CONTAINER_STATE } from "../constants/initialState";

export default (state = INITIAL_CONTAINER_STATE, action) => {
  switch(action.type) {
    case "RESULT_CONTAINER_CHANGER":
      return Object.assign({}, state, {
        className: action.className,
        value: action.value
      });
      break;
  }

  return state;
};