const SERVER_SECRET = process.env.JWT_SECRET;

const passport = require('passport');
const passportJwt = require('passport-jwt');
const { verifyToken } = require('./token');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest:
        ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const jwtValidMDW = passport.authenticate('jwt', {
  session: false,
});

const isAdminMdw = (req, res, next) => {
  //   console.log(req.headers.authorization);
  return passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }

      if (user.role == 0) {
        return next();
      }

      res.status(403).json({
        error:
          'You are not allowed to perform the action you asked for',
      });
    }
  )(req, res, next);
};

module.exports = {
  jwtValidMDW,
  isAdminMdw,
  SERVER_SECRET,
};
