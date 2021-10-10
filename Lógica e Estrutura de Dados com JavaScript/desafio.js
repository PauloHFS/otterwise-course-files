function orderUser(usersArr) {
  for (let i = 1; i < usersArr.length; i++) {
    let temp_user = usersArr[i]
    let position = i - 1

    while (position >= 0) {
      if (usersArr[position].idade > temp_user.idade) {
        usersArr[position + 1] = usersArr[position]
        position--
      } else {
        break
      }
    }

    usersArr[position + 1] = temp_user
  }

  return usersArr
}

const users = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Márcia', idade: 23, cargo: 'back-end' },
  { nome: 'Victória', idade: 28, cargo: 'designer' },
]

console.log(orderUser(users))