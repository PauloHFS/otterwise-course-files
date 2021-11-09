/* Um dono de supermercado, que compreende pouco sobre
desenvolvimento de software, contratou o seu serviço para que elaborasse um
sistema para ele. Você foi ao supermercado e analisou o funcionamento do
serviço. Ao analisar o funcionamento do supermercado você percebeu que
precisava realizar as seguintes tarefas:
● Listar quais as funcionalidades que o sistema precisa;
● Elaborar um array de objetos que servirá como entrada para validar as
funcionalidades;
● Implementar cada uma das funcionalidades.
Tendo por base essas informações, crie o sistema solicitado. No início do
arquivo em que está o programa, você deve inserir (como comentário) quais as
funcionalidades que o sistema que você desenvolveu possui. */

const data = {
  estoque: {
    produtos: [
      {
        id: 0,
        nome: 'Arroz Tipo 1 1kg Camil',
        valorVenda: 5.49,
        valorCompra: 4.99,
        quantidadeEstoque: 10,
        totalVendido: 1,
      },
      {
        id: 1,
        nome: 'Feijão Carioca 1 Kg Camil',
        valorVenda: 7.19,
        valorCompra: 6.39,
        quantidadeEstoque: 10,
        totalVendido: 1,
      },
      {
        id: 2,
        nome: 'Lentilha 500g Camil',
        valorVenda: 5.49,
        valorCompra: 4.99,
        quantidadeEstoque: 10,
        totalVendido: 0,
      },
    ],
    lastID: 3,
  },
  vendas: {
    compras: [
      {
        id: 0,
        create: '04/11/2021',
        produtos: [
          {
            nome: 'Arroz 1kg Camil Tipo 1',
            valor: 5.49,
          },
          {
            nome: 'Feijão Carioca Camil 1 Kg',
            valor: 7.19,
          },
        ],
        valorTotal: 12.68,
      },
    ],
    lastID: 0,
  },
};

function run(data) {
  let { estoque, vendas } = data;

  const funcionalidades = {
    Funcionalidades: ['Controle de estoque', 'Ponto de Vendas'],
  };
  console.table(funcionalidades);

  const createProduto = ({
    nome,
    valorVenda,
    valorCompra,
    quantidadeEstoque,
  }) => {
    estoque.produtos.push({
      id: estoque.lastID + 1,
      nome,
      valorVenda,
      valorCompra,
      quantidadeEstoque,
      totalVendido: 0,
    });
    estoque.lastID++;
  };

  const readProdutos = () => console.table(estoque.produtos);

  const updateProduto = (id, newProduto) => {
    for (let index = 0; index < estoque.produtos.length; index++) {
      if (estoque.produtos[index].id == id) {
        estoque.produtos[index] = { id, ...newProduto };
        break;
      }
    }
  };

  /* const deleteProduto = (id) => {
    
    let deleted = {}
    
    for (let index = 0; index < estoque.produtos.length; index++) {
      if (estoque.produtos[index].id == id) {
        estoque.produtos.    
      }
    }
  }; */

  console.log('1 - CREATE produto no estoque');
  const produtoNovo = {
    nome: 'Balinha',
    valorVenda: 0.25,
    valorCompra: 0.1,
    quantidadeEstoque: 100,
  };
  createProduto(produtoNovo);
  console.table(produtoNovo);

  console.log('2 - READ estoque');
  readProdutos();

  console.log('3 - UPDATE produto do estoque');
  const produtoAtualizado = {
    nome: 'Bombom',
    valorVenda: 1,
    valorCompra: 0.75,
    quantidadeEstoque: 100,
    totalVendido: 0,
  };
  updateProduto(4, produtoAtualizado);
  console.table({ id: 4, ...produtoAtualizado });

  /* console.log('4 - DELETE produto do estoque');
  console.table(deleteProduto(4)); */
}

run(data);
