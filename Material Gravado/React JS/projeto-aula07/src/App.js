import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

import { AuthContext } from './context/authContext';

import useAuth from './hooks/useAuth';

function App() {
  return (
    <AuthContext.Provider value={useAuth()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute>
            <Route path="/dashboard" component={Dashboard} />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
