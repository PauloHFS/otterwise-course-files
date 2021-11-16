import { useState } from 'react';

const useAuth = () => {
  const [authentication, setAuthentication] = useState();

  const login = ({ email, senha }) => {
    const { credenciais } = JSON.stringify(localStorage.getItem('credenciais'));

    for (let i = 0; i < credenciais.length; i++) {
      const { email: login, senha: password } = credenciais[i];
      if (email === login && senha === password) {
        setAuthentication(true);
      }
    }
  };

  const logout = () => {
    setAuthentication(false);
  };

  const singin = (email, senha) => {
    const { credenciais } = JSON.parse(localStorage.getItem('credenciais'));

    credenciais.push({ email: email, senha: senha });

    localStorage.setItem('credenciais', JSON.stringify({ credenciais }));
    setAuthentication(true);
  };

  return { authentication, login, logout, singin };
};

export default useAuth;
