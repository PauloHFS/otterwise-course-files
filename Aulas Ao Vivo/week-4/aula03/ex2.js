/* 
2. Escreva uma função que some dois números, 
mas que informe um erro caso um dos números não seja do tipo “number”.
 */

const sum = (number1, number2) => {
  if (typeof number1 != 'number')
    throw new Error(
      `TypeError: ${number1} (${typeof number1}) is not a Number`
    );
  if (typeof number2 != 'number')
    throw new Error(
      `TypeError: ${number2} (${typeof number2}) is not a Number`
    );

  return number1 + number2;
};

try {
  console.log(sum('2', '2'));
} catch (error) {
  console.error(error);
}
try {
  console.log(sum(2, '2'));
} catch (error) {
  console.error(error);
}
try {
  console.log(sum(2, 2));
} catch (error) {
  console.error(error);
}
