/* Faça um programa que receberá a hora inicial e a hora final de um jogo. A
seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
dia e terminar em outro, tendo uma duração máxima de 24 horas. */
function duration(startTime, endTime) {
  let duration = 0;

  if (endTime < startTime) {
    duration += 24 - startTime;
    duration += endTime;
  } else {
    duration += endTime - startTime;
  }

  return duration;
}

console.log(duration(16, 19));
console.log(duration(21, 2));
