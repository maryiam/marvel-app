import crypto from 'crypto';

const generateMd5Hash = ({ timestamp, privateKey, publicKey }) => {
  const hash = `${timestamp}${privateKey}${publicKey}`;

  return crypto
    .createHash('md5')
    .update(hash)
    .digest('hex');
};

const getTimestamp = () => Date.now();

module.exports = {
  generateMd5Hash,
  getTimestamp
};
