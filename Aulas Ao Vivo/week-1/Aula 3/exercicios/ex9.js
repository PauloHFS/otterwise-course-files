/* Uma pessoa desenvolvedora resolveu trabalhar como freelancer e quer
conseguir colocar o preço nos trabalhos que ela irá pegar. As informações que
ela terá como entrada do seu programa são: O valor mensal do salário que ela
quer ter; Ela irá trabalhar 160 horas no mês; O custo que ela tem com impostos
e demais despesas é o dobro do salário mensal dela. Levando em consideração
que ela estipula o preço por horas que ela irá utilizar para concluir o projeto,
faça um programa que tenha como entrada variável a quantidade de horas e
como saída no console o preço que custará esse projeto. */

function projectPrice(salaryWanted, projectExpectedSpendTime) {
  return (salaryWanted / 80) * projectExpectedSpendTime;
}

console.log(projectPrice(3000, 16));
