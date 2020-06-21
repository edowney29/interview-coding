module.exports.printSuccess = (info, data = {}) => {
  console.log(`[SUCCESS]: ${JSON.stringify(info)} ${JSON.stringify(data)}`)
}

module.exports.printError = (info, data = {}, err = '') => {
  console.log(`[ERROR]: ${JSON.stringify(info)} ${JSON.stringify(data)} ${err}`)
}
