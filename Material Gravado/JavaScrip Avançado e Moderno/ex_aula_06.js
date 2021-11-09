// Ex.1
console.log('-- Ex.1 --')
const user = {
  nome: 'Usuário',
  idade: 25,
  endereco: {
    rua: 'Rua central',
    numero: 1,
  },
  projetos: ['Projeto 1', 'Projeto 2'],
}
// a:
const { nome } = user
console.log(nome)
// b:
const {
  endereco: { rua },
} = user
console.log(rua)
//c:
const { projetos } = user
console.log(projetos)
//d:
const [, projeto2] = projetos
console.log(projeto2)

//Ex.2
console.log('-- Ex.2 --')
const students = [
  { id: 1, name: 'John Doe', age: 23, scholarship: false },
  { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
  { id: 3, name: 'Kayle', age: 22, scholarship: true },
]
//a:
const [primeiro] = students
console.log(primeiro)
//b:
const [, , terceiro] = students
console.log(terceiro)
//c
const [, segundo] = students
console.log(segundo.name)

//Ex.3
console.log('-- Ex.3 --')
const func = (...params) => {
  console.log(...params)
}
func(1, 2, 3, 4, 5)

//Ex.4
console.log('-- Ex.4 --')
const func2 = ({ name }) => {
  console.log(name)
}
const obj = { name: 'Jucá', idade: 19 }
func2(obj)

//Ex.5
console.log('-- Ex.5 --')
function junta(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  }
}
console.log(
  junta({ name: 'Jucá', idade: 19 }, { endereco: { rua: 'Rua 2', numero: 10 } })
)

//Ex.6
console.log('-- Ex.6 --')
function concatena(arr1, arr2) {
  return [...arr1, ...arr2]
}
console.log(concatena([1, 2, 3], [4, 5, 6]))
