/* Dado o array de objetos a seguir, crie um algoritmo que imprimirá no
console se o user é dev ou não, conforme a saída esperada à seguir.
Importante: DEVE ser na mesma linha. */

let users = [
  { name: 'Marília', age: 26, job: 'Dev' },
  { name: 'Juca', age: 21, job: 'RH' },
  { name: 'Flávia', age: 30, job: 'Financeiro' },
  { name: 'Sérgio', age: 24, job: 'Dev' },
];

let text = '';

for (let index = 0; index < users.length; index++) {
  text += `${users[index].name} ${
    users[index].job !== 'Dev' ? 'não ' : ''
  }é dev`;

  if (index != users.length - 1) {
    text += `, `;
  } else {
    text += `.`;
  }
}

console.log(text);
