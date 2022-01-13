import Button from './Button';

import { useApi } from '../context/api-context';

export default function Header() {
  const { state, dispatch } = useApi();

  return (
    <header>
      <h1>{state.status}</h1>
      <Button endpoint="/users">/users</Button>
      <Button endpoint="/todos">/todos</Button>
      <Button endpoint="/posts">/posts</Button>
      <button onClick={() => dispatch({ type: 'IDLE' })}>Reset</button>
    </header>
  );
}
