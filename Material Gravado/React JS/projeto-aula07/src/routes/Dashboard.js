import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function Tasks() {
  const { singout } = useContext(AuthContext);

  const handleLogout = () => {
    console.log('logout');
    singout();
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et enim
        eros. Donec vel luctus lacus. Cras mi urna, fringilla eu egestas quis,
        commodo ut nunc. Nullam a nisl condimentum, placerat sapien ac,
        elementum ipsum. Pellentesque ex est, hendrerit dictum sagittis ac,
        ultrices nec risus. Maecenas non sodales lectus. Nam accumsan ex et elit
        interdum ultrices. Praesent libero libero, tempus a tincidunt a, ornare
        faucibus sem. Vivamus at orci semper, tristique ex eget, viverra risus.
        In pretium arcu sit amet imperdiet aliquet. Maecenas a ornare elit. Nunc
        congue rutrum mi nec convallis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin posuere nec metus sed dapibus. Donec fermentum,
        risus a mollis facilisis, libero nisl vehicula justo, eget maximus felis
        dui et massa. Pellentesque aliquam urna in ante pretium, id tincidunt
        nisi fermentum.
      </p>
      <Button onClick={handleLogout} variant="contained" color="primary">
        Sair
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Tasks;
