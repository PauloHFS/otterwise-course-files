//Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo:
/*
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto
*/

function categoria(idade) {
  let categoria = '';

  if (idade > 4) {
    if (5 <= idade && idade <= 10) {
      categoria = 'Infantil';
    } else if (11 <= idade && idade <= 17) {
      categoria = 'Juvenil';
    } else {
      categoria = 'Adulto';
    }

    if ((idade <= 7 || idade <= 13) && !(8 <= idade && idade <= 10)) {
      categoria += ' A';
    } else if (idade <= 17) {
      categoria += ' B';
    }
  } else {
    categoria = 'Sem categoria';
  }

  return categoria;
}

console.log(categoria(4));
console.log(categoria(6));
console.log(categoria(9));
console.log(categoria(12));
console.log(categoria(15));
console.log(categoria(19));
