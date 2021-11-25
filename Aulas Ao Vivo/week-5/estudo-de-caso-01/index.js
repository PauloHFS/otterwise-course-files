/* 
2. Crie um programa que recebe uma lista de CEP’s e devolve um arquivo JSON para cada CEP 
consultado com as informações de logradouro, bairro, localidade, uf e o CEP consultado.
Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api. 
*/
import fs from 'fs';

import fetch from 'node-fetch';

import { getRandomCEPsArray } from './utils/cep.utils.js';

const cepsArray = getRandomCEPsArray();

try {
  const cepsData = await Promise.all(
    cepsArray.map(cep => {
      return fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(value => value.json())
        .catch(
          // linha necessária pq meu isp tá me zoando
          error => error
        );
    })
  );

  fs.writeFileSync(
    'data.json',
    JSON.stringify(
      cepsData.reduce((acc, data) => {
        let newAcc = [...acc];

        // verificação que é feita para rodar na minha rede pq meu isp tá me zoando
        const { erro, cep } = data;
        if (!erro && cep != undefined) {
          const { logradouro, bairro, localidade, uf, cep } = data;
          newAcc.push({ logradouro, bairro, localidade, uf, cep });
        }

        return newAcc;
      }, [])
    )
  );
} catch (error) {
  console.error(error);
}
