const path = require('path');
const express = require('express');
var proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Frontend server app is listening on port ${port}`)
);

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('/api', proxy({ target: 'http://server:8080', changeOrigin: true }));

app.use((req, res) => {
  console.log('serving static');
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
