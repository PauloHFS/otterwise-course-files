import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './routes/PrivateRoute';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

import { AuthContext } from './context/authContext';

import useAuth from './hooks/useAuth';

function App() {
  return (
    <AuthContext.Provider value={useAuth()}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
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
