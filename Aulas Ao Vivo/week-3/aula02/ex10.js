/* [REFATORAÇÃO] Dado a lista de compra a seguir, faça um programa que
imprime no console valor total. Atenção, o valor de cada item é unitário.
OBS: Para melhorar a resolução desse problema, monte um programa que
também consegue ter um outra entrada que corresponde a forma de
pagamento. Caso o pagamento seja em dinheiro, crie uma função que imprime
na tela o troco que deve ser dado ao cliente. */

const valorTotal = lista => {
  let total = 0;

  for (let index = 0; index < lista.length; index++) {
    const { quantidade, valor } = lista[index];
    total += quantidade * valor;
  }

  console.log(`R$ ${total}`);
};

valorTotal([
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'Água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 },
]);
