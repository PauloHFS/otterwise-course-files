/* [REFATORAÇÃO] Dado o objeto abaixo, faça um programa que imprime no
console o nome, cpf e telefone formatados. Dica: Separe o código em 
funções de formatação para cada um dos campos.

Exemplo de Entrada 1:
{
  nome: 'Analu dos santos baptista', 
  cpf: '14776213931', 
  telefone: '8328008258'
}

Exemplo de Saída 1:
Analu dos Santos Baptista
147.762.139-31
(83) 2800-8258

Exemplo de Entrada 2:
{
  nome: 'Cláudio da silva figueiredo ', 
  cpf: '47187999887', 
  telefone: '11988754092'
}

Exemplo de Saída 2:
Cláudio da silva figueiredo
471.879.998-87
(11) 98875-4092 
*/

const fixNome = nome => {
  return nome
    .trim()
    .split(' ')
    .map(subnome =>
      subnome.length > 3 ? subnome[0].toUpperCase() + subnome.slice(1) : subnome
    )
    .join(' ');
};

const fixCPF = cpf => {
  return cpf.split('').reduce((cpfFixed, number, index) => {
    let nextString = `${cpfFixed}`;

    if (index == 9) nextString += '-';
    else if (index % 3 == 0 && index != 0) nextString += '.';

    nextString += `${number}`;

    return nextString;
  }, '');
};

const fixTelefone = telefone => {
  return telefone.split('').reduce((telefoneFixed, numero, index, array) => {
    let nextValue = telefoneFixed;

    if (index == 0) nextValue += '(';
    else if (index == 2) nextValue += ') ';
    else if (array.length - index == 4) nextValue += '-';
    nextValue += numero;

    return nextValue;
  }, '');
};

let users = [
  {
    nome: 'Analu dos santos baptista',
    cpf: '14776213931',
    telefone: '8328008258',
  },
  {
    nome: 'Cláudio da silva figueiredo ',
    cpf: '47187999887',
    telefone: '11988754092',
  },
];

users.forEach(({ nome, cpf, telefone }) =>
  console.log(`${fixNome(nome)}\n${fixCPF(cpf)}\n${fixTelefone(telefone)}\n`)
);
