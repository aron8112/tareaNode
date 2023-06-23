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
const {
  jwtValidMDW,
  isAdminMdw,
} = require('../middleware/auth');

router.get('/', LibraryController.getAllLib);
router.get(
  '/:id',
  jwtValidMDW,
  LibraryController.getOneLib
);
router.post(
  '/',
  isAdminMdw,
  checkLibCreation,
  LibraryController.newLib
);
router.put(
  '/:id',
  isAdminMdw,
  checkLibModif,
  LibraryController.modLib
);
router.delete(
  '/:id',
  isAdminMdw,
  deleteLibMdw,
  LibraryController.deleteLibr
);
router.post(
  '/:id/addbook',
  LibraryController.addBookInLib
);

module.exports = router;
