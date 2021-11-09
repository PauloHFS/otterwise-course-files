/* Dado um array de nomes, faça um programa que tenha como entrada um
valor à ser pesquisado e retorne se o nome existe ou não no array. */

function isNameOnArray(name, arr) {
  let isNameOn = false;

  for (let index = 0; index < arr.length; index++) {
    if (name === arr[index]) {
      isNameOn = true;
    }
  }

  return isNameOn;
}

const nome = 'Carla';
const arr = [
  'Juliana',
  'Pedro',
  'Regina',
  'João',
  'Patrícia',
  'Gabriel',
  'Carlos',
  'Carla',
];

console.log(
  `O nome ${nome} ` +
    (isNameOnArray(nome, arr) ? '' : 'não ') +
    'existe no Array!'
);
