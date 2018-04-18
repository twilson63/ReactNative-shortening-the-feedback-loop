const quotes = require('./quotes.json')
const randomInt = require('random-int')
const { nth, length } = require('ramda')

module.exports = async (req, res) => {
  if (req.url === '/favicon.ico') {
    return null
  }
  //throw new Error('Quote not found')
  return await new Promise((resolve, reject) => {
    setTimeout(() => resolve(nth(randomInt(length(quotes)), quotes)), 200)
  })
}
