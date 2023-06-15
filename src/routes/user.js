const express = require('express');
const router = express.Router();

//Importar rutas para Librerias, Usuarios y Libros
router.get('/', (req, res) => {
    res.send('Debe registrarse para continuar').redirect('/login')
})
router.get('/login', (req, res) => {
    res.send('este es el login')
})

module.exports = router;