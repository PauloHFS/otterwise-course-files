/*
Crie uma função chamada checkSignal que possui um parâmetro e imprime
no console:
"x é positivo" se o número for positivo;
"x é negativo" se o número for negativo.
x deve ser substituído pelo número passado como argumento.
*/

function checkSignal(number) {
  let result = number + ' é ';
  if (number >= 0) {
    result += 'positivo';
  } else {
    result += 'negativo';
  }
  console.log(result);
}

checkSignal(2);
checkSignal(-1);
