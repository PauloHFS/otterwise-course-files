/* Através do array de usuários abaixo imprima no 
console todas a skills que cada usuario tem:
const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]
 */

const users = [
  {
    name: 'Joao',
    skills: ['Javascript', 'ReactJS', 'Redux'],
  },
  {
    name: 'Pedro',
    skills: ['VueJS', 'Ruby on Rails', 'Elixir'],
  },
];

for (let index = 0; index < users.length; index++) {
  console.log(`${users[index].name}: ${users[index].skills}`);
}
