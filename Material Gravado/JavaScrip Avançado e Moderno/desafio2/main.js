import data from './data.json'
import { formatTransacoesByCliente } from './formatters.js'

console.log('-- Running --\n\n')

data.clients.forEach(client => {
  console.log(formatTransacoesByCliente(client, data.purchases))
  console.log('\n')
})

console.log('-- Done --')
