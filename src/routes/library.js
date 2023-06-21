const express = require('express');
const router = express.Router();
const {
  LibraryController,
} = require('../controllers');
const {
  checkLibCreation,
  checkLibModif,
  deleteLibMdw,
} = require('../middleware/validators');

router.get('/', LibraryController.getAllLib);
router.get('/:id', LibraryController.getOneLib);
router.post(
  '/',
  checkLibCreation,
  LibraryController.newLib
);
router.put(
  '/:id',
  checkLibModif,
  LibraryController.modLib
);
router.delete(
  '/:id',
  deleteLibMdw,
  LibraryController.deleteLibr
);

module.exports = router;
