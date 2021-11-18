/* [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
‘Carla’
Exemplo de Saída:
O nome Carla existe no Array. */

let names = [
  'Juliana',
  'Pedro',
  'Regina',
  'João',
  'Patrícia',
  'Gabriel',
  'Carlos',
  'Carla',
];
let nome = 'Carla';

// procurar um elemento existe na array = some, find

console.log(
  `O nome ${nome}${
    names.some(value => value === nome) ? '' : ' não'
  } existe no Array.`
);
