import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';

import { signupSchema } from '../schemas/auth';

import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function Signup() {
  let history = useHistory();

  const { singin } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const handleSignup = data => {
    console.log('sigup: ', data);
    singin(data.email, data.password);
    toast('🔥Cadastrado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push('/dashboard');
  };

  return (
    <Form onSubmit={handleSubmit(handleSignup)}>
      <Title>Cadastro</Title>
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
      <Controller
        name="passwordConfirm"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            type="password"
            margin="dense"
            variant="outlined"
            label="Confirme a Senha"
            error={Boolean(errors.passwordConfirm)}
            helperText={errors.passwordConfirm?.message}
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
        Cadastrar
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

export default Signup;
