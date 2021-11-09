/* Crie um algoritmo que tem como entrada um número e imprime a sua
tabuada do 1 ao 10. */

function getTabuada(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} + ${i} = ${number + i}`);
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} - ${i} = ${number - i}`);
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} / ${i} = ${number / i}`);
  }
}

getTabuada(2);
