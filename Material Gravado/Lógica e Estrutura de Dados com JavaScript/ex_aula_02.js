/* 
1. -----------------
*/
function checkSignal(num) {
  let x = `${num} `

  if (num > 0) {
    x += 'é positivo'
  } else if (num < 0) {
    x += 'é negativo'
  }

  console.log(x)
}

checkSignal(-99)
checkSignal(42)
/* ---------------- */

/* 
2. ----------------
*/
function double(num) {
  return num * 2
}

console.log(double(5))
/* ---------------- */

/* 
3. ----------------
*/
function calculate(operacao, num1, num2) {
  switch (operacao) {
    case 'soma':
      return num1 + num2
    case 'subtracao':
      return num1 - num2
    case 'multiplicacao':
      return num1 * num2
    case 'divisao':
      return num1 / num2
  }
}

console.log(`${calculate('soma', 1, 1)}
${calculate('subtracao', 2, 1)}
${calculate('multiplicacao', 4, 5)}
${calculate('divisao', 10, 2)}
`)
/* ----------------- */
