/* [REFATORAÇÃO] Tendo como informação dois valores, valor1 e valor2, faça
um programa que imprima os dois valores no console. Após imprimir, troque a
informação de valor1 pela informação do valor2 e imprima no console
novamente.
 */

let [valor1, valor2] = [3, 15];

console.log(`Valor 1 = ${valor1}\nValor 2 = ${valor2}`);

[valor1, valor2] = [valor2, valor1];

console.log(`Valor 1 = ${valor1}\nValor 2 = ${valor2}`);
