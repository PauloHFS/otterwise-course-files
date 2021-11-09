//Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano
function isEven(num) {
  let isEven = false;
  if (num % 2 == 0) {
    isEven = true;
  }
  return isEven;
}

console.log(isEven(2));
console.log(isEven(3));
