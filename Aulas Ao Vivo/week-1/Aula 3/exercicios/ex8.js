/* A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
ambas as propostas. */

function verifyJobs(salaryJobCLT, salaryJobPJ) {
  let option;

  //calculando CLT
  // contando ferias e 13 dando 14 'salarios' ao todo, mais rendimento fgts, mais bonus
  let salaryCLTBruto = salaryJobCLT * 14 + salaryJobCLT * 0.08 * 12 + 700;
  let salaryCLTLiquido = 0;

  if (salaryCLTBruto < 21453.24) {
    salaryCLTLiquido = salaryCLTBruto;
  } else if (21453.24 <= salaryCLTBruto < 32151.48) {
    salaryCLTLiquido = salaryCLTBruto - salaryCLTBruto * 0.075;
  } else if (32151.48 <= salaryCLTBruto < 42869.16) {
    salaryCLTLiquido = salaryCLTBruto - salaryCLTBruto * 0.15;
  } else if (42869.16 <= salaryCLTBruto < 53565.72) {
    salaryCLTLiquido = salaryCLTBruto - salaryCLTBruto * 0.225;
  } else if (53565.72 <= salaryCLTBruto) {
    salaryCLTLiquido = salaryCLTBruto - salaryCLTBruto * 0.275;
  }

  // Calculando PJ
  let salaryPJBruto = salaryJobPJ * 12;
  let salaryPJLiquido = 0;

  if (salaryPJBruto < 21453.24) {
    salaryPJLiquido = salaryPJBruto;
  } else if (21453.24 <= salaryPJBruto < 32151.48) {
    salaryPJLiquido = salaryPJBruto - salaryPJBruto * 0.075;
  } else if (32151.48 <= salaryPJBruto < 42869.16) {
    salaryPJLiquido = salaryPJBruto - salaryPJBruto * 0.15;
  } else if (42869.16 <= salaryPJBruto < 53565.72) {
    salaryPJLiquido = salaryPJBruto - salaryPJBruto * 0.225;
  } else if (53565.72 <= salaryPJBruto) {
    salaryPJLiquido = salaryPJBruto - salaryPJBruto * 0.275;
  }

  if (salaryCLTLiquido >= salaryPJLiquido) {
    option = 'CLT ' + (salaryCLTLiquido / 12).toFixed(2);
  } else {
    option = 'PJ ' + (salaryPJLiquido / 12).toFixed(2);
  }

  return option;
}

console.log(verifyJobs(1100, 1100));
console.log(verifyJobs(2200, 1100));
console.log(verifyJobs(1100, 2200));
