/* [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array. */
const average = arrayNotas => {
  if (arrayNotas.length == 0) return 0;

  let sum = 0;

  for (let index = 0; index < arrayNotas.length; index++) {
    sum += arrayNotas[index];
  }

  return sum / arrayNotas.length;
};

console.log(average([6, 7, 8]));
