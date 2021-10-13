import { compareAsc } from 'date-fns'
import totalDeCompras from './math.js'

export function formatTransacoesByCliente(cliente, compras) {
  let transacoes = `Cliente ${cliente.id} - ${cliente.name}\n`

  const arrCompras = compras
    .filter(compra => compra.cliente_id === cliente.id)
    .sort((a, b) => compareAsc(new Date(a.data), new Date(b.data)))

  arrCompras.forEach(
    compra =>
      (transacoes += `Compra em ${
        compra.data
      } no total de R$ ${compra.total.toFixed(2)}.\n`)
  )

  const total = totalDeCompras(arrCompras).toFixed(2)

  transacoes += `Total do cliente: R$ ${total}.`

  return transacoes
}
