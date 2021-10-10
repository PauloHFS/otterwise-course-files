//Ex.1
const user = {
  name: 'Marília',
  age: 26,
  job: 'Dev',
}

for (let index = 0; index < Object.entries(user).length; index++) {
  const element = Object.entries(user)[index]
  console.log(`o valor da propriedade ${element[0]} é ${element[1]}`)
}

//Ex.2
const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

let result = ''
for (let i = 0; i < users.length; i++) {
  const user = Object.values(users[i])
  result += `${user[0]}${user[2] !== 'Dev' ? ' não' : ''} é dev. `
}
console.log(result)
