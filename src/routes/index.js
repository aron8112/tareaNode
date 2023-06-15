const express = require('express');
const router = express.Router();

//Importar rutas para Librerias, Usuarios y Libros
const userRouter = require('./user');
const bookRouter = require('./book');
const libraryRouter = require('./library');

router.get('/', (req, res) => {
    res.send('Elija una de las opciones para seguir navegando: /library, /book, /user')
})
router.use('/library', libraryRouter)
router.use('/book', bookRouter)
router.use('/user', userRouter)

module.exports = router;