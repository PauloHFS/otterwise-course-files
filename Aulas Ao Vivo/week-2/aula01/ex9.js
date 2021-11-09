/* Crie uma função chamada rockPaperScissorsWinner e 
recebe dois valores como parametro. Esses dois valores 
podem ser:
0: tesoura
1: papel
2: pedra
	Construa um algoritmo que recebe esses valores 
    randomicamente e printa na tela qual usuario ganhou, 
    se o usuario 1 ou usario 2
 */

function rockPaperScissorsWinner(usuario1move, usuario2move) {
  let diff = usuario1move - usuario2move;

  if (diff === 0) {
    console.log('Empate!');
  } else if (diff === 1) {
    console.log('Usuario 2 Ganhou!');
  } else if (diff === -1) {
    console.log('Usuario 1 Ganhou!');
  } else if (diff === 2) {
    console.log('Usuario 1 Ganhou!');
  } else if (diff === -2) {
    console.log('Usuario 2 Ganhou!');
  }
}

rockPaperScissorsWinner(0, 1);
rockPaperScissorsWinner(1, 0);
rockPaperScissorsWinner(0, 2);
rockPaperScissorsWinner(2, 0);
