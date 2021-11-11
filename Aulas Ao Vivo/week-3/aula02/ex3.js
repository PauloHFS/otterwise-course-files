/* [REFATORAÇÃO] Uma pessoa desenvolvedora recebe frequentemente
propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ
(Pessoa Jurídica). Considerando que o trabalho como CLT envolve férias, 13°
salário, R$ 700 de benefício e 8% mensal referente ao FGTS. Faça um programa
que receba como entrada os dois valores mensais oferecidos e tome a decisão
informando qual proposta a pessoa deve aceitar.
 */

const melhorOferta = (salarioCLT, salarioPJ) => {
  return salarioCLT * 14 + 700 + salarioCLT * 0.8 * 12 > salarioPJ * 12
    ? 'Salario CLT'
    : 'Salario PJ';
};

console.log(melhorOferta(1100, 1100));
