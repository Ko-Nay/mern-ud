import { CLEAR_ALERT, DISPLAY_ALERT } from '../actions/actions';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: 'Povide all fields',
      alertType: 'danger',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      alertText: '',
      alertType: '',
    };
  }

  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
