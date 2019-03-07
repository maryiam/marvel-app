import express from 'express';
import path from 'path';
import router from './router';
import appendAuthenticationParams from './middlewares/marvel-request-decorator';
import notFoundHandler from './middlewares/404-handler';
import errorHandler from './middlewares/error-handler';
import { STATIC_ASSETS_PATH } from '../config/constants';

const app = express();

app.use(express.static(path.join(__dirname, STATIC_ASSETS_PATH)));

/** API REQUESTS PROCESSING **/
app.use('/api', appendAuthenticationParams);
app.use('/api', router);
app.use('/api', notFoundHandler);

/** CATCH-ALL ERROR HANDLER **/
app.use(errorHandler);

module.exports = app;
