/* Dado um array de entrada com o nome e as notas de avaliações dos alunos,
retorne uma lista com os alunos que tiraram 0 em todas as provas.
Exemplo de Entrada:
[
{nome: ,
notas: [ ]
] */

let alunos = [
  {
    nome: 'francisco 1°',
    notas: [1, 2, 3],
  },
  {
    nome: 'francisco 2°',
    notas: [0, 0, 0],
  },
  {
    nome: 'francisco 3°',
    notas: [1, 2, 3, 3, 4],
  },
];

// reduzir a array total para array alguns elementos = reduce

const alunosZerados = alunos.reduce((acc, aluno) => {
  let nextAcc = [...acc];

  if (aluno.notas.every(nota => nota === 0)) nextAcc.push(aluno);

  return nextAcc;
  /* 
  if (aluno.notas.reduce((sum, nota) => sum + nota, 0) == 0) {
    acc.push(aluno);
  }
  return acc; */
}, []);

console.log(alunosZerados);
