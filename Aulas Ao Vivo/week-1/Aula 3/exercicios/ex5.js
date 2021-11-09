/* Um banco vai liberar linhas de crédito só para servidores públicos. Caso o(a)
servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de
juros menor. Crie um algoritmo que possui três valores de entradas: nome
completo (string), servidor (boolean), professor (boolean) e que imprime uma
mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha
de crédito. */

function getCreditType(fullname, isServidor, isProfessor) {
  let creditType =
    fullname + ': Não há linha de crédito disponivel para o seu perfil!';

  if (isServidor) {
    if (isProfessor) {
      creditType =
        fullname +
        ': Há uma linha de crédito especial com uma taxa de juros menor!';
    } else {
      creditType = fullname + ': Há uma linha de crédito especial!';
    }
  }

  return creditType;
}

console.log(getCreditType('Raimunda', true, true));
console.log(getCreditType('Francisco', true, false));
console.log(getCreditType('Eloi', false, false));
