const bcrypt = require('bcrypt');

const hashPassword = async (password, salt) => {
  password.toString();

  await bcrypt.hash(password, parseInt(salt));
};

const checkPassword = async (
  password,
  hashedPassw
) => {
  await bcrypt.compare(password, hashedPassw);
};

module.exports = {
  hashPassword,
  checkPassword,
};
