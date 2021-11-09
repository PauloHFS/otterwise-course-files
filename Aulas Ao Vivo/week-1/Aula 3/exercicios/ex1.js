// Faça um programa que receba de entrada três valores e mostre no console
// a soma dos dois maiores.

const a = 1,
  b = 2,
  c = 3;

let sum = '';
if ((a >= b && b >= c) || (b >= a && a >= c)) {
  sum = a + ' + ' + b + ' = ' + (a + b);
} else if ((a >= c && c >= b) || (c >= a && a >= b)) {
  sum = a + ' + ' + c + ' = ' + (a + c);
} else {
  sum = b + ' + ' + c + ' = ' + (b + c);
}

console.log(sum);
