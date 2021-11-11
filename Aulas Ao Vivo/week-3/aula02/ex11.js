/* [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
Humanos precisava organizar algumas informações a respeito dos funcionários.
Para que isso fosse possível, ele precisava criar um programa que entregasse a
lista de funcionalidades abaixo.
Tendo como entrada um array de objetos crie funções que realizam as seguintes
operações:
● Ordena o Array em ordem crescente por idade;
● Ordena o Array em ordem decrescente por idade;
● Ordena o Array em ordem crescente por salário;
● Ordena o Array em ordem decrescente por salário;
● Ordena o Array em ordem crescente por senioridade;
● Ordena o Array em ordem decrescente por senioridade;
OBS: Tente melhorar esse exercício utilizando os conhecimentos novos que você
aprendeu na aula anterior. */

//--------------------------------------------------------------------
//Dados de Entrada
const users = [
  { nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' },
];
console.table(users);

//Definição dos pesos da senioridades para ordenação
const senioridadePesos = {
  estagio: 0,
  junior: 1,
  pleno: 2,
  senior: 3,
};
//--------------------------------------------------------------------

/*
  Rertona a array ordenada baseada no atributo de acordo com o comparador passado como parâmetro
*/
function bubbleSort(arr, atribute, comparador) {
  let arrayResult = [...arr];

  hadSwap = true;
  while (hadSwap) {
    hadSwap = false;
    for (let index = 0; index < arrayResult.length; index++) {
      if (index == arrayResult.length - 1) continue;
      if (
        comparador(
          arrayResult[index][atribute],
          arrayResult[index + 1][atribute]
        ) == 1
      ) {
        [arrayResult[index], arrayResult[index + 1]] = [
          arrayResult[index + 1],
          arrayResult[index],
        ];
        hadSwap = true;
      }
    }
  }

  return arrayResult;
}

//Comparadores
const comparadores = {
  crescente: (a, b) => (a > b ? 1 : a < b ? -1 : 0),
  decrescente: (a, b) => (a < b ? 1 : a > b ? -1 : 0),
  crescentePonderado: pesos => (a, b) =>
    comparadores.crescente(pesos[a], pesos[b]),
  decrescentePonderado: pesos => (a, b) =>
    comparadores.decrescente(pesos[a], pesos[b]),
};

//--------------------------------------------------------------------

// Armazena os resultados das ordenações
const resultados = [
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELA IDADE:',
    array: bubbleSort(users, 'idade', comparadores.crescente),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELA IDADE:',
    array: bubbleSort(users, 'idade', comparadores.decrescente),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO SALARIO:',
    array: bubbleSort(users, 'salario', comparadores.crescente),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO SALARIO:',
    array: bubbleSort(users, 'salario', comparadores.decrescente),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELA SENIORIDADE:',
    array: bubbleSort(
      users,
      'senioridade',
      comparadores.crescentePonderado(senioridadePesos)
    ),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELA SENIORIDADE:',
    array: bubbleSort(
      users,
      'senioridade',
      comparadores.decrescentePonderado(senioridadePesos)
    ),
  },
];

for (let index = 0; index < resultados.length; index++) {
  const { text, array } = resultados[index];
  console.log(
    '--------------------------------------------------------------------'
  );
  console.log(text);
  console.table(array);
}
