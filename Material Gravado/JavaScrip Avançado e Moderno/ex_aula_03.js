/* Ex.1 */
const imprime = arg => {
  console.log(arg)
}

imprime('alo')

/* Ex.2 */
const executeOnArray = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

executeOnArray([1, 2, 3, 4], imprime)

/* Ex.3 */
const calculate = op => {
  const operacao = {
    soma: (a, b) => a + b,
    subtrai: (a, b) => a - b,
    multiplica: (a, b) => a * b,
    divide: (a, b) => a / b,
  }

  return operacao[op]
}

console.log(calculate('multiplica')(3, 5))
