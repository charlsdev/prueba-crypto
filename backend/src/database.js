const fs = require('fs')
const path = require('path')

const storeData = (data) => {
   try {
      fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data))
   } catch (err) {
      console.error(err)
   }
}

const loadData = () => {
   try {
      return fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8')
   } catch (err) {
      console.error(err)
   }
}

module.exports = {
   storeData,
   loadData
}