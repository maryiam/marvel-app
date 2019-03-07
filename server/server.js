import { PORT } from './config/constants';
const app = require('./src/app');

app.listen(PORT, err =>
  err
    ? console.log(err)
    : console.log(`Server listening : http://localhost:${PORT}`)
);
