import { generateMd5Hash, getTimestamp } from '../helpers/utils';
import { PRIVATE_KEY, PUBLIC_KEY } from '../../config/constants';

const appendAuthenticationParams = (req, res, next) => {
  const timestamp = getTimestamp();
  req.queryParams = {
    apikey: PUBLIC_KEY,
    ts: timestamp,
    hash: generateMd5Hash({
      timestamp,
      privateKey: PRIVATE_KEY,
      publicKey: PUBLIC_KEY
    })
  };

  next();
};

module.exports = appendAuthenticationParams;
