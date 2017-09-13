import { INITIAL_INPUT_STATE } from '../constants/initialState';

export default (state = INITIAL_INPUT_STATE, action) => {
  switch (action.type) {
    case 'INPUT_CHANGED_VALUE':
      return Object.assign({}, state, {
        [action.name]: Object.assign({}, state[action.name], { value: action.value })
      });
    case 'INPUT_VALUES_CHANGER':
      return Object.assign({}, state, {
        fio: Object.assign({}, state.fio, { value: action.value.fio || state.fio.value }),
        phone: Object.assign({}, state.phone, { value: action.value.phone || state.phone.value }),
        email: Object.assign({}, state.email, { value: action.value.email || state.email.value })
      });
    case 'INPUT_CLASSNAME_CHANGER':
      return Object.assign({}, state, {
        [action.name]: Object.assign(
          {},
          state[action.name],
          { isValid: action.isValid || false, isInvalid: action.isInvalid || false },
        )
      });
    default:
      return state;
  }
};
