/* Crie uma função que conte quantas palavras existem na frase 
que for passada como parâmetro (dica: utilizem o método split de string)
 */

function wordsCount(phrase) {
  return phrase.split(' ').length;
}

console.log(wordsCount('hello world'));
