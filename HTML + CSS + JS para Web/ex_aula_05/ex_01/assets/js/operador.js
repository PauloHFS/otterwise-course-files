window.onload = () => {
  const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => a / b,
  }

  document.querySelector('#btn').addEventListener('click', event => {
    event.preventDefault()
    const numbers = document.getElementsByTagName('input')
    const operador = document.querySelector('#operacoes').value
    const historico = document.querySelector('#historico')

    const a = parseFloat(numbers[0].value),
      b = parseFloat(numbers[1].value)

    const entryOp = document.createTextNode(
      `${a}, ${b}, ${operador} = ${operacoes[operador](a, b)}`
    )
    // historico.appendChild(document.createElement('div').appendChild(entryOp))

    const newContent = document.createTextNode(entryOp.textContent)
    const newDiv = document.createElement('div')

    newDiv.appendChild(newContent)

    historico.appendChild(newDiv)
  })
  //   const historico = document.querySelector('#historico')
}
