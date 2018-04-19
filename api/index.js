const quotes = require('./quotes.json')
const randomInt = require('random-int')
const { nth, length } = require('ramda')

module.exports = async (req, res) => {
  if (req.url === '/favicon.ico') {
    return null
  }
  //throw new Error('Quote not found')
  return await new Promise((resolve, reject) => {
    return setTimeout(() => pickAQuote(quotes), 200)
  })
}

function pickAQuote(quotes) {
  return nth(randomInt(length(quotes)), quotes)
}
