const { UserModel } = require('../models');

const createUserProv = async user => {
  try {
    const newUser = await UserModel.create(user);
    return newUser;
  } catch (error) {
    console.log(
      'Error when creating new user',
      error
    );
    throw error;
  }
};

const loginProv = async user => {
  try {
    const { email, password } = user;
    const foundUser = await UserModel.findOne({
      where: { email: email },
    });
    if (foundUser.password === password) {
      return foundUser;
    } else {
      return false;
    }
  } catch (error) {
    console.log('Wrong email/password', error);
    throw error;
  }
};

module.exports = {
  createUserProv,
  loginProv,
};
