const express = require('express');
const router = express.Router();
const {
  LibraryController,
} = require('../controllers');

router.get('/', LibraryController.getAllLib);
router.get('/:id', LibraryController.getOneLib);
router.post('/', LibraryController.newLib);
router.put('/:id', LibraryController.modLib);
router.delete(
  '/:id',
  LibraryController.deleteLibr
);

module.exports = router;
