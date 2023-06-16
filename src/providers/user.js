const { UserModel } = require('../models');
const bcrypt = require('bcrypt');

const createUserProv = async user => {
  const {
    username,
    email,
    password,
    role = null,
  } = user;

  try {
    const newUser = UserModel.create({
      username: username,
      email: email,
      password: await bcrypt.hash(
        password,
        parseInt(process.env.SALT)
      ),
      role: role,
    });
    if (newUser) {
      return newUser;
    }
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
    let { email, password } = user;
    const foundUser = await UserModel.findOne({
      where: { email: email },
    });
    password = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (password) {
      return foundUser;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUserProv,
  loginProv,
};
