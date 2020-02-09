const express = require('express');
// const helmet = require('helmet');
const app = express();
// const dotenv = require('dotenv');
const morgan = require('morgan');
require('dotenv').config();


app.use(morgan('tiny'));
// app.use(helmet());
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send("helo world")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

