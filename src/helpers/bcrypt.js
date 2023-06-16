const bcrypt = require('bcrypt');
const salt = process.env.SALT_ROUNDS;

const hashPassword = async (password, salt) => {
  await bcrypt.hash(password, salt);
};

const checkPassword = async (
  password,
  hashedPassw
) => {
  await bcrypt.compare(password, hashedPassw);
};

module.exports = {
  salt,
  hashPassword,
  checkPassword,
};
