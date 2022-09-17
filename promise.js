const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js')

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
let promiseOutput = async value => {
  const dataTheaterIXX = await promiseTheaterIXX()
  const dataTheaterVGC = await promiseTheaterVGC()
  var dataResult = dataTheaterIXX.concat(dataTheaterVGC)
  let count = 0
  dataResult.forEach(v => v.hasil === value && count++)
  return count
}

module.exports = {
  promiseOutput
}
