import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  return <Route {...rest}>{false ? children : <Redirect to="/" />}</Route>;
};

export default PrivateRoute;
