import fs from 'fs';

const DATA_PATH = './data/lista.csv';

const csvFile = fs.readFileSync(DATA_PATH).toString().split('\n');

// separar as colunas dos dados
const [columns, ...data] = csvFile;

// colocar as colunas numa array
const columnsArray = columns.split(',');

// mapeia a array de string dos dados para uma de objetos com coluna:valor
const dataObject = data.map(line => {
  const [id, name, preco] = line.split(',');

  return {
    [columnsArray[0]]: Number.parseInt(id),
    [columnsArray[1]]: name,
    [columnsArray[2]]: `R$${Number.parseFloat(preco).toFixed(2)}`.replace(
      '.',
      ','
    ),
  };
});

//salva a array de objetos em arquivo JSON
fs.writeFileSync('./data/lista.json', JSON.stringify(dataObject));
