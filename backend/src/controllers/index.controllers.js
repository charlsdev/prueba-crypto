const ctrlIndex = {}

const { v4: uuid } = require('uuid')
const { loadData, storeData } = require('../database')

ctrlIndex.welcome = (req, res) => {
   res.status(200).json({
      msg: 'Welcome to API of the test Crypto...'
   })
}

ctrlIndex.getCrypto = (req, res) => {
   let resp
   const data = loadData()

   data === ''
      ? (
         resp = {
            msg: 'Not found cryptos',
            data: []
         }
      )
      : (
         resp = {
            msg: 'All cryptos found',
            data: JSON.parse(data)
         }
      )

   res.status(200).json(resp)
}

ctrlIndex.postCrypto = (req, res) => {
   const {
      nombre, precio
   } = req.body

   const name = nombre.trim(),
      price = precio.trim()

   if (
      name === '' ||
      price === ''
   ) {
      res.status(203).json({
         msg: 'Campos vacíos...'
      })
   } else {
      const moneda = {
         id: uuid(),
         name,
         price
      }

      const data = loadData()

      data === ''
         ? storeData([moneda])
         : storeData([...JSON.parse(data), moneda])

      res.status(200).json({
         msg: 'Save Crypto money...',
         data: moneda
      })
   }
}

module.exports = ctrlIndex