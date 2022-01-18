import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';

import Comment from './components/Comment/Comment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comments/:id" element={<Comment />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>PAGE NOT FOUND - 404</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
