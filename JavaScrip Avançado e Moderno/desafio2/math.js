function totalDeCompras(arrCompras) {
  return arrCompras.reduce((acc, compra) => {
    return acc + compra.total
  }, 0)
}

export default totalDeCompras
