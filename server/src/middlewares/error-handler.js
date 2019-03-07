const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    code: 'InternalError',
    message: 'internal server error'
  });
};

module.exports = errorHandler;
