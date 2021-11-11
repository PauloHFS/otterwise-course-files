/* [REFATORAÇÃO] Dado um array de números como entrada, faça um
programa que multiplique todos os valores por 10.
OBS: Para melhorar a resolução desse problema, monte um programa que
recebe como parâmetro o valor pelo qual os valores do array devem ser
multiplicados. */

const multiplica = (array, fator = 10) => {
  for (let index = 0; index < array.length; index++) array[index] *= fator;
  return array;
};

console.log(multiplica([1, 2, 3, 4, 5, 6]));
