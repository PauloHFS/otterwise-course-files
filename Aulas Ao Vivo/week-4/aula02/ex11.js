/* [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de
strings e trata essas string substituindo os números por letra de acordo com a
tabela a seguir, além disso, deve remover os espaços em branco no começo e
fim da string, se existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
Exemplo entrada:
[' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
Exemplo Saída:
[ 'helloworld', 'webdeveloper', 'otterwise', 'javascript' ] */

let arr = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt '];

// alterar a array = map

arr = arr.map(value => {
  let caracteres = [
    { id: 1, caracter: 'i' },
    { id: 3, caracter: 'e' },
    { id: 4, caracter: 'a' },
    { id: 5, caracter: 's' },
    { id: 0, caracter: 'o' },
  ];
  value = value.trim();
  caracteres.forEach(({ id, caracter }) => {
    console.log(`${id} ${caracter}`);
    value = value.replace(new RegExp(`${id}`, 'g'), caracter);
  });
  return value;
});

console.log(arr);
