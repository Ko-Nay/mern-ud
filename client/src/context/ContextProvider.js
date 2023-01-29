import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from '../components/actions/actions';
import reducer from '../components/reducers/reducers';

/* create a context: global state where all the data of App will be stored here*/
const AppContext = React.createContext();

/*get user data form localstorage */
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const location = localStorage.getItem('location');

const inititalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? user : null,
  token: token,
  userLocation: location || '',
  jobLocation: location || '',
};

/** context gives data to the Provider that can be accessed by the child comps by the useContext */
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  /* save user data to the localStorage*/
  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('location', location);
  };

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user, token, location } = data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
          alertText,
        },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };
  clearAlert();

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        setupUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* a custom hook for the child comps when they take props from context*/
const useAppProvider = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppProvider, inititalState };
