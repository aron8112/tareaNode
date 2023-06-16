const express = require('express');
const router = express.Router();
const {
  UserController,
} = require('../controllers');

//Importar rutas para Librerias, Usuarios y Libros
router.post('/', UserController.createUser);
router.post('/login', UserController.login);

module.exports = router;
