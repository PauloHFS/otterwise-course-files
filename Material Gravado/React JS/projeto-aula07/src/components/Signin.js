import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';

import { signinSchema } from '../schemas/auth';

import { AuthContext } from '../context/authContext';

function Signin() {
  let history = useHistory();

  const { login } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const handleSignin = data => {
    console.log('sigin: ', data);
    login(data.email, data.password, isCadastrado => {
      let msg;
      if (isCadastrado) {
        msg = '🔥Logado com sucesso!';
      } else {
        msg = '🛑Login não efetuado! Usuario não está cadastrado!';
      }
      toast(msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      if (isCadastrado) history.push('/dashboard');
    });
  };

  return (
    <Form onSubmit={handleSubmit(handleSignin)}>
      <Title>Login</Title>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            margin="dense"
            variant="outlined"
            label="Email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            type="password"
            margin="dense"
            variant="outlined"
            label="Senha"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            {...field}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        Entrar
      </Button>
    </Form>
  );
}

const Title = styled.h2`
  align-self: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 240px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
`;

export default Signin;
