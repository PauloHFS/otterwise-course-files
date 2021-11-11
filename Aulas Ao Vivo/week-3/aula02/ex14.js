/* 
Uma loja online que possui a estrutura do objeto abaixo, precisa que
algumas funcionalidades sejam implementadas. Implemente a lista de
funcionalidades abaixo.

Estrutura do Objeto:
  { 
    cod:
    name:
    stock:
    price:
    category:
  }

Lista de Funcionalidades:
  ● Filtro por nome, código e categoria;
  ● Filtro por faixa de preço;
  ● Ordenação em Ordem Crescente e Decrescente por todos os campos;

Transação de Compra:
Além das funcionalidades acima, o usuário poderá realizar a compra.

- O processo de compra será uma função que confere se o produto existe e
  se ele possui estoque, a quantidade será passada como parâmetro junto
  com o código do produto;
- Um cliente pode realizar várias compras, então todos os produtos
  selecionados devem ser adicionados a um “carrinho de compras”;
- Deve existir uma função que mostra o valor total que existe atualmente
  no carrinho;
- O programa deve possuir uma função de finalização da compra em que o
  programa recebe como parâmetro o valor total e a forma de pagamento:
  - Boletos tem 10% de desconto no valor total;
  - Cartão de Débito tem 15% de desconto no valor total;
  - A opção crédito, deve receber quantas parcelas o cliente deseja
    parcelar (máximo de 12x), em cada parcela deve incidir 3% de juros,
    sendo assim o cliente deve saber o valor da parcela e o total.
- O programa deve mostrar ao final um relatório em que são mostradas as
  compras e a forma de pagamento com o valor total (e o número de
  parcelas caso a opção escolhida tenha sido crédito).
*/

const createLoja = () => {
  const loja = {
    estoque: {
      produtos: [],
      produtosLastId: 0,
      createProduto: (name, stock, price, category) => {
        let cod = (loja.estoque.produtosLastId += 1);
        loja.estoque.produtos.push({ cod, name, stock, price, category });
      },
      filter: (atribute, value) => {
        let estoqueFiltrado = [];

        for (let index = 0; index < loja.estoque.produtos.length; index++) {
          const produto = loja.estoque.produtos[index];
          if (produto[atribute] == value) estoqueFiltrado.push(produto);
        }

        return estoqueFiltrado;
      },
      filterByPriceRange: (min, max) => {
        let estoqueFiltrado = [];

        for (let index = 0; index < loja.estoque.produtos.length; index++) {
          const produto = loja.estoque.produtos[index];
          if (min <= produto[atribute].price && produto[atribute].price <= max)
            estoqueFiltrado.push(produto);
        }

        return estoqueFiltrado;
      },
    },
    lojaInterface: {
      estoque: {
        createProduto: loja.estoque.createProduto,
        filter: loja.estoque.filter,
        filterByPriceRange: loja.estoque.filterByPriceRange,
      },
    },
  };

  return loja;
};

const { loja } = createLoja();
