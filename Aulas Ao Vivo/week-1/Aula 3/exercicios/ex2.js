/* Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console. */

const a = 1,
  b = 2,
  c = 3;

let ordem = '';

if (a <= b && b <= c) {
  ordem = a + '\n' + b + '\n' + c;
} else if (a <= c && c <= b) {
  ordem = a + '\n' + c + '\n' + b;
} else if (b <= a && a <= c) {
  ordem = b + '\n' + a + '\n' + c;
} else if (b <= c && c <= a) {
  ordem = b + '\n' + c + '\n' + a;
} else if (c <= a && a <= b) {
  ordem = c + '\n' + a + '\n' + b;
} else {
  ordem = c + '\n' + b + '\n' + a;
}

console.log(ordem);
