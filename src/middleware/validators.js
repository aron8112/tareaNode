const {
  body,
  validationResult,
  oneOf,
  param,
} = require('express-validator');

const validateFields = validations => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res
      .status(400)
      .json({ errors: errors.array() });
  };
};

const checkPostUserData = validateFields([
  body('username', 'Must have an username')
    .isString()
    .notEmpty(),
  body('email', 'Must be a valid e-mail address')
    .isEmail()
    .notEmpty(),
  body(
    'password',
    'The password must be at least 6 characters, and must contain a symbol'
  )
    .isStrongPassword()
    .notEmpty(),
]);

const checkUserLogIn = validateFields([
  body('email', 'Must be a valid e-mail address')
    .isEmail()
    .notEmpty(),
  body(
    'password',
    'The password must be at least 6 characters, and must contain a symbol'
  )
    .isStrongPassword()
    .notEmpty(),
]);

const checkBookCreation = validateFields([
  body('isbn').isISBN().notEmpty(),
  body('title').isString().notEmpty(),
  body('author').isString().notEmpty(),
  body('year').isInt().notEmpty(),
]);

const checkBookModif = validateFields(
  oneOf([
    body('isbn').isISBN().notEmpty(),
    body('title').isString().notEmpty(),
    body('author').isString().notEmpty(),
    body('year').isInt().notEmpty(),
  ])
);

const deleteBookMdw = validateFields([
  param('id').isInt().trim(),
]);

const checkLibCreation = validateFields([
  body('name').isString().notEmpty(),
  body('location').isString().notEmpty(),
  body('phone').isInt().notEmpty(),
]);

const checkLibModif = validateFields(
  oneOf([
    body('name').isString().notEmpty(),
    body('location').isString().notEmpty(),
    body('phone').isInt().notEmpty(),
  ])
);

const deleteLibMdw = validateFields([
  param('id').isInt().trim(),
]);

module.exports = {
  checkPostUserData,
  checkUserLogIn,
  checkBookCreation,
  checkBookModif,
  deleteBookMdw,
  checkLibCreation,
  checkLibModif,
  deleteLibMdw,
};
