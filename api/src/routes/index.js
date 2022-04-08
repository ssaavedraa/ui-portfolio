const {Router} = require('express')

const emailRoute = require('./emailRoute')

//Importar las rutas

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/email', emailRoute)

module.exports = router