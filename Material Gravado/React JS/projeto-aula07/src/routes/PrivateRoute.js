import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route {...rest}>{isAuthenticated ? children : <Redirect to="/" />}</Route>
  );
};

export default PrivateRoute;
