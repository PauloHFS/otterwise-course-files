import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute>
          <Route path="/dashboard" component={Dashboard} />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
