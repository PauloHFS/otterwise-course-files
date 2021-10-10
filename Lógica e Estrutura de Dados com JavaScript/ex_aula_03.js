let myUser = {
  name: 'João',
  age: 18,
  email: 'joaozinho@gmail.com',
}

console.log(myUser)

console.log(['a', 'b', 'c', 'd'][2])

const dev = {
  name: 'Juca',
  projects: [
    {
      name: 'Projeto 1',
      start: '01/02/2021',
    },
    {
      name: 'Projeto 2',
      start: '03/03/2021',
    },
  ],
}

console.log(`${dev.name}
${JSON.stringify(dev.projects[1])}
${dev.projects[0].name}
`)

let arr = [1, -22, 3, 4, -5]
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 10
}

console.log(arr)
