const express = require('express');
const router = express.Router();

//Importar rutas para Librerias, Usuarios y Libros
router.get('/', (req, res) => {
    res.send('Ver todos los librerias')
})
router.get('/:id', (req, res) => {
    res.send('Buscar libreria por Id')
})
router.post('/', (req, res) => {
    res.send('Crear libreria')
})
router.put('/', (req, res) => {
    res.send('Modificar libreria')
})
router.delete('/', (req, res) => {
    res.send('Eliminar libreria')
})

module.exports = router;