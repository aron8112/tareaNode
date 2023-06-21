const catchError = (error, _req, res, next) => {
  if (error) {
    return res.status(400).json({
      message:
        'Something went wrong, please reload',
      error,
    });
  } else {
    return next();
  }
};

module.exports = {
  catchError,
};
