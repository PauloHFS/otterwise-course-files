import { useState, useReducer } from 'react';

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'IDLE':
    case 'PENDING':
    case 'ERROR':
    case 'SUCCESS':
      return action.type;
    default:
      return state;
  }
};

function App() {
  const [api_url, setapi_url] = useState(
    'https://jsonplaceholder.typicode.com/'
  );
  const [status, dispatch] = useReducer(reducer, 'IDLE');

  const handleButtonClick = async () => {
    dispatch({ type: 'PENDING' });
    try {
      const data = await fetch(api_url);
      setTimeout(() => {
        dispatch({ type: 'SUCCESS' });
        console.log(data);
      }, 1000);
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };

  const handleResetButtonClick = () => {
    dispatch({ type: 'IDLE' });
  };

  return (
    <main className="main">
      <input type="text" value={api_url} className="input__large" />
      <button
        onClick={handleButtonClick}
        className={`button button__large button__${
          status === 'PENDING'
            ? 'yellow'
            : status === 'SUCCESS'
            ? 'green'
            : status === 'ERROR'
            ? 'red'
            : 'gray'
        }`}
      >
        {status}
      </button>
      <button onClick={handleResetButtonClick} className="button">
        Reset
      </button>
    </main>
  );
}

export default App;
