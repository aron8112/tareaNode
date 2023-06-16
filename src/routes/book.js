const express = require('express');
const router = express.Router();

//Importar rutas para Bookrerias, Usuarios y Bookros
const {
  BookController,
} = require('../controllers');

router.get('/', BookController.getAllBook);
router.get('/:id', BookController.getOneBook);
router.post('/', BookController.newBook);
router.put('/:id', BookController.modBook);
router.delete('/:id', BookController.deleteBookr);

module.exports = router;
