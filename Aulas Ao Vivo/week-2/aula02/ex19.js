/* Crie um algoritmo que tem como entrada um array de strings e trata essas
string substituindo os números por letra de acordo com a tabela a seguir, além
disso, deve remover os espaços em branco no começo e fim da string, se
existirem. 
1 : i
3 : e
4 : a
5 : s
0 : o
*/

function fixStrings(arr) {
  for (let index = 0; index < arr.length; index++) {
    const phrase = arr[index];
    let newPhrase = '';

    for (let index1 = 0; index1 < phrase.length; index1++) {
      if (
        (index1 == 0 || index1 == phrase.length - 1) &&
        phrase[index1] === ' '
      ) {
        continue;
      }

      const caracter = phrase[index1];
      let newCaracter = '';

      switch (caracter) {
        case '1':
          newCaracter = 'i';
          break;
        case '3':
          newCaracter = 'e';
          break;
        case '4':
          newCaracter = 'a';
          break;
        case '5':
          newCaracter = 's';
          break;
        case '0':
          newCaracter = 'o';
          break;
        default:
          newCaracter = caracter;
      }
      newPhrase += newCaracter;
    }

    arr[index] = newPhrase;
  }
  return arr;
}

console.log([' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']);
console.log(
  fixStrings([' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt '])
);
