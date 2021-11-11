/* [REFATORAÇÃO] O dono de uma livraria resolveu que precisava de novas
funcionalidades no seu sistema de livros e para isso ele contratou um
programador. Conversando com o programador e entendendo as necessidades
que o dono da livraria precisava, eles chegaram nas seguintes funcionalidades:
● Autor do livro mais vendido;
● Filtrar livros que tem um preço abaixo do valor que será inserido;
● Filtrar livros que tem um preço acima do valor que será inserido;
● Pesquisa pelo nome do livro;
● Pesquisa pelo autor do livro;
● Pesquisa pelo código do livro;
● Lista do Estoque;
● Top X livros mais vendidos (X será um valor inserido como entrada);
● Aumento de X % no preço dos livros (X será um valor inserido como
entrada).
Tendo por base as funcionalidades acima e como entrada um um array de
objetos, faça um programa que resolva o problema do dono da livraria. */

const books = [
  {
    cod: '8568014003',
    nome: 'mais esperto que o diabo',
    autor: 'Napoleon Hill',
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: '8550801488',
    nome: 'pai rico, pai pobre',
    autor: 'Robert T. Kiyosaki',
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: '8547001085',
    nome: 'antifragil',
    autor: 'Nassim Nicholas Taleb',
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: '8595080801',
    nome: 'o investidor inteligente',
    autor: 'Benjamin Graham',
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: '8539004119',
    nome: 'o poder do hábito',
    autor: 'Charles Duhigg',
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: '8543102146',
    nome: 'essencialismo',
    autor: 'Greg Mckeown',
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: '9788539003839',
    nome: 'rápido e devagar',
    autor: 'Daniel Kahneman',
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: '8551003429',
    nome: 'princípios',
    autor: 'Ray Dalio',
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: '855717358X',
    nome: 'gestão de alta performance',
    autor: 'Andrew S. Grove',
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: '8550805246',
    nome: 'empresas feitas para vencer',
    autor: 'Jim Collins',
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: '855080455X',
    nome: 'avalie o que importa',
    autor: 'John Doerr',
    valor: 40.9,
    quantidadeVendido: 797,
  },
];

//Autor do livro mais vendido;
function getBookMaisVendido(books) {
  let indexBookMaisVendido = 0;

  for (let index = 1; index < books.length; index++) {
    if (index == books.lenght - 1) continue;
    if (
      books[index].quantidadeVendido >
      books[indexBookMaisVendido].quantidadeVendido
    ) {
      indexBookMaisVendido = index;
    }
  }

  return books[indexBookMaisVendido];
}

console.table(getBookMaisVendido(books));
//----------------------------------------------------------------

//Filtrar livros que tem um preço abaixo do valor que será inserido;
function getBooksUnder(price, books) {
  let booksUnderPriced = [];

  for (let index = 0; index < books.length; index++) {
    if (books[index].valor < price) {
      booksUnderPriced.push(books[index]);
    }
  }

  return booksUnderPriced;
}

console.table(getBooksUnder(45, books));
//----------------------------------------------------------------

//Filtrar livros que tem um preço acima do valor que será inserido;
function getBooksOver(price, books) {
  let booksOverPriced = [];

  for (let index = 0; index < books.length; index++) {
    if (books[index].valor > price) {
      booksOverPriced.push(books[index]);
    }
  }

  return booksOverPriced;
}

console.table(getBooksOver(45, books));
//----------------------------------------------------------------

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function getBookBy(atribute, value, books) {
  let book = {};
  for (let index = 0; index < books.length; index++) {
    if (books[index][atribute] == value) {
      book = books[index];
      break;
    }
  }
  return book;
}
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Pesquisa pelo nome do livro;
console.table(getBookBy('nome', 'antifragil', books));
//----------------------------------------------------------------

//Pesquisa pelo autor do livro;
console.table(getBookBy('cod', '8547001085', books));
//----------------------------------------------------------------

//Pesquisa pelo código do livro;
console.table(getBookBy('autor', 'Nassim Nicholas Taleb', books));
//----------------------------------------------------------------

//Lista do Estoque;
console.table(books);
//----------------------------------------------------------------

//Top X livros mais vendidos (X será um valor inserido como entrada);

function top(X, books) {
  function bubbleSort(arr, atribute, comparador) {
    hadSwap = true;
    while (hadSwap) {
      hadSwap = false;
      for (let index = 0; index < arr.length; index++) {
        if (index == arr.length - 1) continue;
        if (comparador(arr[index][atribute], arr[index + 1][atribute]) == 1) {
          [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
          hadSwap = true;
        }
      }
    }
  }

  let booksOrdenadoVendas = [...books];
  bubbleSort(booksOrdenadoVendas, 'quantidadeVendido', (a, b) => a < b);

  let topBooks = [];
  for (let index = 0; index < X; index++) {
    topBooks.push(booksOrdenadoVendas[index]);
  }

  return topBooks;
}

console.table(top(3, books));
//----------------------------------------------------------------

//Aumento de X % no preço dos livros (X será um valor inserido como entrada).
function changeBooksPriceIn(rate, books) {
  let fixedRate = rate / 100 + 1;
  let booksWithNewPrice = [...books];
  for (let index = 0; index < booksWithNewPrice.length; index++) {
    booksWithNewPrice[index].valor *= fixedRate;
  }
  return booksWithNewPrice;
}

console.table(changeBooksPriceIn(100, books));
//----------------------------------------------------------------
