/* Maria acabou de iniciar seu curso de graduação na faculdade de medicina e
precisa de sua ajuda para organizar os experimentos de um laboratório o qual
ela é responsável. Ela quer saber no final do ano, quantas cobaias foram
utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. Este
laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para
obter estas informações, ela sabe exatamente o número de experimentos que
foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas
em cada experimento.
Dado um array de objetos como entrada com todos os experimentos realizados
por Maria, sendo R:Rato, S:Sapo e C:Coelho. Faça uma função que recebe como
parâmetro um array e imprime no console um relatório com o total de cobaias,
o quanto foi utilizado de cada cobaia e a porcentagem de cada cobaia.
OBS: O percentual deve ser apresentado com dois dígitos após o ponto.

Exemplo de Entrada:
[
{ quantidade: 10, cobaia: "C" },
{ quantidade: 6, cobaia: "R" },
{ quantidade: 15, cobaia: "S" },
{ quantidade: 5, cobaia: "C" },
{ quantidade: 14, cobaia: "R" },
{ quantidade: 9, cobaia: "C" },
{ quantidade: 6, cobaia: "R" },
{ quantidade: 8, cobaia: "S" },
{ quantidade: 5, cobaia: "C" },
{ quantidade: 14, cobaia: "R" },
]

Exemplo de Saída:
Total: 92 cobaias
Total de coelhos: 29
Total de ratos: 40
Total de sapos: 23
Percentual de coelhos: 31.52%
Percentual de ratos: 43.48%
Percentual de sapos: 25.00% */

const entrada = [
  { quantidade: 10, cobaia: 'C' },
  { quantidade: 6, cobaia: 'R' },
  { quantidade: 15, cobaia: 'S' },
  { quantidade: 5, cobaia: 'C' },
  { quantidade: 14, cobaia: 'R' },
  { quantidade: 9, cobaia: 'C' },
  { quantidade: 6, cobaia: 'R' },
  { quantidade: 8, cobaia: 'S' },
  { quantidade: 5, cobaia: 'C' },
  { quantidade: 14, cobaia: 'R' },
];

let quantidadeCobaias = {
  coelhos: 0,
  ratos: 0,
  sapos: 0,
  total: 0,
};

for (let index = 0; index < entrada.length; index++) {
  const data = entrada[index];

  switch (data.cobaia) {
    case 'C':
      quantidadeCobaias.coelhos += data.quantidade;
      break;
    case 'R':
      quantidadeCobaias.ratos += data.quantidade;
      break;
    case 'S':
      quantidadeCobaias.sapos += data.quantidade;
      break;
  }

  quantidadeCobaias.total += data.quantidade;
}

//console.table(quantidadeCobaias);

console.log(
  `Total: ${quantidadeCobaias.total} cobaias\n` +
    `Total de coelhos: ${quantidadeCobaias.coelhos}\n` +
    `Total de ratos: ${quantidadeCobaias.ratos}\n` +
    `Total de sapos: ${quantidadeCobaias.sapos}\n` +
    `Percentual de coelhos: ${(
      (quantidadeCobaias.coelhos * 100) /
      quantidadeCobaias.total
    ).toFixed(2)}%\n` +
    `Percentual de ratos: ${(
      (quantidadeCobaias.ratos * 100) /
      quantidadeCobaias.total
    ).toFixed(2)}%\n` +
    `Percentual de sapos: ${(
      (quantidadeCobaias.sapos * 100) /
      quantidadeCobaias.total
    ).toFixed(2)}%`
);
