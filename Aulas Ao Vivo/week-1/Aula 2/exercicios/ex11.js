let valor = 576;

/* const notas = [100, 50, 20, 10, 5, 2, 1];
const quant = [0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < notas.length; index++) {
  const nota = notas[index];

  while (valor >= nota) {
    valor -= nota;
    quant[index] += 1;
  }
}

for (let index = 0; index < notas.length; index++) {
  console.log(quant[index] + ' nota(s) de R$ ' + notas[index]);
} */

console.log(parseInt(valor / 100) + ' nota(s) de R$ 100');
valor = valor % 100;
console.log(parseInt(valor / 50) + ' nota(s) de R$ 50');
valor = valor % 50;
console.log(parseInt(valor / 20) + ' nota(s) de R$ 20');
valor = valor % 20;
console.log(parseInt(valor / 10) + ' nota(s) de R$ 10');
valor = valor % 10;
console.log(parseInt(valor / 5) + ' nota(s) de R$ 5');
valor = valor % 5;
console.log(parseInt(valor / 2) + ' nota(s) de R$ 2');
valor = valor % 2;
console.log(parseInt(valor / 1) + ' nota(s) de R$ 1');
valor = valor % 1;
