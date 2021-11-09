/* Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar */

function verifyJobs(salaryJobCLT, salaryJobPJ) {
  let option;

  // contando ferias e 13 dando 14 'salarios' ao todo, mais rendimento fgts, mais bonus
  const salaryJobCLTBruto =
    salaryJobCLT * (14 / 12) + salaryJobCLT * 0.08 + 700;

  if (salaryJobCLTBruto >= salaryJobPJ) {
    option = 'CLT ' + salaryJobCLTBruto.toFixed(2);
  } else {
    option = 'PJ';
  }

  return option;
}

console.log(verifyJobs(1100, 1100));
console.log(verifyJobs(2200, 1100));
console.log(verifyJobs(1100, 2200));
