import Header from './components/Header';

import { ApiProvider } from './context/api-context';

import './App.css';
import List from './components/List';

function App() {
  return (
    <ApiProvider>
      <Header />
      <List />
    </ApiProvider>
  );
}

export default App;
