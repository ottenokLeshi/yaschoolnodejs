export default (state = { disabled: false }, action) => {
  switch (action.type) {
    case 'BUTTON_ACCESS_CHANGER':
      return Object.assign({}, state, {
        disabled: action.disable
      });
    default:
      return state;
  }
};
