import authenticatedRequest from '../services/request-wrapper';

const getAll = (req, res, next) => {
  const { start = 0, perPage = 20 } = req.query;

  return authenticatedRequest(
    {
      endpoint: 'characters',
      callParams: {
        offset: start * perPage,
        limit: perPage
      }
    },
    { req, res, next }
  );
};

module.exports = {
  getAll
};
