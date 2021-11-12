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

// Definindo os dados
const estoque = {
  produtos: [
    {
      cod: 0,
      name: 'Arroz 1kg',
      stock: 10,
      price: 10.5,
      category: 'Alimenticio',
    },
    {
      cod: 1,
      name: 'Feijão 1kg',
      stock: 10,
      price: 10.5,
      category: 'Alimenticio',
    },
    {
      cod: 2,
      name: 'Ovo',
      stock: 100,
      price: 0.3,
      category: 'Alimenticio',
    },
  ],
  lastCod: 2,
};
//---------------------------------------------------------------------

// Funções do estoque
const showEstoque = () => {
  console.log('--------------------- Estoque --------------------');
  console.table(estoque);
};
const createProduto = ({ name, stock, price, category }) => {
  const cod = (estoque.lastCod += 1);
  estoque.produtos.push({ cod, name, stock, price, category });
};

const getProduto = cod => {
  let produto = undefined;

  for (let index = 0; index < estoque.produtos.length; index++) {
    if (estoque.produtos[index].cod == cod) {
      produto = estoque.produtos[index];
      break;
    }
  }

  return produto;
};

const updateProduto = (cod, atribute, value) => {
  for (let index = 0; index < estoque.produtos.length; index++) {
    if (estoque.produtos[index].cod == cod) continue;

    estoque.produtos[index][atribute][value];
  }
};

// ● Filtro por nome, código e categoria;
const filter = (atribute, value) => {
  let estoqueFiltrado = [];

  for (let index = 0; index < estoque.produtos.length; index++) {
    const produto = estoque.produtos[index];
    if (produto[atribute] == value) estoqueFiltrado.push(produto);
  }

  return estoqueFiltrado;
};

// ● Filtro por faixa de preço;
const filterByPriceRange = (min, max) => {
  let estoqueFiltrado = [];

  for (let index = 0; index < estoque.produtos.length; index++) {
    const produto = estoque.produtos[index];
    if (min <= produto.price && produto.price <= max)
      estoqueFiltrado.push(produto);
  }

  return estoqueFiltrado;
};

// ● Ordenação em Ordem Crescente e Decrescente por todos os campos;
function bubbleSort(arr, atribute, comparador) {
  let arrayResult = [...arr];

  hadSwap = true;
  while (hadSwap) {
    hadSwap = false;
    for (let index = 0; index < arrayResult.length; index++) {
      if (index == arrayResult.length - 1) continue;
      if (
        comparador(
          arrayResult[index][atribute],
          arrayResult[index + 1][atribute]
        ) == 1
      ) {
        [arrayResult[index], arrayResult[index + 1]] = [
          arrayResult[index + 1],
          arrayResult[index],
        ];
        hadSwap = true;
      }
    }
  }

  return arrayResult;
}

//Comparadores
const comparadores = {
  crescente: (a, b) => (a > b ? 1 : a < b ? -1 : 0),
  decrescente: (a, b) => (a < b ? 1 : a > b ? -1 : 0),
  crescentePonderado: pesos => (a, b) =>
    comparadores.crescente(pesos[a], pesos[b]),
  decrescentePonderado: pesos => (a, b) =>
    comparadores.decrescente(pesos[a], pesos[b]),
  crescenteString: (a, b) => comparadores.crescente(a.length, b.length),
  decrescenteString: (a, b) => comparadores.decrescente(a.length, b.length),
};

//---------------------------------------------------------------------

// Funções referente as transações
// Efetua compra
/* - O processo de compra será uma função que confere se o produto existe e
se ele possui estoque, a quantidade será passada como parâmetro junto
com o código do produto;
- Um cliente pode realizar várias compras, então todos os produtos
selecionados devem ser adicionados a um “carrinho de compras”;
*/
let carrinhoDeCompras = [];

const compra = (cod, quantidade) => {
  let produto = getProduto(cod);
  if (produto && produto.stock >= quantidade) {
    updateProduto(cod, 'stock', produto.stock - quantidade);

    const { name, price } = produto;
    const produtoComprado = { name, price: price * quantidade, quantidade };
    carrinhoDeCompras.push(produtoComprado);
    console.log(`Comprando ${produtoComprado.name} ${quantidade}xR$${price}`);
  }
};

const showCarrinhoDeCompras = () => {
  console.log('Carrinho De Compras:');
  console.table(carrinhoDeCompras);
};

/* - Deve existir uma função que mostra o valor total que existe atualmente
no carrinho; */
const valorTotal = (log = true) => {
  let valorTotal = 0;
  for (let index = 0; index < carrinhoDeCompras.length; index++) {
    valorTotal += carrinhoDeCompras[index].price;
  }
  if (log) console.log(`Valor Total no carrinho: R$ ${valorTotal.toFixed(2)}`);
  return valorTotal;
};

/* - O programa deve possuir uma função de finalização da compra em que o
  programa recebe como parâmetro o valor total e a forma de pagamento:
  - Boletos tem 10% de desconto no valor total;
  - Cartão de Débito tem 15% de desconto no valor total;
  - A opção crédito, deve receber quantas parcelas o cliente deseja
    parcelar (máximo de 12x), em cada parcela deve incidir 3% de juros,
    sendo assim o cliente deve saber o valor da parcela e o total.
    */
const vendas = [];
const finalizaCompra = (valorTotal, formaPagamento, parcelas = 0) => {
  let venda = {
    // refatorar exibição
    compra: carrinhoDeCompras,
    total: valorTotal,
    valorPago: valorTotal,
  };

  carrinhoDeCompras = [];

  switch (formaPagamento) {
    case 'boleto':
      venda.valorPago *= 0.9;
      venda['formaPagamento'] = formaPagamento;
      break;
    case 'debito':
      venda.valorPago *= 0.85;
      venda['formaPagamento'] = formaPagamento;
      break;
    case 'credito':
      if (parcelas == 0) return;
      venda.valorPago += valorTotal * 0.3 * parcelas;
      venda['valorParcela'] = venda.valorPago / parcelas;
      venda['formaPagamento'] = formaPagamento;
      break;
  }

  vendas.push(venda);
};

/* - O programa deve mostrar ao final um relatório em que são mostradas as
  compras e a forma de pagamento com o valor total (e o número de
  parcelas caso a opção escolhida tenha sido crédito). */
const relatorioVendas = () => {
  console.log(
    '----------------------- RELATORIO DE VENDAS ---------------------------'
  );
  console.table(vendas);
};

/* 

-----------------------------------------------------------------------------------------

*/

const result = [
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO name:',
    array: bubbleSort(estoque.produtos, 'name', comparadores.crescenteString),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO name:',
    array: bubbleSort(estoque.produtos, 'name', comparadores.decrescenteString),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO stock:',
    array: bubbleSort(estoque.produtos, 'stock', comparadores.crescente),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO stock:',
    array: bubbleSort(estoque.produtos, 'stock', comparadores.decrescente),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO price:',
    array: bubbleSort(estoque.produtos, 'price', comparadores.crescente),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO price:',
    array: bubbleSort(estoque.produtos, 'price', comparadores.decrescente),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO cod:',
    array: bubbleSort(estoque.produtos, 'cod', comparadores.crescente),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO cod:',
    array: bubbleSort(estoque.produtos, 'cod', comparadores.decrescente),
  },
  {
    text: 'ORDENADO DE FORMA CRESCENTE PELO category:',
    array: bubbleSort(
      estoque.produtos,
      'category',
      comparadores.crescenteString
    ),
  },
  {
    text: 'ORDENADO DE FORMA DECRESCENTE PELO category:',
    array: bubbleSort(
      estoque.produtos,
      'category',
      comparadores.decrescenteString
    ),
  },
];

console.log(
  '_____________________________ Teste de Estoque _____________________________'
);

console.log('- Filtro por nome, codigo e categoria:');
console.table(filter('name', 'Ovo'));
console.table(filter('cod', 1));
console.table(filter('category', 'Alimenticio'));

console.log('- Filtro por faixa de preço:');
console.table(filterByPriceRange(10, 11));
console.table(filterByPriceRange(0, 1));

console.log(
  '- Ordenação em Ordem Crescente e Decrescente por todos os campos:'
);
for (let index = 0; index < result.length; index++) {
  const { text, array } = result[index];
  console.log(text);
  console.table(array);
}

console.log(
  '___________________________ Testando as transacoes 1 ______________________'
);
// testando as Transações do Programa
showCarrinhoDeCompras();
compra(2, 30);
compra(1, 5);
showCarrinhoDeCompras();
valorTotal();
finalizaCompra(valorTotal(false), 'boleto');

console.log(
  '___________________________ Testando as transacoes 2 ______________________'
);
showCarrinhoDeCompras();
compra(1, 10);
compra(2, 5);
showCarrinhoDeCompras();
finalizaCompra(valorTotal(false), 'credito', 12);

console.log(
  '___________________________ Testando as transacoes 3 ______________________'
);
showCarrinhoDeCompras();
compra(2, 5);
showCarrinhoDeCompras();
finalizaCompra(valorTotal(false), 'debito');

relatorioVendas();
