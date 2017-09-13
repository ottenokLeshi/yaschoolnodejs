import { INITIAL_CONTAINER_STATE } from '../constants/initialState';

export default (state = INITIAL_CONTAINER_STATE, action) => {
  switch (action.type) {
    case 'RESULT_CONTAINER_CHANGER':
      return Object.assign({}, state, {
        value: action.value,
        progress: action.progress,
        error: action.error,
        success: action.success
      });
    default:
      return state;
  }
};
