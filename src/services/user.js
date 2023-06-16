const { UserProv } = require('../providers');

const createUserServ = async user => {
  const newUser = await UserProv.createUserProv(
    user
  );

  return newUser;
};

const loginServ = async user => {
  const foundUser = await UserProv.loginProv(
    user
  );
  return foundUser;
};

module.exports = {
  createUserServ,
  loginServ,
};
