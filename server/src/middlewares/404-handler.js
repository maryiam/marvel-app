const notFoundHandler = (req, res, next) => {
  console.log('oups!');
  return res.status(404).send({
    status: 404,
    code: 'NotFound',
    message: 'Nothing was found here :('
  });
};

module.exports = notFoundHandler;
