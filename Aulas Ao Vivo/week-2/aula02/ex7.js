/* Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos. */
function getCategories(arr) {
  let categories = {
    even: 0,
    odd: 0,
    positive: 0,
    negative: 0,
  };

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 == 0) {
      categories.even++;
    } else {
      categories.odd++;
    }

    if (element > 0) {
      categories.positive++;
    } else if (element < 0) {
      categories.negative++;
    }
  }

  return categories;
}

console.table(getCategories([-5, 0, -3, -4, 12]));
