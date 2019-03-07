import express from 'express';
import router from './router';
import appendAuthenticationParams from './middlewares/marvel-request-decorator';
import notFoundHandler from './middlewares/404-handler';
import errorHandler from './middlewares/error-handler';

const app = express();

/** API REQUESTS PROCESSING **/
app.use('/api', appendAuthenticationParams);
app.use('/api', router);
app.use('/api', notFoundHandler);

/** CATCH-ALL ERROR HANDLER **/
app.use(errorHandler);

module.exports = app;
