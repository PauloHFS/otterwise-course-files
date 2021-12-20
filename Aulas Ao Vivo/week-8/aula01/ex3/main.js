const calculadora = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

const operadores = {
  somar: '+',
  subtrair: '-',
  multiplicar: 'x',
  dividir: ':',
};

window.onload = () => {
  const butao = document.querySelector('button');

  const resultados = document.querySelector('#resultados');

  butao.addEventListener('click', () => {
    const [inputA, inputB] = document.querySelectorAll('input');
    const operacao = document.querySelector('select').value;

    const result = document.createElement('p');
    result.innerHTML = `${inputA.value} ${operadores[operacao]} ${
      inputB.value
    } = ${calculadora[operacao](
      Number.parseInt(inputA.value),
      Number.parseInt(inputB.value)
    )}`;

    resultados.appendChild(result);
  });
};
