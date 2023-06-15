const express = require('express');
const router = express.Router();

//Importar rutas para Librerias, Usuarios y Libros
router.get('/', (req, res) => {
    res.send('Ver todos los libros')
})
router.get('/:id', (req, res) => {
    res.send('Buscar libro por Id')
})
router.post('/', (req, res) => {
    res.send('Crear libro')
})
router.put('/', (req, res) => {
    res.send('Modificar libro')
})
router.delete('/', (req, res) => {
    res.send('Eliminar libro')
})


module.exports = router;