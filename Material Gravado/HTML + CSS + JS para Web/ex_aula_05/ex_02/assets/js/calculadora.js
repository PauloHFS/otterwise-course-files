let needToBeClear = false

const buttons = [
  {
    symbol: '9',
  },
  {
    symbol: '8',
  },
  {
    symbol: '7',
  },
  {
    symbol: '+',
  },
  {
    symbol: '-',
  },
  {
    symbol: '=',
  },
  {
    symbol: '6',
  },
  {
    symbol: '5',
  },
  {
    symbol: '4',
  },
  {
    symbol: '*',
  },
  {
    symbol: '/',
  },

  {
    symbol: 'AC',
  },
  {
    symbol: '3',
  },
  {
    symbol: '2',
  },
  {
    symbol: '1',
  },
]

function createButtons() {
  const teclado = document.createElement('div')
  teclado.id = 'teclado'

  buttons.forEach(button => {
    const buttonElement = document.createElement('input')
    let onClick = null

    buttonElement.className = 'botao'
    buttonElement.type = 'button'
    buttonElement.value = button.symbol

    if (button.symbol === 'AC') {
      onClick = () => clearDisplay()
    } else if (button.symbol === '=') {
      onClick = () => {
        let solution = calc()
        clearDisplay()
        printOnDisplay(solution)
        needToBeClear = true
      }
    } else {
      onClick = () => {
        if (needToBeClear) {
          clearDisplay()
          needToBeClear = false
        }
        printOnDisplay(button.symbol)
      }
    }

    buttonElement.addEventListener('click', onClick)

    teclado.appendChild(buttonElement)
  })

  console.log('Teclado construido')
  document.querySelector('form').appendChild(teclado)
}

function printOnDisplay(value) {
  const display = document.querySelector('#tela')
  display.value += value
}

function calc() {
  const display = document.querySelector('#tela')

  return eval(display.value)
}

function clearDisplay() {
  const display = document.querySelector('#tela')
  console.log(display.value)
  display.value = ''
}

window.onload = () => {
  createButtons()
}
