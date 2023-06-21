const express = require('express');
const router = express.Router();
const {
  BookController,
} = require('../controllers');
const {
  checkBookCreation,
  checkBookModif,
  deleteBookMdw,
} = require('../middleware/validators');

router.get('/', BookController.getAllBook);
router.get('/:id', BookController.getOneBook);
router.post(
  '/',
  checkBookCreation,
  BookController.newBook
);
router.put(
  '/:id',
  checkBookModif,
  BookController.modBook
);
router.delete(
  '/:id',
  deleteBookMdw,
  BookController.deleteBookr
);

module.exports = router;
