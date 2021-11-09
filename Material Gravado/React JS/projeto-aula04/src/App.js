import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Comment from './routes/Comment';

import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <>
        <Header />

        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/comments/:commentID" element={<Comment />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
