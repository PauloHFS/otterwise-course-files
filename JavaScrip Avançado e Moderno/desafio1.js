const colaboradores = [
  {
    name: 'Juca',
    idade: 25,
    cargo: 'front-end',
  },
  {
    name: 'Márcia',
    idade: 23,
    cargo: 'back-end',
  },
  {
    name: 'Vitória',
    idade: 28,
    cargo: 'designer',
  },
  {
    name: 'Fernando',
    idade: 19,
    cargo: 'estagiario',
  },
  {
    name: 'Fabiane',
    idade: 25,
    cargo: 'back-end',
  },
  {
    name: 'Jéssica',
    idade: 23,
    cargo: 'front-end',
  },
]

/* 1. */
console.log('1.')
//a
console.log('A:')
const numFuncionarios = {}
colaboradores.forEach(colaborador => (numFuncionarios[colaborador.cargo] = 0))
colaboradores.forEach(colaborador => numFuncionarios[colaborador.cargo]++)
console.log(numFuncionarios)

//b
console.log('B:')
colaboradores
  .sort((a, b) => -1 * (a.idade - b.idade))
  .forEach(colaborador => console.log(JSON.stringify(colaborador)))

//c
console.log('C:')
const prioridade = {
  estagiario: 1,
  'front-end': 2,
  'back-end': 3,
  designer: 4,
}
colaboradores
  .sort((a, b) => prioridade[a.cargo] - prioridade[b.cargo])
  .forEach(colab => console.log(JSON.stringify(colab)))

//d
console.log('D:')
colaboradores
  .sort((a, b) =>
    a.idade !== b.idade
      ? a.idade - b.idade
      : prioridade[a.cargo] - prioridade[b.cargo]
  )
  .forEach(colab => console.log(JSON.stringify(colab)))

/* 2. */
console.log('2.')
const installment = [
  { installment_number: 1, value: 123.45, status: 'Pago' },
  { installment_number: 2, value: 139.88, status: 'Pago' },
  { installment_number: 3, value: 123.45, status: 'Pago' },
  { installment_number: 4, value: 182.37, status: 'Aberto' },
  { installment_number: 5, value: 133.93, status: 'Aberto' },
]

//a
console.log('A:')
console.log(
  installment.reduce((acc, parcela) => acc + parcela.value, 0).toFixed(2)
)

//b
console.log('B:')
const total = {
  total_paid: 0,
  total_open: 0,
}
installment.forEach(installment =>
  installment.status === 'Pago'
    ? (total.total_paid += installment.value)
    : (total.total_open += installment.value)
)
console.log(total)

//c
console.log('C:')
installment
  .sort((a, b) => b.value - a.value)
  .forEach(parcela => console.log(parcela))

//d
console.log('D:')
installment
  .sort((a, b) =>
    a.value !== b.value
      ? a.value - b.value
      : b.installment_number - a.installment_number
  )
  .forEach(e => console.log(JSON.stringify(e)))
