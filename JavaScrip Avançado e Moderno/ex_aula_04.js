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

const nomes = colaboradores.map(currentValue => currentValue.name)

console.log(nomes)

const front_end_devs = colaboradores.filter(
  currentValue => currentValue.cargo === 'front-end'
)

console.log(front_end_devs)

console.log(colaboradores.find(currentValue => currentValue.idade > 23))

console.log(
  'Todos são maiores de 18?',
  colaboradores.every(currentValue => currentValue.idade > 18)
)

console.log(
  'Há algum estagiário?',
  colaboradores.some(currentValue => currentValue.cargo === 'estagiario')
)

console.log(
  colaboradores.reduce((acc, currentValue) => {
    return acc + currentValue.idade
  }, 0)
)

console.log(JSON.stringify(colaboradores.sort((a, b) => a.idade - b.idade)))
