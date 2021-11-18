/* Uma empresa gostaria de organizar seu quadro de funcionários, para isso
contratou o estagiário Juquinha para criar um software. O CEO da empresa fez
uma lista de pedidos para o Juquinha.
Pedidos:
*/

const employees = [
  {
    id: 1,
    name: 'Carlos',
    age: 35,
    active: false,
    birth_date: '13/05/1986',
    contract_date: '20/07/2015',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 2,
    name: 'Matheus',
    age: 30,
    active: true,
    birth_date: '03/07/1991',
    contract_date: '01/03/2020',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 3,
    name: 'Pamela',
    age: 23,
    active: true,
    birth_date: '20/09/1998',
    contract_date: '19/06/2021',
    job: 'back-end',
    type: 'pj',
  },
  {
    id: 4,
    name: 'Fabiana',
    age: 32,
    active: false,
    birth_date: '08/12/1989',
    contract_date: '13/04/2018',
    job: 'front-end',
    type: 'pj',
  },
  {
    id: 5,
    name: 'João',
    age: 37,
    active: true,
    birth_date: '08/12/1984',
    contract_date: '03/08/2014',
    job: 'front-end',
    type: 'clt',
  },
  {
    id: 6,
    name: 'Miguel',
    age: 29,
    active: true,
    birth_date: '08/12/1992',
    contract_date: '26/02/2015',
    job: 'fullstack',
    type: 'clt',
  },
  {
    id: 7,
    name: 'Francine',
    age: 27,
    active: false,
    birth_date: '27/01/1994',
    contract_date: '23/05/2019',
    job: 'designer',
    type: 'pj',
  },
  {
    id: 8,
    name: 'Matheus',
    age: 31,
    active: true,
    birth_date: '10/11/1990',
    contract_date: '18/09/2017',
    job: 'marketing',
    type: 'clt',
  },
  {
    id: 9,
    name: 'Gabriel',
    age: 28,
    active: true,
    birth_date: '08/12/1993',
    contract_date: '14/11/2020',
    job: 'financeiro',
    type: 'clt',
  },
];

/* 
----------------------------------------------------------------
● A - Função para retornar apenas o funcionário com o id informado:
 */
const getEmployeeById = id => employees.find(({ id: uid }) => id === uid);

/* 
----------------------------------------------------------------
● B - Função para filtrar apenas os funcionários ativos na empresa:
*/

const getActiveEmployees = () => employees.filter(({ active }) => active);

/* 
----------------------------------------------------------------
● C - Função para filtrar apenas funcionários clt
*/

const getCLTEmployees = () => employees.filter(({ type }) => type === 'clt');

/* 
----------------------------------------------------------------
● D - Função para criar uma nova estrutura onde cada funcionário receberá
uma nova informação de base salarial
 */

const addAtribute = (atribute, defaultValue) =>
  employees.map(value => {
    return { ...value, [atribute]: defaultValue };
  });

/* 
---------------------------------------------------------------- 
● E - Função onde separa em 2 grupos os funcionários pj e clt
*/

const getEmployeesGroups = () =>
  employees.reduce(
    (groups, employee) => {
      let { clt, pj } = groups;

      console.log(clt);
      if (employee.type == 'clt') clt.push(employee.name);
      else if (employee.type == 'pj') pj.push(employee.name);

      return { clt, pj };
    },
    { clt: [], pj: [] }
  );

/*
----------------------------------------------------------------
● F - Função que retorna apenas funcionários ativos ordenados por ordem
de idade 
*/

const getActiveEmployeesCrescent = () => {
  return getActiveEmployees().sort((a, b) => a.age - b.age);
};

/* 
----------------------------------------------------------------
> Resultados:
 */
const resultados = [
  {
    text: 'A - Função para retornar apenas o funcionário com o id informado:',
    array: getEmployeeById(2),
  },
  {
    text: 'B - Função para filtrar apenas os funcionários ativos na empresa:',
    array: getActiveEmployees(),
  },
  {
    text: 'C - Função para filtrar apenas funcionários clt',
    array: getCLTEmployees(),
  },
  {
    text: 'D - Função para criar uma nova estrutura onde cada funcionário receberá uma nova informação de base salarial',
    array: addAtribute('salary', 1100),
  },
  {
    text: 'E - Função onde separa em 2 grupos os funcionários pj e clt',
    array: getEmployeesGroups(),
  },
  {
    text: 'F - Função que retorna apenas funcionários ativos ordenados por ordem de idade',
    array: getActiveEmployeesCrescent(),
  },
];

resultados.forEach(({ text, array }) => {
  console.log(
    `----------------------------------------------------------------\n${text}`
  );
  console.table(array);
});
