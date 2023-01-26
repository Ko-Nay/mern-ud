import React from 'react';
import { useAppProvider } from '../../context/ContextProvider';

const Alert = () => {
  const { alertType, alertText } = useAppProvider();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
