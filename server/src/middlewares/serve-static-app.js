// TODO: remove this file (this server no longer serves statically the react app)
// const { PROD_MODE, STATIC_ASSETS_PATH } = require('../../config/constants'),
//   path = require('path');
//
// const staticPath = (req, res, next) => {
//   const prodMode = process.env.NODE_ENV === PROD_MODE;
//   if (prodMode) {
//     res.sendFile(path.join(__dirname, STATIC_ASSETS_PATH, 'index.html'));
//   }
//
//   next();
// };
//
// module.exports = staticPath;
