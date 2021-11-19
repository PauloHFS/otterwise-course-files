/* O dono de uma livraria resolveu que precisava de novas funcionalidades no
seu sistema de livros e para isso ele contratou um programador. Conversando
com o programador e entendendo as necessidades que o dono da livraria
precisava, eles chegaram nas seguintes funcionalidades:
result: top(3, books),

Tendo por base as funcionalidades acima e como entrada um um array de
objetos, faça um programa que resolva o problema do dono da livraria.
 */

/* 
----------------------------------------------------------------------------
● Autor do livro mais vendido;
*/
const getBookMaisVendido = books => {
  return books.reduce((bookMaisVendido, book) => {
    let bookMV = bookMaisVendido;

    if (book.quantidadeVendido > bookMV.quantidadeVendido) {
      bookMV = book;
    }

    return bookMV;
  }, books[0]);
};

/* 
----------------------------------------------------------------------------
● Filtrar livros que tem um preço abaixo do valor que será inserido;
*/
const getBooksUnder = (price, books) => {
  return books.reduce((BooksUnder, book) => {
    const nextBooksUnder = [...BooksUnder];

    if (book.valor < price) {
      nextBooksUnder.push(book);
    }

    return nextBooksUnder;
  }, []);
};

/* 
----------------------------------------------------------------------------
● Filtrar livros que tem um preço acima do valor que será inserido;
*/
const getBooksOver = (price, books) => {
  return books.reduce((BooksOverPriced, book) => {
    const nextBooksOverPriced = [...BooksOverPriced];

    if (book.valor > price) {
      nextBooksOverPriced.push(book);
    }

    return nextBooksOverPriced;
  }, []);
};

/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
const getBookBy = (atribute, value, books) => {
  return books.reduce((acc, book) => {
    let wantedBook = acc;

    if (book[atribute] == value) {
      wantedBook = book;
    }

    return wantedBook;
  }, {});
};
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

/* 
----------------------------------------------------------------------------
● Pesquisa pelo nome do livro;
*/
const getBookByName = (nome, books) => {
  return getBookBy('nome', nome, books);
};
/* 
----------------------------------------------------------------------------
● Pesquisa pelo autor do livro;
 */
const getBookByAutor = (autor, books) => {
  return getBookBy('autor', autor, books);
};
/* 
----------------------------------------------------------------------------
● Pesquisa pelo código do livro;
 */
const getBookByCod = (cod, books) => {
  return getBookBy('cod', cod, books);
};
/* 
----------------------------------------------------------------------------
● Lista do Estoque;
 */
const getEstoque = books => books;
/* 
----------------------------------------------------------------------------
● Top X livros mais vendidos (X será um valor inserido como entrada);
*/
const booksTop = (X, books) => {
  return books
    .sort(({ quantidadeVendido: a }, { quantidadeVendido: b }) => b - a)
    .reduce((topX, book) => {
      if (topX.length === X) return topX;

      let nextTopX = [...topX];

      nextTopX.push(book);

      return nextTopX;
    }, []);
};

/* 
----------------------------------------------------------------------------
● Aumento de X % no preço dos livros (X será um valor inserido como entrada).
*/
const changeBooksPriceIn = (rate, books) => {
  let fixedRate = rate / 100 + 1;
  return books.map(({ valor, ...book }) => {
    return { ...book, valor: (valor *= fixedRate) };
  });
};
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */

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

const testes = [
  { text: '● Autor do livro mais vendido;', result: getBookMaisVendido(books) },
  {
    text: '● Filtrar livros que tem um preço abaixo do valor que será inserido; 45',
    result: getBooksUnder(45, books),
  },
  {
    text: '● Filtrar livros que tem um preço acima do valor que será inserido; 45',
    result: getBooksOver(45, books),
  },
  {
    text: '● Pesquisa pelo nome do livro; antifragil',
    result: getBookByName('antifragil', books),
  },
  {
    text: '● Pesquisa pelo autor do livro; 8547001085',
    result: getBookByCod('8547001085', books),
  },
  {
    text: '● Pesquisa pelo código do livro; Nassim Nicholas Taleb',
    result: getBookByAutor('Nassim Nicholas Taleb', books),
  },
  { text: '● Lista do Estoque;', result: getEstoque(books) },
  {
    text: '● Top X livros mais vendidos (X será um valor inserido como entrada); 10',
    result: booksTop(10, books),
  },
  {
    text: '● Aumento de X % no preço dos livros (X será um valor inserido como entrada). 100',
    result: changeBooksPriceIn(100, books),
  },
];

testes.forEach(({ text, result }) => {
  console.log(`----------------------------------------\n${text}`);
  console.table(result);
});
