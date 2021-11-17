import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const login = (email, senha, callback) => {
    let credenciais = localStorage.getItem('credenciais');
    credenciais = JSON.parse(credenciais);

    const isCadastrado = credenciais.some(
      ({ email: login, senha: password }) => {
        return login === email && password === senha;
      }
    );

    if (isCadastrado) {
      setAuthentication(true);
    }

    callback(isCadastrado);
  };

  const singout = () => {
    setAuthentication(false);
    console.log('SAIU');
  };

  const singin = (email, senha) => {
    let credenciais = localStorage.getItem('credenciais');

    credenciais = JSON.parse(credenciais);
    credenciais.push({ email: email, senha: senha });
    credenciais = JSON.stringify(credenciais);

    console.log(credenciais);

    localStorage.setItem('credenciais', credenciais);
    setAuthentication(true);
  };

  return { isAuthenticated, login, singout, singin };
};

export default useAuth;
