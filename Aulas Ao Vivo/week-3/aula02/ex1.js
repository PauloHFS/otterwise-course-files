/* [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
relação de notas necessárias.
*/

const decomporValorNotas = valor => {
  const notas = [100, 50, 20, 10, 5, 2, 1];
  let decomposicao = '';

  for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];

    decomposicao += `${parseInt(
      (valor - (valor % nota)) / nota
    )} nota(s) de R$ ${parseFloat(nota)}`;
    valor = valor % nota;

    if (index != notas.length - 1) {
      decomposicao += '\n';
    }
  }

  return decomposicao;
};

console.log(decomporValorNotas(576));
