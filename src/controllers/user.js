const { UserServ } = require('../services');

const createUser = async (req, res) => {
  try {
    const newUser = await UserServ.createUserServ(
      req.body
    );
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({
      action: 'createUser',
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const foundUser = await UserServ.loginServ(
      req.body
    );
    res.status(200).json({
      message: `Bienvenido ${foundUser.username}`,
    });
  } catch (err) {
    res.status(500).json({
      action: 'Login',
      error: err.message,
    });
  }
};

module.exports = {
  createUser,
  login,
};
