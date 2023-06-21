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
const {
  isAdminMdw,
  jwtValidMDW,
} = require('../middleware/auth');

router.get('/', BookController.getAllBook);
router.get(
  '/:id',
  jwtValidMDW,
  BookController.getOneBook
);
router.post(
  '/',
  isAdminMdw,
  checkBookCreation,
  BookController.newBook
);
router.put(
  '/:id',
  isAdminMdw,
  checkBookModif,
  BookController.modBook
);
router.delete(
  '/:id',
  isAdminMdw,
  deleteBookMdw,
  BookController.deleteBookr
);

module.exports = router;
