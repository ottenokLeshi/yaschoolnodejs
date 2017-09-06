import { INITIAL_INPUT_STATE } from "../constants/initialState";

export default (state = INITIAL_INPUT_STATE, action) => {
  switch(action.type) {
    case "INPUT_CHANGED_VALUE":
      return Object.assign({}, state, {
        [action.name]: Object.assign({}, state[action.name], {value: action.value})
      });
      break;
    case "INPUT_VALUES_CHANGER":
      return Object.assign({}, state, {
        "fio": Object.assign({}, state.fio, {value: action.value.fio}),
        "phone": Object.assign({}, state.phone, {value: action.value.phone}),
        "email": Object.assign({}, state.email, {value: action.value.email})
      });
      break;
    case "INPUT_CLASSNAME_CHANGER":
      return Object.assign({}, state, {
        [action.name]: Object.assign({}, state[action.name], {isValid: action.isValid})
      });
      break;
  }

  return state;
};