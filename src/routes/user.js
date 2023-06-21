const express = require('express');
const router = express.Router();
const {
  UserController,
} = require('../controllers');
const {
  checkPostUserData,
  checkUserLogIn,
} = require('../middleware/validators');

router.post(
  '/',
  checkPostUserData,
  UserController.createUser
);
router.post(
  '/login',
  checkUserLogIn,
  UserController.login
);

module.exports = router;
