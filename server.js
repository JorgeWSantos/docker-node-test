const express = require('express');

const production = true;

const host = production ? "0.0.0.0" : "127.0.0.1";
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Test')
})

app.listen(port, host);