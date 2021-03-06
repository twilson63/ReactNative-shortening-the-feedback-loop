const cors = require('micro-cors')()
const quotes = require('./quotes.json')
const randomInt = require('random-int')
const { nth, length } = require('ramda')

const handler = async (req, res) => {
  if (req.url === '/favicon.ico') {
    return null
  }
  //throw new Error('Quote not found')
  return await new Promise((resolve, reject) => {
    return setTimeout(() => resolve(pickAQuote(quotes)), 200)
  })
}

function pickAQuote(quotes) {
  return nth(randomInt(length(quotes)), quotes)
}

module.exports = cors(handler)
