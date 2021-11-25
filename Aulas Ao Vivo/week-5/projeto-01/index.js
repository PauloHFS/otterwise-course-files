import fs from 'fs';

const DATA_PATH = './data/lista.csv';

const data = fs.readFileSync(DATA_PATH).toString().split('\n');

// indentificar as colunas
const columns = data[0].split('\r')[0].split(',');

// criar os objetos com as colunas em arrays
const dataJSON = data.reduce((dataJSON, csvLine, index) => {
  let newDataJSON = dataJSON;
  if (index !== 0) {
    const [id, name, preco] = csvLine.split('\r')[0].split(',');
    newDataJSON.push({
      [columns[0]]: Number.parseInt(id),
      [columns[1]]: name,
      [columns[2]]: `R$${Number.parseFloat(preco).toFixed(2)}`.replace(
        '.',
        ','
      ),
    });
  }
  return newDataJSON;
}, []);

//salvar objeto em arqvuio
fs.writeFileSync('./data/lista.json', JSON.stringify(dataJSON));
