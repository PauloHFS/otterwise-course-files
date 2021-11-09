/* Dado o objeto user = { name: "Marília", age: 26, job: "Dev" }, imprima cada
uma de suas propriedade da seguinte forma "o valor da propriedade
propriedade_nome é valor". */

let user = { name: 'Marília', age: 26, job: 'Dev' };

for (let index = 0; index < Object.keys(user).length; index++) {
  console.log(
    `o valor da propriedade ${Object.keys(user)[index]} é ${
      user[Object.keys(user)[index]]
    }`
  );
}
