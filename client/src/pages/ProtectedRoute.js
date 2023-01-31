import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppProvider } from '../context/ContextProvider';

const ProtectedRoute = ({ children }) => {
  const { user } = useAppProvider();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
