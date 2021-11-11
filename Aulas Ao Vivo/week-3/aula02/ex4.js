/* [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
tela todos os nomes (na mesma linha). */
const join = array => {
  let resultString = '';

  for (let index = 0; index < array.length; index++) {
    resultString += array[index];
    if (index !== array.length - 1) {
      resultString += ', ';
    }
  }

  return resultString;
};

console.log(join(['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']));
