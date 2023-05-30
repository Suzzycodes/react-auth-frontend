import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ProtectedRoutes = ({ element: Component, ...rest }) => {
    const token = cookies.get('TOKEN');
  
    return (
      <Route
        {...rest}
        element={token ? <Component /> : <Navigate to="/" replace state={{ from: rest.location }} />}
      />
    );
  };

export default ProtectedRoutes;
