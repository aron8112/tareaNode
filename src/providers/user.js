const { User } = require('../models');
const bcrypt = require('bcrypt');
const {
  tokenSign,
} = require('../middleware/token');

const createUserProv = async user => {
  const {
    username,
    email,
    password,
    role = null,
  } = user;

  try {
    const newUser = await User.create({
      username: username,
      email: email,
      password: await bcrypt.hash(
        password,
        parseInt(process.env.SALT)
      ),
      role: role,
    });
    if (newUser) {
      const token = tokenSign(newUser);
      // const result = {
      //   token: token,
      //   user: newUser,
      // };

      return token;
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
    const foundUser = await User.findOne({
      where: { email: email },
    });
    password = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (password) {
      const token = tokenSign(foundUser);
      // const result = {
      //   token: token,
      //   user: foundUser,
      // };
      return token;
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
