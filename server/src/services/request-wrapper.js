import request from 'request';
import { MARVEL_BASE_URL } from '../../config/constants';

const isSuccessStatusCode = status =>
  parseInt(status, 10) >= 200 && parseInt(status, 10) <= 299;

// authenticatedRequest takes two object params =>
// first object for request config (queryCallParams, endpoint and all the http request extra config (http method, ...))
// second object for request treatment ( req, res, next, successCb)
const authenticatedRequest = (
  { endpoint, callParams, ...config },
  { req, res, next, successCb }
) => {
  //
  const { queryParams } = req;
  const qs = { ...queryParams, ...callParams };

  return request(
    {
      uri: `${MARVEL_BASE_URL}/${endpoint}`,
      qs,
      ...config
    },
    (error, { statusCode }, body) => {
      const { data, status, message } = JSON.parse(body);

      if (!error && isSuccessStatusCode(statusCode) && successCb) {
        successCb(data);
      }

      res
        .status(statusCode)
        .send({ status: statusCode, message: message || status, data });
    }
  ).on('error', err => next(new Error(err)));
};

module.exports = authenticatedRequest;
