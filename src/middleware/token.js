const jwt = require('jsonwebtoken');

// genera el token y con los datos del usuario
const tokenSign = user => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
};

module.exports = {
  tokenSign,
};
