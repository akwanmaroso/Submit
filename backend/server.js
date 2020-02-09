const express = require('express');
// const helmet = require('helmet');
const app = express();
// const dotenv = require('dotenv');
const morgan = require('morgan');
require('dotenv').config();


app.use(morgan('tiny'));
// app.use(helmet());
const routes = require('./routes/route')
app.use('/', routes);

app.get('/', (req, res) => {
  res.send("helo world")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

