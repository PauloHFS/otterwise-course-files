/* [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
imprime a sua tabuada do 1 ao 10.
OBS: Para melhorar a resolução desse problema, monte um código que aceite
um segundo valor e irá imprimir a tabuada de 1 até esse valor. */

const printTabuada = (number, until = 10) => {
  const operacoes = ['soma', 'subtracao', 'multiplicacao', 'divisao'];
  const operacoesDict = {
    soma: (a, b) => `${a} + ${b} = ${a + b}`,
    subtracao: (a, b) => `${a} - ${b} = ${a - b}`,
    multiplicacao: (a, b) => `${a} * ${b} = ${a * b}`,
    divisao: (a, b) => `${a} / ${b} = ${a / b}`,
  };

  console.log(`\t--- TABUADA DO ${number} ---`);
  for (let i = 0; i < operacoes.length; i++) {
    console.log(`-- ${operacoes[i]} --`);
    for (let j = 0; j <= until; j++) {
      console.log(operacoesDict[operacoes[i]](number, j));
    }
  }
};

printTabuada(2);
printTabuada(2, 5);
