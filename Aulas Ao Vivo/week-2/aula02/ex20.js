/* Dado o objeto abaixo, faça um programa que imprime no console o nome,
cpf e telefone formatados. Dica: Separe o código em funções de formatação
para cada um dos campos. */

function fixName(name) {
  let fixedName = '';

  const slicedName = name.split(' ');

  for (let index = 0; index < slicedName.length; index++) {
    if (slicedName[index] == '') {
      continue;
    }

    if (index != 0 && index != slicedName.length - 1) {
      fixedName += ' ';
    }

    if (slicedName[index].length > 3) {
      fixedName +=
        slicedName[index][0].toUpperCase() + slicedName[index].slice(1);
    } else {
      fixedName += slicedName[index];
    }
  }

  return fixedName;
}

function fixCPF(cpf) {
  let fixedCPF = '';

  for (let index = 0; index < cpf.length; index++) {
    if (index == 9) {
      fixedCPF += '-';
    } else if (index % 3 == 0 && index != 0) {
      fixedCPF += '.';
    }
    fixedCPF += cpf[index];
  }

  return fixedCPF;
}

function fixPhoneNumber(phoneNumber) {
  let fixedPhoneNumber = '';

  for (let index = 0; index < phoneNumber.length; index++) {
    if (index == 0) {
      fixedPhoneNumber += '(';
    } else if (index == 2) {
      fixedPhoneNumber += ') ';
    } else if (index + 4 === phoneNumber.length) {
      fixedPhoneNumber += '-';
    }
    fixedPhoneNumber += phoneNumber[index];
  }

  return fixedPhoneNumber;
}

const user = {
  nome: 'Cláudio da silva figueiredo ',
  cpf: '47187999887',
  telefone: '11988754092',
};

console.log(fixName(user.nome));
console.log(fixCPF(user.cpf));
console.log(fixPhoneNumber(user.telefone));
