/* 
1. Crie uma função assíncrona utilizando setTimeout e chame ela duas vezes, 
mas chame a segunda vez apenas após a primeira ser executada com sucesso.
 */

const espera = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

(async () => {
  try {
    const times = await Promise.all([espera(1000), espera(500)]);
    const first = await espera(1000);
    const second = await espera(500);

    console.log(times, first, second);
  } catch (error) {
    console.error(error);
  }
})();
