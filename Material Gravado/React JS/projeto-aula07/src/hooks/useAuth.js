import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const login = (email, senha) => {
    /*  const { credenciais } = JSON.stringify(localStorage.getItem('credenciais'));

    for (let i = 0; i < credenciais.length; i++) {
      const { email: login, senha: password } = credenciais[i];
      if (email === login && senha === password) {
        setAuthentication(true);
      }
    } */
    if (localStorage.getItem(email) === senha) {
      setAuthentication(true);
      console.log('LOGADO');
    }
  };

  const singout = () => {
    setAuthentication(false);
    console.log('SAIU');
  };

  const singin = (email, senha) => {
    /* const { credenciais } = JSON.parse(localStorage.getItem('credenciais'));

    credenciais.push({ email: email, senha: senha });

    localStorage.setItem('credenciais', JSON.stringify({ credenciais }));
     */

    localStorage.setItem(email, senha);
    setAuthentication(true);
    console.log('CADASTRADO');
  };

  return { isAuthenticated, login, singout, singin };
};

export default useAuth;
