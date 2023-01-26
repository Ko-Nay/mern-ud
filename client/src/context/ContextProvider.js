import React, { useContext, useReducer } from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT } from '../components/actions/actions';
import reducer from '../components/reducers/reducers';

/* create a context: global state where all the data of App will be stored here*/
const AppContext = React.createContext();

const inititalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

/** context gives data to the Provider that can be accessed by the child comps by the useContext */
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext.Provider>
  );
};

/* a custom hook for the child comps when they take props from context*/
const useAppProvider = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppProvider, inititalState };
