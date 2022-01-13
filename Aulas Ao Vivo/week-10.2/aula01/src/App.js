import { useState } from 'react';

import UserInfo from './components/UserInfo';

import api from './services/jsonplaceholderAPI';

const App = () => {
  const [Body, setBody] = useState({ endpoint: null, data: null });

  const handleButton = async () => {
    setBody({ endpoint: null, data: null });
    const endpoint =
      api.endpoints[Math.floor(Math.random() * api.endpoints.length)];
    setBody({ endpoint: endpoint, data: await api.get(endpoint) });
  };

  return (
    <main>
      <div>
        <h1>JSON Placeholder</h1>
        <button onClick={handleButton}>Send Request!</button>
      </div>
      {!!Body.endpoint &&
        (Body.endpoint === '/users' ? (
          <div>
            <h2>{Body.endpoint}</h2>
            {Body.data.map(userData => (
              <UserInfo
                endpoint={Body.endpoint}
                userData={userData}
                key={userData.id}
              />
            ))}
          </div>
        ) : (
          <div>
            <h2>{Body.endpoint}</h2>
            {JSON.stringify(Body.data)}
          </div>
        ))}
    </main>
  );
};

export default App;
