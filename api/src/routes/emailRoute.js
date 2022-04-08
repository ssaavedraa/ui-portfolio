const {Router} = require('express')

const router = Router()
const emailController = require('../controllers/email/index')

router.post('/send', emailController.send)

module.exports = router