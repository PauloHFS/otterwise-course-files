import { Routes, Route } from 'react-router-dom';

import PublicPage from './routes/PublicPage';
import ProtectedPage from './routes/ProtectedPage';
import Login from './routes/Login';
import Posts from './routes/Posts';
import Post from './routes/Post';

import Layout from './components/Layout';

import { AuthProvider, RequireAuth } from './context/auth-context';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route
            path="/posts"
            element={
              <RequireAuth>
                <Posts />
              </RequireAuth>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <RequireAuth>
                <Post />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
