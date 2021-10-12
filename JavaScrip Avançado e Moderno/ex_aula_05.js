const p1 = _ =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P1 resolve')
    }, 2000)
  })

const p2 = _ =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P2 resolve')
    }, 1000)
  })

const p3 = _ =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P3 resolve')
    }, 3000)
  })

const resolveAll = async arrPromises => {
  try {
    const result = await Promise.all(arrPromises)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

const raceAll = async arrPromises => {
  try {
    const result = await Promise.race(arrPromises)
    console.log(result)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('done')
  }
}

resolveAll([p1(), p2(), p3()])
raceAll([p1(), p2(), p3()])
