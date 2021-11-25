/* 
1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. 
Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. 
Use essa informação para gerar os CEP’s dentro dessa faixa.
*/
export const generateRandomCEP = () => {
  return Math.floor(Math.random() * (29099999 - 29000000 + 1) + 29000000);
};

export const getRandomCEPsArray = (length = 20) => {
  let CEPs = [];

  for (let i = 0; i < length; i++) {
    CEPs.push(generateRandomCEP());
  }

  return CEPs;
};
