import { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return <h1>{currentTime}</h1>;
}

export default Clock;
