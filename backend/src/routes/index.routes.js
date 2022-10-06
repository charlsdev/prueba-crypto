const { Router } = require('express')
const router = Router()

const {
   welcome, getCrypto, postCrypto
} = require('../controllers/index.controllers')

router.get('/', welcome)
router.get('/crypto', getCrypto)
router.post('/crypto', postCrypto)

module.exports = router