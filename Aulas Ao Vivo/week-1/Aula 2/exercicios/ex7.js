/*
Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
OBS: Triângulo Equilátero → Possui os 3 lados iguais;
    Triângulo Isósceles → Possui 2 lados iguais;
    Triângulo Escaleno → Possui 3 lados diferentes.
*/

const lados = [2, 1, 5];

let result = '';
if (lados[0] == lados[1] && lados[1] == lados[2]) {
  result += 'Triângulo Equilátero';
} else if (
  lados[0] == lados[1] ||
  lados[0] == lados[2] ||
  lados[1] == lados[2]
) {
  result += 'Triângulo Isósceles';
} else if (
  lados[0] != lados[1] &&
  lados[1] != lados[2] &&
  lados[2] != lados[0]
) {
  result += 'Triângulo Escaleno';
}

console.log(result);
